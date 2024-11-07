[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / AvgFunction

# Interface: AvgFunction()\<T\>

## Type Parameters

• **T**

> **AvgFunction**(`mapper`?): `number`

Calculates the average of the elements of the iterable projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent([5, -2, 9]).avg()` returns *4*
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).avg(word => word.length)` returns *5.75*, the average of the length of all the words in the iterable

## Parameters

• **mapper?**: [`Mapper`](../../../index/interfaces/Mapper.md)\<`T`, `number`\>

The function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted.

## Returns

`number`

The average of the projected elements of the iterable.

> **AvgFunction**(`mapper`): `number`

Calculates the average of the elements of the iterable projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent([5, -2, 9]).avg()` returns *4*
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).avg(word => word.length)` returns *5.75*, the average of the length of all the words in the iterable

## Parameters

• **mapper**: keyof `T`

The function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted.

## Returns

`number`

The average of the projected elements of the iterable.
