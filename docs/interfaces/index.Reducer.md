[fluent-iterable - v1.22.0](../README.md) / [index](../modules/index.md) / Reducer

# Interface: Reducer<T, A\>

[index](../modules/index.md).Reducer

## Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The source type. |
| `A` | The accumulator type. |

## Callable

### Reducer

▸ **Reducer**(`current`, `next`): `A`

Generates the next accumulator item based on the previous one and the next item under reduce.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `current` | `A` | The previous accumulator value. |
| `next` | `T` | The next item. |

#### Returns

`A`

The new accumulator value.
