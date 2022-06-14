[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / PartitionFunction

# Interface: PartitionFunction<T\>

[types/function-types](../modules/types_function_types.md).PartitionFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### PartitionFunction

▸ **PartitionFunction**(`criteria`): [`FluentIterable`](index.FluentIterable.md)<[`FluentIterable`](index.FluentIterable.md)<`T`\>\>

Groups the elements of the iterable into partitions of a specified size.<br>
  Note: the last partition size can be smaller than the specified size.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `criteria` | `number` \| [`Equality`](types.Equality.md)<`T`\> | The expected size of the partitions or a equality to determine of two consecutive items must be in the same partition. |

#### Returns

[`FluentIterable`](index.FluentIterable.md)<[`FluentIterable`](index.FluentIterable.md)<`T`\>\>

The [FluentAsyncIterable](index.FluentAsyncIterable.md) of partitions.
