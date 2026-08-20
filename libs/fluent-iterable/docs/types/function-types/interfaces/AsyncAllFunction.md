[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / AsyncAllFunction

# Interface: AsyncAllFunction()\<T\>

## Type Parameters

• **T**

> **AsyncAllFunction**(`predicate`?): `Promise`\<`boolean`\>

Determines whether all elements of the iterable satisfy an asynchronous condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
  Note: This operation stops reading elements from the iterable as soon as the result can be determined.

## Parameters

• **predicate?**: `AsyncPredicate`\<`T`\>

The asynchronous condition checked for all elements in the iterable.

## Returns

`Promise`\<`boolean`\>

A promise of `true` if all elements in the iterable satisfy the specified condition, `false` otherwise.

> **AsyncAllFunction**(`predicate`): `Promise`\<`boolean`\>

Determines whether all elements of the iterable satisfy an asynchronous condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
  Note: This operation stops reading elements from the iterable as soon as the result can be determined.

## Parameters

• **predicate**: keyof `T`

The asynchronous condition checked for all elements in the iterable.

## Returns

`Promise`\<`boolean`\>

A promise of `true` if all elements in the iterable satisfy the specified condition, `false` otherwise.
