[fluent-iterable - v0.2.1](../README.md) › ["types/types"](../modules/_types_types_.md) › [ToObjectAsync](_types_types_.toobjectasync.md)

# Interface: ToObjectAsync ‹**T**›

## Type parameters

▪ **T**

## Hierarchy

* **ToObjectAsync**

## Callable

▸ ‹**R**›(`keySelector`: [AsyncMapper](_types_types_.asyncmapper.md)‹T, keyof R›, `valueSelector?`: [AsyncMapper](_types_types_.asyncmapper.md)‹T, R[keyof R]›): *Promise‹R›*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`keySelector` | [AsyncMapper](_types_types_.asyncmapper.md)‹T, keyof R› |
`valueSelector?` | [AsyncMapper](_types_types_.asyncmapper.md)‹T, R[keyof R]› |

**Returns:** *Promise‹R›*
