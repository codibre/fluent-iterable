[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / AsyncAppendFunction

# Interface: AsyncAppendFunction<T\>

[types/function-types](../modules/types_function_types.md).AsyncAppendFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### AsyncAppendFunction

▸ **AsyncAppendFunction**(...`items`): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

Appends a value to the end of the iterable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `T`[] | The item to be appended to the iterable. |

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

The [FluentAsyncIterable](index.FluentAsyncIterable.md) appended with the element.
