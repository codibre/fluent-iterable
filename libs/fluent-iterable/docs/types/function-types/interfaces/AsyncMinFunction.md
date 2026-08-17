[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / AsyncMinFunction

# Interface: AsyncMinFunction()\<T\>

## Type Parameters

• **T**

> **AsyncMinFunction**\<`R`\>(`mapper`?): `Promise`\<`undefined` \| `T`\>

Finds the numeric minimum element of the iterable using an asynchronous projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.

## Type Parameters

• **R** = `T`

## Parameters

• **mapper?**: [`AsyncMapper`](../../../index/interfaces/AsyncMapper.md)\<`T`, `R`\>

The asynchronous function which projects the elements of the iterable into the comparable value. Falls back to the identity function if omitted.

## Returns

`Promise`\<`undefined` \| `T`\>

A promise of the minimum of the iterable's projected elements.

> **AsyncMinFunction**\<`R`\>(`mapper`): `Promise`\<`undefined` \| `T`\>

Finds the numeric minimum element of the iterable using an asynchronous projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.

## Type Parameters

• **R** *extends* `string` \| `number` \| `symbol`

## Parameters

• **mapper**: `R`

The asynchronous function which projects the elements of the iterable into the comparable value. Falls back to the identity function if omitted.

## Returns

`Promise`\<`undefined` \| `T`\>

A promise of the minimum of the iterable's projected elements.
