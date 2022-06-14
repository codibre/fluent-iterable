[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / AsyncTakeWhileFunction

# Interface: AsyncTakeWhileFunction<T\>

[types/function-types](../modules/types_function_types.md).AsyncTakeWhileFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### AsyncTakeWhileFunction

▸ **AsyncTakeWhileFunction**(`condition`): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

Returns elements from the iterable as long as a specified asynchronous condition is met.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `condition` | `AsyncPredicate`<`T`\> | An asynchronous predicate of `T`. All elements are yielded from the iterable until this evaluates to `false` for the first time. |

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

A [FluentAsyncIterable](index.FluentAsyncIterable.md) of the elements until the condition is met.

### AsyncTakeWhileFunction

▸ **AsyncTakeWhileFunction**(`condition`): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

Returns elements from the iterable as long as a specified asynchronous condition is met.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `condition` | keyof `T` | An asynchronous predicate of `T`. All elements are yielded from the iterable until this evaluates to `false` for the first time. |

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

A [FluentAsyncIterable](index.FluentAsyncIterable.md) of the elements until the condition is met.
