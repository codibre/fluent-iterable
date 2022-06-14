[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / MinFunction

# Interface: MinFunction<T\>

[types/function-types](../modules/types_function_types.md).MinFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### MinFunction

▸ **MinFunction**<`R`\>(`mapper?`): `undefined` \| `T`

Finds the numeric minimum element of the iterable using a projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).min(word => word.length)` returns *bound*, the shortest word in the iterable

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapper?` | [`Mapper`](index.Mapper.md)<`T`, `R`\> | The function which projects the elements of the iterable into the comparable value. Falls back to the identity function if omitted. |

#### Returns

`undefined` \| `T`

The minimum of the iterable's projected elements.

### MinFunction

▸ **MinFunction**<`R`\>(`mapper`): `undefined` \| `T`

Finds the numeric minimum element of the iterable using a projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).min(word => word.length)` returns *bound*, the shortest word in the iterable

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapper` | `R` | The function which projects the elements of the iterable into the comparable value. Falls back to the identity function if omitted. |

#### Returns

`undefined` \| `T`

The minimum of the iterable's projected elements.
