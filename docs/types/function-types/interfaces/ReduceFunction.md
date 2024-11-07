[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / ReduceFunction

# Interface: ReduceFunction()\<T\>

## Type Parameters

• **T**

> **ReduceFunction**\<`R`\>(`reducer`, `initial`): `R`

Aggregates the iterable by applying an accumulator function over the elements of the iterable. The specified seed value is used as the initial accumulator value. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Example:<br>
    ```
    fluent(['anchor', 'almond', 'bound', 'alpine']).reduce(
      (current, next) => (next[0] === 'a' ? current + 1 : current),
      0
    )
    ``` returns *3*, the number of words start with 'a' in the iterable.

## Type Parameters

• **R**

## Parameters

• **reducer**: [`Reducer`](../../../index/interfaces/Reducer.md)\<`T`, `R`\>

The accumulator function, provides the next accumulator value out of the last accumulator value and the next element in the iterable.

• **initial**: `R`

The initial (aka *seed*) value of the accumulator.

## Returns

`R`

The aggregated value.

## Typeparam

R The type of the accumulator value.

> **ReduceFunction**\<`R`\>(`reducer`): `T` \| `R`

Aggregates the iterable by applying an accumulator function over the elements of the iterable. The specified seed value is used as the initial accumulator value. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Example:<br>
    ```
    fluent(['anchor', 'almond', 'bound', 'alpine']).reduce(
      (current, next) => (next[0] === 'a' ? current + 1 : current),
      0
    )
    ``` returns *3*, the number of words start with 'a' in the iterable.

## Type Parameters

• **R** = `T`

## Parameters

• **reducer**

The accumulator function, provides the next accumulator value out of the last accumulator value and the next element in the iterable.

## Returns

`T` \| `R`

The aggregated value.

## Typeparam

R The type of the accumulator value.
