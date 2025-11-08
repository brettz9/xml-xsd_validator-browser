[**xml-xsd-validator-browser v1.0.5**](../README.md)

***

[xml-xsd-validator-browser](../globals.md) / ValidationPayload

# Type Alias: ValidationPayload

> **ValidationPayload** = `object`

Defined in: [types/types.ts:124](https://github.com/ferdisap/xml-xsd_validator-browser/blob/15013a0b67901b9c2916e2f1f34f83fdae60005f/src/types/types.ts#L124)

🔹 Payload untuk menjalankan validasi XML terhadap XSD.

## Properties

### xmlText

> **xmlText**: `string`

Defined in: [types/types.ts:126](https://github.com/ferdisap/xml-xsd_validator-browser/blob/15013a0b67901b9c2916e2f1f34f83fdae60005f/src/types/types.ts#L126)

Teks XML yang akan divalidasi

***

### duration?

> `optional` **duration**: `number`

Defined in: [types/types.ts:129](https://github.com/ferdisap/xml-xsd_validator-browser/blob/15013a0b67901b9c2916e2f1f34f83fdae60005f/src/types/types.ts#L129)

Lama waktu eksekusi (opsional)

***

### stopOnFailure?

> `optional` **stopOnFailure**: `boolean`

Defined in: [types/types.ts:132](https://github.com/ferdisap/xml-xsd_validator-browser/blob/15013a0b67901b9c2916e2f1f34f83fdae60005f/src/types/types.ts#L132)

Jika `true`, hentikan pada error pertama

***

### mainSchemaUrl?

> `optional` **mainSchemaUrl**: `string` \| `null`

Defined in: [types/types.ts:135](https://github.com/ferdisap/xml-xsd_validator-browser/blob/15013a0b67901b9c2916e2f1f34f83fdae60005f/src/types/types.ts#L135)

URL XSD utama (opsional)
