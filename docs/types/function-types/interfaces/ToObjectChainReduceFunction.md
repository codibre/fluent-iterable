[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / ToObjectChainReduceFunction

# Interface: ToObjectChainReduceFunction()\<T\>

## Type Parameters

• **T**

> **ToObjectChainReduceFunction**\<`A`, `R`\>(`initial`, `reduce`, ...`keys`): [`RecordChain`](../type-aliases/RecordChain.md)\<`A`, `T`, `R`, `0`\>

Creates an object chain with the values of the specified fields where the latest
value in the chain will be the iterable item itself. This is a resolving operation

## Type Parameters

• **A** *extends* [`ToObjectChainKey`](../type-aliases/ToObjectChainKey.md)\<`T`\>[]

• **R**

## Parameters

• **initial**

An initializer function to define the base value for each leaf

• **reduce**: [`Reducer`](../../../index/interfaces/Reducer.md)\<`T`, `R`\>

• ...**keys**: `A`

The keys to be chained. It can be either property names or mapping functions

## Returns

[`RecordChain`](../type-aliases/RecordChain.md)\<`A`, `T`, `R`, `0`\>

The object chain
