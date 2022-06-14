[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / AsyncSkipWhileFunction

# Interface: AsyncSkipWhileFunction<T\>

[types/function-types](../modules/types_function_types.md).AsyncSkipWhileFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### AsyncSkipWhileFunction

▸ **AsyncSkipWhileFunction**(`condition`): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

Bypasses elements in the iterable as long as a specified asynchronous condition is true and then returns the remaining elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `condition` | `AsyncPredicate`<`T`\> | An asynchronous predicate of `T`. All elements are skipped from the iterable until this evaluates to `false` for the first time. |

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

A [FluentAsyncIterable](index.FluentAsyncIterable.md) of the elements after the condition is not met.

### AsyncSkipWhileFunction

▸ **AsyncSkipWhileFunction**<`R`\>(`condition`): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

Bypasses elements in the iterable as long as a specified asynchronous condition is true and then returns the remaining elements.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `condition` | `R` | An asynchronous predicate of `T`. All elements are skipped from the iterable until this evaluates to `false` for the first time. |

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

A [FluentAsyncIterable](index.FluentAsyncIterable.md) of the elements after the condition is not met.
