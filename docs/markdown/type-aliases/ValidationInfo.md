[**xml-xsd-validator-browser v1.0.5**](../README.md)

***

[xml-xsd-validator-browser](../globals.md) / ValidationInfo

# Type Alias: ValidationInfo

> **ValidationInfo** = `object`

Defined in: [types/types.ts:82](https://github.com/ferdisap/xml-xsd_validator-browser/blob/b482e38d60b39bc7373395cd63a57a05c051aa84/src/types/types.ts#L82)

🔹 Informasi detail tentang satu hasil error atau validasi.

## Properties

### name

> **name**: [`ErrorName`](ErrorName.md)

Defined in: [types/types.ts:84](https://github.com/ferdisap/xml-xsd_validator-browser/blob/b482e38d60b39bc7373395cd63a57a05c051aa84/src/types/types.ts#L84)

Nama atau kategori error

***

### type

> **type**: [`ValidationType`](ValidationType.md)

Defined in: [types/types.ts:87](https://github.com/ferdisap/xml-xsd_validator-browser/blob/b482e38d60b39bc7373395cd63a57a05c051aa84/src/types/types.ts#L87)

Jenis validasi yang dilakukan

***

### detail

> **detail**: `object`

Defined in: [types/types.ts:90](https://github.com/ferdisap/xml-xsd_validator-browser/blob/b482e38d60b39bc7373395cd63a57a05c051aa84/src/types/types.ts#L90)

Detail pesan error dan posisi sumber

#### message

> **message**: `string`

Pesan kesalahan

#### file

> **file**: `string`

Nama file atau sumber XML

#### line

> **line**: `number`

Nomor baris terjadinya error

#### col

> **col**: `number`

Nomor kolom terjadinya error
