import { WorkerBags } from "./types/types.js";
/**
 * logic validate xml toward xsd.
 * @param file url or xml contents
 * @param mainSchemaUrl url
 * @returns
 */
export declare function validateXmlTowardXsd(file: string, mainSchemaUrl?: string | null, stopOnFailure?: boolean): Promise<WorkerBags>;
