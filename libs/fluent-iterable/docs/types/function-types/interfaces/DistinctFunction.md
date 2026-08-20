[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / DistinctFunction

# Interface: DistinctFunction()\<T\>

## Type Parameters

• **T**

> **DistinctFunction**\<`R`\>(`mapper`, `maxOcurrences`?): `FluentIterable`\<`T`\>

Returns distinct elements from the iterable from a certain projections perspective.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'anchor', 'alpine']).distinct()` yields *anchor*, *almond* and *alpine*<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).distinct(word => word[0])` yields *anchor* and *bound*

## Type Parameters

• **R**

## Parameters

• **mapper**: [`Mapper`](../../../index/interfaces/Mapper.md)\<`T`, `R`\>

The projection to use to determine element equality. Identity mapping is used if omitted.

• **maxOcurrences?**: `number`

The number of accepted occurrences for each item. Default: 1

## Returns

`FluentIterable`\<`T`\>

The [[FluentIterable]] of the distinct elements.

## Typeparam

R The type of the data the element equality is based on.

> **DistinctFunction**\<`R`\>(`mapper`, `choose`): `FluentIterable`\<`T`\>

Returns distinct elements from the iterable from a certain projections perspective.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'anchor', 'alpine']).distinct()` yields *anchor*, *almond* and *alpine*<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).distinct(word => word[0])` yields *anchor* and *bound*

## Type Parameters

• **R**

## Parameters

• **mapper**: [`Mapper`](../../../index/interfaces/Mapper.md)\<`T`, `R`\>

The projection to use to determine element equality. Identity mapping is used if omitted.

• **choose**: [`Choose`](../../type-aliases/Choose.md)\<`T`\>

receives two T elements and return the one that must be chosen

## Returns

`FluentIterable`\<`T`\>

The [[FluentIterable]] of the distinct elements.

## Typeparam

R The type of the data the element equality is based on.

> **DistinctFunction**(`maxOcurrences`?): `FluentIterable`\<`T`\>

Returns distinct elements from the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'anchor', 'alpine']).distinct()` yields *anchor*, *almond* and *alpine*<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).distinct(word => word[0])` yields *anchor* and *bound*

## Parameters

• **maxOcurrences?**: `number`

## Returns

`FluentIterable`\<`T`\>

The [[FluentIterable]] of the distinct elements.

## Typeparam

R The type of the data the element equality is based on.

> **DistinctFunction**\<`R`\>(`mapper`, `maxOcurrences`?): `FluentIterable`\<`T`\>

Returns distinct elements from the iterable from a certain projections perspective.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'anchor', 'alpine']).distinct()` yields *anchor*, *almond* and *alpine*<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).distinct(word => word[0])` yields *anchor* and *bound*

## Type Parameters

• **R** *extends* `string` \| `number` \| `symbol`

## Parameters

• **mapper**: `R`

The projection to use to determine element equality. Identity mapping is used if omitted.

• **maxOcurrences?**: `number`

The number of accepted occurrences for each item. Default: 1

## Returns

`FluentIterable`\<`T`\>

The [[FluentIterable]] of the distinct elements.

## Typeparam

R The type of the data the element equality is based on.

> **DistinctFunction**\<`R`\>(`mapper`, `choose`): `FluentIterable`\<`T`\>

Returns distinct elements from the iterable from a certain projections perspective.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'anchor', 'alpine']).distinct()` yields *anchor*, *almond* and *alpine*<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).distinct(word => word[0])` yields *anchor* and *bound*

## Type Parameters

• **R** *extends* `string` \| `number` \| `symbol`

## Parameters

• **mapper**: `R`

The projection to use to determine element equality. Identity mapping is used if omitted.

• **choose**: [`Choose`](../../type-aliases/Choose.md)\<`T`\>

receives two T elements and return the one that must be chosen

## Returns

`FluentIterable`\<`T`\>

The [[FluentIterable]] of the distinct elements.

## Typeparam

R The type of the data the element equality is based on.
