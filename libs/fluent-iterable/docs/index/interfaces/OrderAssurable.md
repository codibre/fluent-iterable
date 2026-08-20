[**fluent-iterable v1.38.1**](../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../README.md) / [index](../README.md) / OrderAssurable

# Interface: OrderAssurable\<T\>

## Extended by

- [`FluentIterable`](FluentIterable.md)
- [`FluentAsyncIterable`](FluentAsyncIterable.md)
- [`FluentAsyncIterable`](../../types/interfaces/FluentAsyncIterable.md)

## Type Parameters

• **T**

## Methods

### assureOrder()

> **assureOrder**(): `T`

Assures the order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be ascending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

#### Returns

`T`

***

### assureOrderDescending()

> **assureOrderDescending**(): `T`

Assures the descending order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be descending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

#### Returns

`T`

***

### o()

> **o**(): `T`

Alias for assureOrder

Assures the order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be ascending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

#### Returns

`T`

***

### od()

> **od**(): `T`

alias for assureOrderDescending

Assures the descending order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be descending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

#### Returns

`T`
