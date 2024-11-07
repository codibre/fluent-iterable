[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / AsyncFlattenNoParams

# Type Alias: AsyncFlattenNoParams()\<T\>

> **AsyncFlattenNoParams**\<`T`\>: \<`R`\>() => [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`R`\>

## Type Parameters

• **T**

Projects each element of the iterable to an iterable and flattens the resulting iterable into one iterable.<br>
Examples:<br>
  * `fluent([['anchor', 'almond'], ['bound', 'alpine']]).flatten()` yields *anchor*, *almond*, *bound* and *alpine*.<br>

## Type Parameters

• **R** *extends* `unknown`

## Returns

[`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`R`\>

The [[FluentIterable]] of the flattened iterable.

## Typeparam

R The type of the elements in the inner iterable.
