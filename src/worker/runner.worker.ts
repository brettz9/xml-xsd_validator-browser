import { WorkerBags, WorkerPayload, WorkerResponse } from "../types";
import ValidatorWorker from "./validator.worker?worker"

let validatorWorker: Worker | null;

function run(xmlText: string, duration: number): Promise<WorkerBags> {
  return new Promise((resolve, reject) => {
    // create worker (Vite-style)
    // validatorWorker = new Worker(new URL("./validator.worker.ts", import.meta.url), {
    //   type: "module",
    // });
    validatorWorker = new ValidatorWorker();

    let finished = false;

    const timer = setTimeout(() => {
      if (finished) return;
      finished = true;
      try {
        validatorWorker!.terminate();
      } catch (e) {
        // ignore
      }
      reject([
        {
          name: "ParseTimeout",
          type: "form",
          details: {
            message: "Parsing timeout or worker unresponsive",
            file: "",
            line: 1,
            col: 1,
          },
        },
      ]);
    }, duration);

    validatorWorker!.onmessage = (ev: MessageEvent) => {
      if (finished) return;
      finished = true;
      clearTimeout(timer);
      const data = ev.data as WorkerResponse; // no id here

      if (data.status) {
        resolve(data.bags); // empty array -> no errors
      } else {
        reject(data.bags);
      }
      validatorWorker!.terminate();
    };

    validatorWorker!.onerror = (ev) => {
      if (finished) return;
      finished = true;
      clearTimeout(timer);
      validatorWorker!.terminate();
      reject([
        {
          name: "WorkerRuntimeError",
          type: "none",
          details: {
            message: ev?.message || "Worker runtime error",
            file: "",
            line: 1,
            col: 1,
          },
        },
      ]);
    };

    // send xmlText
    const payload = {
      xmlText
    }
    validatorWorker!.postMessage(payload);
  });
}

self.onmessage = (e: MessageEvent) => {
  const { type, id } = e.data
  if (type === "terminate") {
    validatorWorker?.terminate();
    const response: WorkerResponse = {
      id,
      status: true,
      bags: [],
    }
    self.postMessage(response)
    return;
  }
  const { payload } = e.data;
  const { xmlText } = payload;
  const duration = e.data.duration ?? 3000;

  const errorBags: WorkerBags = [];
  run(xmlText, duration)
    .then((i) => {
      errorBags.push(...i);
      return errorBags;
    })
    .catch(e => {
      errorBags.push(...e);
      return errorBags
    })
    .finally(() => {
      // errorBags.push(...[{foo:'abc'}]);
      const response: WorkerResponse = {
        id,
        status: true,
        bags: errorBags,
      }
      self.postMessage(response)
    })
}



// self.onmessage = (e: MessageEvent) => {
//   const { xmlText, mainSchemaUrl } = e.data
//   const duration = e.data.duration ?? 3000;

//   let doc :XmlDocument | null = null;
//   const errorBags: ValidationInfo[] = [];

//   const promise = new Promise((resolve) => {
//     const validatorWorker = new Worker(new URL("./parser.worker.ts", import.meta.url), {
//       type: "module",
//     });

//     const timeout = setTimeout(() => {
//       validatorWorker!.terminate();
//       errorBags.push(
//         {
//           name: "XMLParseError",
//           type: "form",
//           details: {
//             message: "Parsing timeout or worker unresponsive",
//             file: "",
//             line: 1,
//             col: 1
//           }
//         },
//       );
//       resolve(errorBags);
//     }, duration);

//     validatorWorker!.onmessage = (e) => {
//       clearTimeout(timeout);
//       const { success, error } = e.data;

//       if (!success) {
//         errorBags.push(
//           {
//             name: "XMLParseError",
//             type: "form",
//             details: {
//               message: error.message || "Invalid XML",
//               file: "",
//               line: 1,
//               col: 1,
//             }
//           },
//         );
//         resolve(errorBags);
//       } else {
//         doc = e.data.xmlDoc as XmlDocument;
//         resolve(doc)
//       }

//       validatorWorker!.terminate();
//     };

//     validatorWorker!.onerror = (e) => {
//       clearTimeout(timeout);
//       errorBags.push(
//         {
//           name: "XMLParseError",
//           type: "form",
//           details: {
//             message: e.message || "Worker runtime error",
//             file: "",
//             line: 1,
//             col: 1,
//           }
//         },
//       );
//       resolve(errorBags);
//       validatorWorker!.terminate();
//     };

//     // kirim data ke worker
//     validatorWorker!.postMessage({ xmlText });
//   })

//   promise.then((data) => {
//     self.postMessage(data);
//   })
// }

// self.onmessage = (e: MessageEvent) => {
//   const { xmlText, mainSchemaUrl } = e.data;

//   // const doc = XmlDocument.create()
//   // self.postMessage([])
//   validateXmlTowardXsd(xmlText, mainSchemaUrl)
//     .then((infos) => {
//       self.postMessage(infos);
//     })
// }

// self.onmessage = function(event) {
//   console.log('Received from main thread:', event.data);
//   const result = 'Processed: ' + event.data;
//   self.postMessage(result);
// };