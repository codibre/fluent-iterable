[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / HasLessOrExactly

# Interface: HasLessOrExactly()

> **HasLessOrExactly**(`threshold`): `boolean`

Checks if the number of elements of the iterable is less or equal the threshold using a projection. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

## Parameters

• **threshold**: `number`

The validation threshold

## Returns

`boolean`

True if the number of elements of the iterable is lesser or equal the threshold and false if it is not.
