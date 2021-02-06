[fluent-iterable - v1.8.7](../README.md) / FluentAsyncIterable

# Interface: FluentAsyncIterable<T\>

Represents an asynchronous iterable extended with common processing and mutating capabilities.<br>
  The capabilities introduced are defined as a [fluent interface](https://en.wikipedia.org/wiki/Fluent_interface) and thus they support *method chaining*.

## Type parameters

Name | Description |
------ | ------ |
`T` | The type of the items in the asynchronous iterable.    |

## Hierarchy

* *AsyncIterable*<T\>

* [*OrderAssurable*](orderassurable.md)<[*FluentAsyncIterable*](fluentasynciterable.md)<T\>\>

* *FluentIterableEmitter*<T\>

  ↳ **FluentAsyncIterable**

## Table of contents

### Properties

- [all](fluentasynciterable.md#all)
- [any](fluentasynciterable.md#any)
- [append](fluentasynciterable.md#append)
- [avg](fluentasynciterable.md#avg)
- [combine](fluentasynciterable.md#combine)
- [concat](fluentasynciterable.md#concat)
- [contains](fluentasynciterable.md#contains)
- [count](fluentasynciterable.md#count)
- [distinct](fluentasynciterable.md#distinct)
- [emit](fluentasynciterable.md#emit)
- [execute](fluentasynciterable.md#execute)
- [filter](fluentasynciterable.md#filter)
- [first](fluentasynciterable.md#first)
- [flatten](fluentasynciterable.md#flatten)
- [forEach](fluentasynciterable.md#foreach)
- [group](fluentasynciterable.md#group)
- [hasExactly](fluentasynciterable.md#hasexactly)
- [hasLessOrExactly](fluentasynciterable.md#haslessorexactly)
- [hasLessThan](fluentasynciterable.md#haslessthan)
- [hasMoreOrExactly](fluentasynciterable.md#hasmoreorexactly)
- [hasMoreThan](fluentasynciterable.md#hasmorethan)
- [isDistinct](fluentasynciterable.md#isdistinct)
- [join](fluentasynciterable.md#join)
- [last](fluentasynciterable.md#last)
- [map](fluentasynciterable.md#map)
- [max](fluentasynciterable.md#max)
- [merge](fluentasynciterable.md#merge)
- [mergeCatching](fluentasynciterable.md#mergecatching)
- [mergeEmitter](fluentasynciterable.md#mergeemitter)
- [mergeEmitterCatching](fluentasynciterable.md#mergeemittercatching)
- [min](fluentasynciterable.md#min)
- [partition](fluentasynciterable.md#partition)
- [prepend](fluentasynciterable.md#prepend)
- [reduce](fluentasynciterable.md#reduce)
- [reduceAndMap](fluentasynciterable.md#reduceandmap)
- [repeat](fluentasynciterable.md#repeat)
- [skip](fluentasynciterable.md#skip)
- [skipWhile](fluentasynciterable.md#skipwhile)
- [sort](fluentasynciterable.md#sort)
- [sortBy](fluentasynciterable.md#sortby)
- [sum](fluentasynciterable.md#sum)
- [take](fluentasynciterable.md#take)
- [takeWhile](fluentasynciterable.md#takewhile)
- [toArray](fluentasynciterable.md#toarray)
- [toObject](fluentasynciterable.md#toobject)
- [top](fluentasynciterable.md#top)
- [waitAll](fluentasynciterable.md#waitall)
- [withIndex](fluentasynciterable.md#withindex)

### Methods

- [[Symbol.asyncIterator]](fluentasynciterable.md#[symbol.asynciterator])
- [assureOrder](fluentasynciterable.md#assureorder)
- [assureOrderDescending](fluentasynciterable.md#assureorderdescending)
- [combineEmitter](fluentasynciterable.md#combineemitter)
- [concatEmitter](fluentasynciterable.md#concatemitter)
- [o](fluentasynciterable.md#o)
- [od](fluentasynciterable.md#od)

## Properties

### all

• **all**: *FluentAsyncAllFunction*<T\>

___

### any

• **any**: *FluentAsyncAnyFunction*<T\>

___

### append

• **append**: *FluentAsyncAppendFunction*<T\>

___

### avg

• **avg**: *FluentAsyncAvgFunction*<T\>

___

### combine

• **combine**: *FluentAsyncCombineFunction*<T\>

___

### concat

• **concat**: *FluentAsyncConcatFunction*<T\>

___

### contains

• **contains**: *FluentAsyncContainsFunction*<T\>

___

### count

• **count**: *FluentAsyncCountFunction*<T\>

___

### distinct

• **distinct**: *FluentAsyncDistinctFunction*<T\>

___

### emit

• **emit**: *FluentAsyncEmitFunction*<T\>

___

### execute

• **execute**: *FluentAsyncExecuteFunction*<T\>

___

### filter

• **filter**: *FluentAsyncFilterFunction*<T\>

___

### first

• **first**: *FluentAsyncFirstFunction*<T\>

___

### flatten

• **flatten**: *AsyncFlattenFunction*<T\>

___

### forEach

• **forEach**: *FluentAsyncForEachFunction*<T\>

___

### group

• **group**: *FluentAsyncGroupFunction*<T\>

___

### hasExactly

• **hasExactly**: FluentAsyncHasExactlyFunction

___

### hasLessOrExactly

• **hasLessOrExactly**: FluentAsyncHasLessOrExactly

___

### hasLessThan

• **hasLessThan**: FluentAsyncHasLessThanFunction

___

### hasMoreOrExactly

• **hasMoreOrExactly**: FluentAsyncHasMoreOrExactlyFunction

___

### hasMoreThan

• **hasMoreThan**: FluentAsyncHasMoreThanFunction

___

### isDistinct

• **isDistinct**: *FluentAsyncIsDistinctFunction*<T\>

___

### join

• **join**: *FluentAsyncJoinFunction*<T\>

___

### last

• **last**: *FluentAsyncLastFunction*<T\>

___

### map

• **map**: *FluentAsyncMapFunction*<T\>

___

### max

• **max**: *FluentAsyncMaxFunction*<T\>

___

### merge

• **merge**: *FluentAsyncMergeFunction*<T\>

___

### mergeCatching

• **mergeCatching**: *FluentAsyncMergeCatchingFunction*<T\>

___

### mergeEmitter

• **mergeEmitter**: *FluentAsyncMergeEmitterFunction*<T\>

___

### mergeEmitterCatching

• **mergeEmitterCatching**: *FluentAsyncMergeEmitterCatchingFunction*<T\>

___

### min

• **min**: *FluentAsyncMinFunction*<T\>

___

### partition

• **partition**: *FluentAsyncPartitionFunction*<T\>

___

### prepend

• **prepend**: *FluentAsyncPrependFunction*<T\>

___

### reduce

• **reduce**: *FluentAsyncReduceFunction*<T\>

___

### reduceAndMap

• **reduceAndMap**: *FluentAsyncReduceAndMapFunction*<T\>

___

### repeat

• **repeat**: *FluentAsyncRepeatFunction*<T\>

___

### skip

• **skip**: *FluentAsyncSkipFunction*<T\>

___

### skipWhile

• **skipWhile**: *FluentAsyncSkipWhileFunction*<T\>

___

### sort

• **sort**: *FluentAsyncSortFunction*<T\>

___

### sortBy

• **sortBy**: *AsyncSortByFunction*<T\>

___

### sum

• **sum**: *FluentAsyncSumFunction*<T\>

___

### take

• **take**: *TakeFunction*<T\>

___

### takeWhile

• **takeWhile**: *FluentAsyncTakeWhileFunction*<T\>

___

### toArray

• **toArray**: *FluentAsyncToArrayFunction*<T\>

___

### toObject

• **toObject**: *FluentAsyncToObjectFunction*<T\>

___

### top

• **top**: *FluentAsyncTopFunction*<T\>

___

### waitAll

• **waitAll**: *FluentAsyncWaitAllFunction*<T\>

___

### withIndex

• **withIndex**: *FluentAsyncWithIndexFunction*<T\>

## Methods

### [Symbol.asyncIterator]

▸ **[Symbol.asyncIterator]**(): *AsyncIterator*<T, *any*, *undefined*\>

**Returns:** *AsyncIterator*<T, *any*, *undefined*\>

___

### assureOrder

▸ **assureOrder**(): [*FluentAsyncIterable*](fluentasynciterable.md)<T\>

Assures the order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be ascending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

**Returns:** [*FluentAsyncIterable*](fluentasynciterable.md)<T\>

Inherited from: [OrderAssurable](orderassurable.md)

___

### assureOrderDescending

▸ **assureOrderDescending**(): [*FluentAsyncIterable*](fluentasynciterable.md)<T\>

Assures the descending order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be descending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

**Returns:** [*FluentAsyncIterable*](fluentasynciterable.md)<T\>

Inherited from: [OrderAssurable](orderassurable.md)

___

### combineEmitter

▸ **combineEmitter**<U\>(`emitter`: *EventEmitter*, `options?`: FluentEmitOptions): [*FluentAsyncIterable*](fluentasynciterable.md)<[T, U]\>

Join the iterable with an EventEmitter, returning a new async iterable with a NxN combination

**IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
emission generates a new yielded result. The default key event is **'data'**.

Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.

If you need to change the key event or other characteristics, you can do it through the **options** parameter

#### Type parameters:

Name | Default |
------ | ------ |
`U` | *any* |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`emitter` | *EventEmitter* | The EventEmitter   |
`options?` | FluentEmitOptions | The EventEmitter options. Optional    |

**Returns:** [*FluentAsyncIterable*](fluentasynciterable.md)<[T, U]\>

▸ **combineEmitter**<U, K\>(`emitter`: *EventEmitter*, `keyA`: [*Mapper*](mapper.md)<T, K\>, `keyB`: [*Mapper*](mapper.md)<U, K\>, `options?`: FluentEmitOptions): [*FluentAsyncIterable*](fluentasynciterable.md)<[T, U]\>

Join the iterable with another the EventEmitter, returning a new async iterable with the inner matching combinations

**IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
emission generates a new yielded result. The default key event is **'data'**.

Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.

If you need to change the key event or other characteristics, you can do it through the **options** parameter

#### Type parameters:

Name |
------ |
`U` |
`K` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`emitter` | *EventEmitter* | The EventEmitter   |
`keyA` | [*Mapper*](mapper.md)<T, K\> | A mapper that returns the key map value from the left iterable   |
`keyB` | [*Mapper*](mapper.md)<U, K\> | A mapper that returns the key map value from the right iterable    |
`options?` | FluentEmitOptions | The EventEmitter options. Optional   |

**Returns:** [*FluentAsyncIterable*](fluentasynciterable.md)<[T, U]\>

▸ **combineEmitter**<U, K\>(`emitter`: *EventEmitter*, `keyA`: keyof T, `keyB`: [*Mapper*](mapper.md)<U, K\>, `options?`: FluentEmitOptions): [*FluentAsyncIterable*](fluentasynciterable.md)<[T, U]\>

Join the iterable with another the EventEmitter, returning a new async iterable with the inner matching combinations

**IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
emission generates a new yielded result. The default key event is **'data'**.

Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.

If you need to change the key event or other characteristics, you can do it through the **options** parameter

#### Type parameters:

Name |
------ |
`U` |
`K` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`emitter` | *EventEmitter* | The EventEmitter   |
`keyA` | keyof T | A mapper that returns the key map value from the left iterable   |
`keyB` | [*Mapper*](mapper.md)<U, K\> | A mapper that returns the key map value from the right iterable    |
`options?` | FluentEmitOptions | The EventEmitter options. Optional   |

**Returns:** [*FluentAsyncIterable*](fluentasynciterable.md)<[T, U]\>

___

### concatEmitter

▸ **concatEmitter**(`emitter`: *EventEmitter*, `options?`: FluentEmitOptions): [*FluentAsyncIterable*](fluentasynciterable.md)<T\>

Concatenates the specified Emitter to the async iterable.

**IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
emission generates a new yielded result. The default key event is **'data'**.

Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.

If you need to change the key event or other characteristics, you can do it through the **options** parameter

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`emitter` | *EventEmitter* | The EventEmitter   |
`options?` | FluentEmitOptions | The EventEmitter options. Optional   |

**Returns:** [*FluentAsyncIterable*](fluentasynciterable.md)<T\>

The [FluentAsyncIterable](fluentasynciterable.md) of the concatenated async iterables.

___

### o

▸ **o**(): [*FluentAsyncIterable*](fluentasynciterable.md)<T\>

Alias for assureOrder

Assures the order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be ascending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

**Returns:** [*FluentAsyncIterable*](fluentasynciterable.md)<T\>

Inherited from: [OrderAssurable](orderassurable.md)

___

### od

▸ **od**(): [*FluentAsyncIterable*](fluentasynciterable.md)<T\>

alias for assureOrderDescending

Assures the descending order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be descending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

**Returns:** [*FluentAsyncIterable*](fluentasynciterable.md)<T\>

Inherited from: [OrderAssurable](orderassurable.md)
