[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / AsyncDistinctByFunction

# Interface: AsyncDistinctByFunction()\<T\>

## Type Parameters

• **T**

> **AsyncDistinctByFunction**\<`R`\>(...`mappers`): [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`T`\>

Returns distinct elements from the iterable from a certain list of projections<br>
  Examples:<br>
    * `fluent([{ a: 1, b: 2, c: 1}, { a: 1, b: 2, c: 2}]).distinct()` yields *{ a: 1, b: 2, c: 1 }*<br>

## Type Parameters

• **R**

## Parameters

• ...**mappers**: (keyof `T` \| [`AsyncMapper`](../../../index/interfaces/AsyncMapper.md)\<`T`, `R`\>)[]

The projections to use to determine element equality.

## Returns

[`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`T`\>

The [[FluentIterable]] of the distinct elements.

## Typeparam

R The type of the data the element equality is based on.
