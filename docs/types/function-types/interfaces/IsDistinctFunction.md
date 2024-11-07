[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / IsDistinctFunction

# Interface: IsDistinctFunction()\<T\>

## Type Parameters

• **T**

> **IsDistinctFunction**\<`R`\>(`mapper`?, `maxOcurrences`?): `boolean`

Checks if the given projection have only distinct elements. This is a partial resolving operation,
and will return the result after as soon as an item got more occurrences than the specified

  Examples:

    * `fluent(['anchor', 'almond', 'anchor', 'alpine']).isDistinct()` returns true
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinct(word => word[0])` returns false
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinct(word => word[0], 2)` returns true

## Type Parameters

• **R**

## Parameters

• **mapper?**: [`Mapper`](../../../index/interfaces/Mapper.md)\<`T`, `R`\>

The projection to use to determine element equality. Identity mapping is used if omitted.

• **maxOcurrences?**: `number`

The number of accepted occurrences for each item. Default: 1

## Returns

`boolean`

## Typeparam

R The type of the data the element equality is based on.

> **IsDistinctFunction**(`maxOcurrences`?): `boolean`

Checks if the given iterable have only distinct elements. This is a partial resolving operation,
and will return the result after as soon as an item got more occurrences than the specified

  Examples:

    * `fluent(['anchor', 'almond', 'anchor', 'alpine']).isDistinct()` returns true
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinct(word => word[0])` returns false
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinct(word => word[0], 2)` returns true

## Parameters

• **maxOcurrences?**: `number`

The number of accepted occurrences for each item. Default: 1

## Returns

`boolean`

> **IsDistinctFunction**\<`R`\>(`mapper`?, `maxOcurrences`?): `boolean`

Checks if the given projection have only distinct elements. This is a partial resolving operation,
and will return the result after as soon as an item got more occurrences than the specified

  Examples:

    * `fluent(['anchor', 'almond', 'anchor', 'alpine']).isDistinct()` returns true
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinct(word => word[0])` returns false
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinct(word => word[0], 2)` returns true

## Type Parameters

• **R** *extends* `string` \| `number` \| `symbol`

## Parameters

• **mapper?**: `R`

The projection to use to determine element equality. Identity mapping is used if omitted.

• **maxOcurrences?**: `number`

The number of accepted occurrences for each item. Default: 1

## Returns

`boolean`

## Typeparam

R The type of the data the element equality is based on.
