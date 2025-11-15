// =========================
// src/index.ts
// =========================

// Re-export semua yang ingin diekspos dari library
export { createMapInputProvider } from './provider/MapInputProvider';
export { findRequiredSchemas, detectSchemaLocation, findRequiredDtds, getSchemaText, isXmlLike, resolveUri, constructEntityNotationValidationOption } from './util/helper';

// Jika kamu ingin mengekspor juga fungsionalitas validate secara langsung
export { 
  useWorker, 
  baseUri, 
  validateXml, 
  getS1000dDocParseOption, 
  getS1000dAllowedNotation,
  XmlDocumentParseOption, 
  XmlEntityNotationOption 
} from './validate';
export { validateWellForm } from "./validateFormWell"
export { validateXmlTowardXsd } from "./validateTowardXsd"
export { validateEntityNotation } from "./validateDtd"

// Jika ingin custom dengan libXml2
export { ensureLibxml2Loaded, useLibXml2 } from "./libxml/libxmlloader";

export { ParseOption } from "libxml2-wasm";

export * from "./types/types";

// untuk plugins vite
export * from "./plugins/viteWorkerPlugin";
export * from "./plugins/esBuildIgnoreModuleImportPlugin";
