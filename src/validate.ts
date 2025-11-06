// import { MapInputProvider } from "./provider/MapInputProvider";
import { validateWellForm } from "./validateFormWell";
import { ValidationInfo, ValidationPayload, WorkerBags, WorkerPayload, WorkerResponse, WorkerStatusDone, WorkerStatusError } from "./types";
import { validateXmlTowardXsd } from "./validateTowardXsd";
import RunnerWorker from "./worker/runner.worker.ts?worker";

/**
 * TBD
 * ini akan memvalidate xml berdasarkan namespace
 * xsi:schemaLocation may contain two xsd, eg. xsi:schemaLocation="namespace1 xsd1 namespace2 xsd2"
 */
export async function validateXml(xmlText: string, mainSchemaUrl: string | null = null, stopOnFailure: boolean = true): Promise<ValidationInfo[]> {
  const errors: ValidationInfo[] = [];
  return validateWellForm(xmlText)
    .then((validateWellFormInfos): ValidationInfo[] | Promise<ValidationInfo[]> => {
      errors.push(...validateWellFormInfos);
      if (!stopOnFailure || (errors.length < 1)) {
        return validateXmlTowardXsd(xmlText, mainSchemaUrl, stopOnFailure)
          .then((validateXmlTowardXsdInfos) => {
            if (validateXmlTowardXsdInfos) {
              errors.push(...validateXmlTowardXsdInfos)
            }
            return errors;
          })
      }
      return errors;
    })
}

// /**
//  * @deprecated karena tidak ada temrinatenya
//  */
// export async function validateXmlByWorker(xmlText: string, mainSchemaUrl: string | null = null, stopOnFailure: boolean = true): Promise<ValidationInfo[]> {
//   return new Promise((resolve, reject) => {
//     if (self.Worker) {
//       const worker = new RunnerWorker();
//       worker.onmessage = (e: MessageEvent) => {
//         resolve(e.data);
//       }
//       worker.postMessage({ xmlText, mainSchemaUrl })
//     } else {
//       const data: ValidationInfo = {
//         name: "WorkerRuntimeError",
//         type: "none",
//         details: {
//           message: "Failed to create worker in your browser",
//           file: "",
//           line: 1,
//           col: 1
//         }
//       }
//       reject([data])
//     }
//   })
// }

function reactiveStatus(init:string) {
  let value = init;
  let listeners:Function[] = [];

  return {
    get value() {
      return value;
    },
    set value(v) {
      value = v;
      listeners.forEach(fn => fn(v));
    },
    reset(){
      listeners = [];
    },
    watch(fn:Function) {
      listeners.push(fn);
    },
    when(predicate:Function) {
      return new Promise(resolve => {
        if (predicate(value)) resolve(value);
        else this.watch((v:any) => predicate(v) && resolve(v));
      });
    }
  };
}

// contoh:
// const wstatus = reactiveStatus("working");
// let s1:any = wstatus.when(v => v !== "working").then(v => s1 = v);
// wstatus.value = "done"; // ✅ langsung resolve

export function useWorker() {
  if (!self.Worker) {
    return undefined;
  }
  const runnerWorker = new RunnerWorker();
  // let wstatus: WorkerStatus = "done";
  let wstatus = reactiveStatus("done");
  const _result: WorkerBags = [];

  runnerWorker.onmessage = (e: MessageEvent<WorkerResponse>) => {
    _result.splice(0, _result.length);
    console.log(e.data)
    if(e.data.status) {
      _result.push(...(e.data as WorkerResponse).bags);
      wstatus.value = "done";
    }
  }

  // runnerWorker.onerror = (e: MessageEvent) => {
  //   wstatus.value = "error";
  //   _result.splice(0, _result.length);
  // }

  const terminate = () => {
    const payload: WorkerPayload<any> = {
      id: crypto.randomUUID(),
      type: "terminate",
      payload: null
    }
    runnerWorker.postMessage(payload);
    runnerWorker.terminate();
  }

  const validate = (xmlText: string, mainSchemaUrl: string | null, stopOnFailure: boolean = true) => {
    wstatus.value = "working";
    _result.splice(0, _result.length);

    const payload: WorkerPayload<ValidationPayload> = {
      id: crypto.randomUUID(),
      type: "validate",
      payload: { xmlText, mainSchemaUrl }
    }
    runnerWorker.postMessage(payload)
  }

  const status = ():Promise<WorkerStatusDone | WorkerStatusError> => {
    let variable;
    return variable = wstatus.when((v:any) => v !== "working").then(v => variable = v) as Promise<WorkerStatusDone | WorkerStatusError>;
  }

  const result = () => {
    return _result
  }
  return {
    status, result, validate, terminate
  }
}