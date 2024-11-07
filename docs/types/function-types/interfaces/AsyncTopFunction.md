[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / AsyncTopFunction

# Interface: AsyncTopFunction()\<T\>

## Type Parameters

• **T**

> **AsyncTopFunction**\<`R`\>(`mapper`, `comparer`): `Promise`\<`undefined` \| `T`\>

Calculates the top element of the iterable using an asynchronous projection and a comparer. This is a resolving operation, will cause a full loop through all the elements of the iterable.

## Type Parameters

• **R**

## Parameters

• **mapper**: [`AsyncMapper`](../../../index/interfaces/AsyncMapper.md)\<`T`, `R`\>

The asynchronous function which projects the elements of the iterable into comparable.

• **comparer**: [`Comparer`](../../../index/interfaces/Comparer.md)\<`R`\>

The comparison function.

## Returns

`Promise`\<`undefined` \| `T`\>

A promise of the top of the iterable's projected elements.

## Typeparam

R The type of the projected elements used for comparison.

> **AsyncTopFunction**\<`R`\>(`mapper`, `comparer`): `Promise`\<`undefined` \| `T`\>

Calculates the top element of the iterable using an asynchronous projection and a comparer. This is a resolving operation, will cause a full loop through all the elements of the iterable.

## Type Parameters

• **R** *extends* `string` \| `number` \| `symbol`

## Parameters

• **mapper**: `T`

The asynchronous function which projects the elements of the iterable into comparable.

• **comparer**: [`Comparer`](../../../index/interfaces/Comparer.md)\<`T`\[`R`\]\>

The comparison function.

## Returns

`Promise`\<`undefined` \| `T`\>

A promise of the top of the iterable's projected elements.

## Typeparam

R The type of the projected elements used for comparison.
