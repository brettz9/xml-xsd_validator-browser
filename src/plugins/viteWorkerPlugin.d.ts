export interface WorkerPluginOptions {
  outDir?: string;
  pattern?: RegExp;
  minify?: boolean;
}

/**
 * Plugin untuk membundel web worker.
 */
export function workerPlugin(options?: WorkerPluginOptions): import("vite").Plugin;
