[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / AsyncHasExactlyFunction

# Interface: AsyncHasExactlyFunction()

> **AsyncHasExactlyFunction**(`expectedNumber`): `Promise`\<`boolean`\>

Checks if the number of elements of the iterable is equal to the threshold using a projection. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

## Parameters

• **expectedNumber**: `number`

## Returns

`Promise`\<`boolean`\>

True if the number of elements of the iterable is equal to threshold and false if its not;