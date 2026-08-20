[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / TakeWhileFunction

# Interface: TakeWhileFunction()\<T\>

## Type Parameters

• **T**

> **TakeWhileFunction**(`condition`): `FluentIterable`\<`T`\>

Returns elements from the iterable as long as a specified condition is met.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).takeWhile(word => word[0] === 'a')` yields *anchor* and *almond*.

## Parameters

• **condition**: `Predicate`\<`T`\>

A predicate of `T`. All elements are yielded from the iterable until this evaluates to `false` for the first time.

## Returns

`FluentIterable`\<`T`\>

A [[FluentIterable]] of the elements until the condition is met.

> **TakeWhileFunction**(`condition`): `FluentIterable`\<`T`\>

Returns elements from the iterable as long as a specified condition is met.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).takeWhile(word => word[0] === 'a')` yields *anchor* and *almond*.

## Parameters

• **condition**: keyof `T`

A predicate of `T`. All elements are yielded from the iterable until this evaluates to `false` for the first time.

## Returns

`FluentIterable`\<`T`\>

A [[FluentIterable]] of the elements until the condition is met.
