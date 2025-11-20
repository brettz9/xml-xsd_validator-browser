import { defineConfig } from "vite";
import path from "path";
import { ignoreModuleImportPlugin } from "./src/plugins/esBuildIgnoreModuleImportPlugin.js";
import { workerPlugin } from "./src/plugins/viteWorkerPlugin.js";

export default defineConfig({
  base: "", // ⬅️ tambahkan ini untuk mencegah prefix pada saat create worker "/"
  build: {
    outDir: "test/build",
    sourcemap: false,
    minify: false,
    rollupOptions: {
      input: path.resolve(__dirname, "test/test.ts"),
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name][extname]",
      },
    },
  },
  plugins: [
    //workerPlugin(), // ⬅️ gunakan plugin custom kamu
    //ignoreModuleImportPlugin()
  ],
  worker: {
    format: "es",
    // ditambah rollup jika tidak ingin outputnya di assets/...
    // rollupOptions: {
    //   output: {
    //     entryFileNames: "[name].js", // just in case
    //   },
    // },
    // plugins: [ignoreModuleImportPlugin()]
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});