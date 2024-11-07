[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / AsyncReduceFunction

# Interface: AsyncReduceFunction()\<T\>

## Type Parameters

• **T**

> **AsyncReduceFunction**\<`R`\>(`reducer`, `initial`): `Promise`\<`R`\>

Aggregates the iterable by applying an asynchronous accumulator function over the elements of the iterable. The specified seed value is used as the initial accumulator value. This is a resolving operation, will cause a full loop through all the elements of the iterable.

## Type Parameters

• **R**

## Parameters

• **reducer**: [`AsyncReducer`](../../../index/interfaces/AsyncReducer.md)\<`T`, `R`\>

The asynchronous accumulator function, provides the next accumulator value out of the last accumulator value and the next element in the iterable.

• **initial**: `R`

The initial (aka *seed*) value of the accumulator.

## Returns

`Promise`\<`R`\>

A promise of the aggregated value.

## Typeparam

R The type of the accumulator value.

> **AsyncReduceFunction**\<`R`\>(`reducer`): `Promise`\<`T` \| `R`\>

Aggregates the iterable by applying an asynchronous accumulator function over the elements of the iterable. The specified seed value is used as the initial accumulator value. This is a resolving operation, will cause a full loop through all the elements of the iterable.

## Type Parameters

• **R** = `T`

## Parameters

• **reducer**

The asynchronous accumulator function, provides the next accumulator value out of the last accumulator value and the next element in the iterable.

## Returns

`Promise`\<`T` \| `R`\>

A promise of the aggregated value.

## Typeparam

R The type of the accumulator value.
