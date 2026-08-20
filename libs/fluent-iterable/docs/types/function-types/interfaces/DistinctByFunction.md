[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / DistinctByFunction

# Interface: DistinctByFunction()\<T\>

## Type Parameters

• **T**

> **DistinctByFunction**\<`R`\>(...`mappers`): `FluentIterable`\<`T`\>

Returns distinct elements from the iterable from a certain list of projections<br>
  Examples:<br>
    * `fluent([{ a: 1, b: 2, c: 1}, { a: 1, b: 2, c: 2}]).distinct()` yields *{ a: 1, b: 2, c: 1 }*<br>

## Type Parameters

• **R**

## Parameters

• ...**mappers**: (keyof `T` \| [`Mapper`](../../../index/interfaces/Mapper.md)\<`T`, `R`\>)[]

The projections to use to determine element equality.

## Returns

`FluentIterable`\<`T`\>

The [[FluentIterable]] of the distinct elements.

## Typeparam

R The type of the data the element equality is based on.
