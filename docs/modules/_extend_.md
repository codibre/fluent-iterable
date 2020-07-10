[fluent-iterable - v0.7.1](../README.md) › ["extend"](_extend_.md)

# Module: "extend"

## Index

### Type aliases

* [IterableOperation](_extend_.md#iterableoperation)
* [IterableOperationAsync](_extend_.md#iterableoperationasync)
* [IterableResolvingOperation](_extend_.md#iterableresolvingoperation)

### Object literals

* [extend](_extend_.md#const-extend)

## Type aliases

###  IterableOperation

Ƭ **IterableOperation**: *function*

An operation that returns an Iterable

#### Type declaration:

▸ ‹**T**›(`iterable`: Iterable‹T›, ...`args`: any[]): *Iterable‹any›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`...args` | any[] |

___

###  IterableOperationAsync

Ƭ **IterableOperationAsync**: *function*

An operation that returns an AsyncIterable

#### Type declaration:

▸ ‹**T**›(`iterable`: Iterable‹T›, ...`args`: any[]): *AsyncIterable‹any› | PromiseLike‹AnyIterable‹any››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`...args` | any[] |

___

###  IterableResolvingOperation

Ƭ **IterableResolvingOperation**: *function*

A resolving operation

#### Type declaration:

▸ ‹**T**›(`iterable`: Iterable‹T›, ...`args`: any[]): *any*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹T› |
`...args` | any[] |

## Object literals

### `Const` extend

### ▪ **extend**: *object*

Used to add custom methods for the next fluent async iterables created
Is recommendable to also declare the method in the interface so it can be visible to typescript, like this:
```ts
declare module '@codibre/fluent-iterable'{
 interface FluentIterable {
   myCustomMethod<R>(myParams: someType): FluentIterable<R>
 }
}
```

###  use

▸ **use**(`name`: string, `operation`: [IterableOperation](_extend_.md#iterableoperation)): *void*

Add a method that returns another FluentAsyncIterable

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The name of the method |
`operation` | [IterableOperation](_extend_.md#iterableoperation) | The operation to be made  |

**Returns:** *void*

###  useAsync

▸ **useAsync**(`name`: string, `operation`: [IterableOperationAsync](_extend_.md#iterableoperationasync)): *void*

Add a method that returns another FluentAsyncIterable

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The name of the method |
`operation` | [IterableOperationAsync](_extend_.md#iterableoperationasync) | The operation to be made  |

**Returns:** *void*

###  useResolving

▸ **useResolving**(`name`: string, `operation`: [IterableResolvingOperation](_extend_.md#iterableresolvingoperation)): *void*

Add a resolving method

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The name of the method |
`operation` | [IterableResolvingOperation](_extend_.md#iterableresolvingoperation) | The resolving operation to be made  |

**Returns:** *void*
