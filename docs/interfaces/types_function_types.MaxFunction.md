[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / MaxFunction

# Interface: MaxFunction<T\>

[types/function-types](../modules/types_function_types.md).MaxFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### MaxFunction

▸ **MaxFunction**<`R`\>(`mapper?`): `undefined` \| `T`

Finds the numeric maximum element of the iterable using a projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).max(word => word.charCodeAt(0))` returns *bound*, since it begins with the character 'b' which has a highest character code than character 'a' with which all the other words begins with

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapper?` | [`Mapper`](index.Mapper.md)<`T`, `R`\> | The function which projects the elements of the iterable into comparable values. Falls back to the identity function if omitted. |

#### Returns

`undefined` \| `T`

The maximum of the iterable's projected elements.

### MaxFunction

▸ **MaxFunction**<`R`\>(`mapper?`): `undefined` \| `T`

Finds the numeric maximum element of the iterable using a projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).max(word => word.charCodeAt(0))` returns *bound*, since it begins with the character 'b' which has a highest character code than character 'a' with which all the other words begins with

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapper?` | `R` | The function which projects the elements of the iterable into comparable values. Falls back to the identity function if omitted. |

#### Returns

`undefined` \| `T`

The maximum of the iterable's projected elements.
