[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / DistinctFunction

# Interface: DistinctFunction<T\>

[types/function-types](../modules/types_function_types.md).DistinctFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### DistinctFunction

▸ **DistinctFunction**<`R`\>(`mapper`, `maxOcurrences?`): [`FluentIterable`](index.FluentIterable.md)<`T`\>

Returns distinct elements from the iterable from a certain projections perspective.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'anchor', 'alpine']).distinct()` yields *anchor*, *almond* and *alpine*<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).distinct(word => word[0])` yields *anchor* and *bound*

#### Type parameters

| Name | Description |
| :------ | :------ |
| `R` | The type of the data the element equality is based on. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapper` | [`Mapper`](index.Mapper.md)<`T`, `R`\> | The projection to use to determine element equality. Identity mapping is used if omitted. |
| `maxOcurrences?` | `number` | The number of accepted occurrences for each item. Default: 1 |

#### Returns

[`FluentIterable`](index.FluentIterable.md)<`T`\>

The [FluentIterable](index.FluentIterable.md) of the distinct elements.

### DistinctFunction

▸ **DistinctFunction**<`R`\>(`mapper`, `choose`): [`FluentIterable`](index.FluentIterable.md)<`T`\>

Returns distinct elements from the iterable from a certain projections perspective.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'anchor', 'alpine']).distinct()` yields *anchor*, *almond* and *alpine*<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).distinct(word => word[0])` yields *anchor* and *bound*

#### Type parameters

| Name | Description |
| :------ | :------ |
| `R` | The type of the data the element equality is based on. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapper` | [`Mapper`](index.Mapper.md)<`T`, `R`\> | The projection to use to determine element equality. Identity mapping is used if omitted. |
| `choose` | [`Choose`](../modules/types.md#choose)<`T`\> | receives two T elements and return the one that must be chosen |

#### Returns

[`FluentIterable`](index.FluentIterable.md)<`T`\>

The [FluentIterable](index.FluentIterable.md) of the distinct elements.

### DistinctFunction

▸ **DistinctFunction**(`maxOcurrences?`): [`FluentIterable`](index.FluentIterable.md)<`T`\>

Returns distinct elements from the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'anchor', 'alpine']).distinct()` yields *anchor*, *almond* and *alpine*<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).distinct(word => word[0])` yields *anchor* and *bound*

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxOcurrences?` | `number` |

#### Returns

[`FluentIterable`](index.FluentIterable.md)<`T`\>

The [FluentIterable](index.FluentIterable.md) of the distinct elements.

### DistinctFunction

▸ **DistinctFunction**<`R`\>(`mapper`, `maxOcurrences?`): [`FluentIterable`](index.FluentIterable.md)<`T`\>

Returns distinct elements from the iterable from a certain projections perspective.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'anchor', 'alpine']).distinct()` yields *anchor*, *almond* and *alpine*<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).distinct(word => word[0])` yields *anchor* and *bound*

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | extends `string` \| `number` \| `symbol` | The type of the data the element equality is based on. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapper` | `R` | The projection to use to determine element equality. Identity mapping is used if omitted. |
| `maxOcurrences?` | `number` | The number of accepted occurrences for each item. Default: 1 |

#### Returns

[`FluentIterable`](index.FluentIterable.md)<`T`\>

The [FluentIterable](index.FluentIterable.md) of the distinct elements.

### DistinctFunction

▸ **DistinctFunction**<`R`\>(`mapper`, `choose`): [`FluentIterable`](index.FluentIterable.md)<`T`\>

Returns distinct elements from the iterable from a certain projections perspective.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'anchor', 'alpine']).distinct()` yields *anchor*, *almond* and *alpine*<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).distinct(word => word[0])` yields *anchor* and *bound*

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | extends `string` \| `number` \| `symbol` | The type of the data the element equality is based on. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapper` | `R` | The projection to use to determine element equality. Identity mapping is used if omitted. |
| `choose` | [`Choose`](../modules/types.md#choose)<`T`\> | receives two T elements and return the one that must be chosen |

#### Returns

[`FluentIterable`](index.FluentIterable.md)<`T`\>

The [FluentIterable](index.FluentIterable.md) of the distinct elements.
