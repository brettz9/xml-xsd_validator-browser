import { MapInputProvider, Schema } from "../types/types.js";
/**
 * Create a virtual file provider for libxml2-wasm.
 * It maps filenames (or URLs) to in-memory schema contents,
 * allowing libxml2 to resolve xs:import/xs:include directly
 * without needing network access.
 */
export declare function createMapInputProvider(map: Map<string, string> | Array<Schema>): Promise<MapInputProvider>;
