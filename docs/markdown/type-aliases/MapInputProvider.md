[**xml-xsd-validator-browser v1.0.8**](../README.md)

***

[xml-xsd-validator-browser](../globals.md) / MapInputProvider

# Type Alias: MapInputProvider

> **MapInputProvider** = `object`

Defined in: [types/types.ts:156](https://github.com/ferdisap/xml-xsd_validator-browser/blob/07eaefd3e0674318da2bdecf930261d4f09af76b/src/types/types.ts#L156)

🔹 Input provider untuk proses validasi XML.
Menyediakan akses virtual terhadap file yang dibaca oleh `libxml2-wasm`.

## Methods

### match()

> **match**(`filename`): `boolean`

Defined in: [types/types.ts:162](https://github.com/ferdisap/xml-xsd_validator-browser/blob/07eaefd3e0674318da2bdecf930261d4f09af76b/src/types/types.ts#L162)

Tentukan apakah provider ini menangani file tertentu.

#### Parameters

##### filename

`string`

Nama file yang ingin dicek.

#### Returns

`boolean`

`true` jika provider akan menangani file tersebut.

***

### open()

> **open**(`filename`): `number` \| `undefined`

Defined in: [types/types.ts:169](https://github.com/ferdisap/xml-xsd_validator-browser/blob/07eaefd3e0674318da2bdecf930261d4f09af76b/src/types/types.ts#L169)

Membuka file dan mengembalikan file descriptor.

#### Parameters

##### filename

`string`

Nama file.

#### Returns

`number` \| `undefined`

Nomor descriptor, atau `undefined` jika gagal.

***

### read()

> **read**(`fd`, `buf`): `number`

Defined in: [types/types.ts:177](https://github.com/ferdisap/xml-xsd_validator-browser/blob/07eaefd3e0674318da2bdecf930261d4f09af76b/src/types/types.ts#L177)

Membaca isi file berdasarkan descriptor.

#### Parameters

##### fd

`number`

File descriptor.

##### buf

`Uint8Array`

Buffer target pembacaan.

#### Returns

`number`

Jumlah byte yang berhasil dibaca, `-1` jika gagal.

***

### close()

> **close**(`fd`): `boolean`

Defined in: [types/types.ts:184](https://github.com/ferdisap/xml-xsd_validator-browser/blob/07eaefd3e0674318da2bdecf930261d4f09af76b/src/types/types.ts#L184)

Menutup file descriptor.

#### Parameters

##### fd

`number`

File descriptor.

#### Returns

`boolean`

`true` jika berhasil menutup.

***

### register()

> **register**(): `any`

Defined in: [types/types.ts:189](https://github.com/ferdisap/xml-xsd_validator-browser/blob/07eaefd3e0674318da2bdecf930261d4f09af76b/src/types/types.ts#L189)

Registrasi provider ini ke dalam sistem libxml2 virtual IO.

#### Returns

`any`

***

### cleanup()

> **cleanup**(): `void`

Defined in: [types/types.ts:194](https://github.com/ferdisap/xml-xsd_validator-browser/blob/07eaefd3e0674318da2bdecf930261d4f09af76b/src/types/types.ts#L194)

Bersihkan provider dari sistem libxml2.

#### Returns

`void`
