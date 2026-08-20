[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / ToMapChainFunction

# Interface: ToMapChainFunction()\<T\>

## Type Parameters

• **T**

> **ToMapChainFunction**\<`A`\>(...`keys`): [`MapChain`](../type-aliases/MapChain.md)\<`A`, `T`, `T`[], `0`\>

Creates an map chain with the values of the specified fields where the latest
value in the chain will be the iterable item itself. This is a resolving operation

## Type Parameters

• **A** *extends* [`ToMapChainKey`](../type-aliases/ToMapChainKey.md)\<`T`\>[]

## Parameters

• ...**keys**: `A`

The keys to be chained

## Returns

[`MapChain`](../type-aliases/MapChain.md)\<`A`, `T`, `T`[], `0`\>

The object chain
