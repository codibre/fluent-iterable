[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / AsyncPrependFunction

# Interface: AsyncPrependFunction<T\>

[types/function-types](../modules/types_function_types.md).AsyncPrependFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### AsyncPrependFunction

▸ **AsyncPrependFunction**(...`items`): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

Adds a value to the beginning of the iterable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `T`[] | The items to be prepended to the iterable. |

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

The [FluentAsyncIterable](index.FluentAsyncIterable.md) prepended with the element.
