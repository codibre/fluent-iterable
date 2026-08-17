[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / AsyncMapFunction

# Interface: AsyncMapFunction()\<T\>

## Type Parameters

• **T**

> **AsyncMapFunction**\<`R`\>(`mapper`): [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`R`\>

Transforms the iterable of `T` into an iterable of `R` by mapping all elements to an element of `R`.

## Type Parameters

• **R**

## Parameters

• **mapper**: [`AsyncMapper`](../../../index/interfaces/AsyncMapper.md)\<`T`, `R`\>

The asynchronous operation which maps an instance of `T` into an instance of `R`.

## Returns

[`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`R`\>

A [[FluentAsyncIterable]] of the mapped elements.

## Typeparam

R The destination type of the mapping.

> **AsyncMapFunction**\<`R`\>(`mapper`): [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`T`\[`R`\]\>

Transforms the iterable of `T` into an iterable of `R` by mapping all elements to an element of `R`.

## Type Parameters

• **R** *extends* `string` \| `number` \| `symbol`

## Parameters

• **mapper**: `R`

The asynchronous operation which maps an instance of `T` into an instance of `R`.

## Returns

[`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`T`\[`R`\]\>

A [[FluentAsyncIterable]] of the mapped elements.

## Typeparam

R The destination type of the mapping.
