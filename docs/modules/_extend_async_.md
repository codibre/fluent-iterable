[fluent-iterable - v0.5.0](../README.md) › ["extend-async"](_extend_async_.md)

# Module: "extend-async"

## Index

### Type aliases

* [AsyncIterableOperation](_extend_async_.md#asynciterableoperation)
* [AsyncIterableResolvingOperation](_extend_async_.md#asynciterableresolvingoperation)

### Object literals

* [extendAsync](_extend_async_.md#const-extendasync)

## Type aliases

###  AsyncIterableOperation

Ƭ **AsyncIterableOperation**: *function*

An operation that returns an AsyncIterable

#### Type declaration:

▸ ‹**T**›(`iterable`: AsyncIterable‹T›, ...`args`: any[]): *AsyncIterable‹any› | PromiseLike‹AnyIterable‹any››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`...args` | any[] |

___

###  AsyncIterableResolvingOperation

Ƭ **AsyncIterableResolvingOperation**: *function*

A resolving operation

#### Type declaration:

▸ ‹**T**›(`iterable`: AsyncIterable‹T›, ...`args`: any[]): *PromiseLike‹any›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`...args` | any[] |

## Object literals

### `Const` extendAsync

### ▪ **extendAsync**: *object*

Used to add custom methods for the next fluent async iterables created
Is recommendable to also declare the method in the interface namespace so it can be visible to typescript, like this:
```ts
declare namespace FluentAsyncIterable {
  myCustomMethod<R>(myParams: someType): FluentAsyncIterable<R>
}
```

###  use

▸ **use**(`name`: string, `operation`: [AsyncIterableOperation](_extend_async_.md#asynciterableoperation)): *void*

Add a method that returns another FluentAsyncIterable

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The name of the method |
`operation` | [AsyncIterableOperation](_extend_async_.md#asynciterableoperation) | The operation to be made  |

**Returns:** *void*

###  useResolving

▸ **useResolving**(`name`: string, `operation`: function): *void*

Add a resolving method

**Parameters:**

▪ **name**: *string*

The name of the method

▪ **operation**: *function*

The resolving operation to be made

▸ ‹**T**›(`iterable`: [AsyncIterableResolvingOperation](_extend_async_.md#asynciterableresolvingoperation)): *any*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | [AsyncIterableResolvingOperation](_extend_async_.md#asynciterableresolvingoperation) |

**Returns:** *void*
