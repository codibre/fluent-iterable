[fluent-iterable - v0.1.6](../README.md) › ["mergeIterators"](_mergeiterators_.md)

# Module: "mergeIterators"

## Index

### Interfaces

* [ErrorCallback](../interfaces/_mergeiterators_.errorcallback.md)

### Functions

* [getNextAsyncIterator](_mergeiterators_.md#getnextasynciterator)
* [getNextAsyncIteratorFactory](_mergeiterators_.md#getnextasynciteratorfactory)
* [mergeIterators](_mergeiterators_.md#mergeiterators)

## Functions

###  getNextAsyncIterator

▸ **getNextAsyncIterator**‹**T**›(`asyncIterator`: AsyncIterator‹T›, `index`: number): *Promise‹object›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`asyncIterator` | AsyncIterator‹T› |
`index` | number |

**Returns:** *Promise‹object›*

___

###  getNextAsyncIteratorFactory

▸ **getNextAsyncIteratorFactory**‹**T**›(`callback?`: [ErrorCallback](../interfaces/_mergeiterators_.errorcallback.md)): *(Anonymous function)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | [ErrorCallback](../interfaces/_mergeiterators_.errorcallback.md) |

**Returns:** *(Anonymous function)*

___

###  mergeIterators

▸ **mergeIterators**‹**T**›(`callback`: [ErrorCallback](../interfaces/_mergeiterators_.errorcallback.md) | undefined, ...`iterators`: AsyncIterator‹T›[]): *AsyncGenerator‹any, void, unknown›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [ErrorCallback](../interfaces/_mergeiterators_.errorcallback.md) &#124; undefined |
`...iterators` | AsyncIterator‹T›[] |

**Returns:** *AsyncGenerator‹any, void, unknown›*
