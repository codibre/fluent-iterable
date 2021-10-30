[fluent-iterable - v1.19.0](../README.md) / AsyncAction

# Interface: AsyncAction<T\>

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
