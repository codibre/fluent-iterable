[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / AsyncSumFunction

# Interface: AsyncSumFunction()\<T\>

## Type Parameters

• **T**

> **AsyncSumFunction**(`mapper`?): `Promise`\<`number`\>

Calculates the sum of the elements of the iterable asynchronously projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.

## Parameters

• **mapper?**: [`AsyncMapper`](../../../index/interfaces/AsyncMapper.md)\<`T`, `number`\>

The asynchronous function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted.

## Returns

`Promise`\<`number`\>

A promise of the sum of the projected elements of the iterable.

> **AsyncSumFunction**(`mapper`): `Promise`\<`number`\>

Calculates the sum of the elements of the iterable asynchronously projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.

## Parameters

• **mapper**: keyof `T`

The asynchronous function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted.

## Returns

`Promise`\<`number`\>

A promise of the sum of the projected elements of the iterable.
