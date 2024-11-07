[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / SkipFunction

# Interface: SkipFunction()\<T\>

## Type Parameters

• **T**

> **SkipFunction**(`n`): `FluentIterable`\<`T`\>

Bypasses a specified number of elements in the iterable and then returns the remaining elements.

## Parameters

• **n**: `number`

The number of elements to skip.

## Returns

`FluentIterable`\<`T`\>

A [[FluentAsyncIterable]] of all the elements after the first `n` elements.
