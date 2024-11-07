[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / AsyncLastFunction

# Interface: AsyncLastFunction()\<T\>

## Type Parameters

• **T**

> **AsyncLastFunction**(`predicate`?): `Promise`\<`undefined` \| `T`\>

Returns the last element of the iterable matching an asynchronous predicate, or `undefined` value if no such element is found. This is a resolving operation, will cause a full loop through all the elements of the iterable.

## Parameters

• **predicate?**: `AsyncPredicate`\<`T`\>

The last element is to be returned which matches this asynchronous predicate.

## Returns

`Promise`\<`undefined` \| `T`\>

A promise of the last element matching the specified predicate, or `undefined` if no such element found.

> **AsyncLastFunction**(`predicate`): `Promise`\<`undefined` \| `T`\>

Returns the last element of the iterable matching an asynchronous predicate, or `undefined` value if no such element is found. This is a resolving operation, will cause a full loop through all the elements of the iterable.

## Parameters

• **predicate**: keyof `T`

The last element is to be returned which matches this asynchronous predicate.

## Returns

`Promise`\<`undefined` \| `T`\>

A promise of the last element matching the specified predicate, or `undefined` if no such element found.
