[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / IsDistinctFunction

# Interface: IsDistinctFunction<T\>

[types/function-types](../modules/types_function_types.md).IsDistinctFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### IsDistinctFunction

▸ **IsDistinctFunction**<`R`\>(`mapper?`, `maxOcurrences?`): `boolean`

Checks if the given projection have only distinct elements. This is a partial resolving operation,
and will return the result after as soon as an item got more occurrences than the specified

  Examples:

    * `fluent(['anchor', 'almond', 'anchor', 'alpine']).isDistinct()` returns true
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinct(word => word[0])` returns false
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinct(word => word[0], 2)` returns true

#### Type parameters

| Name | Description |
| :------ | :------ |
| `R` | The type of the data the element equality is based on. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapper?` | [`Mapper`](index.Mapper.md)<`T`, `R`\> | The projection to use to determine element equality. Identity mapping is used if omitted. |
| `maxOcurrences?` | `number` | The number of accepted occurrences for each item. Default: 1 |

#### Returns

`boolean`

### IsDistinctFunction

▸ **IsDistinctFunction**(`maxOcurrences?`): `boolean`

Checks if the given iterable have only distinct elements. This is a partial resolving operation,
and will return the result after as soon as an item got more occurrences than the specified

  Examples:

    * `fluent(['anchor', 'almond', 'anchor', 'alpine']).isDistinct()` returns true
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinct(word => word[0])` returns false
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinct(word => word[0], 2)` returns true

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `maxOcurrences?` | `number` | The number of accepted occurrences for each item. Default: 1 |

#### Returns

`boolean`

### IsDistinctFunction

▸ **IsDistinctFunction**<`R`\>(`mapper?`, `maxOcurrences?`): `boolean`

Checks if the given projection have only distinct elements. This is a partial resolving operation,
and will return the result after as soon as an item got more occurrences than the specified

  Examples:

    * `fluent(['anchor', 'almond', 'anchor', 'alpine']).isDistinct()` returns true
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinct(word => word[0])` returns false
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinct(word => word[0], 2)` returns true

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | extends `string` \| `number` \| `symbol` | The type of the data the element equality is based on. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapper?` | `R` | The projection to use to determine element equality. Identity mapping is used if omitted. |
| `maxOcurrences?` | `number` | The number of accepted occurrences for each item. Default: 1 |

#### Returns

`boolean`
