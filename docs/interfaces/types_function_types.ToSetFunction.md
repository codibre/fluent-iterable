[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / ToSetFunction

# Interface: ToSetFunction<T\>

[types/function-types](../modules/types_function_types.md).ToSetFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### ToSetFunction

▸ **ToSetFunction**(): `Set`<`T`\>

Create a Set from the iterable. This is a resolving operation

#### Returns

`Set`<`T`\>

### ToSetFunction

▸ **ToSetFunction**<`V`\>(`mapper`): `Set`<`V`\>

Create a Set from the iterable. This is a resolving operation

#### Type parameters

| Name |
| :------ |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Mapper`](index.Mapper.md)<`T`, `V`\> |

#### Returns

`Set`<`V`\>

### ToSetFunction

▸ **ToSetFunction**<`K`\>(`mapper`): `Set`<`T`[`K`]\>

Create a Set from the iterable. This is a resolving operation

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | `K` |

#### Returns

`Set`<`T`[`K`]\>
