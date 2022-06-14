[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / MapFunction

# Interface: MapFunction<T\>

[types/function-types](../modules/types_function_types.md).MapFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### MapFunction

▸ **MapFunction**<`R`\>(`mapper`): [`FluentIterable`](index.FluentIterable.md)<`R`\>

Transforms the iterable of `T` into an iterable of `R` by mapping all elements to an element of `R`.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).map(word => word.toUpperCase())` yields *ANCHOR*, *ALMOND*, *BOUND* and *ALPINE*.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `R` | The destination type of the mapping. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapper` | [`Mapper`](index.Mapper.md)<`T`, `R`\> | The operation which maps an instance of `T` into an instance of `R`. |

#### Returns

[`FluentIterable`](index.FluentIterable.md)<`R`\>

A [FluentIterable](index.FluentIterable.md) of the mapped elements.

### MapFunction

▸ **MapFunction**<`R`\>(`mapper`): [`FluentIterable`](index.FluentIterable.md)<`T`[`R`]\>

Transforms the iterable of `T` into an iterable of `R` by mapping all elements to an element of `R`.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).map(word => word.toUpperCase())` yields *ANCHOR*, *ALMOND*, *BOUND* and *ALPINE*.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | extends `string` \| `number` \| `symbol` | The destination type of the mapping. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapper` | `R` | The operation which maps an instance of `T` into an instance of `R`. |

#### Returns

[`FluentIterable`](index.FluentIterable.md)<`T`[`R`]\>

A [FluentIterable](index.FluentIterable.md) of the mapped elements.
