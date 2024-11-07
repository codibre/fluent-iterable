[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / AsyncPartitionFunction

# Interface: AsyncPartitionFunction()\<T\>

## Type Parameters

• **T**

> **AsyncPartitionFunction**(`criteria`): [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<[`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`T`\>\>

Groups the elements of the iterable into partitions of a specified size.<br>
  Note: the last partition size can be smaller than the specified size.

## Parameters

• **criteria**: `number` \| [`Equality`](../../interfaces/Equality.md)\<`T`\>

The expected size of the partitions or a equality to determine of two consecutive items must be in the same partition.

## Returns

[`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<[`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`T`\>\>

The [[FluentAsyncIterable]] of partitions.
