[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / AsyncToSetFunction

# Interface: AsyncToSetFunction<T\>

[types/function-types](../modules/types_function_types.md).AsyncToSetFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### AsyncToSetFunction

▸ **AsyncToSetFunction**(): `Promise`<`Set`<`T`\>\>

Create a Set from the iterable. This is a resolving operation

#### Returns

`Promise`<`Set`<`T`\>\>

### AsyncToSetFunction

▸ **AsyncToSetFunction**<`V`\>(`mapper`): `Promise`<`Set`<`V`\>\>

Create a Set from the iterable. This is a resolving operation

#### Type parameters

| Name |
| :------ |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`AsyncMapper`](index.AsyncMapper.md)<`T`, `V`\> |

#### Returns

`Promise`<`Set`<`V`\>\>

### AsyncToSetFunction

▸ **AsyncToSetFunction**<`K`\>(`mapper`): `Promise`<`Set`<`T`[`K`]\>\>

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

`Promise`<`Set`<`T`[`K`]\>\>
