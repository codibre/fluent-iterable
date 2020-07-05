[fluent-iterable - v0.2.1](../README.md) › ["types/types"](../modules/_types_types_.md) › [ReduceAndMapAsync](_types_types_.reduceandmapasync.md)

# Interface: ReduceAndMapAsync ‹**T**›

## Type parameters

▪ **T**

## Hierarchy

* **ReduceAndMapAsync**

## Callable

▸ ‹**A**, **R**›(`reducer`: [AsyncReducer](_types_types_.asyncreducer.md)‹T, A›, `initial`: A, `result`: [AsyncMapper](_types_types_.asyncmapper.md)‹A, R›): *Promise‹R›*

**Type parameters:**

▪ **A**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`reducer` | [AsyncReducer](_types_types_.asyncreducer.md)‹T, A› |
`initial` | A |
`result` | [AsyncMapper](_types_types_.asyncmapper.md)‹A, R› |

**Returns:** *Promise‹R›*
