[fluent-iterable - v1.22.0](../README.md) / [index](../modules/index.md) / OrderAssurable

# Interface: OrderAssurable<T\>

[index](../modules/index.md).OrderAssurable

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`OrderAssurable`**

  ↳ [`FluentIterable`](index.FluentIterable.md)

  ↳ [`FluentAsyncIterable`](index.FluentAsyncIterable.md)

## Table of contents

### Methods

- [assureOrder](index.OrderAssurable.md#assureorder)
- [assureOrderDescending](index.OrderAssurable.md#assureorderdescending)
- [o](index.OrderAssurable.md#o)
- [od](index.OrderAssurable.md#od)

## Methods

### assureOrder

▸ **assureOrder**(): `T`

Assures the order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be ascending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

#### Returns

`T`

___

### assureOrderDescending

▸ **assureOrderDescending**(): `T`

Assures the descending order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be descending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

#### Returns

`T`

___

### o

▸ **o**(): `T`

Alias for assureOrder

Assures the order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be ascending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

#### Returns

`T`

___

### od

▸ **od**(): `T`

alias for assureOrderDescending

Assures the descending order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be descending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

#### Returns

`T`
