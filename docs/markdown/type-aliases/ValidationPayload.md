[**xml-xsd-validator-browser v1.0.8**](../README.md)

***

[xml-xsd-validator-browser](../globals.md) / ValidationPayload

# Type Alias: ValidationPayload

> **ValidationPayload** = `object`

Defined in: [types/types.ts:128](https://github.com/ferdisap/xml-xsd_validator-browser/blob/406d29edb6fc8c8b93eca213ae57816c5b66ad03/src/types/types.ts#L128)

🔹 Payload untuk menjalankan validasi XML terhadap XSD di worker.

## Properties

### xmlText

> **xmlText**: `string`

Defined in: [types/types.ts:131](https://github.com/ferdisap/xml-xsd_validator-browser/blob/406d29edb6fc8c8b93eca213ae57816c5b66ad03/src/types/types.ts#L131)

Teks XML yang akan divalidasi

***

### duration?

> `optional` **duration**: `number`

Defined in: [types/types.ts:134](https://github.com/ferdisap/xml-xsd_validator-browser/blob/406d29edb6fc8c8b93eca213ae57816c5b66ad03/src/types/types.ts#L134)

Lama waktu eksekusi (opsional)

***

### stopOnFailure?

> `optional` **stopOnFailure**: `boolean`

Defined in: [types/types.ts:137](https://github.com/ferdisap/xml-xsd_validator-browser/blob/406d29edb6fc8c8b93eca213ae57816c5b66ad03/src/types/types.ts#L137)

Jika `true`, hentikan pada error pertama

***

### mainSchemaUrl?

> `optional` **mainSchemaUrl**: `string` \| `null`

Defined in: [types/types.ts:140](https://github.com/ferdisap/xml-xsd_validator-browser/blob/406d29edb6fc8c8b93eca213ae57816c5b66ad03/src/types/types.ts#L140)

URL XSD utama (opsional)

***

### onBefore?

> `optional` **onBefore**: `object`

Defined in: [types/types.ts:142](https://github.com/ferdisap/xml-xsd_validator-browser/blob/406d29edb6fc8c8b93eca213ae57816c5b66ad03/src/types/types.ts#L142)

#### set\_xml\_docoument\_parse\_option?

> `optional` **set\_xml\_docoument\_parse\_option**: `number`

#### set\_xml\_entity\_notation\_option?

> `optional` **set\_xml\_entity\_notation\_option**: [`IValidateEntityNotationOption`](../interfaces/IValidateEntityNotationOption.md)

#### base?

> `optional` **base**: `string`

base uri
