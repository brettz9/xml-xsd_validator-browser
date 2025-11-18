/**
 * Plugin untuk mengabaikan impor modul Node.js seperti 'module' saat build di browser.
 *
 * Fungsi utamanya: menggantikan `import("module")` atau `require("module")`
 * dengan objek kosong agar tidak error di runtime browser.
 */
export function ignoreModuleImportPlugin() {
    return {
        name: "ignore-node-module",
        setup(build) {
            // Tangkap import "module"
            build.onResolve({ filter: /^module$/ }, (args) => {
                return { path: args.path, namespace: "empty-module" };
            });
            // Ganti isi file menjadi stub sederhana
            build.onLoad({ filter: /.*/, namespace: "empty-module" }, () => {
                return {
                    contents: `
            export const createRequire = () => () => { 
              throw new Error('require() is not available in browser environments'); 
            };
          `,
                    loader: "js"
                };
            });
        },
    };
}
