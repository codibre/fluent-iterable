[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / AsyncExecuteFunction

# Interface: AsyncExecuteFunction<T\>

[types/function-types](../modules/types_function_types.md).AsyncExecuteFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### AsyncExecuteFunction

▸ **AsyncExecuteFunction**(`action`): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

Translate an iterable into one which executes an asynchronous action against each element before yield them.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `action` | [`AsyncAction`](index.AsyncAction.md)<`T`\> | The asynchronous action to execute against each element. |

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

The [FluentAsyncIterable](index.FluentAsyncIterable.md) with the action injected to it.
