[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / AsyncJoinFunction

# Interface: AsyncJoinFunction()\<T\>

## Type Parameters

• **T**

> **AsyncJoinFunction**(`separator`, `mapper`?): `Promise`\<`string`\>

Asynchronously projects and concatenates the elements of the iterable into a `string` using a separator. This is a resolving operation, will cause a full loop through all the elements of the iterable.

## Parameters

• **separator**: `string`

The separator to use in between the elements of the iterable.

• **mapper?**: [`AsyncMapper`](../../../index/interfaces/AsyncMapper.md)\<`T`, `string`\>

The function which asynchronously projects the elements of the iterable into `string`s. Falls back to the identity function if omitted.

## Returns

`Promise`\<`string`\>

A promise of the concatenated string of the elements in the iterable.

> **AsyncJoinFunction**(`separator`, `mapper`?): `Promise`\<`string`\>

Asynchronously projects and concatenates the elements of the iterable into a `string` using a separator. This is a resolving operation, will cause a full loop through all the elements of the iterable.

## Parameters

• **separator**: `string`

The separator to use in between the elements of the iterable.

• **mapper?**: keyof `T`

The function which asynchronously projects the elements of the iterable into `string`s. Falls back to the identity function if omitted.

## Returns

`Promise`\<`string`\>

A promise of the concatenated string of the elements in the iterable.
