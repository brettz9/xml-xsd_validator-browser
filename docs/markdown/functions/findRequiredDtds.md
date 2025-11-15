[**xml-xsd-validator-browser v1.0.8**](../README.md)

***

[xml-xsd-validator-browser](../globals.md) / findRequiredDtds

# Function: findRequiredDtds()

> **findRequiredDtds**(`mainDtdUrl`, `visited`): `Promise`\<[`Schema`](../type-aliases/Schema.md)[]\>

Defined in: [util/helper.ts:309](https://github.com/ferdisap/xml-xsd_validator-browser/blob/406d29edb6fc8c8b93eca213ae57816c5b66ad03/src/util/helper.ts#L309)

Mencari semua DTD yang dibutuhkan oleh DTD utama,
termasuk nested ENTITY SYSTEM, ENTITY % param, NOTATION SYSTEM/PUBLIC.

Mirip findRequiredSchemas untuk XSD.

## Parameters

### mainDtdUrl

`string`

### visited

`Set`\<`string`\> = `...`

## Returns

`Promise`\<[`Schema`](../type-aliases/Schema.md)[]\>
