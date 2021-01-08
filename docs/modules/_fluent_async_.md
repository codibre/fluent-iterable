**[fluent-iterable - v1.7.3](../README.md)**

> [Globals](../README.md) / "fluent-async"

# Module: "fluent-async"

## Index

### Variables

* [handler](_fluent_async_.md#handler)
* [proxyReference](_fluent_async_.md#proxyreference)

### Functions

* [fluentAsync](_fluent_async_.md#fluentasync)
* [fluentEmit](_fluent_async_.md#fluentemit)

## Variables

### handler

• `Const` **handler**: Extender\<{ [key:string]: Function;  }> = getExtender(proxyReference, defaultCookFunction, 'extender')

___

### proxyReference

• `Const` **proxyReference**: object

## Functions

### fluentAsync

▸ **fluentAsync**\<T>(`iterable`: AnyIterable\<T> \| PromiseLike\<AnyIterable\<T>>): [FluentAsyncIterable](../interfaces/_types_.fluentasynciterable.md)\<T>

Tranforms an asynchronous iterable into a [FluentAsyncIterable](../interfaces/_types_.fluentasynciterable.md).

#### Type parameters:

Name | Description |
------ | ------ |
`T` | The type of the items in the async iterable. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`iterable` | AnyIterable\<T> \| PromiseLike\<AnyIterable\<T>> | The asynchronous iterable instance. |

**Returns:** [FluentAsyncIterable](../interfaces/_types_.fluentasynciterable.md)\<T>

The [FluentAsyncIterable](../interfaces/_types_.fluentasynciterable.md) instance.

___

### fluentEmit

▸ **fluentEmit**\<T>(`emitter`: EventEmitter, `options?`: [FluentEmitOptions](../interfaces/_types_base_.fluentemitoptions.md)): [FluentAsyncIterable](../interfaces/_types_.fluentasynciterable.md)\<T>

Transforms an EventEmitter into a [FluentAsyncIterable](../interfaces/_types_.fluentasynciterable.md).

**IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
emission generates a new yielded result. The default key event is **'data'**.

Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.

If you need to change the key event or other characteristics, you can do it through the **options** parameter

#### Type parameters:

Name | Default | Description |
------ | ------ | ------ |
`T` | any | The type of the items in the created FluentAsyncIterable. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`emitter` | EventEmitter | The EventEmitter |
`options?` | [FluentEmitOptions](../interfaces/_types_base_.fluentemitoptions.md) | The EventEmitter options. Optional |

**Returns:** [FluentAsyncIterable](../interfaces/_types_.fluentasynciterable.md)\<T>

The [FluentAsyncIterable](../interfaces/_types_.fluentasynciterable.md) instance.
