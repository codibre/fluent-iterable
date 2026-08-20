[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / AsyncMergeEmitterCatchingFunction

# Interface: AsyncMergeEmitterCatchingFunction()\<T\>

## Type Parameters

• **T**

> **AsyncMergeEmitterCatchingFunction**\<`R`\>(`errorCallback`, `emitter`, `options`?): [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`T` \| `R`\>

Merge the iterable with the informed EventEmitter, catching the errors of any of the iterables that fails, so the process can continue until all the successful iterables ends.

**IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
emission generates a new yielded result. The default key event is **'data'**.

Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.

If you need to change the key event or other characteristics, you can do it through the **options** parameter

## Type Parameters

• **R**

## Parameters

• **errorCallback**: [`ErrorCallback`](../../interfaces/ErrorCallback.md)

A callback to be called if any of the iterables fail

• **emitter**: `EventEmitter`\<`DefaultEventMap`\>

The EventEmitter

• **options?**: [`FluentEmitOptions`](../../interfaces/FluentEmitOptions.md)

The EventEmitter options. Optional

## Returns

[`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`T` \| `R`\>

A new iterable that returns the elements of all others in the order of which resolves first
