[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / AsyncToObjectChainFunction

# Interface: AsyncToObjectChainFunction()\<T\>

## Type Parameters

• **T**

> **AsyncToObjectChainFunction**\<`A`\>(...`keys`): `Promise`\<[`RecordChain`](../type-aliases/RecordChain.md)\<`A`, `T`, `T`[], `0`\>\>

Creates an object chain with the values of the specified fields where the latest
value in the chain will be the iterable item itself. This is a resolving operation

## Type Parameters

• **A** *extends* [`ToObjectChainKey`](../type-aliases/ToObjectChainKey.md)\<`T`\>[]

## Parameters

• ...**keys**: `A`

The keys to be chained. It can be either property names or mapping functions

## Returns

`Promise`\<[`RecordChain`](../type-aliases/RecordChain.md)\<`A`, `T`, `T`[], `0`\>\>

The object chain
