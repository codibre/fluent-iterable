[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / WithIndexFunction

# Interface: WithIndexFunction()\<T\>

## Type Parameters

• **T**

> **WithIndexFunction**(): `FluentIterable`\<[`Indexed`](../../interfaces/Indexed.md)\<`T`\>\>

Maps all elements of the iterable to an instance of [[Indexed]], an index-value pair constructed of the original element in the iterable and it's index (starting from 0 for the first element in the iterable).

## Returns

`FluentIterable`\<[`Indexed`](../../interfaces/Indexed.md)\<`T`\>\>

A [[FluentAsyncIterable]] of [[Indexed]].
