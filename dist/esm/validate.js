import { validateWellForm } from "./validateFormWell.js";
import { validateXmlTowardXsd } from "./validateTowardXsd.js";
import { ParseOption } from "libxml2-wasm";
import { notationXmlToObject, validateEntityNotation } from "./validateDtd.js";
// import * as libxml2 from "libxml2-wasm";
// top.libxml2 = libxml2
if (typeof globalThis.Worker === 'undefined') {
    const { Worker } = await import('@apacheli/web-workers');
    globalThis.Worker = Worker;
}
/**
 * get and set base xml document parse option
 * @param opt
 * @returns
 */
export function XmlDocumentParseOption(opt = null) {
    return typeof opt === 'number' ? (globalThis.Option_XmlDocumentParse = opt) : globalThis.Option_XmlDocumentParse;
}
/**
 * get and set base xml entity notation validation option
 * @param opt
 * @returns
 */
export function XmlEntityNotationOption(opt = null) {
    return opt ? (globalThis.Option_XmlEntityNotation = opt) : globalThis.Option_XmlEntityNotation;
}
export const S1000dDocParseOption = ParseOption.XML_PARSE_DTDLOAD | // Load external DTD
    ParseOption.XML_PARSE_DTDATTR | // Default attributes from DTD
    ParseOption.XML_PARSE_NOENT; // Expand internal + external ENTITY
export const S1000dAllowedNotationUrl = "https://ferdisap.github.io/schema/s1000d/S1000D_5-0/notations/notations.xml";
/**
 * get S1000D allowed notation
 * @param opt
 * @returns
 */
export async function getS1000dAllowedNotation() {
    return notationXmlToObject(S1000dAllowedNotationUrl);
}
/**
 * get S1000d document parse option
 * @returns
 */
export function getS1000dDocParseOption() {
    return S1000dDocParseOption;
}
export const defaultEntityNotationValidationOption = {
    entity: {
        validNotation: true
    },
    notations: {
        name: true,
        publicId: true
    }
};
globalThis.uri = undefined;
globalThis.Option_XmlDocumentParse = ParseOption.XML_PARSE_DEFAULT;
globalThis.Option_XmlEntityNotation = defaultEntityNotationValidationOption;
function WorkerWrapper() {
    return new Worker(new URL("./worker/validator.worker.js", import.meta.url), {
        type: "module",
    });
}
/**
 * set and get base uri
 * @params uri -> set base uri if any.
 * @return always return to window href if exist or nullish string
 */
export function baseUri(uri = null) {
    if (uri) {
        globalThis.uri = uri;
    }
    try {
        return window.location.href;
    }
    catch (e) {
        return globalThis.uri;
    }
}
/**
 * xsi:schemaLocation may contain two xsd, eg. xsi:schemaLocation="namespace1 xsd1 namespace2 xsd2"
 */
export async function validateXml(xmlText, mainSchemaUrl = null, stopOnFailure = true) {
    const errors = [];
    return validateWellForm(xmlText)
        .then(() => validateEntityNotation(xmlText))
        .then(() => validateXmlTowardXsd(xmlText, mainSchemaUrl, stopOnFailure))
        .then(() => Promise.resolve(errors))
        .catch(e => {
        errors.push(...e);
        return Promise.reject(errors);
    });
}
// function reactiveStatus(init: string) {
//   let value = init;
//   let listeners: Function[] = [];
//   return {
//     get value() {
//       return value;
//     },
//     set value(v) {
//       value = v;
//       listeners.forEach(fn => fn(v));
//     },
//     reset() {
//       listeners = [];
//     },
//     watch(fn: Function) {
//       listeners.push(fn);
//     },
//     when(predicate: Function) {
//       return new Promise(resolve => {
//         if (predicate(value)) resolve(value);
//         else this.watch((v: any) => predicate(v) && resolve(v));
//       });
//     }
//   };
// }
// contoh penggunaan reactiveStatus:
// const wstatus = reactiveStatus("working");
// let s1:any = wstatus.when(v => v !== "working").then(v => s1 = v);
// wstatus.value = "done"; // ✅ langsung resolve
export function useWorker() {
    const _responses = new Map();
    let validatorWorker = WorkerWrapper();
    let _resolveReady;
    const readyPromise = new Promise((resolve) => (_resolveReady = resolve));
    let _base = null;
    let _onBefore = null;
    validatorWorker.onmessage = (e) => {
        if (e.data.ready) {
            console.log("[xml-xsd-validator-browser] Worker is ready ✅");
            _resolveReady(true);
            return;
        }
        ;
        const { id, status, bags } = e.data;
        if (status) {
            if (_responses.has(id)) {
                const { resolve } = _responses.get(id);
                resolve({ id, status, bags });
                _responses.delete(id);
            }
        }
        else {
            const { reject } = _responses.get(id);
            reject({ id, status, bags });
            _responses.delete(id);
        }
    };
    validatorWorker.onmessageerror = (e) => {
        console.error("⚠️ Worker message error:", e);
    };
    validatorWorker.onerror = async function (e) {
        throw new Error("Worker error");
    };
    const onBefore = (data) => {
        _onBefore = data;
    };
    const terminate = async () => {
        validatorWorker.terminate();
        console.log("[xml-xsd-validator-browser] Worker is terminated ✅");
    };
    const validate = async (xmlText, mainSchemaUrl = null, stopOnFailure = true) => {
        // console.log("before validate by worker");
        const id = crypto.randomUUID();
        return new Promise(async (resolve, reject) => {
            _responses.set(id, { resolve, reject });
            let timer = setTimeout(() => {
                const response = {
                    id, status: false, bags: [{
                            name: "WorkerResponseTimeout",
                            type: "none",
                            detail: {
                                message: "",
                                file: "",
                                line: 1,
                                col: 1,
                            }
                        }]
                };
                console.error("[xml-xsd-validator-browser] Worker response timeout ⚠️ ");
                return reject(response);
            }, 5000);
            if (await readyPromise) {
                clearTimeout(timer);
                const wpd = {
                    id,
                    payload: { xmlText, mainSchemaUrl, stopOnFailure }
                };
                if (_onBefore)
                    wpd.payload.onBefore = _onBefore;
                // console.log("before post to worker");
                console.log(wpd);
                validatorWorker.postMessage(wpd);
            }
        });
    };
    return {
        validate, terminate, onBefore
    };
}
