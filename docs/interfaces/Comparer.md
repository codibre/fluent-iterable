[fluent-iterable - v1.19.0](../README.md) / Comparer

# Interface: Comparer<T\>

## Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the compared instances. |

## Callable

### Comparer

▸ **Comparer**(`a`, `b`): `number`

Compares `a` and `b`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `T` | The first instance (the left hand side of the comparison). |
| `b` | `T` | The second instance (the right hand side of the comparison). |

#### Returns

`number`

A number which represents the result of the comparison. If **negative**, `a` precedes `b`, if **positive**, `b` precedes `a`, if **zero**, `a` equals to `b` in the comparison.
