[**fluent-iterable v1.38.1**](../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../README.md) / [types](../README.md) / FluentIterableEmitter

# Interface: FluentIterableEmitter\<T\>

Represents the operations using EventEmitters

## Typeparam

T The type of the items in the iterable.

## Extended by

- [`FluentIterable`](../../index/interfaces/FluentIterable.md)
- [`FluentAsyncIterable`](../../index/interfaces/FluentAsyncIterable.md)
- [`FluentAsyncIterable`](FluentAsyncIterable.md)

## Type Parameters

• **T**

## Methods

### combineEmitter()

#### combineEmitter(emitter, options)

> **combineEmitter**\<`U`\>(`emitter`, `options`?): [`FluentAsyncIterable`](../../index/interfaces/FluentAsyncIterable.md)\<[`T`, `U`]\>

Join the iterable with an EventEmitter, returning a new async iterable with a NxN combination

**IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
emission generates a new yielded result. The default key event is **'data'**.

Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.

If you need to change the key event or other characteristics, you can do it through the **options** parameter

##### Type Parameters

• **U** = `any`

##### Parameters

• **emitter**: `EventEmitter`\<`DefaultEventMap`\>

The EventEmitter

• **options?**: [`FluentEmitOptions`](FluentEmitOptions.md)

The EventEmitter options. Optional

##### Returns

[`FluentAsyncIterable`](../../index/interfaces/FluentAsyncIterable.md)\<[`T`, `U`]\>

#### combineEmitter(emitter, keyA, keyB, options)

> **combineEmitter**\<`U`, `K`\>(`emitter`, `keyA`, `keyB`, `options`?): [`FluentAsyncIterable`](../../index/interfaces/FluentAsyncIterable.md)\<[`T`, `U`]\>

Join the iterable with another the EventEmitter, returning a new async iterable with the inner matching combinations

**IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
emission generates a new yielded result. The default key event is **'data'**.

Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.

If you need to change the key event or other characteristics, you can do it through the **options** parameter

##### Type Parameters

• **U**

• **K**

##### Parameters

• **emitter**: `EventEmitter`\<`DefaultEventMap`\>

The EventEmitter

• **keyA**: [`Mapper`](../../index/interfaces/Mapper.md)\<`T`, `K`\>

A mapper that returns the key map value from the left iterable

• **keyB**: [`Mapper`](../../index/interfaces/Mapper.md)\<`U`, `K`\>

A mapper that returns the key map value from the right iterable

• **options?**: [`FluentEmitOptions`](FluentEmitOptions.md)

The EventEmitter options. Optional

##### Returns

[`FluentAsyncIterable`](../../index/interfaces/FluentAsyncIterable.md)\<[`T`, `U`]\>

#### combineEmitter(emitter, keyA, keyB, options)

> **combineEmitter**\<`U`, `K`\>(`emitter`, `keyA`, `keyB`, `options`?): [`FluentAsyncIterable`](../../index/interfaces/FluentAsyncIterable.md)\<[`T`, `U`]\>

Join the iterable with another the EventEmitter, returning a new async iterable with the inner matching combinations

**IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
emission generates a new yielded result. The default key event is **'data'**.

Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.

If you need to change the key event or other characteristics, you can do it through the **options** parameter

##### Type Parameters

• **U**

• **K**

##### Parameters

• **emitter**: `EventEmitter`\<`DefaultEventMap`\>

The EventEmitter

• **keyA**: keyof `T`

A mapper that returns the key map value from the left iterable

• **keyB**: [`Mapper`](../../index/interfaces/Mapper.md)\<`U`, `K`\>

A mapper that returns the key map value from the right iterable

• **options?**: [`FluentEmitOptions`](FluentEmitOptions.md)

The EventEmitter options. Optional

##### Returns

[`FluentAsyncIterable`](../../index/interfaces/FluentAsyncIterable.md)\<[`T`, `U`]\>

***

### concatEmitter()

> **concatEmitter**(`emitter`, `options`?): [`FluentAsyncIterable`](../../index/interfaces/FluentAsyncIterable.md)\<`T`\>

Concatenates the specified Emitter to the async iterable.

**IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
emission generates a new yielded result. The default key event is **'data'**.

Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.

If you need to change the key event or other characteristics, you can do it through the **options** parameter

#### Parameters

• **emitter**: `EventEmitter`\<`DefaultEventMap`\>

The EventEmitter

• **options?**: [`FluentEmitOptions`](FluentEmitOptions.md)

The EventEmitter options. Optional

#### Returns

[`FluentAsyncIterable`](../../index/interfaces/FluentAsyncIterable.md)\<`T`\>

The [[FluentAsyncIterable]] of the concatenated async iterables.
