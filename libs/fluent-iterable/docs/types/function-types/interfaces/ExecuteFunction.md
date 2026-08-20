[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / ExecuteFunction

# Interface: ExecuteFunction()\<T\>

## Type Parameters

• **T**

> **ExecuteFunction**(`action`): `FluentIterable`\<`T`\>

Translate an iterable into one which executes an action against each element before yield them.<br>
  Examples:<br>
    * `for (const element of fluent(['anchor', 'almond', 'bound', 'alpine']).execute(console.log)) { }` prints *anchor*, *almond*, *bound* and *alpine*
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).execute(console.log).first()` prints *anchor* and returns the string *anchor*

## Parameters

• **action**: [`Action`](../../../index/interfaces/Action.md)\<`T`\>

The action to execute against each element.

## Returns

`FluentIterable`\<`T`\>

The [[FluentIterable]] with the action injected to it.
