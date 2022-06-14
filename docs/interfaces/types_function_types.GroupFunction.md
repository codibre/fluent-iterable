[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / GroupFunction

# Interface: GroupFunction<T\>

[types/function-types](../modules/types_function_types.md).GroupFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### GroupFunction

▸ **GroupFunction**<`R`, `V`\>(`mapper`, `transformValue?`): [`FluentIterable`](index.FluentIterable.md)<[`FluentGroup`](index.FluentGroup.md)<`V`, `R`\>\>

Groups the elements of the iterable keyed by equality of data at the specified projection.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).group(word => word[0])` yields { key: 'a', values: ['anchor', 'almond', 'alpine'] } and { key: 'b', values: ['bound'] }.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | `R` | The type of the groups' key. |
| `V` | `T` | - |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapper` | [`Mapper`](index.Mapper.md)<`T`, `R`\> | Projects the elements of the iterable into the group key they belong to. |
| `transformValue?` | [`KVGroupTransform`](types.KVGroupTransform.md)<`R`, `T`, `V`\> | Optional. Allows a transformation before adding the value to the group. The return must be an iterable |

#### Returns

[`FluentIterable`](index.FluentIterable.md)<[`FluentGroup`](index.FluentGroup.md)<`V`, `R`\>\>

The [FluentIterable](index.FluentIterable.md) of the distinct groups.

### GroupFunction

▸ **GroupFunction**<`R`, `V`\>(`mapper`, `transformValue?`): [`FluentIterable`](index.FluentIterable.md)<[`FluentGroup`](index.FluentGroup.md)<`V`, `T`[`R`]\>\>

Groups the elements of the iterable keyed by equality of data at the specified projection.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).group(word => word[0])` yields { key: 'a', values: ['anchor', 'almond', 'alpine'] } and { key: 'b', values: ['bound'] }.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | extends `string` \| `number` \| `symbol` | The type of the groups' key. |
| `V` | `T` | - |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapper` | `R` | Projects the elements of the iterable into the group key they belong to. |
| `transformValue?` | [`KVGroupTransform`](types.KVGroupTransform.md)<`T`[`R`], `T`, `V`\> | Optional. Allows a transformation before adding the value to the group. The return must be an iterable |

#### Returns

[`FluentIterable`](index.FluentIterable.md)<[`FluentGroup`](index.FluentGroup.md)<`V`, `T`[`R`]\>\>

The [FluentIterable](index.FluentIterable.md) of the distinct groups.
