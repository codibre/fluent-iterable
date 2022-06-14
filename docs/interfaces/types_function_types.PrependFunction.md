[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / PrependFunction

# Interface: PrependFunction<T\>

[types/function-types](../modules/types_function_types.md).PrependFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### PrependFunction

▸ **PrependFunction**(...`items`): [`FluentIterable`](index.FluentIterable.md)<`T`\>

Adds a value to the beginning of the iterable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `T`[] | The items to be prepended to the iterable. |

#### Returns

[`FluentIterable`](index.FluentIterable.md)<`T`\>

The [FluentAsyncIterable](index.FluentAsyncIterable.md) prepended with the element.
