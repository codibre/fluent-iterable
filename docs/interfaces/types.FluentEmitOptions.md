[fluent-iterable - v1.22.0](../README.md) / [types](../modules/types.md) / FluentEmitOptions

# Interface: FluentEmitOptions

[types](../modules/types.md).FluentEmitOptions

represent the options that can be used with fluentEmit

## Table of contents

### Properties

- [end](types.FluentEmitOptions.md#end)
- [error](types.FluentEmitOptions.md#error)
- [event](types.FluentEmitOptions.md#event)
- [timeout](types.FluentEmitOptions.md#timeout)

## Properties

### end

• `Optional` **end**: `string`[]

The list of events which ends the iterable. Default ['end', 'close']

___

### error

• `Optional` **error**: `string`

The event which throws an error. Default 'error'

___

### event

• `Optional` **event**: `string`

The event which yields a new iterable item. Default 'data'

___

### timeout

• `Optional` **timeout**: `number`

The timeout for event awaiting. If specified, an error will be thrown when no event is emitted
before the deadline
