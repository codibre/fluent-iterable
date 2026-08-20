[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / ToSetFunction

# Interface: ToSetFunction()\<T\>

## Type Parameters

• **T**

> **ToSetFunction**(): `Set`\<`T`\>

Create a Set from the iterable. This is a resolving operation

## Returns

`Set`\<`T`\>

> **ToSetFunction**\<`V`\>(`mapper`): `Set`\<`V`\>

Create a Set from the iterable. This is a resolving operation

## Type Parameters

• **V**

## Parameters

• **mapper**: [`Mapper`](../../../index/interfaces/Mapper.md)\<`T`, `V`\>

## Returns

`Set`\<`V`\>

> **ToSetFunction**\<`K`\>(`mapper`): `Set`\<`T`\[`K`\]\>

Create a Set from the iterable. This is a resolving operation

## Type Parameters

• **K** *extends* `string` \| `number` \| `symbol`

## Parameters

• **mapper**: `K`

## Returns

`Set`\<`T`\[`K`\]\>
