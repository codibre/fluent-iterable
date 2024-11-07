[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / AsyncAnyFunction

# Interface: AsyncAnyFunction()\<T\>

## Type Parameters

• **T**

> **AsyncAnyFunction**(`predicate`?): `Promise`\<`boolean`\>

Determines whether any element of the iterable exists or satisfies an asynchronous condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
  Note: This operation stops reading elements from the iterable as soon as the result can be determined.

## Parameters

• **predicate?**: `AsyncPredicate`\<`T`\>

The asynchronous condition checked for the elements in the iterable.

## Returns

`Promise`\<`boolean`\>

A promise of `true` if any of the elements in the iterable satisfy the specified condition, `false` otherwise.

> **AsyncAnyFunction**(`predicate`): `Promise`\<`boolean`\>

Determines whether any element of the iterable exists or satisfies an asynchronous condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
  Note: This operation stops reading elements from the iterable as soon as the result can be determined.

## Parameters

• **predicate**: keyof `T`

The asynchronous condition checked for the elements in the iterable.

## Returns

`Promise`\<`boolean`\>

A promise of `true` if any of the elements in the iterable satisfy the specified condition, `false` otherwise.
