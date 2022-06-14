[fluent-iterable - v1.22.0](../README.md) / [index](../modules/index.md) / FluentEmitter

# Interface: FluentEmitter<T\>

[index](../modules/index.md).FluentEmitter

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- `TypedEventEmitter`<[`FluentEvents`](types.FluentEvents.md)<`T`\>\>

  ↳ **`FluentEmitter`**

## Table of contents

### Methods

- [addListener](index.FluentEmitter.md#addlistener)
- [emit](index.FluentEmitter.md#emit)
- [eventNames](index.FluentEmitter.md#eventnames)
- [getMaxListeners](index.FluentEmitter.md#getmaxlisteners)
- [listenerCount](index.FluentEmitter.md#listenercount)
- [listeners](index.FluentEmitter.md#listeners)
- [off](index.FluentEmitter.md#off)
- [on](index.FluentEmitter.md#on)
- [once](index.FluentEmitter.md#once)
- [prependListener](index.FluentEmitter.md#prependlistener)
- [prependOnceListener](index.FluentEmitter.md#prependoncelistener)
- [rawListeners](index.FluentEmitter.md#rawlisteners)
- [removeAllListeners](index.FluentEmitter.md#removealllisteners)
- [removeListener](index.FluentEmitter.md#removelistener)
- [setMaxListeners](index.FluentEmitter.md#setmaxlisteners)

## Methods

### addListener

▸ **addListener**<`E`\>(`event`, `listener`): [`FluentEmitter`](index.FluentEmitter.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`FluentEvents`](types.FluentEvents.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | [`FluentEvents`](types.FluentEvents.md)<`T`\>[`E`] |

#### Returns

[`FluentEmitter`](index.FluentEmitter.md)<`T`\>

#### Inherited from

TypedEmitter.addListener

___

### emit

▸ **emit**<`E`\>(`event`, ...`args`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`FluentEvents`](types.FluentEvents.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `...args` | `Arguments`<[`FluentEvents`](types.FluentEvents.md)<`T`\>[`E`]\> |

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
| `E` | extends keyof [`FluentEvents`](types.FluentEvents.md)<`T`\> |

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
| `E` | extends keyof [`FluentEvents`](types.FluentEvents.md)<`T`\> |

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

▸ **off**<`E`\>(`event`, `listener`): [`FluentEmitter`](index.FluentEmitter.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`FluentEvents`](types.FluentEvents.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | [`FluentEvents`](types.FluentEvents.md)<`T`\>[`E`] |

#### Returns

[`FluentEmitter`](index.FluentEmitter.md)<`T`\>

#### Inherited from

TypedEmitter.off

___

### on

▸ **on**<`E`\>(`event`, `listener`): [`FluentEmitter`](index.FluentEmitter.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`FluentEvents`](types.FluentEvents.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | [`FluentEvents`](types.FluentEvents.md)<`T`\>[`E`] |

#### Returns

[`FluentEmitter`](index.FluentEmitter.md)<`T`\>

#### Inherited from

TypedEmitter.on

___

### once

▸ **once**<`E`\>(`event`, `listener`): [`FluentEmitter`](index.FluentEmitter.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`FluentEvents`](types.FluentEvents.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | [`FluentEvents`](types.FluentEvents.md)<`T`\>[`E`] |

#### Returns

[`FluentEmitter`](index.FluentEmitter.md)<`T`\>

#### Inherited from

TypedEmitter.once

___

### prependListener

▸ **prependListener**<`E`\>(`event`, `listener`): [`FluentEmitter`](index.FluentEmitter.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`FluentEvents`](types.FluentEvents.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | [`FluentEvents`](types.FluentEvents.md)<`T`\>[`E`] |

#### Returns

[`FluentEmitter`](index.FluentEmitter.md)<`T`\>

#### Inherited from

TypedEmitter.prependListener

___

### prependOnceListener

▸ **prependOnceListener**<`E`\>(`event`, `listener`): [`FluentEmitter`](index.FluentEmitter.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`FluentEvents`](types.FluentEvents.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | [`FluentEvents`](types.FluentEvents.md)<`T`\>[`E`] |

#### Returns

[`FluentEmitter`](index.FluentEmitter.md)<`T`\>

#### Inherited from

TypedEmitter.prependOnceListener

___

### rawListeners

▸ **rawListeners**<`E`\>(`event`): `Function`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`FluentEvents`](types.FluentEvents.md)<`T`\> |

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

▸ **removeAllListeners**<`E`\>(`event?`): [`FluentEmitter`](index.FluentEmitter.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`FluentEvents`](types.FluentEvents.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `E` |

#### Returns

[`FluentEmitter`](index.FluentEmitter.md)<`T`\>

#### Inherited from

TypedEmitter.removeAllListeners

___

### removeListener

▸ **removeListener**<`E`\>(`event`, `listener`): [`FluentEmitter`](index.FluentEmitter.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`FluentEvents`](types.FluentEvents.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | [`FluentEvents`](types.FluentEvents.md)<`T`\>[`E`] |

#### Returns

[`FluentEmitter`](index.FluentEmitter.md)<`T`\>

#### Inherited from

TypedEmitter.removeListener

___

### setMaxListeners

▸ **setMaxListeners**(`maxListeners`): [`FluentEmitter`](index.FluentEmitter.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxListeners` | `number` |

#### Returns

[`FluentEmitter`](index.FluentEmitter.md)<`T`\>

#### Inherited from

TypedEmitter.setMaxListeners
