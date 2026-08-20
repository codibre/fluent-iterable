[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / ForEachFunction

# Interface: ForEachFunction()\<T\>

## Type Parameters

• **T**

> **ForEachFunction**(`action`): `void`

Iterates through the iterable and executes an action against each element. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).forEach(console.log)` prints *anchor*, *almond*, *bound* and *alpine*

## Parameters

• **action**: [`Action`](../../../index/interfaces/Action.md)\<`T`\>

The action to execute against each element.

## Returns

`void`
