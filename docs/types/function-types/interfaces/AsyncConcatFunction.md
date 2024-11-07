[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / AsyncConcatFunction

# Interface: AsyncConcatFunction()\<T\>

## Type Parameters

• **T**

> **AsyncConcatFunction**(...`iterables`): [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`T`\>

Concatenates specified async iterables to the iterable.<br>
  Example: `fluent(['anchor', 'almond']).concat(['bound', 'alpine'], someStream)` yields *anchor*, *almond*, *bound*, *alpine* and the elements of the stream.

## Parameters

• ...**iterables**: `AnyIterable`\<`T`\>[]

The async iterables to concatenate.

## Returns

[`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`T`\>

The [[FluentAsyncIterable]] of the concatenated async iterables.
