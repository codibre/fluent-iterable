[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / AsyncRepeatFunction

# Interface: AsyncRepeatFunction<T\>

[types/function-types](../modules/types_function_types.md).AsyncRepeatFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### AsyncRepeatFunction

▸ **AsyncRepeatFunction**(`n`): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

Repeats the elements of the iterable a specified amount of times.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | `number` | The amount of times the iterable is to be repeated. |

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

The [FluentAsyncIterable](index.FluentAsyncIterable.md) of the repeated iterable.
