[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / AsyncGroupFunction

# Interface: AsyncGroupFunction()\<T\>

## Type Parameters

• **T**

> **AsyncGroupFunction**\<`R`, `V`\>(`mapper`, `transformValue`?): [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<[`FluentGroup`](../../../index/interfaces/FluentGroup.md)\<`V`, `R`\>\>

Groups the elements of the iterable keyed by equality of data at the specified asynchronous projection.

## Type Parameters

• **R**

• **V** = `T`

## Parameters

• **mapper**: [`AsyncMapper`](../../../index/interfaces/AsyncMapper.md)\<`T`, `R`\>

Asynchronously projects the elements of the iterable into the group key they belong to.

• **transformValue?**: [`AsyncKVGroupTransform`](../../interfaces/AsyncKVGroupTransform.md)\<`R`, `T`, `V`\>

Optional. Allows a transformation before adding the value to the group. The return must be an iterable or AsyncIterable

## Returns

[`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<[`FluentGroup`](../../../index/interfaces/FluentGroup.md)\<`V`, `R`\>\>

The [[FluentAsyncIterable]] of the distinct groups.

## Typeparam

R The type of the groups key.

> **AsyncGroupFunction**\<`R`, `V`\>(`mapper`, `transformValue`?): [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<[`FluentGroup`](../../../index/interfaces/FluentGroup.md)\<`V`, `T`\[`R`\]\>\>

Groups the elements of the iterable keyed by equality of data at the specified asynchronous projection.

## Type Parameters

• **R** *extends* `string` \| `number` \| `symbol`

• **V** = `T`

## Parameters

• **mapper**: `R`

A property name with value will be used as for comparison with the grouping key

• **transformValue?**: [`AsyncKVGroupTransform`](../../interfaces/AsyncKVGroupTransform.md)\<`T`\[`R`\], `T`, `V`\>

Optional. Allows a transformation before adding the value to the group. The return must be an iterable or AsyncIterable

## Returns

[`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<[`FluentGroup`](../../../index/interfaces/FluentGroup.md)\<`V`, `T`\[`R`\]\>\>

The [[FluentAsyncIterable]] of the distinct groups.

## Typeparam

R The type of the groups key.
