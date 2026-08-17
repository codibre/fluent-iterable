[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / AsyncFirstFunction

# Interface: AsyncFirstFunction()\<T\>

## Type Parameters

• **T**

> **AsyncFirstFunction**(`predicate`?): `Promise`\<`undefined` \| `T`\>

Returns the first element of the iterable matching an asynchronous predicate, or `undefined` value if no such element is found. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

## Parameters

• **predicate?**: `AsyncPredicate`\<`T`\>

The first element is to be returned which matches this asynchronous predicate.

## Returns

`Promise`\<`undefined` \| `T`\>

A promise of the first element matching the specified predicate, or `undefined` if no such element found.

> **AsyncFirstFunction**(`predicate`): `Promise`\<`undefined` \| `T`\>

Returns the first element of the iterable matching an asynchronous predicate, or `undefined` value if no such element is found. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

## Parameters

• **predicate**: keyof `T`

The first element is to be returned which matches this asynchronous predicate.

## Returns

`Promise`\<`undefined` \| `T`\>

A promise of the first element matching the specified predicate, or `undefined` if no such element found.
