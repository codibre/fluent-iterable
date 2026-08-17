[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / CombineJoinFunctionContract

# Interface: CombineJoinFunctionContract()\<T\>

## Type Parameters

• **T**

> **CombineJoinFunctionContract**(): `FluentIterable`\<`T`[]\>

Combines all the sub iterables, returning a new iterable with the inner matching combinations

## Returns

`FluentIterable`\<`T`[]\>

> **CombineJoinFunctionContract**\<`K`\>(`key`): `FluentIterable`\<`T`[]\>

Combines all the sub iterables, returning a new iterable with the inner matching combinations

## Type Parameters

• **K**

## Parameters

• **key**: [`Mapper`](../../../index/interfaces/Mapper.md)\<`T`, `K`\>

A mapper that returns the key map value from the iterables

## Returns

`FluentIterable`\<`T`[]\>

> **CombineJoinFunctionContract**(`key`): `FluentIterable`\<`T`[]\>

Combines all the sub iterables, returning a new iterable with the inner matching combinations

## Parameters

• **key**: keyof `T`

A property name with value will be used as for comparison with the key of the iterables

## Returns

`FluentIterable`\<`T`[]\>
