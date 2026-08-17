[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / MinFunction

# Interface: MinFunction()\<T\>

## Type Parameters

• **T**

> **MinFunction**\<`R`\>(`mapper`?): `undefined` \| `T`

Finds the numeric minimum element of the iterable using a projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).min(word => word.length)` returns *bound*, the shortest word in the iterable

## Type Parameters

• **R** = `T`

## Parameters

• **mapper?**: [`Mapper`](../../../index/interfaces/Mapper.md)\<`T`, `R`\>

The function which projects the elements of the iterable into the comparable value. Falls back to the identity function if omitted.

## Returns

`undefined` \| `T`

The minimum of the iterable's projected elements.

> **MinFunction**\<`R`\>(`mapper`): `undefined` \| `T`

Finds the numeric minimum element of the iterable using a projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).min(word => word.length)` returns *bound*, the shortest word in the iterable

## Type Parameters

• **R** *extends* `string` \| `number` \| `symbol`

## Parameters

• **mapper**: `R`

The function which projects the elements of the iterable into the comparable value. Falls back to the identity function if omitted.

## Returns

`undefined` \| `T`

The minimum of the iterable's projected elements.
