[fluent-iterable - v1.6.0](../README.md) › ["types-emitter"](../modules/_types_emitter_.md) › [FluentIterableEmitter](_types_emitter_.fluentiterableemitter.md)

# Interface: FluentIterableEmitter ‹**T**›

Represents the operations using EventEmitters

## Type parameters

▪ **T**

The type of the items in the iterable.

## Hierarchy

* **FluentIterableEmitter**

  ↳ [FluentIterable](_types_.fluentiterable.md)

  ↳ [FluentAsyncIterable](_types_.fluentasynciterable.md)

## Index

### Methods

* [combineEmitter](_types_emitter_.fluentiterableemitter.md#combineemitter)
* [concatEmitter](_types_emitter_.fluentiterableemitter.md#concatemitter)

## Methods

###  combineEmitter

▸ **combineEmitter**‹**U**›(`emitter`: EventEmitter, `options?`: [FluentEmitOptions](_types_base_.fluentemitoptions.md)): *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹[]›*

Join the iterable with an EventEmitter, returning a new async iterable with a NxN combination

**IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
emission generates a new yielded result. The default key event is **'data'**.

Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.

If you need to change the key event or other characteristics, you can do it through the **options** parameter

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emitter` | EventEmitter | The EventEmitter |
`options?` | [FluentEmitOptions](_types_base_.fluentemitoptions.md) | The EventEmitter options. Optional  |

**Returns:** *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹[]›*

▸ **combineEmitter**‹**U**, **K**›(`emitter`: EventEmitter, `keyA`: Mapper‹T, K›, `keyB`: Mapper‹U, K›, `options?`: [FluentEmitOptions](_types_base_.fluentemitoptions.md)): *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹[]›*

Join the iterable with another the EventEmitter, returning a new async iterable with the inner matching combinations

**IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
emission generates a new yielded result. The default key event is **'data'**.

Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.

If you need to change the key event or other characteristics, you can do it through the **options** parameter

**Type parameters:**

▪ **U**

▪ **K**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emitter` | EventEmitter | The EventEmitter |
`keyA` | Mapper‹T, K› | A mapper that returns the key map value from the left iterable |
`keyB` | Mapper‹U, K› | A mapper that returns the key map value from the right iterable  |
`options?` | [FluentEmitOptions](_types_base_.fluentemitoptions.md) | The EventEmitter options. Optional |

**Returns:** *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹[]›*

▸ **combineEmitter**‹**U**, **K**›(`emitter`: EventEmitter, `keyA`: keyof T, `keyB`: Mapper‹U, K›, `options?`: [FluentEmitOptions](_types_base_.fluentemitoptions.md)): *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹[]›*

Join the iterable with another the EventEmitter, returning a new async iterable with the inner matching combinations

**IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
emission generates a new yielded result. The default key event is **'data'**.

Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.

If you need to change the key event or other characteristics, you can do it through the **options** parameter

**Type parameters:**

▪ **U**

▪ **K**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emitter` | EventEmitter | The EventEmitter |
`keyA` | keyof T | A mapper that returns the key map value from the left iterable |
`keyB` | Mapper‹U, K› | A mapper that returns the key map value from the right iterable  |
`options?` | [FluentEmitOptions](_types_base_.fluentemitoptions.md) | The EventEmitter options. Optional |

**Returns:** *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹[]›*

___

###  concatEmitter

▸ **concatEmitter**(`emitter`: EventEmitter, `options?`: [FluentEmitOptions](_types_base_.fluentemitoptions.md)): *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹T›*

Concatenates the specified Emitter to the async iterable.

**IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
emission generates a new yielded result. The default key event is **'data'**.

Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.

If you need to change the key event or other characteristics, you can do it through the **options** parameter

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`emitter` | EventEmitter | The EventEmitter |
`options?` | [FluentEmitOptions](_types_base_.fluentemitoptions.md) | The EventEmitter options. Optional |

**Returns:** *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹T›*

The [FluentAsyncIterable](_types_.fluentasynciterable.md) of the concatenated async iterables.
