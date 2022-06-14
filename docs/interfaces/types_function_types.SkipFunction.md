[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / SkipFunction

# Interface: SkipFunction<T\>

[types/function-types](../modules/types_function_types.md).SkipFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### SkipFunction

▸ **SkipFunction**(`n`): [`FluentIterable`](index.FluentIterable.md)<`T`\>

Bypasses a specified number of elements in the iterable and then returns the remaining elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | `number` | The number of elements to skip. |

#### Returns

[`FluentIterable`](index.FluentIterable.md)<`T`\>

A [FluentAsyncIterable](index.FluentAsyncIterable.md) of all the elements after the first `n` elements.
