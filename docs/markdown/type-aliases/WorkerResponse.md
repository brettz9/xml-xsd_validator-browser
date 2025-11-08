[**xml-xsd-validator-browser v1.0.5**](../README.md)

***

[xml-xsd-validator-browser](../globals.md) / WorkerResponse

# Type Alias: WorkerResponse

> **WorkerResponse** = `object`

Defined in: [types/types.ts:15](https://github.com/ferdisap/xml-xsd_validator-browser/blob/15013a0b67901b9c2916e2f1f34f83fdae60005f/src/types/types.ts#L15)

🔹 Struktur data yang dikirim dari worker ke thread utama.

## Properties

### id

> **id**: [`PayloadId`](PayloadId.md)

Defined in: [types/types.ts:17](https://github.com/ferdisap/xml-xsd_validator-browser/blob/15013a0b67901b9c2916e2f1f34f83fdae60005f/src/types/types.ts#L17)

ID unik (UUID) untuk payload yang sedang diproses

***

### status

> **status**: [`ValidationResponse`](ValidationResponse.md)\[`"status"`\]

Defined in: [types/types.ts:20](https://github.com/ferdisap/xml-xsd_validator-browser/blob/15013a0b67901b9c2916e2f1f34f83fdae60005f/src/types/types.ts#L20)

Status dari proses validasi

***

### ready?

> `optional` **ready**: `boolean`

Defined in: [types/types.ts:23](https://github.com/ferdisap/xml-xsd_validator-browser/blob/15013a0b67901b9c2916e2f1f34f83fdae60005f/src/types/types.ts#L23)

Status worker ready menerima message atau tidak

***

### bags

> **bags**: [`ValidationResponse`](ValidationResponse.md)\[`"bags"`\]

Defined in: [types/types.ts:26](https://github.com/ferdisap/xml-xsd_validator-browser/blob/15013a0b67901b9c2916e2f1f34f83fdae60005f/src/types/types.ts#L26)

Kumpulan hasil validasi
