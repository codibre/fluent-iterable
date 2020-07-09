[fluent-iterable - v0.6.1](../README.md) › ["async-base/merging/merge-iterators"](_async_base_merging_merge_iterators_.md)

# Module: "async-base/merging/merge-iterators"

## Index

### Functions

* [getNextValue](_async_base_merging_merge_iterators_.md#getnextvalue)
* [mergeIterators](_async_base_merging_merge_iterators_.md#mergeiterators)

## Functions

###  getNextValue

▸ **getNextValue**(`asyncIteratorsValues`: Map‹any, any›): *Promise‹[NextResult](../interfaces/_async_base_merging_merge_types_.nextresult.md)‹any››*

**Parameters:**

Name | Type |
------ | ------ |
`asyncIteratorsValues` | Map‹any, any› |

**Returns:** *Promise‹[NextResult](../interfaces/_async_base_merging_merge_types_.nextresult.md)‹any››*

___

###  mergeIterators

▸ **mergeIterators**‹**T**›(`callback`: [ErrorCallback](../interfaces/_types_.errorcallback.md) | undefined, ...`iterators`: AsyncIterator‹T›[]): *AsyncIterable‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [ErrorCallback](../interfaces/_types_.errorcallback.md) &#124; undefined |
`...iterators` | AsyncIterator‹T›[] |

**Returns:** *AsyncIterable‹T›*
