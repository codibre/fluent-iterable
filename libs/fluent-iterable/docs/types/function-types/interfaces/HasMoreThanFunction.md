[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / HasMoreThanFunction

# Interface: HasMoreThanFunction()

> **HasMoreThanFunction**(`threshold`): `boolean`

Checks if the number of elements of the iterable is more than the threshold using a projection. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

## Parameters

• **threshold**: `number`

The validation threshold

## Returns

`boolean`

True if the number of elements of the iterable is greater than the threshold and false if it is not.
