[fluent-iterable - v1.19.0](../README.md) / AsyncReducer

# Interface: AsyncReducer<T, A\>

## Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The source type. |
| `A` | The accumulator type. |

## Callable

### AsyncReducer

▸ **AsyncReducer**(`current`, `next`): `A` \| `Promise`<`A`\>

Asynchronously generates the next accumulator item based on the previous one and the next item under reduce.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `current` | `A` | The previous accumulator value. |
| `next` | `T` | The next item. |

#### Returns

`A` \| `Promise`<`A`\>

A promise of the new accumulator value.
