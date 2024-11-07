[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / AsyncSkipFunction

# Interface: AsyncSkipFunction()\<T\>

## Type Parameters

• **T**

> **AsyncSkipFunction**(`n`): [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`T`\>

Bypasses a specified number of elements in the iterable and then returns the remaining elements.

## Parameters

• **n**: `number`

The number of elements to skip.

## Returns

[`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`T`\>

A [[FluentAsyncIterable]] of all the elements after the first `n` elements.
