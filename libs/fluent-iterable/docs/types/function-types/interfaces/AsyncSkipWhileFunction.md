[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / AsyncSkipWhileFunction

# Interface: AsyncSkipWhileFunction()\<T\>

## Type Parameters

• **T**

> **AsyncSkipWhileFunction**(`condition`): [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`T`\>

Bypasses elements in the iterable as long as a specified asynchronous condition is true and then returns the remaining elements.

## Parameters

• **condition**: `AsyncPredicate`\<`T`\>

An asynchronous predicate of `T`. All elements are skipped from the iterable until this evaluates to `false` for the first time.

## Returns

[`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`T`\>

A [[FluentAsyncIterable]] of the elements after the condition is not met.

> **AsyncSkipWhileFunction**\<`R`\>(`condition`): [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`T`\>

Bypasses elements in the iterable as long as a specified asynchronous condition is true and then returns the remaining elements.

## Type Parameters

• **R** *extends* `string` \| `number` \| `symbol`

## Parameters

• **condition**: `R`

An asynchronous predicate of `T`. All elements are skipped from the iterable until this evaluates to `false` for the first time.

## Returns

[`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`T`\>

A [[FluentAsyncIterable]] of the elements after the condition is not met.
