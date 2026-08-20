[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / AsyncMergeCatchingFunction

# Interface: AsyncMergeCatchingFunction()\<T\>

## Type Parameters

• **T**

> **AsyncMergeCatchingFunction**\<`R`\>(`errorCallback`, ...`iterables`): [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`T` \| `R`\>

Merge the iterable with the informed ones, catching the errors of any of the iterables that fails, so the process can continue until all the successful iterables ends.

## Type Parameters

• **R**

## Parameters

• **errorCallback**: [`ErrorCallback`](../../interfaces/ErrorCallback.md)

A callback to be called if any of the iterables fail

• ...**iterables**: `AsyncIterable`\<`R`, `any`, `any`\>[]

The iterables to be merged

## Returns

[`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`T` \| `R`\>

A new iterable that returns the elements of all others in the order of which resolves first
