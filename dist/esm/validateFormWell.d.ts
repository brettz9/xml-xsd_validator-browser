import { WorkerBags } from "./types/types.js";
/**
 * ✅ Validasi XML hanya untuk memastikan well-formed
 * - Menggunakan libxml2-wasm (WASM, aman di Worker)
 * - Output sesuai struktur ValidationErrorInfo
 */
export declare function validateWellForm(xmlText: string): Promise<WorkerBags>;
