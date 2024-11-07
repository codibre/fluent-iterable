[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / AsyncCountFunction

# Interface: AsyncCountFunction()\<T\>

## Type Parameters

• **T**

> **AsyncCountFunction**(`predicate`?): `Promise`\<`number`\>

Returns the number of elements that matches an asynchronous predicate in the iterable. This is a resolving operation, will cause a full loop through all the elements of the iterable.

## Parameters

• **predicate?**: `AsyncPredicate`\<`T`\>

The count will consider elements which match this asynchronous predicate.

## Returns

`Promise`\<`number`\>

A promise of the number of elements matching the specified predicate.

> **AsyncCountFunction**\<`R`\>(`predicate`): `Promise`\<`number`\>

Returns the number of elements that matches a predicate in the iterable. This is a resolving operation, will cause a full loop through all the elements of the iterable.

## Type Parameters

• **R** *extends* `string` \| `number` \| `symbol`

## Parameters

• **predicate**: `R`

The count will consider elements which match this predicate. Defaults to the always true function and thus, counts all the elements in the iterable if omitted.

## Returns

`Promise`\<`number`\>

A promise of the number of elements matching the specified predicate.
