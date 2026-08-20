[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / FlatMergeFunction

# Interface: FlatMergeFunction()\<T\>

## Type Parameters

• **T**

> **FlatMergeFunction**\<`R`\>(`errorCallback`?): `T` *extends* `AsyncIterable`\<`any`, `any`, `any`\> ? [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`R`\> : `never`

When you have an iterable of async iterable, you can use this functions to merge all results into one iterable
where the first items will be the ones yielded first.

## Type Parameters

• **R** *extends* `unknown`

## Parameters

• **errorCallback?**: [`ErrorCallback`](../../interfaces/ErrorCallback.md)

if informed, this function will catch any error that occurs in some async iterable, preventing the code from throw it

## Returns

`T` *extends* `AsyncIterable`\<`any`, `any`, `any`\> ? [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`R`\> : `never`
