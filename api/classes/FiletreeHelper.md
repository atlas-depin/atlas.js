[**atlas.js v0.1.2**](../README.md)

***

[atlas.js](../README.md) / FiletreeHelper

# Class: FiletreeHelper

Defined in: [src/filetree-helper.ts:11](https://github.com/Atlas-DePIN/atlas.js/blob/3c81d31fe53b35ce6d420de26179cef52dd5035f/src/filetree-helper.ts#L11)

## Constructors

### Constructor

> **new FiletreeHelper**(`client`): `FiletreeHelper`

Defined in: [src/filetree-helper.ts:15](https://github.com/Atlas-DePIN/atlas.js/blob/3c81d31fe53b35ce6d420de26179cef52dd5035f/src/filetree-helper.ts#L15)

#### Parameters

##### client

[`AtlasClient`](AtlasClient.md)

#### Returns

`FiletreeHelper`

## Properties

### accessKey?

> `protected` `optional` **accessKey?**: `PrivateKey`

Defined in: [src/filetree-helper.ts:13](https://github.com/Atlas-DePIN/atlas.js/blob/3c81d31fe53b35ce6d420de26179cef52dd5035f/src/filetree-helper.ts#L13)

***

### client

> `protected` **client**: [`AtlasClient`](AtlasClient.md)

Defined in: [src/filetree-helper.ts:12](https://github.com/Atlas-DePIN/atlas.js/blob/3c81d31fe53b35ce6d420de26179cef52dd5035f/src/filetree-helper.ts#L12)

## Methods

### createDirectory()

> **createDirectory**(): `Promise`\<`EncodeObject`\>

Defined in: [src/filetree-helper.ts:106](https://github.com/Atlas-DePIN/atlas.js/blob/3c81d31fe53b35ce6d420de26179cef52dd5035f/src/filetree-helper.ts#L106)

#### Returns

`Promise`\<`EncodeObject`\>

***

### createDrive()

> **createDrive**(`metadata`, `encryption?`): `Promise`\<`EncodeObject`\>

Defined in: [src/filetree-helper.ts:55](https://github.com/Atlas-DePIN/atlas.js/blob/3c81d31fe53b35ce6d420de26179cef52dd5035f/src/filetree-helper.ts#L55)

Create a top-level drive node for the active account.

#### Parameters

##### metadata

[`IAtlasDriveInfo`](../interfaces/IAtlasDriveInfo.md)

##### encryption?

[`Privacy`](../enumerations/Privacy.md) = `Privacy.ENCRYPTED`

#### Returns

`Promise`\<`EncodeObject`\>

***

### createFile()

> **createFile**(`file`, `dir`): `Promise`\<`EncodeObject`\>

Defined in: [src/filetree-helper.ts:86](https://github.com/Atlas-DePIN/atlas.js/blob/3c81d31fe53b35ce6d420de26179cef52dd5035f/src/filetree-helper.ts#L86)

#### Parameters

##### file

[`IQueuedFile`](../interfaces/IQueuedFile.md)

##### dir

`string`

#### Returns

`Promise`\<`EncodeObject`\>

***

### extractAesKey()

> **extractAesKey**(`permissions`): `Promise`\<`IAesBundle`\>

Defined in: [src/filetree-helper.ts:152](https://github.com/Atlas-DePIN/atlas.js/blob/3c81d31fe53b35ce6d420de26179cef52dd5035f/src/filetree-helper.ts#L152)

Decrypt the AES bundle granted to the connected wallet.

#### Parameters

##### permissions

`string`

#### Returns

`Promise`\<`IAesBundle`\>

***

### getTreeNode()

> **getTreeNode**(`path`, `owner?`): `Promise`\<[`TreeNode`](../type-aliases/TreeNode.md)\>

Defined in: [src/filetree-helper.ts:39](https://github.com/Atlas-DePIN/atlas.js/blob/3c81d31fe53b35ce6d420de26179cef52dd5035f/src/filetree-helper.ts#L39)

#### Parameters

##### path

`string`

##### owner?

`string` = `...`

#### Returns

`Promise`\<[`TreeNode`](../type-aliases/TreeNode.md)\>

***

### getTreeNodeChildren()

> **getTreeNodeChildren**(`path`, `owner?`): `Promise`\<[`TreeNode`](../type-aliases/TreeNode.md)[]\>

Defined in: [src/filetree-helper.ts:24](https://github.com/Atlas-DePIN/atlas.js/blob/3c81d31fe53b35ce6d420de26179cef52dd5035f/src/filetree-helper.ts#L24)

#### Parameters

##### path

`string`

##### owner?

`string` = `...`

#### Returns

`Promise`\<[`TreeNode`](../type-aliases/TreeNode.md)[]\>

***

### incrementDirectoryItemCount()

> **incrementDirectoryItemCount**(`path`, `delta`): `Promise`\<`EncodeObject`\>

Defined in: [src/filetree-helper.ts:113](https://github.com/Atlas-DePIN/atlas.js/blob/3c81d31fe53b35ce6d420de26179cef52dd5035f/src/filetree-helper.ts#L113)

Build a replacement directory node with an adjusted child item count.

#### Parameters

##### path

`string`

##### delta

`number`

#### Returns

`Promise`\<`EncodeObject`\>

***

### setAccessKey()

> **setAccessKey**(`accessKey`): `Promise`\<`void`\>

Defined in: [src/filetree-helper.ts:19](https://github.com/Atlas-DePIN/atlas.js/blob/3c81d31fe53b35ce6d420de26179cef52dd5035f/src/filetree-helper.ts#L19)

#### Parameters

##### accessKey

`PrivateKey`

#### Returns

`Promise`\<`void`\>
