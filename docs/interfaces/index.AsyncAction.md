[fluent-iterable - v1.22.0](../README.md) / [index](../modules/index.md) / AsyncAction

# Interface: AsyncAction<T\>

[index](../modules/index.md).AsyncAction

## Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the item the action is defined on. |

## Callable

### AsyncAction

▸ **AsyncAction**(`item`): `unknown`

Specifies the asynchronous action to perform on `item`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `T` | The item the action is performed against. |

#### Returns

`unknown`

The promise of any action.
