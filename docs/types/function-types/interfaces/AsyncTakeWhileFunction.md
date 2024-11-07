[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / AsyncTakeWhileFunction

# Interface: AsyncTakeWhileFunction()\<T\>

## Type Parameters

• **T**

> **AsyncTakeWhileFunction**(`condition`): [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`T`\>

Returns elements from the iterable as long as a specified asynchronous condition is met.

## Parameters

• **condition**: `AsyncPredicate`\<`T`\>

An asynchronous predicate of `T`. All elements are yielded from the iterable until this evaluates to `false` for the first time.

## Returns

[`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`T`\>

A [[FluentAsyncIterable]] of the elements until the condition is met.

> **AsyncTakeWhileFunction**(`condition`): [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`T`\>

Returns elements from the iterable as long as a specified asynchronous condition is met.

## Parameters

• **condition**: keyof `T`

An asynchronous predicate of `T`. All elements are yielded from the iterable until this evaluates to `false` for the first time.

## Returns

[`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`T`\>

A [[FluentAsyncIterable]] of the elements until the condition is met.
