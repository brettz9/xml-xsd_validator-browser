[**xml-xsd-validator-browser v1.0.8**](../README.md)

***

[xml-xsd-validator-browser](../globals.md) / validateXml

# Function: validateXml()

> **validateXml**(`xmlText`, `mainSchemaUrl`, `stopOnFailure`): `Promise`\<[`ValidationInfo`](../type-aliases/ValidationInfo.md)[]\>

Defined in: [validate.ts:30](https://github.com/ferdisap/xml-xsd_validator-browser/blob/339c00796dd4a2c4e05b742049a9935b027659bf/src/validate.ts#L30)

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
