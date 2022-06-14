[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / AsyncPartitionFunction

# Interface: AsyncPartitionFunction<T\>

[types/function-types](../modules/types_function_types.md).AsyncPartitionFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### AsyncPartitionFunction

▸ **AsyncPartitionFunction**(`criteria`): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>\>

Groups the elements of the iterable into partitions of a specified size.<br>
  Note: the last partition size can be smaller than the specified size.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `criteria` | `number` \| [`Equality`](types.Equality.md)<`T`\> | The expected size of the partitions or a equality to determine of two consecutive items must be in the same partition. |

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>\>

The [FluentAsyncIterable](index.FluentAsyncIterable.md) of partitions.
