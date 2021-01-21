**[fluent-iterable - v1.7.3](../README.md)**

> [Globals](../README.md) / ["types-key"](_types_key_.md) / "types"

# Module: "types"

## Index

### Interfaces

* [FluentAsyncIterable](../interfaces/_types_key_._types_.fluentasynciterable.md)
* [FluentIterable](../interfaces/_types_key_._types_.fluentiterable.md)

### Type aliases

* [AsyncItemType](_types_key_._types_.md#asyncitemtype)
* [ItemType](_types_key_._types_.md#itemtype)
* [ToObjectKeyType](_types_key_._types_.md#toobjectkeytype)

## Type aliases

### AsyncItemType

Ƭ  **AsyncItemType**\<T>: T *extends* AnyIterable\<*infer* R> ? R : never

Represents the type of the item of an iterable or an async iterable

#### Type parameters:

Name |
------ |
`T` |

___

### ItemType

Ƭ  **ItemType**\<T>: T *extends* Iterable\<*infer* R> ? R : never

Represents the type of the item of an iterable

#### Type parameters:

Name |
------ |
`T` |

___

### ToObjectKeyType

Ƭ  **ToObjectKeyType**\<T, R1>: T[R1] *extends* string \| number \| symbol ? T[R1] : any

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`R1` | keyof T |
