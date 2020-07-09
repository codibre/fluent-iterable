[fluent-iterable - v0.6.1](../README.md) › ["async-base/partition-async"](_async_base_partition_async_.md)

# Module: "async-base/partition-async"

## Index

### Functions

* [partitionAsync](_async_base_partition_async_.md#partitionasync)
* [readPartition](_async_base_partition_async_.md#readpartition)

## Functions

###  partitionAsync

▸ **partitionAsync**‹**T**›(`iterable`: AsyncIterable‹T›, `size`: number): *AsyncIterable‹AsyncIterable‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AsyncIterable‹T› |
`size` | number |

**Returns:** *AsyncIterable‹AsyncIterable‹T››*

___

###  readPartition

▸ **readPartition**‹**T**›(`iterator`: AsyncIterator‹T›, `next`: IteratorResult‹T›, `size`: number): *AsyncIterable‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterator` | AsyncIterator‹T› |
`next` | IteratorResult‹T› |
`size` | number |

**Returns:** *AsyncIterable‹T›*
