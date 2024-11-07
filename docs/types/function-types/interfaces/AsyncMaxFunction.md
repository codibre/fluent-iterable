[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / AsyncMaxFunction

# Interface: AsyncMaxFunction()\<T\>

## Type Parameters

• **T**

> **AsyncMaxFunction**\<`R`\>(`mapper`?): `Promise`\<`undefined` \| `T`\>

Finds the numeric maximum element of the iterable using an asynchronous projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.

## Type Parameters

• **R** = `T`

## Parameters

• **mapper?**: [`AsyncMapper`](../../../index/interfaces/AsyncMapper.md)\<`T`, `R`\>

The function which asynchronously projects the elements of the iterable into the comparable values. Falls back to the identity function if omitted.

## Returns

`Promise`\<`undefined` \| `T`\>

A promise of the maximum of the iterable's projected elements.

> **AsyncMaxFunction**\<`R`\>(`mapper`?): `Promise`\<`undefined` \| `T`\>

Finds the numeric maximum element of the iterable using an asynchronous projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.

## Type Parameters

• **R** *extends* `string` \| `number` \| `symbol`

## Parameters

• **mapper?**: `R`

The function which asynchronously projects the elements of the iterable into the comparable values. Falls back to the identity function if omitted.

## Returns

`Promise`\<`undefined` \| `T`\>

A promise of the maximum of the iterable's projected elements.
