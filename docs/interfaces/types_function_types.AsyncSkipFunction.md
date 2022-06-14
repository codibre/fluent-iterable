[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / AsyncSkipFunction

# Interface: AsyncSkipFunction<T\>

[types/function-types](../modules/types_function_types.md).AsyncSkipFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### AsyncSkipFunction

▸ **AsyncSkipFunction**(`n`): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

Bypasses a specified number of elements in the iterable and then returns the remaining elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | `number` | The number of elements to skip. |

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

A [FluentAsyncIterable](index.FluentAsyncIterable.md) of all the elements after the first `n` elements.
