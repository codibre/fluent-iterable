[fluent-iterable - v0.2.1](../README.md) › ["mergeIterators"](_mergeiterators_.md)

# Module: "mergeIterators"

## Index

### Interfaces

* [ErrorCallback](../interfaces/_mergeiterators_.errorcallback.md)
* [GetNextAsyncIterator](../interfaces/_mergeiterators_.getnextasynciterator.md)
* [NextResult](../interfaces/_mergeiterators_.nextresult.md)

### Functions

* [getNextAsyncIterator](_mergeiterators_.md#getnextasynciterator)
* [getNextAsyncIteratorFactory](_mergeiterators_.md#getnextasynciteratorfactory)
* [mergeIterators](_mergeiterators_.md#mergeiterators)

## Functions

###  getNextAsyncIterator

▸ **getNextAsyncIterator**‹**T**›(`asyncIterator`: AsyncIterator‹T›, `index`: number): *Promise‹[NextResult](../interfaces/_mergeiterators_.nextresult.md)‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`asyncIterator` | AsyncIterator‹T› |
`index` | number |

**Returns:** *Promise‹[NextResult](../interfaces/_mergeiterators_.nextresult.md)‹T››*

___

###  getNextAsyncIteratorFactory

▸ **getNextAsyncIteratorFactory**‹**T**›(`callback?`: [ErrorCallback](../interfaces/_mergeiterators_.errorcallback.md)): *[GetNextAsyncIterator](../interfaces/_mergeiterators_.getnextasynciterator.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | [ErrorCallback](../interfaces/_mergeiterators_.errorcallback.md) |

**Returns:** *[GetNextAsyncIterator](../interfaces/_mergeiterators_.getnextasynciterator.md)‹T›*

___

###  mergeIterators

▸ **mergeIterators**‹**T**›(`callback`: [ErrorCallback](../interfaces/_mergeiterators_.errorcallback.md) | undefined, ...`iterators`: AsyncIterator‹T›[]): *AsyncIterable‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [ErrorCallback](../interfaces/_mergeiterators_.errorcallback.md) &#124; undefined |
`...iterators` | AsyncIterator‹T›[] |

**Returns:** *AsyncIterable‹T›*
