[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / MaxFunction

# Interface: MaxFunction()\<T\>

## Type Parameters

• **T**

> **MaxFunction**\<`R`\>(`mapper`?): `undefined` \| `T`

Finds the numeric maximum element of the iterable using a projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).max(word => word.charCodeAt(0))` returns *bound*, since it begins with the character 'b' which has a highest character code than character 'a' with which all the other words begins with

## Type Parameters

• **R** = `T`

## Parameters

• **mapper?**: [`Mapper`](../../../index/interfaces/Mapper.md)\<`T`, `R`\>

The function which projects the elements of the iterable into comparable values. Falls back to the identity function if omitted.

## Returns

`undefined` \| `T`

The maximum of the iterable's projected elements.

> **MaxFunction**\<`R`\>(`mapper`?): `undefined` \| `T`

Finds the numeric maximum element of the iterable using a projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).max(word => word.charCodeAt(0))` returns *bound*, since it begins with the character 'b' which has a highest character code than character 'a' with which all the other words begins with

## Type Parameters

• **R** *extends* `string` \| `number` \| `symbol`

## Parameters

• **mapper?**: `R`

The function which projects the elements of the iterable into comparable values. Falls back to the identity function if omitted.

## Returns

`undefined` \| `T`

The maximum of the iterable's projected elements.
