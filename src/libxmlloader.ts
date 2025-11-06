import { WorkerBags } from "./types";


// let libxml: any | null = null;
// let initError: any = null;

type LibLoader = {
  libxml: any | null,
  initError: any | null,
}

const loader:LibLoader = {
  libxml: null,
  initError: null,
}

function libxml(){
  return loader.libxml;
}

export async function ensureLibxml2Loaded(): Promise<WorkerBags> {
  // obj.fufu = "fafa";
  return new Promise(async (resolve, reject) => {
    if ((loader).libxml || loader.initError) return resolve([]);
    try {
      // dynamic import to avoid bundler import shape issues
      // throw new Error('tes erro')
      const mod = await import("libxml2-wasm");
      (loader).libxml = mod;
      return resolve([]);
      // Note: libxml2.mjs already runs moduleLoader() at top-level (it awaits moduleLoader)
      // so simply importing gives us ready exports.
    } catch (e) {
      loader.initError = e;
      loader.initError.data = [{
        name: "LibInitError",
        type: "none",
        details: {
          message: loader.initError?.message || String(loader.initError),
          file: "",
          line: 1,
          col: 1,
        }
      }]
      return reject(loader.initError);
    }
  })
}

export function useLibXml2(){
  return {
    libxml, ensureLibxmlLoaded: ensureLibxml2Loaded
  }
}