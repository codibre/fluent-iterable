[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / WithIndexFunction

# Interface: WithIndexFunction<T\>

[types/function-types](../modules/types_function_types.md).WithIndexFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### WithIndexFunction

▸ **WithIndexFunction**(): [`FluentIterable`](index.FluentIterable.md)<[`Indexed`](types.Indexed.md)<`T`\>\>

Maps all elements of the iterable to an instance of [Indexed](types.Indexed.md), an index-value pair constructed of the original element in the iterable and it's index (starting from 0 for the first element in the iterable).

#### Returns

[`FluentIterable`](index.FluentIterable.md)<[`Indexed`](types.Indexed.md)<`T`\>\>

A [FluentAsyncIterable](index.FluentAsyncIterable.md) of [Indexed](types.Indexed.md).
