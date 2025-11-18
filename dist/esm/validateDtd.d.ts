import { DtdInfo, EntityNotation, ParsedNotation, WorkerBags } from "./types/types.js";
export declare function findRequiredDtd(xmlText: string): DtdInfo;
export declare function findEntitysNotations(info: DtdInfo | string): Promise<EntityNotation>;
export declare function notationXmlToObject(xmlText: string): Promise<ParsedNotation[]>;
export declare function validateEntityNotation(xmlText: string, stopOnFailure?: boolean): Promise<WorkerBags>;
