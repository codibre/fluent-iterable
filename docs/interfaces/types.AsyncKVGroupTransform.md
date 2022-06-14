[fluent-iterable - v1.22.0](../README.md) / [types](../modules/types.md) / AsyncKVGroupTransform

# Interface: AsyncKVGroupTransform<K, V, NewV\>

[types](../modules/types.md).AsyncKVGroupTransform

## Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `K` |
| `V` | `V` |
| `NewV` | `V` |

## Callable

### AsyncKVGroupTransform

▸ **AsyncKVGroupTransform**(`key`, `value`, `previous`): `undefined` \| `AnyIterable`<`NewV`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `V` |
| `previous` | `NewV`[] |

#### Returns

`undefined` \| `AnyIterable`<`NewV`\>
