[**fluent-iterable v1.38.1**](../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../README.md) / [index](../README.md) / fluentEmit

# Function: fluentEmit()

> **fluentEmit**\<`T`\>(`emitter`, `options`?): [`FluentAsyncIterable`](../../types/interfaces/FluentAsyncIterable.md)\<`T`\>

Transforms an EventEmitter into a [[FluentAsyncIterable]].

**IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
emission generates a new yielded result. The default key event is **'data'**.

Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.

If you need to change the key event or other characteristics, you can do it through the **options** parameter

## Type Parameters

• **T** = `any`

## Parameters

• **emitter**: `EventEmitter`\<`DefaultEventMap`\>

The EventEmitter

• **options?**: [`FluentEmitOptions`](../../types/interfaces/FluentEmitOptions.md)

The EventEmitter options. Optional

## Returns

[`FluentAsyncIterable`](../../types/interfaces/FluentAsyncIterable.md)\<`T`\>

The [[FluentAsyncIterable]] instance.

## Typeparam

T The type of the items in the created FluentAsyncIterable.
