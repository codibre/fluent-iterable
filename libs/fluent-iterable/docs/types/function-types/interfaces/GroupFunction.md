[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / GroupFunction

# Interface: GroupFunction()\<T\>

## Type Parameters

• **T**

> **GroupFunction**\<`R`, `V`\>(`mapper`, `transformValue`?): `FluentIterable`\<[`FluentGroup`](../../../index/interfaces/FluentGroup.md)\<`V`, `R`\>\>

Groups the elements of the iterable keyed by equality of data at the specified projection.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).group(word => word[0])` yields { key: 'a', values: ['anchor', 'almond', 'alpine'] } and { key: 'b', values: ['bound'] }.

## Type Parameters

• **R**

• **V** = `T`

## Parameters

• **mapper**: [`Mapper`](../../../index/interfaces/Mapper.md)\<`T`, `R`\>

Projects the elements of the iterable into the group key they belong to.

• **transformValue?**: [`KVGroupTransform`](../../interfaces/KVGroupTransform.md)\<`R`, `T`, `V`\>

Optional. Allows a transformation before adding the value to the group. The return must be an iterable

## Returns

`FluentIterable`\<[`FluentGroup`](../../../index/interfaces/FluentGroup.md)\<`V`, `R`\>\>

The [[FluentIterable]] of the distinct groups.

## Typeparam

R The type of the groups' key.

> **GroupFunction**\<`R`, `V`\>(`mapper`, `transformValue`?): `FluentIterable`\<[`FluentGroup`](../../../index/interfaces/FluentGroup.md)\<`V`, `T`\[`R`\]\>\>

Groups the elements of the iterable keyed by equality of data at the specified projection.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).group(word => word[0])` yields { key: 'a', values: ['anchor', 'almond', 'alpine'] } and { key: 'b', values: ['bound'] }.

## Type Parameters

• **R** *extends* `string` \| `number` \| `symbol`

• **V** = `T`

## Parameters

• **mapper**: `R`

Projects the elements of the iterable into the group key they belong to.

• **transformValue?**: [`KVGroupTransform`](../../interfaces/KVGroupTransform.md)\<`T`\[`R`\], `T`, `V`\>

Optional. Allows a transformation before adding the value to the group. The return must be an iterable

## Returns

`FluentIterable`\<[`FluentGroup`](../../../index/interfaces/FluentGroup.md)\<`V`, `T`\[`R`\]\>\>

The [[FluentIterable]] of the distinct groups.

## Typeparam

R The type of the groups' key.
