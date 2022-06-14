[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / AsyncReduceFunction

# Interface: AsyncReduceFunction<T\>

[types/function-types](../modules/types_function_types.md).AsyncReduceFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### AsyncReduceFunction

▸ **AsyncReduceFunction**<`R`\>(`reducer`, `initial`): `Promise`<`R`\>

Aggregates the iterable by applying an asynchronous accumulator function over the elements of the iterable. The specified seed value is used as the initial accumulator value. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `R` | The type of the accumulator value. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reducer` | [`AsyncReducer`](index.AsyncReducer.md)<`T`, `R`\> | The asynchronous accumulator function, provides the next accumulator value out of the last accumulator value and the next element in the iterable. |
| `initial` | `R` | The initial (aka *seed*) value of the accumulator. |

#### Returns

`Promise`<`R`\>

A promise of the aggregated value.
