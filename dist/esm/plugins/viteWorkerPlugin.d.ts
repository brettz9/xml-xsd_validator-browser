/**
 * Opsi plugin untuk membangun worker
 */
export interface ViteWorkerPluginOptions {
    /** Folder keluaran worker (default: "dist") */
    outDir?: string;
    /** Pola pencocokan import (default: /\?worker$/) */
    pattern?: RegExp;
    /** Apakah worker perlu di-minify (default: false) */
    minify?: boolean;
}
/**
 * Plugin untuk menangani `?worker` import di Vite.
 * File worker akan dibundle secara terpisah tanpa hash.
 */
export declare function viteWorkerPlugin(options?: ViteWorkerPluginOptions): {
    name: string;
    transform(code: string, id: string): Promise<{
        code: string;
        map: null;
    } | undefined>;
};
