[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / ToMapFunction

# Interface: ToMapFunction()\<T\>

## Type Parameters

• **T**

> **ToMapFunction**\<`K`, `V`\>(`getKey`, `mapper`, `reduceValue`?): `Map`\<`K`, `V`\>

Create a Map from the iterable. This is a resolving operation

## Type Parameters

• **K**

• **V**

## Parameters

• **getKey**: [`Mapper`](../../../index/interfaces/Mapper.md)\<`T`, `K`\>

The projection to use to determine element equality. It serves as key of the resulting Map.

• **mapper**: [`Mapper`](../../../index/interfaces/Mapper.md)\<`T`, `V`\>

• **reduceValue?**: [`Reducer`](../../../index/interfaces/Reducer.md)\<`V`, `T`\>

reduce the following items to the map value type. If not informed, assumes only the first value

## Returns

`Map`\<`K`, `V`\>

The [[FluentIterable]] of the distinct elements.

## Typeparam

K The type of the data the element equality is based on.

> **ToMapFunction**\<`K`, `V`\>(`getKey`, `mapper`, `reduceValue`?): `Map`\<`T`\[`K`\], `V`\>

Create a Map from the iterable. This is a resolving operation

## Type Parameters

• **K** *extends* `string` \| `number` \| `symbol`

• **V**

## Parameters

• **getKey**: `K`

The key of T for element equality. It serves as key of the resulting Map.

• **mapper**: [`Mapper`](../../../index/interfaces/Mapper.md)\<`T`, `V`\>

• **reduceValue?**: [`Reducer`](../../../index/interfaces/Reducer.md)\<`V`, `T`\>

reduce the following items to the map value type. If not informed, assumes only the first value

## Returns

`Map`\<`T`\[`K`\], `V`\>

The [[FluentIterable]] of the distinct elements.

## Typeparam

K The type of the data the element equality is based on.

> **ToMapFunction**\<`K`, `V`\>(`getKey`, `mapper`, `reduceValue`?): `Map`\<`T`\[`K`\], `T`\[`V`\]\>

Create a Map from the iterable. This is a resolving operation

## Type Parameters

• **K** *extends* `string` \| `number` \| `symbol`

• **V** *extends* `string` \| `number` \| `symbol`

## Parameters

• **getKey**: `K`

The key of T for element equality. It serves as key of the resulting Map.

• **mapper**: `V`

• **reduceValue?**: [`Reducer`](../../../index/interfaces/Reducer.md)\<`T`\[`V`\], `T`\>

reduce the following items to the map value type. If not informed, assumes only the first value

## Returns

`Map`\<`T`\[`K`\], `T`\[`V`\]\>

The [[FluentIterable]] of the distinct elements.

## Typeparam

K The type of the data the element equality is based on.
