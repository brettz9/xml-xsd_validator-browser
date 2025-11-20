[**xml-xsd-validator-browser v1.0.9**](../README.md)

***

[xml-xsd-validator-browser](../globals.md) / findRequiredDtds

# Function: findRequiredDtds()

> **findRequiredDtds**(`mainDtdUrl`, `visited`): `Promise`\<[`Schema`](../type-aliases/Schema.md)[]\>

Defined in: [util/helper.ts:309](https://github.com/ferdisap/xml-xsd_validator-browser/blob/c0657eb472451eb74a19ec87b884ab96231ad7dd/src/util/helper.ts#L309)

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
