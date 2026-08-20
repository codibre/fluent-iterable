[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / ContainsFunction

# Interface: ContainsFunction()\<T\>

## Type Parameters

• **T**

> **ContainsFunction**(`item`): `boolean`

Determines whether the iterable contains a specified element. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).contains('bound')` returns `true`

## Parameters

• **item**: `T`

The element to check.

## Returns

`boolean`

`true` if the specified element exists in the iterable, `false` otherwise.
