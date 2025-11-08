[**xml-xsd-validator-browser v1.0.5**](../README.md)

***

[xml-xsd-validator-browser](../globals.md) / ViteWorkerPluginOptions

# Interface: ViteWorkerPluginOptions

Defined in: plugins/viteWorkerPlugin.ts:7

Opsi plugin untuk membangun worker

## Properties

### outDir?

> `optional` **outDir**: `string`

Defined in: plugins/viteWorkerPlugin.ts:9

Folder keluaran worker (default: "dist")

***

### pattern?

> `optional` **pattern**: `RegExp`

Defined in: plugins/viteWorkerPlugin.ts:11

Pola pencocokan import (default: /\?worker$/)

***

### minify?

> `optional` **minify**: `boolean`

Defined in: plugins/viteWorkerPlugin.ts:13

Apakah worker perlu di-minify (default: false)
