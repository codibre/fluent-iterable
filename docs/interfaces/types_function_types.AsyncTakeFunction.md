[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / AsyncTakeFunction

# Interface: AsyncTakeFunction<T\>

[types/function-types](../modules/types_function_types.md).AsyncTakeFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### AsyncTakeFunction

▸ **AsyncTakeFunction**(`n`): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

Returns a specified number of contiguous elements from the start of the iterable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | `number` | The number of elements to take. |

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

A [FluentAsyncIterable](index.FluentAsyncIterable.md) of the first `n` elements.
