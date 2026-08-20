[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / PartitionFunction

# Interface: PartitionFunction()\<T\>

## Type Parameters

• **T**

> **PartitionFunction**(`criteria`): `FluentIterable`\<`FluentIterable`\<`T`\>\>

Groups the elements of the iterable into partitions of a specified size.<br>
  Note: the last partition size can be smaller than the specified size.

## Parameters

• **criteria**: `number` \| [`Equality`](../../interfaces/Equality.md)\<`T`\>

The expected size of the partitions or a equality to determine of two consecutive items must be in the same partition.

## Returns

`FluentIterable`\<`FluentIterable`\<`T`\>\>

The [[FluentAsyncIterable]] of partitions.
