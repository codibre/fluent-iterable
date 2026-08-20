[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / AsyncToSetFunction

# Interface: AsyncToSetFunction()\<T\>

## Type Parameters

• **T**

> **AsyncToSetFunction**(): `Promise`\<`Set`\<`T`\>\>

Create a Set from the iterable. This is a resolving operation

## Returns

`Promise`\<`Set`\<`T`\>\>

> **AsyncToSetFunction**\<`V`\>(`mapper`): `Promise`\<`Set`\<`V`\>\>

Create a Set from the iterable. This is a resolving operation

## Type Parameters

• **V**

## Parameters

• **mapper**: [`AsyncMapper`](../../../index/interfaces/AsyncMapper.md)\<`T`, `V`\>

## Returns

`Promise`\<`Set`\<`V`\>\>

> **AsyncToSetFunction**\<`K`\>(`mapper`): `Promise`\<`Set`\<`T`\[`K`\]\>\>

Create a Set from the iterable. This is a resolving operation

## Type Parameters

• **K** *extends* `string` \| `number` \| `symbol`

## Parameters

• **mapper**: `K`

## Returns

`Promise`\<`Set`\<`T`\[`K`\]\>\>
