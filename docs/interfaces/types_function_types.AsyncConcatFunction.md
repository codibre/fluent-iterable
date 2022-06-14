[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / AsyncConcatFunction

# Interface: AsyncConcatFunction<T\>

[types/function-types](../modules/types_function_types.md).AsyncConcatFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### AsyncConcatFunction

▸ **AsyncConcatFunction**(...`iterables`): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

Concatenates specified async iterables to the iterable.<br>
  Example: `fluent(['anchor', 'almond']).concat(['bound', 'alpine'], someStream)` yields *anchor*, *almond*, *bound*, *alpine* and the elements of the stream.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...iterables` | `AnyIterable`<`T`\>[] | The async iterables to concatenate. |

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

The [FluentAsyncIterable](index.FluentAsyncIterable.md) of the concatenated async iterables.
