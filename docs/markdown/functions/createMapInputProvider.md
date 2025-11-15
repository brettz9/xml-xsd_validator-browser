[**xml-xsd-validator-browser v1.0.8**](../README.md)

***

[xml-xsd-validator-browser](../globals.md) / createMapInputProvider

# Function: createMapInputProvider()

> **createMapInputProvider**(`map`): `Promise`\<[`MapInputProvider`](../type-aliases/MapInputProvider.md)\>

Defined in: [provider/MapInputProvider.ts:11](https://github.com/ferdisap/xml-xsd_validator-browser/blob/406d29edb6fc8c8b93eca213ae57816c5b66ad03/src/provider/MapInputProvider.ts#L11)

Create a virtual file provider for libxml2-wasm.
It maps filenames (or URLs) to in-memory schema contents,
allowing libxml2 to resolve xs:import/xs:include directly
without needing network access.

## Parameters

### map

`Map`\<`string`, `string`\> | [`Schema`](../type-aliases/Schema.md)[]

## Returns

`Promise`\<[`MapInputProvider`](../type-aliases/MapInputProvider.md)\>
