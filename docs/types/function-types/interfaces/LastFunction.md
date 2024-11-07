[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / LastFunction

# Interface: LastFunction()\<T\>

## Type Parameters

• **T**

> **LastFunction**(`predicate`?): `undefined` \| `T`

Returns the last element of the iterable matching a predicate, or `undefined` value if no such element is found. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).last()` returns *alpine*<br>
    * `fluent([]).last()` returns `undefined`<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).last(word => word[0] === 'b')` returns *bound*<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).last(word => word[0] === 'c')` returns `undefined`

## Parameters

• **predicate?**: `Predicate`\<`T`\>

The last element is to be returned which matches this predicate. Defaults to the always true function and thus, returns the last element in the iterable if omitted.

## Returns

`undefined` \| `T`

The last element matching the specified predicate, or `undefined` if no such element found.

> **LastFunction**(`predicate`): `undefined` \| `T`

Returns the last element of the iterable matching a predicate, or `undefined` value if no such element is found. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).last()` returns *alpine*<br>
    * `fluent([]).last()` returns `undefined`<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).last(word => word[0] === 'b')` returns *bound*<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).last(word => word[0] === 'c')` returns `undefined`

## Parameters

• **predicate**: keyof `T`

The last element is to be returned which matches this predicate. Defaults to the always true function and thus, returns the last element in the iterable if omitted.

## Returns

`undefined` \| `T`

The last element matching the specified predicate, or `undefined` if no such element found.
