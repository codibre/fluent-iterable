[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / EmitFunction

# Interface: EmitFunction()\<T\>

## Extended by

- [`AsyncEmitFunction`](AsyncEmitFunction.md)

## Type Parameters

• **T**

> **EmitFunction**(): [`FluentEmitter`](../../../index/interfaces/FluentEmitter.md)\<`T`\>

Converts the iterable into an EventEmitter. This is a resolving operation.

This EventEmitter may emit three different events:

* data: for each item of the iterable;
* error: in case an error occurs. Notice that, if this method is not listened, the error will be thrown as unhandled;
* end: when the iterable ends. Notice that, if the iterable is infinite, this event will never be emitted.

## Returns

[`FluentEmitter`](../../../index/interfaces/FluentEmitter.md)\<`T`\>
