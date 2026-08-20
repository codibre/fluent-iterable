[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / AsyncExecuteFunction

# Interface: AsyncExecuteFunction()\<T\>

## Type Parameters

• **T**

> **AsyncExecuteFunction**(`action`): [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`T`\>

Translate an iterable into one which executes an asynchronous action against each element before yield them.

## Parameters

• **action**: [`AsyncAction`](../../../index/interfaces/AsyncAction.md)\<`T`\>

The asynchronous action to execute against each element.

## Returns

[`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`T`\>

The [[FluentAsyncIterable]] with the action injected to it.
