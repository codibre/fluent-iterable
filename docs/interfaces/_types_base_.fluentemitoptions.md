**[fluent-iterable - v1.7.2](../README.md)**

> [Globals](../README.md) / ["types-base"](../modules/_types_base_.md) / FluentEmitOptions

# Interface: FluentEmitOptions

represent the options that can be used with fluentEmit

## Hierarchy

* **FluentEmitOptions**

## Index

### Properties

* [end](_types_base_.fluentemitoptions.md#end)
* [error](_types_base_.fluentemitoptions.md#error)
* [event](_types_base_.fluentemitoptions.md#event)
* [timeout](_types_base_.fluentemitoptions.md#timeout)

## Properties

### end

• `Optional` **end**: string[]

The list of events which ends the iterable. Default ['end', 'close']

___

### error

• `Optional` **error**: undefined \| string

The event which throws an error. Default 'error'

___

### event

• `Optional` **event**: undefined \| string

The event which yields a new iterable item. Default 'data'

___

### timeout

• `Optional` **timeout**: undefined \| number

The timeout for event awaiting. If specified, an error will be thrown when no event is emitted
before the deadline
