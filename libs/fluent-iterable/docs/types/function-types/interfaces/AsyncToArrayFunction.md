[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / AsyncToArrayFunction

# Interface: AsyncToArrayFunction()\<T\>

## Type Parameters

• **T**

> **AsyncToArrayFunction**(): `Promise`\<`T`[]\>

Translates the iterable into an array. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).toArray()` returns `['anchor', 'almond', 'bound', 'alpine']`

## Returns

`Promise`\<`T`[]\>

A promise that resolves to the array equivalent of the async iterable.
