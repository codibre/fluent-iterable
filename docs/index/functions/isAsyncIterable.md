[**fluent-iterable v1.38.1**](../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../README.md) / [index](../README.md) / isAsyncIterable

# Function: isAsyncIterable()

> **isAsyncIterable**\<`T`\>(`value`): `value is AsyncIterable<T, any, any>`

Return true when the informed value is an async iterable, and false otherwise

## Type Parameters

• **T**

## Parameters

• **value**: `unknown`

the value to be analyzed

## Returns

`value is AsyncIterable<T, any, any>`

The return is also a type guard, ie, inside an if with that function, the value will be considered an async iterable
