import path from "path";
import { ignoreModuleImportPlugin } from "./esBuildIgnoreModuleImportPlugin.js";
/**
 * Plugin untuk menangani `?worker` import di Vite.
 * File worker akan dibundle secara terpisah tanpa hash.
 */
export function viteWorkerPlugin(options = {}) {
    const { outDir = "dist", pattern = /\?worker$/, minify = false, } = options;
    return {
        name: "vite-worker-plugin",
        async transform(code, id) {
            if (!pattern.test(id))
                return;
            const realPath = id.replace(pattern, "");
            const workerFileName = path.basename(realPath).replace(/\.(ts|js)$/, ".js");
            const workerOutFile = path.resolve(outDir, workerFileName);
            const { build } = await import("esbuild");
            await build({
                entryPoints: [realPath],
                outfile: workerOutFile,
                bundle: true,
                platform: "browser",
                format: "esm",
                target: "esnext",
                sourcemap: false,
                minify,
                plugins: [ignoreModuleImportPlugin()],
            });
            // Kembalikan kode pengganti import worker
            return {
                code: `
          export default function WorkerWrapper(options) {
            return new Worker(new URL("./${workerFileName}", import.meta.url), {
              type: "module",
              name: options?.name
            });
          }
        `,
                map: null,
            };
        },
    };
}
