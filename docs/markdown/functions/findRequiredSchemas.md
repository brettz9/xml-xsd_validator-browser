[**xml-xsd-validator-browser v1.0.8**](../README.md)

***

[xml-xsd-validator-browser](../globals.md) / findRequiredSchemas

# Function: findRequiredSchemas()

> **findRequiredSchemas**(`mainSchemaUrl`, `visited`): `Promise`\<[`Schema`](../type-aliases/Schema.md)[]\>

Defined in: [util/helper.ts:60](https://github.com/ferdisap/xml-xsd_validator-browser/blob/406d29edb6fc8c8b93eca213ae57816c5b66ad03/src/util/helper.ts#L60)

Rekursif mendeteksi semua dependency XSD dari schema utama,
handle xs:import, xs:include, dan xs:redefine

Tidak menggunakan async/await, seluruhnya Promise chaining.
Menangani error dengan console.error, tetap resolve agar tidak menghentikan chain.
array index 0 adalah mainSchemaUrl

## Parameters

### mainSchemaUrl

`string`

### visited

`Set`\<`string`\> = `...`

## Returns

`Promise`\<[`Schema`](../type-aliases/Schema.md)[]\>
