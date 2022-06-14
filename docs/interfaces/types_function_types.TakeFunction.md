[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / TakeFunction

# Interface: TakeFunction<T\>

[types/function-types](../modules/types_function_types.md).TakeFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### TakeFunction

▸ **TakeFunction**(`n`): [`FluentIterable`](index.FluentIterable.md)<`T`\>

Returns a specified number of contiguous elements from the start of the iterable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | `number` | The number of elements to take. |

#### Returns

[`FluentIterable`](index.FluentIterable.md)<`T`\>

A [FluentAsyncIterable](index.FluentAsyncIterable.md) of the first `n` elements.
