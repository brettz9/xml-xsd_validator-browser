import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  worker: {
    format: "es", // pastikan module
  },
  // build: {
  //   outDir: "test/build", // hasil utama
  //   rollupOptions: {
  //     output: {
  //       // ⚙️ Ganti path output worker agar tidak di folder "assets"
  //       assetFileNames: "[name][extname]",
  //       chunkFileNames: "[name].js",
  //       entryFileNames: "[name].js", // tanpa hash
  //     },
  //   },
  // },
});
