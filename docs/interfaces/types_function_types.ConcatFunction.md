[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / ConcatFunction

# Interface: ConcatFunction<T\>

[types/function-types](../modules/types_function_types.md).ConcatFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### ConcatFunction

▸ **ConcatFunction**(...`iterables`): [`FluentIterable`](index.FluentIterable.md)<`T`\>

Concatenates specified iterables to the iterable.<br>
  Example: `fluent(['anchor', 'almond']).concat(['bound', 'alpine'], ['book'])` yields *anchor*, *almond*, *bound*, *alpine* and *book*.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...iterables` | `Iterable`<`T`\>[] | The iterables to concatenate. |

#### Returns

[`FluentIterable`](index.FluentIterable.md)<`T`\>

The [FluentIterable](index.FluentIterable.md) of the concatenated iterables.
