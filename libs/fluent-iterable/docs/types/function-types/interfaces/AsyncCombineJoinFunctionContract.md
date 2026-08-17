[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / AsyncCombineJoinFunctionContract

# Interface: AsyncCombineJoinFunctionContract()\<T\>

## Type Parameters

• **T**

> **AsyncCombineJoinFunctionContract**(): [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`T`[]\>

Combines all the sub iterables, returning a new iterable with the inner matching combinations

## Returns

[`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`T`[]\>

> **AsyncCombineJoinFunctionContract**\<`K`\>(`key`): [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`T`[]\>

Combines all the sub iterables, returning a new iterable with the inner matching combinations

## Type Parameters

• **K**

## Parameters

• **key**: [`Mapper`](../../../index/interfaces/Mapper.md)\<`T`, `K`\>

A mapper that returns the key map value from the iterables

## Returns

[`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`T`[]\>

> **AsyncCombineJoinFunctionContract**(`key`): [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`T`[]\>

Combines all the sub iterables, returning a new iterable with the inner matching combinations

## Parameters

• **key**: keyof `T`

A property name with value will be used as for comparison with the key of the iterables

## Returns

[`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`T`[]\>
