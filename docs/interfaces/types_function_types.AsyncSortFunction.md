[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / AsyncSortFunction

# Interface: AsyncSortFunction<T\>

[types/function-types](../modules/types_function_types.md).AsyncSortFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### AsyncSortFunction

▸ **AsyncSortFunction**(`comparer?`): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

Sorts the elements of the iterable based on a specified comparer. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `comparer?` | [`Comparer`](index.Comparer.md)<`T`\> | The comparer operation to use to determine the order of elements. Alphabetical ascending is used for [[string]] elements and numerical ascending is used for [[number]] |

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

The sorted [FluentAsyncIterable](index.FluentAsyncIterable.md).
