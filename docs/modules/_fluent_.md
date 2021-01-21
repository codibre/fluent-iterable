**[fluent-iterable - v1.7.3](../README.md)**

> [Globals](../README.md) / "fluent"

# Module: "fluent"

## Index

### Variables

* [handler](_fluent_.md#handler)
* [proxyReference](_fluent_.md#proxyreference)

### Functions

* [fluent](_fluent_.md#fluent)

## Variables

### handler

• `Const` **handler**: Extender\<{ [key:string]: Function;  }> = getExtender(proxyReference, defaultCookFunction, 'extender')

___

### proxyReference

• `Const` **proxyReference**: object

## Functions

### fluent

▸ **fluent**\<T>(`iterable`: Iterable\<T>): [FluentIterable](../interfaces/_types_.fluentiterable.md)\<T>

Tranforms an iterable into a [FluentIterable](../interfaces/_types_.fluentiterable.md).

#### Type parameters:

Name | Description |
------ | ------ |
`T` | The type of the items in the iterable. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`iterable` | Iterable\<T> | The iterable instance. |

**Returns:** [FluentIterable](../interfaces/_types_.fluentiterable.md)\<T>

The [FluentIterable](../interfaces/_types_.fluentiterable.md) instance.
