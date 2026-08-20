[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / ReduceAndMapFunction

# Interface: ReduceAndMapFunction()\<T\>

## Type Parameters

• **T**

> **ReduceAndMapFunction**\<`A`, `R`\>(`reducer`, `initial`, `result`): `R`

Aggregates the iterable by applying an accumulator function over the elements of the iterable. The specified seed value is used as the initial accumulator value, and the specified map function is used to project the result value from the accumulator value. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Example:<br>
    ```
    fluent(['anchor', 'almond', 'bound', 'alpine']).reduceAndMap(
      (current, next) => (next.length < current.minValue ? { min: next, minValue: next.length } : current),
      {
        min: undefined as (string | undefined),
        minValue: Number.MAX_VALUE
      },
      acc => acc.min
    )
    ``` returns *bound*, the shortest word in the iterable.

## Type Parameters

• **A**

• **R**

## Parameters

• **reducer**: [`Reducer`](../../../index/interfaces/Reducer.md)\<`T`, `A`\>

The accumulator function, provides the next accumulator value out of the last accumulator value and the next element in the iterable.

• **initial**: `A`

The initial (aka *seed*) value of the accumulator.

• **result**: [`Mapper`](../../../index/interfaces/Mapper.md)\<`A`, `R`\>

The mapping function, projects the accumulator value of type `A` to the result value of type `R`.

## Returns

`R`

The aggregated value.

## Typeparam

A The type of the accumulator value.

## Typeparam

R The type of the aggregation result.

> **ReduceAndMapFunction**\<`A`, `R`\>(`reducer`, `initial`, `result`): `A`\[`R`\]

Aggregates the iterable by applying an accumulator function over the elements of the iterable. The specified seed value is used as the initial accumulator value, and the specified map function is used to project the result value from the accumulator value. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Example:<br>
    ```
    fluent(['anchor', 'almond', 'bound', 'alpine']).reduceAndMap(
      (current, next) => (next.length < current.minValue ? { min: next, minValue: next.length } : current),
      {
        min: undefined as (string | undefined),
        minValue: Number.MAX_VALUE
      },
      acc => acc.min
    )
    ``` returns *bound*, the shortest word in the iterable.

## Type Parameters

• **A**

• **R** *extends* `string` \| `number` \| `symbol`

## Parameters

• **reducer**: [`Reducer`](../../../index/interfaces/Reducer.md)\<`T`, `A`\>

The accumulator function, provides the next accumulator value out of the last accumulator value and the next element in the iterable.

• **initial**: `A`

The initial (aka *seed*) value of the accumulator.

• **result**: `R`

The mapping function, projects the accumulator value of type `A` to the result value of type `R`.

## Returns

`A`\[`R`\]

The aggregated value.

## Typeparam

A The type of the accumulator value.

## Typeparam

R The type of the aggregation result.
