[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / SkipWhileFunction

# Interface: SkipWhileFunction()\<T\>

## Type Parameters

• **T**

> **SkipWhileFunction**(`condition`): `FluentIterable`\<`T`\>

Bypasses elements in the iterable as long as a specified condition is true and then returns the remaining elements.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).skipWhile(word => word[0] === 'a')` yields *bound* and *alpine*.

## Parameters

• **condition**: `Predicate`\<`T`\>

A predicate of `T`. All elements are skipped from the iterable until this evaluates to `false` for the first time.

## Returns

`FluentIterable`\<`T`\>

A [[FluentIterable]] of the elements after the condition is not met.

> **SkipWhileFunction**(`condition`): `FluentIterable`\<`T`\>

Bypasses elements in the iterable as long as a specified condition is true and then returns the remaining elements.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).skipWhile(word => word[0] === 'a')` yields *bound* and *alpine*.

## Parameters

• **condition**: keyof `T`

A predicate of `T`. All elements are skipped from the iterable until this evaluates to `false` for the first time.

## Returns

`FluentIterable`\<`T`\>

A [[FluentIterable]] of the elements after the condition is not met.
