[fluent-iterable - v1.22.0](../README.md) / [types](../modules/types.md) / KVGroupTransform

# Interface: KVGroupTransform<K, V, NewV\>

[types](../modules/types.md).KVGroupTransform

## Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `K` |
| `V` | `V` |
| `NewV` | `V` |

## Callable

### KVGroupTransform

▸ **KVGroupTransform**(`key`, `value`, `previous`): `undefined` \| `Iterable`<`NewV`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `V` |
| `previous` | `NewV`[] |

#### Returns

`undefined` \| `Iterable`<`NewV`\>
