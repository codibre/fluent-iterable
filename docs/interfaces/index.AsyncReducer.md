[fluent-iterable - v1.22.0](../README.md) / [index](../modules/index.md) / AsyncReducer

# Interface: AsyncReducer<T, A\>

[index](../modules/index.md).AsyncReducer

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
