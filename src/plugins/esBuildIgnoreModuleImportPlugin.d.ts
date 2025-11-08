/**
 * Plugin untuk ignoring import("module") saat build di browser.
 */
export function ignoreModuleImportPlugin(): {
  name: string;
  setup(build: import("esbuild").PluginBuild): void;
};
