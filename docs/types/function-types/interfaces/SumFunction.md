[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / SumFunction

# Interface: SumFunction()\<T\>

## Type Parameters

• **T**

> **SumFunction**(`mapper`?): `number`

Calculates the sum of the elements of the iterable projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent([5, -2, 9]).sum()` returns *12*
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).sum(word => word.length)` returns *23*, the sum of length of all the words in the iterable

## Parameters

• **mapper?**: [`Mapper`](../../../index/interfaces/Mapper.md)\<`T`, `number`\>

The function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted.

## Returns

`number`

The sum of the projected elements of the iterable.

> **SumFunction**(`mapper`): `number`

Calculates the sum of the elements of the iterable projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent([5, -2, 9]).sum()` returns *12*
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).sum(word => word.length)` returns *23*, the sum of length of all the words in the iterable

## Parameters

• **mapper**: keyof `T`

The function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted.

## Returns

`number`

The sum of the projected elements of the iterable.
