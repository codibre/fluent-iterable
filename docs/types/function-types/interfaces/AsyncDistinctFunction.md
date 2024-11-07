[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / AsyncDistinctFunction

# Interface: AsyncDistinctFunction()\<T\>

## Type Parameters

• **T**

> **AsyncDistinctFunction**\<`R`\>(`mapper`?, `maxOcurrences`?): [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`T`\>

Returns distinct elements from the iterable from a certain asynchronous projections perspective.

## Type Parameters

• **R**

## Parameters

• **mapper?**: [`AsyncMapper`](../../../index/interfaces/AsyncMapper.md)\<`T`, `R`\>

The asynchronous projection to use to determine element equality. Identity mapping is used if omitted.

• **maxOcurrences?**: `number`

The number of accepted occurrences for each item. Default: 1

## Returns

[`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`T`\>

The [[FluentAsyncIterable]] of the distinct elements.

## Typeparam

R The type of the data the element equality is based on.

> **AsyncDistinctFunction**\<`R`\>(`mapper`, `choose`): [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`T`\>

Returns distinct elements from the iterable from a certain asynchronous projections perspective.

## Type Parameters

• **R**

## Parameters

• **mapper**: [`AsyncMapper`](../../../index/interfaces/AsyncMapper.md)\<`T`, `R`\>

The asynchronous projection to use to determine element equality. Identity mapping is used if omitted.

• **choose**: [`Choose`](../../type-aliases/Choose.md)\<`T`\>

receives two T elements and return the one that must be chosen

## Returns

[`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`T`\>

The [[FluentAsyncIterable]] of the distinct elements.

## Typeparam

R The type of the data the element equality is based on.

> **AsyncDistinctFunction**\<`R`\>(`mapper`, `maxOcurrences`?): [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`T`\>

Returns distinct elements from the iterable from a certain asynchronous projections perspective.

## Type Parameters

• **R** *extends* `string` \| `number` \| `symbol`

## Parameters

• **mapper**: `R`

The asynchronous projection to use to determine element equality. Identity mapping is used if omitted.

• **maxOcurrences?**: `number`

The number of accepted occurrences for each item. Default: 1

## Returns

[`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`T`\>

The [[FluentAsyncIterable]] of the distinct elements.

## Typeparam

R The type of the data the element equality is based on.

> **AsyncDistinctFunction**\<`R`\>(`mapper`, `choose`): [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`T`\>

Returns distinct elements from the iterable from a certain asynchronous projections perspective.

## Type Parameters

• **R** *extends* `string` \| `number` \| `symbol`

## Parameters

• **mapper**: `R`

The asynchronous projection to use to determine element equality. Identity mapping is used if omitted.

• **choose**: [`Choose`](../../type-aliases/Choose.md)\<`T`\>

receives two T elements and return the one that must be chosen

## Returns

[`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`T`\>

The [[FluentAsyncIterable]] of the distinct elements.

## Typeparam

R The type of the data the element equality is based on.
