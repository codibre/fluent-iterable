[fluent-iterable - v1.14.6](../README.md) / OrderAssurable

# Interface: OrderAssurable<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

* **OrderAssurable**

  ↳ [*FluentIterable*](fluentiterable.md)

  ↳ [*FluentAsyncIterable*](fluentasynciterable.md)

## Table of contents

### Methods

- [assureOrder](orderassurable.md#assureorder)
- [assureOrderDescending](orderassurable.md#assureorderdescending)
- [o](orderassurable.md#o)
- [od](orderassurable.md#od)

## Methods

### assureOrder

▸ **assureOrder**(): T

Assures the order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be ascending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

**Returns:** T

___

### assureOrderDescending

▸ **assureOrderDescending**(): T

Assures the descending order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be descending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

**Returns:** T

___

### o

▸ **o**(): T

Alias for assureOrder

Assures the order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be ascending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

**Returns:** T

___

### od

▸ **od**(): T

alias for assureOrderDescending

Assures the descending order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be descending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

**Returns:** T
