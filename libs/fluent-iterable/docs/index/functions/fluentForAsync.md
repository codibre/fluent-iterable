[**fluent-iterable v1.38.1**](../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../README.md) / [index](../README.md) / fluentForAsync

# Function: fluentForAsync()

> **fluentForAsync**\<`T`\>(`start`, `condition`, `increment`): [`FluentAsyncIterable`](../interfaces/FluentAsyncIterable.md)\<`T`\>

Generates a FluentIterable that yields a for-like increment

## Type Parameters

• **T**

## Parameters

• **start**: `T` \| `Promise`\<`T`\>

The starting number

• **condition**

The keep going condition

• **increment** = `identity`

The increment. Default 1

## Returns

[`FluentAsyncIterable`](../interfaces/FluentAsyncIterable.md)\<`T`\>
