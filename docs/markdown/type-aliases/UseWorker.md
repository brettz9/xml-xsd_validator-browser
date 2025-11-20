[**xml-xsd-validator-browser v1.0.9**](../README.md)

***

[xml-xsd-validator-browser](../globals.md) / UseWorker

# Type Alias: UseWorker

> **UseWorker** = `object`

Defined in: [types/types.ts:44](https://github.com/ferdisap/xml-xsd_validator-browser/blob/c0657eb472451eb74a19ec87b884ab96231ad7dd/src/types/types.ts#L44)

🔹 Interface utama untuk menggunakan worker di sisi main thread.

## Methods

### validate()

> **validate**(`xmlText`, `mainSchemaUrl?`, `stopOnFailure?`): `Promise`\<[`WorkerResponse`](WorkerResponse.md)\>

Defined in: [types/types.ts:52](https://github.com/ferdisap/xml-xsd_validator-browser/blob/c0657eb472451eb74a19ec87b884ab96231ad7dd/src/types/types.ts#L52)

Jalankan proses validasi XML terhadap XSD.

#### Parameters

##### xmlText

`string`

Teks XML yang akan divalidasi.

##### mainSchemaUrl?

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

Defined in: [types/types.ts:57](https://github.com/ferdisap/xml-xsd_validator-browser/blob/c0657eb472451eb74a19ec87b884ab96231ad7dd/src/types/types.ts#L57)

Terminasi worker agar berhenti bekerja dan melepaskan resource.

#### Returns

`void`

***

### onBefore()

> **onBefore**(`data`): `void`

Defined in: [types/types.ts:59](https://github.com/ferdisap/xml-xsd_validator-browser/blob/c0657eb472451eb74a19ec87b884ab96231ad7dd/src/types/types.ts#L59)

#### Parameters

##### data

\{ `set_xml_docoument_parse_option?`: `number`; `set_xml_entity_notation_option?`: [`IValidateEntityNotationOption`](../interfaces/IValidateEntityNotationOption.md); `base?`: `string`; \}

###### set_xml_docoument_parse_option?

`number`

###### set_xml_entity_notation_option?

[`IValidateEntityNotationOption`](../interfaces/IValidateEntityNotationOption.md)

###### base?

`string`

base uri

| `undefined`

#### Returns

`void`
