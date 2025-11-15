[**xml-xsd-validator-browser v1.0.8**](../README.md)

***

[xml-xsd-validator-browser](../globals.md) / ignoreModuleImportPlugin

# Function: ignoreModuleImportPlugin()

> **ignoreModuleImportPlugin**(): `object`

Defined in: [plugins/esBuildIgnoreModuleImportPlugin.ts:7](https://github.com/ferdisap/xml-xsd_validator-browser/blob/406d29edb6fc8c8b93eca213ae57816c5b66ad03/src/plugins/esBuildIgnoreModuleImportPlugin.ts#L7)

Plugin untuk mengabaikan impor modul Node.js seperti 'module' saat build di browser.

Fungsi utamanya: menggantikan `import("module")` atau `require("module")` 
dengan objek kosong agar tidak error di runtime browser.

## Returns

`object`

### name

> **name**: `string` = `"ignore-node-module"`

### setup()

> **setup**(`build`): `void`

#### Parameters

##### build

`any`

#### Returns

`void`
