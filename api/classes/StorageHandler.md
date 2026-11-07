[**atlas.js v0.1.2**](../README.md)

***

[atlas.js](../README.md) / StorageHandler

# Class: StorageHandler

Defined in: [src/storage-handler.ts:30](https://github.com/Atlas-DePIN/atlas.js/blob/3c81d31fe53b35ce6d420de26179cef52dd5035f/src/storage-handler.ts#L30)

Bare-bones storage operations for the Atlas Protocol.

Provides upload, download, delete, and provider-management methods without
any filetree or queue state.

## Constructors

### Constructor

> **new StorageHandler**(`client`): `StorageHandler`

Defined in: [src/storage-handler.ts:42](https://github.com/Atlas-DePIN/atlas.js/blob/3c81d31fe53b35ce6d420de26179cef52dd5035f/src/storage-handler.ts#L42)

Create a storage handler bound to an Atlas client and its active wallet.

#### Parameters

##### client

[`AtlasClient`](AtlasClient.md)

#### Returns

`StorageHandler`

## Properties

### client

> `protected` **client**: [`AtlasClient`](AtlasClient.md)

Defined in: [src/storage-handler.ts:31](https://github.com/Atlas-DePIN/atlas.js/blob/3c81d31fe53b35ce6d420de26179cef52dd5035f/src/storage-handler.ts#L31)

## Accessors

### providers

#### Get Signature

> **get** **providers**(): `Provider`[]

Defined in: [src/storage-handler.ts:35](https://github.com/Atlas-DePIN/atlas.js/blob/3c81d31fe53b35ce6d420de26179cef52dd5035f/src/storage-handler.ts#L35)

##### Returns

`Provider`[]

## Methods

### deleteFile()

> **deleteFile**(`fid`): `Promise`\<`string`\>

Defined in: [src/storage-handler.ts:314](https://github.com/Atlas-DePIN/atlas.js/blob/3c81d31fe53b35ce6d420de26179cef52dd5035f/src/storage-handler.ts#L314)

Delete one file from storage.

#### Parameters

##### fid

`string`

#### Returns

`Promise`\<`string`\>

***

### deleteFiles()

> **deleteFiles**(`fids`): `Promise`\<`string`\>

Defined in: [src/storage-handler.ts:325](https://github.com/Atlas-DePIN/atlas.js/blob/3c81d31fe53b35ce6d420de26179cef52dd5035f/src/storage-handler.ts#L325)

Delete multiple files from storage in a single transaction.

All FIDs are batched into the same `signAndBroadcast` call.

#### Parameters

##### fids

`string`[]

#### Returns

`Promise`\<`string`\>

The transaction hash.

***

### downloadFile()

> **downloadFile**(`fid`, `aes?`, `provider?`, `name?`): `Promise`\<`File`\>

Defined in: [src/storage-handler.ts:257](https://github.com/Atlas-DePIN/atlas.js/blob/3c81d31fe53b35ce6d420de26179cef52dd5035f/src/storage-handler.ts#L257)

Download a file by FID from one of its assigned storage providers.

Tries each provider assigned to the file until one succeeds.  When a
specific `provider` is passed only that host is attempted.

Encrypted files are decrypted with the provided AES bundle.

#### Parameters

##### fid

`string`

##### aes?

`IAesBundle`

##### provider?

`string`

##### name?

`string`

#### Returns

`Promise`\<`File`\>

***

### downloadRaw()

> **downloadRaw**(`fid`, `provider`, `name?`): `Promise`\<`File`\>

Defined in: [src/storage-handler.ts:295](https://github.com/Atlas-DePIN/atlas.js/blob/3c81d31fe53b35ce6d420de26179cef52dd5035f/src/storage-handler.ts#L295)

Fetch raw file bytes from the configured storage gateway.

#### Parameters

##### fid

`string`

##### provider

`string`

##### name?

`string`

#### Returns

`Promise`\<`File`\>

***

### loadProviders()

> **loadProviders**(`hostnames?`): `Promise`\<`void`\>

Defined in: [src/storage-handler.ts:49](https://github.com/Atlas-DePIN/atlas.js/blob/3c81d31fe53b35ce6d420de26179cef52dd5035f/src/storage-handler.ts#L49)

Load providers from the chain, optionally filtered to specific hostnames.

#### Parameters

##### hostnames?

`string`[]

#### Returns

`Promise`\<`void`\>

***

### purchaseSubscription()

> **purchaseSubscription**(`bytes`, `days`, `isDefault`, `address?`): `Promise`\<`string`\>

Defined in: [src/storage-handler.ts:65](https://github.com/Atlas-DePIN/atlas.js/blob/3c81d31fe53b35ce6d420de26179cef52dd5035f/src/storage-handler.ts#L65)

Purchase a storage subscription for the active account or a receiver.

The minimum purchase is one gigabyte for one day.

#### Parameters

##### bytes

`number`

##### days

`number`

##### isDefault

`boolean`

##### address?

`string` = `...`

#### Returns

`Promise`\<`string`\>

***

### uploadFile()

> **uploadFile**(`file`, `subscriptionId`, `privacy?`, `opts?`): `Promise`\<[`UploadedFile`](../interfaces/UploadedFile.md)\>

Defined in: [src/storage-handler.ts:177](https://github.com/Atlas-DePIN/atlas.js/blob/3c81d31fe53b35ce6d420de26179cef52dd5035f/src/storage-handler.ts#L177)

Upload a single file.

Convenience wrapper around [uploadFiles](#uploadfiles).

#### Parameters

##### file

`File`

##### subscriptionId

`string`

##### privacy?

[`Privacy`](../enumerations/Privacy.md) = `Privacy.PUBLIC`

##### opts?

###### encryption?

[`IEncryptionOptions`](../interfaces/IEncryptionOptions.md)

###### maxProviderAttempts?

`number`

###### provider?

`string`

###### replicas?

`number`

#### Returns

`Promise`\<[`UploadedFile`](../interfaces/UploadedFile.md)\>

***

### uploadFiles()

> **uploadFiles**(`files`, `subscriptionId`, `privacy?`, `opts?`): `Promise`\<[`UploadedFile`](../interfaces/UploadedFile.md)[]\>

Defined in: [src/storage-handler.ts:101](https://github.com/Atlas-DePIN/atlas.js/blob/3c81d31fe53b35ce6d420de26179cef52dd5035f/src/storage-handler.ts#L101)

Encrypt, merkle, commit to chain, and upload files to storage providers.

When `opts.encryption` is provided the file is encrypted before upload
and an AES key is auto-generated if none is supplied.  The key is
returned alongside each FID so the caller can decrypt or share it.

#### Parameters

##### files

`File`[]

##### subscriptionId

`string`

##### privacy?

[`Privacy`](../enumerations/Privacy.md) = `Privacy.PUBLIC`

##### opts?

###### encryption?

[`IEncryptionOptions`](../interfaces/IEncryptionOptions.md)

###### maxProviderAttempts?

`number`

###### provider?

`string`

###### replicas?

`number`

#### Returns

`Promise`\<[`UploadedFile`](../interfaces/UploadedFile.md)[]\>

An array of `{ fid, aes }` — `aes` is present only when
         encryption was used.
