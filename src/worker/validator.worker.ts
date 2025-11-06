// src/xmlParserWorker.ts
import { useLibXml2 } from "../libxmlloader";
import { WorkerBags, WorkerRequest, WorkerResponse } from "../types";
import { validateWellForm } from "../validateFormWell";
import { validateXmlTowardXsd } from "../validateTowardXsd";

const { ensureLibxmlLoaded } = useLibXml2();

// message handler
self.onmessage = async (ev: MessageEvent<WorkerRequest>) => {
  const { xmlText } = ev.data;

  let status = false;
  const errorBags: WorkerBags = [];

  await ensureLibxmlLoaded();
  
  Promise.all([
    validateWellForm(xmlText),
    validateXmlTowardXsd(xmlText)
  ])
    .then((i) => {
      status = true
    })
    .catch(err => {
      errorBags.push(...err);
    })
    .finally(() => {
      const resp: WorkerResponse = {
        id: '',
        status,
        bags: errorBags
      }
      self.postMessage(resp);
    })
};