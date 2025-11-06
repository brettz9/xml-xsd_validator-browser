import { validateXmlTowardXsd, validateXml } from '@/validate.ts';
import { extractSchemaLocation, getXmlText } from "../src/util/helper";
import RunnerWorker from "../src/worker/runner.worker?worker";
import { useWorker, validateXmlByWorker } from "../src/validate";
import { ValidationPayload, WorkerPayload } from '../src/types';

const fileurl = "/test/xml_file.xml";
const xmlText = await getXmlText(fileurl);
// const mainSchemaUrl = "https://ferdisap.github.io/schema/s1000d/S1000D_5-0/xml_schema_flat/appliccrossreftable.xsd";
const mainSchemaUrl = extractSchemaLocation(xmlText)

function test1() {
  // console.log(XmlDocument.fromString(xmlText).toString())
  validateXml(xmlText, mainSchemaUrl)
    .catch(err => {
      console.log(err)
    })
}
test1()

function test2() {
  const worker = new RunnerWorker();
  worker.onmessage = (e:MessageEvent) => {
    console.log(e.data);
  }
  const payload:WorkerPayload<ValidationPayload> = {
    id: crypto.randomUUID(),
    type: "validate",
    payload: { xmlText, mainSchemaUrl}
  }
  worker.postMessage(payload)
}
test2()

async function test3() {
  const composedWorker = useWorker()
  if(!composedWorker) return;
  const { status, result, validate, terminate } = composedWorker;

  validate(xmlText, mainSchemaUrl);
  status()
  .then(st => {
    if(st === "done"){
      console.log(result());
      terminate();
    }
  })
}
test3()
