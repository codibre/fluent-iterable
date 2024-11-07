[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / CountFunction

# Interface: CountFunction()\<T\>

## Type Parameters

• **T**

> **CountFunction**(`predicate`?): `number`

Returns the number of elements that matches a predicate in the iterable. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).count()` returns **4**<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).count(word => word[0] === 'a')` returns **3**

## Parameters

• **predicate?**: `Predicate`\<`T`\>

The count will consider elements which match this predicate. Defaults to the always true function and thus, counts all the elements in the iterable if omitted.

## Returns

`number`

The number of elements matching the specified predicate.

> **CountFunction**\<`R`\>(`predicate`): `number`

Returns the number of elements that matches a predicate in the iterable. This is a resolving operation, will cause a full loop through all the elements of the iterable.

## Type Parameters

• **R** *extends* `string` \| `number` \| `symbol`

## Parameters

• **predicate**: `R`

The count will consider elements which match this predicate. Defaults to the always true function and thus, counts all the elements in the iterable if omitted.

## Returns

`number`

The number of elements matching the specified predicate.
