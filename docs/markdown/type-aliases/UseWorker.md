[**xml-xsd-validator-browser v1.0.8**](../README.md)

***

[xml-xsd-validator-browser](../globals.md) / UseWorker

# Type Alias: UseWorker

> **UseWorker** = `object`

Defined in: [types/types.ts:44](https://github.com/ferdisap/xml-xsd_validator-browser/blob/339c00796dd4a2c4e05b742049a9935b027659bf/src/types/types.ts#L44)

🔹 Interface utama untuk menggunakan worker di sisi main thread.

## Methods

### validate()

> **validate**(`xmlText`, `mainSchemaUrl`, `stopOnFailure?`): `Promise`\<[`WorkerResponse`](WorkerResponse.md)\>

Defined in: [types/types.ts:52](https://github.com/ferdisap/xml-xsd_validator-browser/blob/339c00796dd4a2c4e05b742049a9935b027659bf/src/types/types.ts#L52)

Jalankan proses validasi XML terhadap XSD.

#### Parameters

##### xmlText

`string`

Teks XML yang akan divalidasi.

##### mainSchemaUrl

URL XSD utama (boleh `null`).

`string` | `null`

##### stopOnFailure?

`boolean`

Jika `true`, hentikan saat error pertama ditemukan.

#### Returns

`Promise`\<[`WorkerResponse`](WorkerResponse.md)\>

Promise yang mengembalikan hasil berupa `WorkerResponse`.

***

### terminate()

> **terminate**(): `void`

Defined in: [types/types.ts:57](https://github.com/ferdisap/xml-xsd_validator-browser/blob/339c00796dd4a2c4e05b742049a9935b027659bf/src/types/types.ts#L57)

Terminasi worker agar berhenti bekerja dan melepaskan resource.

#### Returns

`void`
