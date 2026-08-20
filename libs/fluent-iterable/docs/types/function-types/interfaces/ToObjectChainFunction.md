[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / ToObjectChainFunction

# Interface: ToObjectChainFunction()\<T\>

## Type Parameters

• **T**

> **ToObjectChainFunction**\<`A`\>(...`keys`): [`RecordChain`](../type-aliases/RecordChain.md)\<`A`, `T`, `T`[], `0`\>

Creates an object chain with the values of the specified fields where the latest
value in the chain will be the iterable item itself. This is a resolving operation

## Type Parameters

• **A** *extends* [`ToObjectChainKey`](../type-aliases/ToObjectChainKey.md)\<`T`\>[]

## Parameters

• ...**keys**: `A`

The keys to be chained

## Returns

[`RecordChain`](../type-aliases/RecordChain.md)\<`A`, `T`, `T`[], `0`\>

The object chain
