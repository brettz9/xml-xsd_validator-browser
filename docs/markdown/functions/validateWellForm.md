[**xml-xsd-validator-browser v1.0.8**](../README.md)

***

[xml-xsd-validator-browser](../globals.md) / validateWellForm

# Function: validateWellForm()

> **validateWellForm**(`xmlText`): `Promise`\<[`WorkerBags`](../type-aliases/WorkerBags.md)\>

Defined in: [validateFormWell.ts:10](https://github.com/ferdisap/xml-xsd_validator-browser/blob/406d29edb6fc8c8b93eca213ae57816c5b66ad03/src/validateFormWell.ts#L10)

✅ Validasi XML hanya untuk memastikan well-formed
- Menggunakan libxml2-wasm (WASM, aman di Worker)
- Output sesuai struktur ValidationErrorInfo

## Parameters

### xmlText

`string`

## Returns

`Promise`\<[`WorkerBags`](../type-aliases/WorkerBags.md)\>
