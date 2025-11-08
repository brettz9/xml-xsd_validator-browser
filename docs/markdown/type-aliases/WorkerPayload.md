[**xml-xsd-validator-browser v1.0.5**](../README.md)

***

[xml-xsd-validator-browser](../globals.md) / WorkerPayload

# Type Alias: WorkerPayload\<TData\>

> **WorkerPayload**\<`TData`\> = `object`

Defined in: [types/types.ts:33](https://github.com/ferdisap/xml-xsd_validator-browser/blob/15013a0b67901b9c2916e2f1f34f83fdae60005f/src/types/types.ts#L33)

🔹 Payload yang dikirim ke worker untuk diproses.

## Type Parameters

### TData

`TData` *extends* `Record`\<`string`, `any`\>

Data spesifik yang dikirim ke worker.

## Properties

### id

> **id**: [`PayloadId`](PayloadId.md)

Defined in: [types/types.ts:35](https://github.com/ferdisap/xml-xsd_validator-browser/blob/15013a0b67901b9c2916e2f1f34f83fdae60005f/src/types/types.ts#L35)

ID unik (UUID) payload

***

### payload

> **payload**: `TData`

Defined in: [types/types.ts:38](https://github.com/ferdisap/xml-xsd_validator-browser/blob/15013a0b67901b9c2916e2f1f34f83fdae60005f/src/types/types.ts#L38)

Isi data aktual yang akan diproses oleh worker
