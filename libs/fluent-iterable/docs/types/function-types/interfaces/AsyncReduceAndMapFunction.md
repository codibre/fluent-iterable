[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / AsyncReduceAndMapFunction

# Interface: AsyncReduceAndMapFunction()\<T\>

## Type Parameters

• **T**

> **AsyncReduceAndMapFunction**\<`A`, `R`\>(`reducer`, `initial`, `result`): `Promise`\<`R`\>

Aggregates the iterable by applying an asynchronous accumulator function over the elements of the iterable. The specified seed value is used as the initial accumulator value, and the specified asynchronous map function is used to project the result value from the accumulator value. This is a resolving operation, will cause a full loop through all the elements of the iterable.

## Type Parameters

• **A**

• **R**

## Parameters

• **reducer**: [`AsyncReducer`](../../../index/interfaces/AsyncReducer.md)\<`T`, `A`\>

The asynchronous accumulator function, provides the next accumulator value out of the last accumulator value and the next element in the iterable.

• **initial**: `A`

The initial (aka *seed*) value of the accumulator.

• **result**: [`AsyncMapper`](../../../index/interfaces/AsyncMapper.md)\<`A`, `R`\>

The asynchronous mapping function, projects the accumulator value of type `A` to the result value of type `R`.

## Returns

`Promise`\<`R`\>

A promise of the aggregated value.

## Typeparam

A The type of the accumulator value.

## Typeparam

R The type of the aggregation result.

> **AsyncReduceAndMapFunction**\<`A`, `R`\>(`reducer`, `initial`, `result`): `Promise`\<`A`\[`R`\]\>

Aggregates the iterable by applying an asynchronous accumulator function over the elements of the iterable. The specified seed value is used as the initial accumulator value, and the specified asynchronous map function is used to project the result value from the accumulator value. This is a resolving operation, will cause a full loop through all the elements of the iterable.

## Type Parameters

• **A**

• **R** *extends* `string` \| `number` \| `symbol`

## Parameters

• **reducer**: [`AsyncReducer`](../../../index/interfaces/AsyncReducer.md)\<`T`, `A`\>

The asynchronous accumulator function, provides the next accumulator value out of the last accumulator value and the next element in the iterable.

• **initial**: `A`

The initial (aka *seed*) value of the accumulator.

• **result**: `R`

The asynchronous mapping function, projects the accumulator value of type `A` to the result value of type `R`.

## Returns

`Promise`\<`A`\[`R`\]\>

A promise of the aggregated value.

## Typeparam

A The type of the accumulator value.

## Typeparam

R The type of the aggregation result.
