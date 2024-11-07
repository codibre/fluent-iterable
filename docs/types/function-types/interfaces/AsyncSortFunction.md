[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / AsyncSortFunction

# Interface: AsyncSortFunction()\<T\>

## Type Parameters

• **T**

> **AsyncSortFunction**(`comparer`?): [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`T`\>

Sorts the elements of the iterable based on a specified comparer. This is a resolving operation, will cause a full loop through all the elements of the iterable.

## Parameters

• **comparer?**: [`Comparer`](../../../index/interfaces/Comparer.md)\<`T`\>

The comparer operation to use to determine the order of elements. Alphabetical ascending is used for [[string]] elements and numerical ascending is used for [[number]]

## Returns

[`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`T`\>

The sorted [[FluentAsyncIterable]].
