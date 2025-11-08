[**xml-xsd-validator-browser v1.0.5**](../README.md)

***

[xml-xsd-validator-browser](../globals.md) / validateWellForm

# Function: validateWellForm()

> **validateWellForm**(`xmlText`): `Promise`\<[`WorkerBags`](../type-aliases/WorkerBags.md)\>

Defined in: [validateFormWell.ts:9](https://github.com/ferdisap/xml-xsd_validator-browser/blob/15013a0b67901b9c2916e2f1f34f83fdae60005f/src/validateFormWell.ts#L9)

✅ Validasi XML hanya untuk memastikan well-formed
- Menggunakan libxml2-wasm (WASM, aman di Worker)
- Output sesuai struktur ValidationErrorInfo

## Parameters

### xmlText

`string`

## Returns

`Promise`\<[`WorkerBags`](../type-aliases/WorkerBags.md)\>
