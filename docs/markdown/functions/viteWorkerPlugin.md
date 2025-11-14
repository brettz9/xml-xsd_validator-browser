[**xml-xsd-validator-browser v1.0.8**](../README.md)

***

[xml-xsd-validator-browser](../globals.md) / viteWorkerPlugin

# Function: viteWorkerPlugin()

> **viteWorkerPlugin**(`options`): `object`

Defined in: [plugins/viteWorkerPlugin.ts:20](https://github.com/ferdisap/xml-xsd_validator-browser/blob/339c00796dd4a2c4e05b742049a9935b027659bf/src/plugins/viteWorkerPlugin.ts#L20)

Plugin untuk menangani `?worker` import di Vite.
File worker akan dibundle secara terpisah tanpa hash.

## Parameters

### options

[`ViteWorkerPluginOptions`](../interfaces/ViteWorkerPluginOptions.md) = `{}`

## Returns

`object`

### name

> **name**: `string` = `"vite-worker-plugin"`

### transform()

> **transform**(`code`, `id`): `Promise`\<\{ `code`: `string`; `map`: `null`; \} \| `undefined`\>

#### Parameters

##### code

`string`

##### id

`string`

#### Returns

`Promise`\<\{ `code`: `string`; `map`: `null`; \} \| `undefined`\>
