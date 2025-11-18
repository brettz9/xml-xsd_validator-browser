import { IValidateEntityNotationOption, UseWorker, ValidationInfo } from "./types/types.js";
declare global {
    var uri: string | undefined;
    var Option_XmlDocumentParse: number;
    var Option_XmlEntityNotation: IValidateEntityNotationOption;
}
/**
 * get and set base xml document parse option
 * @param opt
 * @returns
 */
export declare function XmlDocumentParseOption(opt?: number | null): number;
/**
 * get and set base xml entity notation validation option
 * @param opt
 * @returns
 */
export declare function XmlEntityNotationOption(opt?: IValidateEntityNotationOption | null): IValidateEntityNotationOption;
export declare const S1000dDocParseOption: number;
export declare const S1000dAllowedNotationUrl = "https://ferdisap.github.io/schema/s1000d/S1000D_5-0/notations/notations.xml";
/**
 * get S1000D allowed notation
 * @param opt
 * @returns
 */
export declare function getS1000dAllowedNotation(): Promise<import("./types/types.js").ParsedNotation[]>;
/**
 * get S1000d document parse option
 * @returns
 */
export declare function getS1000dDocParseOption(): number;
export declare const defaultEntityNotationValidationOption: IValidateEntityNotationOption;
/**
 * set and get base uri
 * @params uri -> set base uri if any.
 * @return always return to window href if exist or nullish string
 */
export declare function baseUri(uri?: string | null): string | undefined;
/**
 * xsi:schemaLocation may contain two xsd, eg. xsi:schemaLocation="namespace1 xsd1 namespace2 xsd2"
 */
export declare function validateXml(xmlText: string, mainSchemaUrl?: string | null, stopOnFailure?: boolean): Promise<ValidationInfo[]>;
export declare function useWorker(): UseWorker;
