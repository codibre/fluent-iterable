[fluent-iterable - v1.0.2](../README.md) › ["sync-base/partition"](_sync_base_partition_.md)

# Module: "sync-base/partition"

## Index

### Functions

* [partition](_sync_base_partition_.md#partition)
* [readPartition](_sync_base_partition_.md#readpartition)

## Functions

###  partition

▸ **partition**‹**T**›(`this`: Iterable‹T›, `size`: number): *Iterable‹Iterable‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`this` | Iterable‹T› |
`size` | number |

**Returns:** *Iterable‹Iterable‹T››*

___

###  readPartition

▸ **readPartition**‹**T**›(`iterator`: Iterator‹T›, `next`: IteratorResult‹T›, `size`: number): *Iterable‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterator` | Iterator‹T› |
`next` | IteratorResult‹T› |
`size` | number |

**Returns:** *Iterable‹T›*
