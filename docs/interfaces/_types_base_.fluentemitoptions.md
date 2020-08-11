[fluent-iterable - v1.4.0](../README.md) › ["types-base"](../modules/_types_base_.md) › [FluentEmitOptions](_types_base_.fluentemitoptions.md)

# Interface: FluentEmitOptions

represent the options that can be used with fluentEmit

## Hierarchy

* **FluentEmitOptions**

## Index

### Properties

* [end](_types_base_.fluentemitoptions.md#optional-end)
* [error](_types_base_.fluentemitoptions.md#optional-error)
* [event](_types_base_.fluentemitoptions.md#optional-event)
* [timeout](_types_base_.fluentemitoptions.md#optional-timeout)

## Properties

### `Optional` end

• **end**? : *string[]*

The list of events which ends the iterable. Default ['end', 'close']

___

### `Optional` error

• **error**? : *undefined | string*

The event which throws an error. Default 'error'

___

### `Optional` event

• **event**? : *undefined | string*

The event which yields a new iterable item. Default 'data'

___

### `Optional` timeout

• **timeout**? : *undefined | number*

The timeout for event awaiting. If specified, an error will be thrown when no event is emitted
before the deadline
