[fluent-iterable - v1.19.0](../README.md) / FluentEmitter

# Interface: FluentEmitter<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- `TypedEmitter`<`FluentEvents`<`T`\>\>

  ↳ **`FluentEmitter`**

## Table of contents

### Methods

- [addListener](FluentEmitter.md#addlistener)
- [emit](FluentEmitter.md#emit)
- [eventNames](FluentEmitter.md#eventnames)
- [getMaxListeners](FluentEmitter.md#getmaxlisteners)
- [listenerCount](FluentEmitter.md#listenercount)
- [listeners](FluentEmitter.md#listeners)
- [off](FluentEmitter.md#off)
- [on](FluentEmitter.md#on)
- [once](FluentEmitter.md#once)
- [prependListener](FluentEmitter.md#prependlistener)
- [prependOnceListener](FluentEmitter.md#prependoncelistener)
- [rawListeners](FluentEmitter.md#rawlisteners)
- [removeAllListeners](FluentEmitter.md#removealllisteners)
- [removeListener](FluentEmitter.md#removelistener)
- [setMaxListeners](FluentEmitter.md#setmaxlisteners)

## Methods

### addListener

▸ **addListener**<`E`\>(`event`, `listener`): [`FluentEmitter`](FluentEmitter.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof `FluentEvents`<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | `FluentEvents`<`T`\>[`E`] |

#### Returns

[`FluentEmitter`](FluentEmitter.md)<`T`\>

#### Inherited from

TypedEmitter.addListener

___

### emit

▸ **emit**<`E`\>(`event`, ...`args`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof `FluentEvents`<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `...args` | `Arguments`<`FluentEvents`<`T`\>[`E`]\> |

#### Returns

`boolean`

#### Inherited from

TypedEmitter.emit

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

TypedEmitter.eventNames

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

TypedEmitter.getMaxListeners

___

### listenerCount

▸ **listenerCount**<`E`\>(`event`): `number`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof `FluentEvents`<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |

#### Returns

`number`

#### Inherited from

TypedEmitter.listenerCount

___

### listeners

▸ **listeners**<`E`\>(`event`): `Function`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof `FluentEvents`<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |

#### Returns

`Function`[]

#### Inherited from

TypedEmitter.listeners

___

### off

▸ **off**<`E`\>(`event`, `listener`): [`FluentEmitter`](FluentEmitter.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof `FluentEvents`<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | `FluentEvents`<`T`\>[`E`] |

#### Returns

[`FluentEmitter`](FluentEmitter.md)<`T`\>

#### Inherited from

TypedEmitter.off

___

### on

▸ **on**<`E`\>(`event`, `listener`): [`FluentEmitter`](FluentEmitter.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof `FluentEvents`<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | `FluentEvents`<`T`\>[`E`] |

#### Returns

[`FluentEmitter`](FluentEmitter.md)<`T`\>

#### Inherited from

TypedEmitter.on

___

### once

▸ **once**<`E`\>(`event`, `listener`): [`FluentEmitter`](FluentEmitter.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof `FluentEvents`<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | `FluentEvents`<`T`\>[`E`] |

#### Returns

[`FluentEmitter`](FluentEmitter.md)<`T`\>

#### Inherited from

TypedEmitter.once

___

### prependListener

▸ **prependListener**<`E`\>(`event`, `listener`): [`FluentEmitter`](FluentEmitter.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof `FluentEvents`<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | `FluentEvents`<`T`\>[`E`] |

#### Returns

[`FluentEmitter`](FluentEmitter.md)<`T`\>

#### Inherited from

TypedEmitter.prependListener

___

### prependOnceListener

▸ **prependOnceListener**<`E`\>(`event`, `listener`): [`FluentEmitter`](FluentEmitter.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof `FluentEvents`<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | `FluentEvents`<`T`\>[`E`] |

#### Returns

[`FluentEmitter`](FluentEmitter.md)<`T`\>

#### Inherited from

TypedEmitter.prependOnceListener

___

### rawListeners

▸ **rawListeners**<`E`\>(`event`): `Function`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof `FluentEvents`<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |

#### Returns

`Function`[]

#### Inherited from

TypedEmitter.rawListeners

___

### removeAllListeners

▸ **removeAllListeners**<`E`\>(`event?`): [`FluentEmitter`](FluentEmitter.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof `FluentEvents`<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `E` |

#### Returns

[`FluentEmitter`](FluentEmitter.md)<`T`\>

#### Inherited from

TypedEmitter.removeAllListeners

___

### removeListener

▸ **removeListener**<`E`\>(`event`, `listener`): [`FluentEmitter`](FluentEmitter.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof `FluentEvents`<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | `FluentEvents`<`T`\>[`E`] |

#### Returns

[`FluentEmitter`](FluentEmitter.md)<`T`\>

#### Inherited from

TypedEmitter.removeListener

___

### setMaxListeners

▸ **setMaxListeners**(`maxListeners`): [`FluentEmitter`](FluentEmitter.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxListeners` | `number` |

#### Returns

[`FluentEmitter`](FluentEmitter.md)<`T`\>

#### Inherited from

TypedEmitter.setMaxListeners
