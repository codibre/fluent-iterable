[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / AsyncToMapChainFunction

# Interface: AsyncToMapChainFunction()\<T\>

## Type Parameters

• **T**

> **AsyncToMapChainFunction**\<`A`\>(...`keys`): `Promise`\<[`MapChain`](../type-aliases/MapChain.md)\<`A`, `T`, `T`[], `0`\>\>

Creates an map chain with the values of the specified fields where the latest
value in the chain will be the iterable item itself. This is a resolving operation

## Type Parameters

• **A** *extends* [`ToMapChainKey`](../type-aliases/ToMapChainKey.md)\<`T`\>[]

## Parameters

• ...**keys**: `A`

The keys to be chained. It can be either property names or mapping functions

## Returns

`Promise`\<[`MapChain`](../type-aliases/MapChain.md)\<`A`, `T`, `T`[], `0`\>\>

The object chain
