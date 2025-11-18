type LibLoader = {
    libxml: any | null;
    initError: any | null;
};
/**
 * @deprecated
 * @returns
 */
export declare const loader: LibLoader;
/**
 * @deprecated
 * @returns
 */
export declare function libxml(): any;
/**
 * @deprecated
 * @returns
 */
export declare function ensureLibxml2Loaded(): Promise<unknown>;
/**
 * @deprecated
 * @returns
 */
export declare function useLibXml2(): {
    libxml: typeof libxml;
    ensureLibxmlLoaded: typeof ensureLibxml2Loaded;
};
export {};
