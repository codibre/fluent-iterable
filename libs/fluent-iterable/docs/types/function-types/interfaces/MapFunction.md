[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / MapFunction

# Interface: MapFunction()\<T\>

## Type Parameters

• **T**

> **MapFunction**\<`R`\>(`mapper`): `FluentIterable`\<`R`\>

Transforms the iterable of `T` into an iterable of `R` by mapping all elements to an element of `R`.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).map(word => word.toUpperCase())` yields *ANCHOR*, *ALMOND*, *BOUND* and *ALPINE*.

## Type Parameters

• **R**

## Parameters

• **mapper**: [`Mapper`](../../../index/interfaces/Mapper.md)\<`T`, `R`\>

The operation which maps an instance of `T` into an instance of `R`.

## Returns

`FluentIterable`\<`R`\>

A [[FluentIterable]] of the mapped elements.

## Typeparam

R The destination type of the mapping.

> **MapFunction**\<`R`\>(`mapper`): `FluentIterable`\<`T`\[`R`\]\>

Transforms the iterable of `T` into an iterable of `R` by mapping all elements to an element of `R`.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).map(word => word.toUpperCase())` yields *ANCHOR*, *ALMOND*, *BOUND* and *ALPINE*.

## Type Parameters

• **R** *extends* `string` \| `number` \| `symbol`

## Parameters

• **mapper**: `R`

The operation which maps an instance of `T` into an instance of `R`.

## Returns

`FluentIterable`\<`T`\[`R`\]\>

A [[FluentIterable]] of the mapped elements.

## Typeparam

R The destination type of the mapping.
