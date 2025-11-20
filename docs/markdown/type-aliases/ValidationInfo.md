[**xml-xsd-validator-browser v1.0.9**](../README.md)

***

[xml-xsd-validator-browser](../globals.md) / ValidationInfo

# Type Alias: ValidationInfo

> **ValidationInfo** = `object`

Defined in: [types/types.ts:86](https://github.com/ferdisap/xml-xsd_validator-browser/blob/c0657eb472451eb74a19ec87b884ab96231ad7dd/src/types/types.ts#L86)

🔹 Informasi detail tentang satu hasil error atau validasi.

## Properties

### name

> **name**: [`ErrorName`](ErrorName.md)

Defined in: [types/types.ts:88](https://github.com/ferdisap/xml-xsd_validator-browser/blob/c0657eb472451eb74a19ec87b884ab96231ad7dd/src/types/types.ts#L88)

Nama atau kategori error

***

### type

> **type**: [`ValidationType`](ValidationType.md)

Defined in: [types/types.ts:91](https://github.com/ferdisap/xml-xsd_validator-browser/blob/c0657eb472451eb74a19ec87b884ab96231ad7dd/src/types/types.ts#L91)

Jenis validasi yang dilakukan

***

### detail

> **detail**: `object`

Defined in: [types/types.ts:94](https://github.com/ferdisap/xml-xsd_validator-browser/blob/c0657eb472451eb74a19ec87b884ab96231ad7dd/src/types/types.ts#L94)

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
