[fluent-iterable - v0.8.0](../README.md) › ["fluent-async"](_fluent_async_.md)

# Module: "fluent-async"

## Index

### Variables

* [handler](_fluent_async_.md#const-handler)
* [proxyReference](_fluent_async_.md#const-proxyreference)

### Functions

* [fluentAsync](_fluent_async_.md#fluentasync)

## Variables

### `Const` handler

• **handler**: *Extender‹object›* = getExtender(proxyReference)

___

### `Const` proxyReference

• **proxyReference**: *object*

#### Type declaration:

* \[ **key**: *string*\]: Function

## Functions

###  fluentAsync

▸ **fluentAsync**‹**T**›(`iterable`: AsyncIterable‹T› | PromiseLike‹AnyIterable‹T››): *[FluentAsyncIterable](../interfaces/_types_.fluentasynciterable.md)‹T›*

Tranforms an asynchronous iterable into a [FluentAsyncIterable](../interfaces/_types_.fluentasynciterable.md).

**Type parameters:**

▪ **T**

The type of the items in the async iterable.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`iterable` | AsyncIterable‹T› &#124; PromiseLike‹AnyIterable‹T›› | The asynchronous iterable instance. |

**Returns:** *[FluentAsyncIterable](../interfaces/_types_.fluentasynciterable.md)‹T›*

The [FluentAsyncIterable](../interfaces/_types_.fluentasynciterable.md) instance.
