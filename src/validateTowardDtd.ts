import { useLibXml2 } from "./libxml/libxmlloader";
import { MapInputProvider, Schema, WorkerBags } from "./types/types";
import { detectDtdLocation, findRequiredDtds, getSchemaText, mergeByBasenameKeepFullPath } from "./util/helper";

/**
 * @deprecated, karena sudah menggunakan ParseOption saat validateTowardXsd, atau secara default, libxml2-wasm akan mengecek xs:ENTITY terhadap dtd entity
 * @param file 
 * @param mainDtdUrl 
 * @param stopOnFailure 
 * @returns 
 */
export async function validateXmlWithDtd(
  file: string,
  mainDtdUrl:string|null = null,
  stopOnFailure: boolean = true
): Promise<WorkerBags> {
  const { libxml, ensureLibxmlLoaded } = useLibXml2();
  const bags: WorkerBags = [];
  let provider: MapInputProvider | null = null;

  // 1) ensure wasm ready
  await ensureLibxmlLoaded();

  // 2) Load XML
  let xmlText: string = '';
  try {
    xmlText = await getSchemaText(file);
  } catch {
    console.warn("Warning: Failed to fetch xml content");
    bags.push({
      name: "FetchError",
      type: "xsd",
      detail: {
        message: "Failed to fetch xml content",
        col: 1,
        line: 1,
        file: ""
      }
    })
    if (stopOnFailure) {
      return Promise.reject(bags);
    }
  }
  // if no xmlText then just return the bags
  if(!Boolean(xmlText)) return Promise.reject(bags);
  // load schema
  let schemas: Schema[] = [];
  if(!mainDtdUrl){
      const detected = detectDtdLocation(xmlText);
      // schemas = detectDtdLocation(xmlText);
    } else {
      schemas.push({ filename: mainDtdUrl, contents: ""});
    }
  // 3) Detect DTD (internal atau external)
  const dtd = detectDtdLocation(xmlText);

  if (!dtd) {
    return fail("DTDError", "No DOCTYPE / DTD declaration found in XML");
  }

  // jika external DTD
  if (dtd.externalId) {
    schemas.push({
      filename: dtd.externalId,
      contents: ""
    });

    // fetch isi DTD
    try {
      const full = await findRequiredDtds(dtd.externalId);
      schemas = mergeByBasenameKeepFullPath(schemas, full);
    } catch {
      return fail("FetchError", "Failed to fetch DTD or external dependencies");
    }
  }

  // 4) Create MapInputProvider
  try {
    provider = await createMapInputProvider(schemas);
    provider.register();
  } catch {
    return fail("ProviderError", "Failed to create/register provider");
  }

  // 5) Parse XML with DTD-validation mode
  let doc;
  try {
    const flags =
      libxml().XmlParserFlags.XML_PARSE_DTDVALID |
      libxml().XmlParserFlags.XML_PARSE_DTDLOAD |
      libxml().XmlParserFlags.XML_PARSE_NOENT; // expand entities

    doc = libxml().XmlDocument.fromString(xmlText, flags);
  } catch {
    return fail("XMLParseError", "Failed to parse XML with DTD");
  }

  // 6) Validate
  if (!doc.validateDtd()) {
    const errs = doc.lastError();

    for (const e of errs) {
      bags.push({
        name: "XMLValidateError",
        type: "dtd",
        detail: {
          message: e.message || "DTD validation error",
          file: e.file || "",
          line: e.line || 1,
          col: e.col || 1
        }
      });
    }

    provider.cleanup();
    return Promise.reject(bags);
  }

  // 7) cleanup
  provider.cleanup();
  return Promise.reject(bags);

  // helper
  function fail(name: string, message: string): Promise<WorkerBags> {
    bags.push({
      name,
      type: "dtd",
      detail: { message, file: "", line: 1, col: 1 }
    });
    if (stopOnFailure) {
      provider?.cleanup();
      return Promise.reject(bags);
    }
    return Promise.reject(bags);
  }
}
