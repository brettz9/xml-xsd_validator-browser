export function ignoreModuleImportPlugin() {
  return {
    name: "ignore-node-module",
    setup(build) {
      // Gantikan import('module') dengan object kosong
      build.onResolve({ filter: /^module$/ }, args => {
        return { path: args.path, namespace: "empty-module" };
      });

      build.onLoad({ filter: /.*/, namespace: "empty-module" }, () => {
        return {
          contents: "export const createRequire = () => () => { throw new Error('require not available in browser'); };",
          loader: "js"
        };
      });
    },
  };
}