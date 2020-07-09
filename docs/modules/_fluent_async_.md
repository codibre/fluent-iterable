[fluent-iterable - v0.5.0](../README.md) › ["fluent-async"](_fluent_async_.md)

# Module: "fluent-async"

## Index

### Functions

* [fluentAsync](_fluent_async_.md#fluentasync)

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
