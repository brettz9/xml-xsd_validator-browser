[**xml-xsd-validator-browser v1.0.5**](../README.md)

***

[xml-xsd-validator-browser](../globals.md) / validateXml

# Function: validateXml()

> **validateXml**(`xmlText`, `mainSchemaUrl`, `stopOnFailure`): `Promise`\<[`ValidationInfo`](../type-aliases/ValidationInfo.md)[]\>

Defined in: [validate.ts:22](https://github.com/ferdisap/xml-xsd_validator-browser/blob/15013a0b67901b9c2916e2f1f34f83fdae60005f/src/validate.ts#L22)

TBD, akan memvalidate xml berdasarkan namespace
tidak berjalan di worker
xsi:schemaLocation may contain two xsd, eg. xsi:schemaLocation="namespace1 xsd1 namespace2 xsd2"

## Parameters

### xmlText

`string`

### mainSchemaUrl

`string` | `null`

### stopOnFailure

`boolean` = `true`

## Returns

`Promise`\<[`ValidationInfo`](../type-aliases/ValidationInfo.md)[]\>
