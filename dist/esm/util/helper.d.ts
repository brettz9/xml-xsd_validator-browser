import { DtdLocation, IValidateEntityNotationOption, ParsedNotation, Schema } from "../types/types.js";
/**
 * Gabungkan array `Schema` berdasarkan nama file (basename).
 * - File dengan basename sama digabung.
 * - Filename yang lebih lengkap (lebih panjang / punya path) dipertahankan.
 * - Properti kosong diisi dari item lain.
 */
export declare function mergeByBasenameKeepFullPath(existingArr: Schema[], newItems: Schema[]): Schema[];
/**
 * Rekursif mendeteksi semua dependency XSD dari schema utama,
 * handle xs:import, xs:include, dan xs:redefine
 *
 * Tidak menggunakan async/await, seluruhnya Promise chaining.
 * Menangani error dengan console.error, tetap resolve agar tidak menghentikan chain.
 * array index 0 adalah mainSchemaUrl
 */
export declare function findRequiredSchemas(mainSchemaUrl: string, visited?: Set<string>): Promise<Schema[]>;
/**
 * Ambil URL schema dari atribut `xsi:noNamespaceSchemaLocation`
 * atau `xsi:schemaLocation`.
 */
export declare function detectSchemaLocation(xmlText: string): Schema[];
/**
 * to check wheter the param is xml text or url
 * @param file url or xml text file
 * @returns
 */
export declare function isXmlLike(file: string): boolean;
/**
 * resolve relative uri to base uri jika
 * @param uri
 * @returns
 */
export declare function resolveUriToBase(uri: string): string;
/**
 * resolve relative uri to base uri
 * Menggabungkan base URL (file induk) dengan path relatif.
 * Jika childUrl sudah absolute, langsung dikembalikan.
 */
export declare function resolveUri(uri: string, baseUri: string): string;
/**
 * to get xml text from url.
 * @param file url or xml contents
 * @returns xml text
 */
export declare function getSchemaText(file: string): Promise<string>;
/**
 * Mendeteksi DTD (SYSTEM, PUBLIC, internal subset) dari XML.
 * Mendukung multiline dan kombinasi PUBLIC+SYSTEM.
 */
export declare function detectDtdLocation(xmlText: string): DtdLocation;
/**
 * Mencari semua DTD yang dibutuhkan oleh DTD utama,
 * termasuk nested ENTITY SYSTEM, ENTITY % param, NOTATION SYSTEM/PUBLIC.
 *
 * Mirip findRequiredSchemas untuk XSD.
 */
export declare function findRequiredDtds(mainDtdUrl: string, visited?: Set<string>): Promise<Schema[]>;
export declare function constructEntityNotationValidationOption(allowedNotation: ParsedNotation[], entityValidNotation?: boolean, notationValidName?: boolean, notationValidPublicId?: boolean): IValidateEntityNotationOption;
