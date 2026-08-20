[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / WaitAllFunction

# Interface: WaitAllFunction()\<T\>

## Extended by

- [`AsyncWaitAllFunction`](AsyncWaitAllFunction.md)

## Type Parameters

• **T**

> **WaitAllFunction**\<`R`\>(`mapper`): `PromiseLike`\<`R`[]\>

Applies a async transformation for every element in the array and, then, wait for they conclusion with Promise.all. This is a resolving operation.

## Type Parameters

• **R**

## Parameters

• **mapper**: [`AsyncMapper`](../../../index/interfaces/AsyncMapper.md)\<`T`, `R`\>

The asynchronous function which projects the elements of the iterable into promises.

## Returns

`PromiseLike`\<`R`[]\>

a promises that resolves into an array with the result of all mappings.

> **WaitAllFunction**\<`R`\>(`mapper`): `PromiseLike`\<`T`\[`R`\][]\>

Applies a async transformation for every element in the array and, then, wait for they conclusion with Promise.all. This is a resolving operation.

## Type Parameters

• **R** *extends* `string` \| `number` \| `symbol`

## Parameters

• **mapper**: `R`

The asynchronous function which projects the elements of the iterable into promises.

## Returns

`PromiseLike`\<`T`\[`R`\][]\>

a promises that resolves into an array with the result of all mappings.
