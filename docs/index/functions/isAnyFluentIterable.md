[**fluent-iterable v1.38.1**](../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../README.md) / [index](../README.md) / isAnyFluentIterable

# Function: isAnyFluentIterable()

> **isAnyFluentIterable**\<`T`\>(`value`): value is FluentIterable\<T\> \| FluentAsyncIterable\<T\>

Return true when the informed value is an fluent iterable, and false otherwise

## Type Parameters

• **T**

## Parameters

• **value**: `unknown`

the value to be analyzed

## Returns

value is FluentIterable\<T\> \| FluentAsyncIterable\<T\>

The return is also a type guard, ie, inside an if with that function, the value will be considered an fluent iterable
