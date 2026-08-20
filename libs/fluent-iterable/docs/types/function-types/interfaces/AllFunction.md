[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / AllFunction

# Interface: AllFunction()\<T\>

## Type Parameters

• **T**

> **AllFunction**(`predicate`): `boolean`

Determines whether all elements of the iterable satisfy a condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
  Note: This operation stops reading elements from the iterable as soon as the result can be determined.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).all(word => word.length > 3)` yields `true` since all words are longer than 3 characters
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).all(word => word[0] === 'a')` yields `false` since *bound* does not start with the character *a*
    * `fluent([]).all(word => false)` yields `true` as a convention, empty iterables always return `true`

## Parameters

• **predicate**: `Predicate`\<`T`\>

The condition checked for all elements in the iterable.

## Returns

`boolean`

`true` if all elements in the iterable satisfy the specified condition, `false` otherwise.

> **AllFunction**(`predicate`): `boolean`

Determines whether all elements of the iterable satisfy a condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
  Note: This operation stops reading elements from the iterable as soon as the result can be determined.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).all(word => word.length > 3)` yields `true` since all words are longer than 3 characters
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).all(word => word[0] === 'a')` yields `false` since *bound* does not start with the character *a*
    * `fluent([]).all(word => false)` yields `true` as a convention, empty iterables always return `true`

## Parameters

• **predicate**: keyof `T`

The condition checked for all elements in the iterable.

## Returns

`boolean`

`true` if all elements in the iterable satisfy the specified condition, `false` otherwise.
