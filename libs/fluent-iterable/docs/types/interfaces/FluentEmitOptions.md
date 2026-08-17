[**fluent-iterable v1.38.1**](../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../README.md) / [types](../README.md) / FluentEmitOptions

# Interface: FluentEmitOptions

represent the options that can be used with fluentEmit

## Properties

### end?

> `optional` **end**: `string`[]

The list of events which ends the iterable. Default ['end', 'close']

***

### error?

> `optional` **error**: `string`

The event which throws an error. Default 'error'

***

### event?

> `optional` **event**: `string`

The event which yields a new iterable item. Default 'data'

***

### timeout?

> `optional` **timeout**: `number`

The timeout for event awaiting. If specified, an error will be thrown when no event is emitted
before the deadline
