[fluent-iterable - v1.3.0](../README.md) › ["fluent"](_fluent_.md)

# Module: "fluent"

## Index

### Variables

* [handler](_fluent_.md#const-handler)
* [proxyReference](_fluent_.md#const-proxyreference)

### Functions

* [fluent](_fluent_.md#fluent)

## Variables

### `Const` handler

• **handler**: *Extender‹object›* = getExtender(proxyReference, defaultCookFunction, 'extender')

___

### `Const` proxyReference

• **proxyReference**: *object*

#### Type declaration:

* \[ **key**: *string*\]: Function

## Functions

###  fluent

▸ **fluent**‹**T**›(`iterable`: Iterable‹T›): *[FluentIterable](../interfaces/_types_.fluentiterable.md)‹T›*

Tranforms an iterable into a [FluentIterable](../interfaces/_types_.fluentiterable.md).

**Type parameters:**

▪ **T**

The type of the items in the iterable.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`iterable` | Iterable‹T› | The iterable instance. |

**Returns:** *[FluentIterable](../interfaces/_types_.fluentiterable.md)‹T›*

The [FluentIterable](../interfaces/_types_.fluentiterable.md) instance.
