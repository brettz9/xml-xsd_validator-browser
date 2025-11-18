/**
 * Plugin untuk mengabaikan impor modul Node.js seperti 'module' saat build di browser.
 *
 * Fungsi utamanya: menggantikan `import("module")` atau `require("module")`
 * dengan objek kosong agar tidak error di runtime browser.
 */
export declare function ignoreModuleImportPlugin(): {
    name: string;
    setup(build: any): void;
};
