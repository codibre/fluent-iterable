[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / FinallyFunction

# Interface: FinallyFunction()\<T, Type\>

## Type Parameters

• **T**

• **Type** *extends* `"sync"` \| `"async"`

> **FinallyFunction**(`callback`): `Type` *extends* `"sync"` ? `FluentIterable`\<`T`\> : [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`T`\>

Adds a command to be executed after the iterable finishes

## Parameters

• **callback**: `Type` *extends* `"sync"` ? () => `unknown` \| (`success`) => `unknown` : () => `unknown` \| (`success`) => `unknown`

the code to be executed

## Returns

`Type` *extends* `"sync"` ? `FluentIterable`\<`T`\> : [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`T`\>

The resulting iterable
