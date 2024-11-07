[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / ToMapChainReduceFunction

# Interface: ToMapChainReduceFunction()\<T\>

## Type Parameters

• **T**

> **ToMapChainReduceFunction**\<`A`, `R`\>(`initial`, `reduce`, ...`keys`): [`MapChain`](../type-aliases/MapChain.md)\<`A`, `T`, `R`, `0`\>

Creates an map chain with the values of the specified fields where the latest
value in the chain will be the iterable item itself. This is a resolving operation

## Type Parameters

• **A** *extends* [`ToMapChainKey`](../type-aliases/ToMapChainKey.md)\<`T`\>[]

• **R**

## Parameters

• **initial**

An initializer function to define the base value for each leaf

• **reduce**: [`Reducer`](../../../index/interfaces/Reducer.md)\<`T`, `R`\>

• ...**keys**: `A`

The keys to be chained. It can be either property names or mapping functions

## Returns

[`MapChain`](../type-aliases/MapChain.md)\<`A`, `T`, `R`, `0`\>

The object chain
