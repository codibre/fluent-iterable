[fluent-iterable - v0.1.5](../README.md) › [Globals](../globals.md) › ["types"](_types_.md)

# External module: "types"

## Index

### Interfaces

* [Group](../interfaces/_types_.group.md)
* [Indexed](../interfaces/_types_.indexed.md)
* [Page](../interfaces/_types_.page.md)

### Type aliases

* [Action](_types_.md#action)
* [AsyncAction](_types_.md#asyncaction)
* [AsyncMapper](_types_.md#asyncmapper)
* [AsyncPredicate](_types_.md#asyncpredicate)
* [AsyncReducer](_types_.md#asyncreducer)
* [Comparer](_types_.md#comparer)
* [Mapper](_types_.md#mapper)
* [Pager](_types_.md#pager)
* [Predicate](_types_.md#predicate)
* [Reducer](_types_.md#reducer)

## Type aliases

###  Action

Ƭ **Action**: *function*

*Defined in [src/types.ts:8](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/types.ts#L8)*

#### Type declaration:

▸ (`item`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`item` | T |

___

###  AsyncAction

Ƭ **AsyncAction**: *function*

*Defined in [src/types.ts:9](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/types.ts#L9)*

#### Type declaration:

▸ (`item`: T): *Promise‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`item` | T |

___

###  AsyncMapper

Ƭ **AsyncMapper**: *function*

*Defined in [src/types.ts:4](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/types.ts#L4)*

#### Type declaration:

▸ (`item`: T): *Promise‹R›*

**Parameters:**

Name | Type |
------ | ------ |
`item` | T |

___

###  AsyncPredicate

Ƭ **AsyncPredicate**: *function*

*Defined in [src/types.ts:2](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/types.ts#L2)*

#### Type declaration:

▸ (`item`: T): *Promise‹boolean›*

**Parameters:**

Name | Type |
------ | ------ |
`item` | T |

___

###  AsyncReducer

Ƭ **AsyncReducer**: *function*

*Defined in [src/types.ts:6](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/types.ts#L6)*

#### Type declaration:

▸ (`current`: A, `next`: T): *Promise‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`current` | A |
`next` | T |

___

###  Comparer

Ƭ **Comparer**: *function*

*Defined in [src/types.ts:7](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/types.ts#L7)*

#### Type declaration:

▸ (`a`: T, `b`: T): *number*

**Parameters:**

Name | Type |
------ | ------ |
`a` | T |
`b` | T |

___

###  Mapper

Ƭ **Mapper**: *function*

*Defined in [src/types.ts:3](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/types.ts#L3)*

#### Type declaration:

▸ (`item`: T): *R*

**Parameters:**

Name | Type |
------ | ------ |
`item` | T |

___

###  Pager

Ƭ **Pager**: *function*

*Defined in [src/types.ts:26](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/types.ts#L26)*

#### Type declaration:

▸ (`nextPageToken?`: TToken): *Promise‹[Page](../interfaces/_types_.page.md)‹T, TToken› | undefined›*

**Parameters:**

Name | Type |
------ | ------ |
`nextPageToken?` | TToken |

___

###  Predicate

Ƭ **Predicate**: *function*

*Defined in [src/types.ts:1](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/types.ts#L1)*

#### Type declaration:

▸ (`item`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`item` | T |

___

###  Reducer

Ƭ **Reducer**: *function*

*Defined in [src/types.ts:5](https://github.com/kataik/fluent-iterable/blob/0d3fbb0/src/types.ts#L5)*

#### Type declaration:

▸ (`current`: A, `next`: T): *A*

**Parameters:**

Name | Type |
------ | ------ |
`current` | A |
`next` | T |
