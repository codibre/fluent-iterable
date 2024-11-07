[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / AsyncForEachFunction

# Interface: AsyncForEachFunction()\<T\>

## Type Parameters

• **T**

> **AsyncForEachFunction**(`mapper`): `Promise`\<`void`\>

Iterates through the iterable and executes an asynchronous action against each element. This is a resolving operation, will cause a full loop through all the elements of the iterable.

## Parameters

• **mapper**: [`AsyncAction`](../../../index/interfaces/AsyncAction.md)\<`T`\>

## Returns

`Promise`\<`void`\>

A promise of the executions.
