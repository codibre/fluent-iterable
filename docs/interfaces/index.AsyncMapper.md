[fluent-iterable - v1.22.0](../README.md) / [index](../modules/index.md) / AsyncMapper

# Interface: AsyncMapper<T, R\>

[index](../modules/index.md).AsyncMapper

## Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The source type. |
| `R` | The destination type. |

## Callable

### AsyncMapper

▸ **AsyncMapper**(`item`): `R` \| `Promise`<`R`\>

Asynchronously maps an item of type `T` into an instance of type `R`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `T` | The item to map. |

#### Returns

`R` \| `Promise`<`R`\>

A promise of the map of `item`.
