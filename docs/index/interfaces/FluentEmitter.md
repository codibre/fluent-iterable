[**fluent-iterable v1.38.1**](../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../README.md) / [index](../README.md) / FluentEmitter

# Interface: FluentEmitter\<T\>

## Extends

- `TypedEventEmitter`\<[`FluentEvents`](../../types/interfaces/FluentEvents.md)\<`T`\>\>

## Type Parameters

• **T**

## Methods

### addListener()

> **addListener**\<`E`\>(`event`, `listener`): `this`

#### Type Parameters

• **E** *extends* keyof [`FluentEvents`](../../types/interfaces/FluentEvents.md)\<`T`\>

#### Parameters

• **event**: `E`

• **listener**: [`FluentEvents`](../../types/interfaces/FluentEvents.md)\<`T`\>\[`E`\]

#### Returns

`this`

#### Inherited from

`TypedEmitter.addListener`

***

### emit()

> **emit**\<`E`\>(`event`, ...`args`): `boolean`

#### Type Parameters

• **E** *extends* keyof [`FluentEvents`](../../types/interfaces/FluentEvents.md)\<`T`\>

#### Parameters

• **event**: `E`

• ...**args**: `Arguments`\<[`FluentEvents`](../../types/interfaces/FluentEvents.md)\<`T`\>\[`E`\]\>

#### Returns

`boolean`

#### Inherited from

`TypedEmitter.emit`

***

### eventNames()

> **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

`TypedEmitter.eventNames`

***

### getMaxListeners()

> **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

`TypedEmitter.getMaxListeners`

***

### listenerCount()

> **listenerCount**\<`E`\>(`event`): `number`

#### Type Parameters

• **E** *extends* keyof [`FluentEvents`](../../types/interfaces/FluentEvents.md)\<`T`\>

#### Parameters

• **event**: `E`

#### Returns

`number`

#### Inherited from

`TypedEmitter.listenerCount`

***

### listeners()

> **listeners**\<`E`\>(`event`): `Function`[]

#### Type Parameters

• **E** *extends* keyof [`FluentEvents`](../../types/interfaces/FluentEvents.md)\<`T`\>

#### Parameters

• **event**: `E`

#### Returns

`Function`[]

#### Inherited from

`TypedEmitter.listeners`

***

### off()

> **off**\<`E`\>(`event`, `listener`): `this`

#### Type Parameters

• **E** *extends* keyof [`FluentEvents`](../../types/interfaces/FluentEvents.md)\<`T`\>

#### Parameters

• **event**: `E`

• **listener**: [`FluentEvents`](../../types/interfaces/FluentEvents.md)\<`T`\>\[`E`\]

#### Returns

`this`

#### Inherited from

`TypedEmitter.off`

***

### on()

> **on**\<`E`\>(`event`, `listener`): `this`

#### Type Parameters

• **E** *extends* keyof [`FluentEvents`](../../types/interfaces/FluentEvents.md)\<`T`\>

#### Parameters

• **event**: `E`

• **listener**: [`FluentEvents`](../../types/interfaces/FluentEvents.md)\<`T`\>\[`E`\]

#### Returns

`this`

#### Inherited from

`TypedEmitter.on`

***

### once()

> **once**\<`E`\>(`event`, `listener`): `this`

#### Type Parameters

• **E** *extends* keyof [`FluentEvents`](../../types/interfaces/FluentEvents.md)\<`T`\>

#### Parameters

• **event**: `E`

• **listener**: [`FluentEvents`](../../types/interfaces/FluentEvents.md)\<`T`\>\[`E`\]

#### Returns

`this`

#### Inherited from

`TypedEmitter.once`

***

### prependListener()

> **prependListener**\<`E`\>(`event`, `listener`): `this`

#### Type Parameters

• **E** *extends* keyof [`FluentEvents`](../../types/interfaces/FluentEvents.md)\<`T`\>

#### Parameters

• **event**: `E`

• **listener**: [`FluentEvents`](../../types/interfaces/FluentEvents.md)\<`T`\>\[`E`\]

#### Returns

`this`

#### Inherited from

`TypedEmitter.prependListener`

***

### prependOnceListener()

> **prependOnceListener**\<`E`\>(`event`, `listener`): `this`

#### Type Parameters

• **E** *extends* keyof [`FluentEvents`](../../types/interfaces/FluentEvents.md)\<`T`\>

#### Parameters

• **event**: `E`

• **listener**: [`FluentEvents`](../../types/interfaces/FluentEvents.md)\<`T`\>\[`E`\]

#### Returns

`this`

#### Inherited from

`TypedEmitter.prependOnceListener`

***

### rawListeners()

> **rawListeners**\<`E`\>(`event`): `Function`[]

#### Type Parameters

• **E** *extends* keyof [`FluentEvents`](../../types/interfaces/FluentEvents.md)\<`T`\>

#### Parameters

• **event**: `E`

#### Returns

`Function`[]

#### Inherited from

`TypedEmitter.rawListeners`

***

### removeAllListeners()

> **removeAllListeners**\<`E`\>(`event`?): `this`

#### Type Parameters

• **E** *extends* keyof [`FluentEvents`](../../types/interfaces/FluentEvents.md)\<`T`\>

#### Parameters

• **event?**: `E`

#### Returns

`this`

#### Inherited from

`TypedEmitter.removeAllListeners`

***

### removeListener()

> **removeListener**\<`E`\>(`event`, `listener`): `this`

#### Type Parameters

• **E** *extends* keyof [`FluentEvents`](../../types/interfaces/FluentEvents.md)\<`T`\>

#### Parameters

• **event**: `E`

• **listener**: [`FluentEvents`](../../types/interfaces/FluentEvents.md)\<`T`\>\[`E`\]

#### Returns

`this`

#### Inherited from

`TypedEmitter.removeListener`

***

### setMaxListeners()

> **setMaxListeners**(`maxListeners`): `this`

#### Parameters

• **maxListeners**: `number`

#### Returns

`this`

#### Inherited from

`TypedEmitter.setMaxListeners`
