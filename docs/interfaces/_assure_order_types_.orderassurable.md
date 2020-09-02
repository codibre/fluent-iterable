[fluent-iterable - v1.6.0](../README.md) › ["assure-order-types"](../modules/_assure_order_types_.md) › [OrderAssurable](_assure_order_types_.orderassurable.md)

# Interface: OrderAssurable ‹**T**›

## Type parameters

▪ **T**

## Hierarchy

* **OrderAssurable**

  ↳ [FluentIterable](_types_.fluentiterable.md)

  ↳ [FluentAsyncIterable](_types_.fluentasynciterable.md)

## Index

### Methods

* [assureOrder](_assure_order_types_.orderassurable.md#assureorder)
* [assureOrderDescending](_assure_order_types_.orderassurable.md#assureorderdescending)
* [o](_assure_order_types_.orderassurable.md#o)
* [od](_assure_order_types_.orderassurable.md#od)

## Methods

###  assureOrder

▸ **assureOrder**(): *T*

Assures the order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be ascending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

**Returns:** *T*

___

###  assureOrderDescending

▸ **assureOrderDescending**(): *T*

Assures the descending order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be descending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

**Returns:** *T*

___

###  o

▸ **o**(): *T*

Alias for assureOrder

Assures the order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be ascending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

**Returns:** *T*

___

###  od

▸ **od**(): *T*

alias for assureOrderDescending

Assures the descending order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be descending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

**Returns:** *T*
