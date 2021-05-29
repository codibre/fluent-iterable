[fluent-iterable - v1.14.6](../README.md) / FluentIterable

# Interface: FluentIterable<T\>

Represents an iterable extended with common processing and mutating capabilities.<br>
  The capabilities introduced are defined as a [fluent interface](https://en.wikipedia.org/wiki/Fluent_interface) and thus they support *method chaining*.

## Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the items in the iterable. |

## Hierarchy

* *Iterable*<T\>

* [*OrderAssurable*](orderassurable.md)<[*FluentIterable*](fluentiterable.md)<T\>\>

* *FluentIterableEmitter*<T\>

  ↳ **FluentIterable**

## Table of contents

### Properties

- [all](fluentiterable.md#all)
- [allAsync](fluentiterable.md#allasync)
- [any](fluentiterable.md#any)
- [anyAsync](fluentiterable.md#anyasync)
- [append](fluentiterable.md#append)
- [avg](fluentiterable.md#avg)
- [avgAsync](fluentiterable.md#avgasync)
- [catch](fluentiterable.md#catch)
- [catchAsync](fluentiterable.md#catchasync)
- [combine](fluentiterable.md#combine)
- [combineAsync](fluentiterable.md#combineasync)
- [concat](fluentiterable.md#concat)
- [concatAsync](fluentiterable.md#concatasync)
- [contains](fluentiterable.md#contains)
- [count](fluentiterable.md#count)
- [countAsync](fluentiterable.md#countasync)
- [distinct](fluentiterable.md#distinct)
- [distinctAsync](fluentiterable.md#distinctasync)
- [emit](fluentiterable.md#emit)
- [every](fluentiterable.md#every)
- [everyAsync](fluentiterable.md#everyasync)
- [execute](fluentiterable.md#execute)
- [executeAsync](fluentiterable.md#executeasync)
- [filter](fluentiterable.md#filter)
- [filterAsync](fluentiterable.md#filterasync)
- [first](fluentiterable.md#first)
- [firstAsync](fluentiterable.md#firstasync)
- [flatMap](fluentiterable.md#flatmap)
- [flatMapAsync](fluentiterable.md#flatmapasync)
- [flatMerge](fluentiterable.md#flatmerge)
- [flatten](fluentiterable.md#flatten)
- [flattenAsync](fluentiterable.md#flattenasync)
- [forEach](fluentiterable.md#foreach)
- [forEachAsync](fluentiterable.md#foreachasync)
- [group](fluentiterable.md#group)
- [groupAsync](fluentiterable.md#groupasync)
- [hasExactly](fluentiterable.md#hasexactly)
- [hasLessOrExactly](fluentiterable.md#haslessorexactly)
- [hasLessThan](fluentiterable.md#haslessthan)
- [hasMoreOrExactly](fluentiterable.md#hasmoreorexactly)
- [hasMoreThan](fluentiterable.md#hasmorethan)
- [isDistinct](fluentiterable.md#isdistinct)
- [isDistinctAsync](fluentiterable.md#isdistinctasync)
- [join](fluentiterable.md#join)
- [joinAsync](fluentiterable.md#joinasync)
- [last](fluentiterable.md#last)
- [lastAsync](fluentiterable.md#lastasync)
- [map](fluentiterable.md#map)
- [mapAsync](fluentiterable.md#mapasync)
- [max](fluentiterable.md#max)
- [maxAsync](fluentiterable.md#maxasync)
- [min](fluentiterable.md#min)
- [minAsync](fluentiterable.md#minasync)
- [next](fluentiterable.md#next)
- [partition](fluentiterable.md#partition)
- [prepend](fluentiterable.md#prepend)
- [reduce](fluentiterable.md#reduce)
- [reduceAndMap](fluentiterable.md#reduceandmap)
- [reduceAndMapAsync](fluentiterable.md#reduceandmapasync)
- [reduceAsync](fluentiterable.md#reduceasync)
- [repeat](fluentiterable.md#repeat)
- [skip](fluentiterable.md#skip)
- [skipWhile](fluentiterable.md#skipwhile)
- [skipWhileAsync](fluentiterable.md#skipwhileasync)
- [some](fluentiterable.md#some)
- [someAsync](fluentiterable.md#someasync)
- [sort](fluentiterable.md#sort)
- [sortBy](fluentiterable.md#sortby)
- [sum](fluentiterable.md#sum)
- [sumAsync](fluentiterable.md#sumasync)
- [take](fluentiterable.md#take)
- [takeWhile](fluentiterable.md#takewhile)
- [takeWhileAsync](fluentiterable.md#takewhileasync)
- [toArray](fluentiterable.md#toarray)
- [toAsync](fluentiterable.md#toasync)
- [toObject](fluentiterable.md#toobject)
- [toObjectAsync](fluentiterable.md#toobjectasync)
- [top](fluentiterable.md#top)
- [topAsync](fluentiterable.md#topasync)
- [waitAll](fluentiterable.md#waitall)
- [whenEmpty](fluentiterable.md#whenempty)
- [withIndex](fluentiterable.md#withindex)

### Methods

- [[Symbol.iterator]](fluentiterable.md#[symbol.iterator])
- [assureOrder](fluentiterable.md#assureorder)
- [assureOrderDescending](fluentiterable.md#assureorderdescending)
- [combineEmitter](fluentiterable.md#combineemitter)
- [concatEmitter](fluentiterable.md#concatemitter)
- [o](fluentiterable.md#o)
- [od](fluentiterable.md#od)

## Properties

### all

• **all**: *AllFunction*<T\>

___

### allAsync

• **allAsync**: *AsyncAllFunction*<T\>

___

### any

• **any**: *AnyFunction*<T\>

___

### anyAsync

• **anyAsync**: *AsyncAnyFunction*<T\>

___

### append

• **append**: *AppendFunction*<T\>

___

### avg

• **avg**: *AvgFunction*<T\>

___

### avgAsync

• **avgAsync**: *AsyncAvgFunction*<T\>

___

### catch

• **catch**: *CatchFunction*<T\>

___

### catchAsync

• **catchAsync**: *AsyncCatchFunction*<T\>

___

### combine

• **combine**: *CombineFunction*<T\>

___

### combineAsync

• **combineAsync**: *AsyncCombineFunction*<T\>

___

### concat

• **concat**: *ConcatFunction*<T\>

___

### concatAsync

• **concatAsync**: *AsyncConcatFunction*<T\>

___

### contains

• **contains**: *ContainsFunction*<T\>

___

### count

• **count**: *CountFunction*<T\>

___

### countAsync

• **countAsync**: *AsyncCountFunction*<T\>

___

### distinct

• **distinct**: *DistinctFunction*<T\>

___

### distinctAsync

• **distinctAsync**: *AsyncDistinctFunction*<T\>

___

### emit

• **emit**: *EmitFunction*<T\>

___

### every

• **every**: *AllFunction*<T\>

___

### everyAsync

• **everyAsync**: *AsyncAllFunction*<T\>

___

### execute

• **execute**: *ExecuteFunction*<T\>

___

### executeAsync

• **executeAsync**: *AsyncExecuteFunction*<T\>

___

### filter

• **filter**: *FilterFunction*<T\>

___

### filterAsync

• **filterAsync**: *AsyncFilterFunction*<T\>

___

### first

• **first**: *FirstFunction*<T\>

___

### firstAsync

• **firstAsync**: *AsyncFirstFunction*<T\>

___

### flatMap

• **flatMap**: *FlattenFunction*<T\>

___

### flatMapAsync

• **flatMapAsync**: *AsyncFlattenFunction*<T\>

___

### flatMerge

• **flatMerge**: *FlatMergeFunction*<T\>

___

### flatten

• **flatten**: *FlattenFunction*<T\>

___

### flattenAsync

• **flattenAsync**: *AsyncFlattenFunction*<T\>

___

### forEach

• **forEach**: *ForEachFunction*<T\>

___

### forEachAsync

• **forEachAsync**: *AsyncForEachFunction*<T\>

___

### group

• **group**: *GroupFunction*<T\>

___

### groupAsync

• **groupAsync**: *AsyncGroupFunction*<T\>

___

### hasExactly

• **hasExactly**: HasExactlyFunction

___

### hasLessOrExactly

• **hasLessOrExactly**: HasLessOrExactly

___

### hasLessThan

• **hasLessThan**: HasLessThanFunction

___

### hasMoreOrExactly

• **hasMoreOrExactly**: HasMoreOrExactlyFunction

___

### hasMoreThan

• **hasMoreThan**: HasMoreThanFunction

___

### isDistinct

• **isDistinct**: *IsDistinctFunction*<T\>

___

### isDistinctAsync

• **isDistinctAsync**: *AsyncIsDistinctFunction*<T\>

___

### join

• **join**: *JoinFunction*<T\>

___

### joinAsync

• **joinAsync**: *AsyncJoinFunction*<T\>

___

### last

• **last**: *LastFunction*<T\>

___

### lastAsync

• **lastAsync**: *AsyncLastFunction*<T\>

___

### map

• **map**: *MapFunction*<T\>

___

### mapAsync

• **mapAsync**: *AsyncMapFunction*<T\>

___

### max

• **max**: *MaxFunction*<T\>

___

### maxAsync

• **maxAsync**: *AsyncMaxFunction*<T\>

___

### min

• **min**: *MinFunction*<T\>

___

### minAsync

• **minAsync**: *AsyncMinFunction*<T\>

___

### next

• **next**: *NextFunction*<T\>

___

### partition

• **partition**: *PartitionFunction*<T\>

___

### prepend

• **prepend**: *PrependFunction*<T\>

___

### reduce

• **reduce**: *ReduceFunction*<T\>

___

### reduceAndMap

• **reduceAndMap**: *ReduceAndMapFunction*<T\>

___

### reduceAndMapAsync

• **reduceAndMapAsync**: *AsyncReduceAndMapFunction*<T\>

___

### reduceAsync

• **reduceAsync**: *AsyncReduceFunction*<T\>

___

### repeat

• **repeat**: *RepeatFunction*<T\>

___

### skip

• **skip**: *SkipFunction*<T\>

___

### skipWhile

• **skipWhile**: *SkipWhileFunction*<T\>

___

### skipWhileAsync

• **skipWhileAsync**: *AsyncSkipWhileFunction*<T\>

___

### some

• **some**: *AnyFunction*<T\>

___

### someAsync

• **someAsync**: *AsyncAnyFunction*<T\>

___

### sort

• **sort**: *SortFunction*<T\>

___

### sortBy

• **sortBy**: *SortByFunction*<T\>

___

### sum

• **sum**: *SumFunction*<T\>

___

### sumAsync

• **sumAsync**: *AsyncSumFunction*<T\>

___

### take

• **take**: *TakeFunction*<T\>

___

### takeWhile

• **takeWhile**: *TakeWhileFunction*<T\>

___

### takeWhileAsync

• **takeWhileAsync**: *AsyncTakeWhileFunction*<T\>

___

### toArray

• **toArray**: *ToArrayFunction*<T\>

___

### toAsync

• **toAsync**: *ToAsyncFunction*<T\>

___

### toObject

• **toObject**: *ToObjectFunction*<T\>

___

### toObjectAsync

• **toObjectAsync**: *AsyncToObjectFunction*<T\>

___

### top

• **top**: *TopFunction*<T\>

___

### topAsync

• **topAsync**: *AsyncTopFunction*<T\>

___

### waitAll

• **waitAll**: *WaitAllFunction*<T\>

___

### whenEmpty

• **whenEmpty**: WhenEmptyFunction

___

### withIndex

• **withIndex**: *WithIndexFunction*<T\>

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<T, any, undefined\>

**Returns:** *Iterator*<T, any, undefined\>

Inherited from: Iterable.\_\_@iterator

___

### assureOrder

▸ **assureOrder**(): [*FluentIterable*](fluentiterable.md)<T\>

Assures the order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be ascending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

**Returns:** [*FluentIterable*](fluentiterable.md)<T\>

Inherited from: [OrderAssurable](orderassurable.md)

___

### assureOrderDescending

▸ **assureOrderDescending**(): [*FluentIterable*](fluentiterable.md)<T\>

Assures the descending order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be descending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

**Returns:** [*FluentIterable*](fluentiterable.md)<T\>

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

| Name | Default |
| :------ | :------ |
| `U` | *any* |

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | *EventEmitter* | The EventEmitter |
| `options?` | FluentEmitOptions | The EventEmitter options. Optional |

**Returns:** [*FluentAsyncIterable*](fluentasynciterable.md)<[T, U]\>

Inherited from: FluentIterableEmitter.combineEmitter

▸ **combineEmitter**<U, K\>(`emitter`: *EventEmitter*, `keyA`: [*Mapper*](mapper.md)<T, K\>, `keyB`: [*Mapper*](mapper.md)<U, K\>, `options?`: FluentEmitOptions): [*FluentAsyncIterable*](fluentasynciterable.md)<[T, U]\>

Join the iterable with another the EventEmitter, returning a new async iterable with the inner matching combinations

**IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
emission generates a new yielded result. The default key event is **'data'**.

Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.

If you need to change the key event or other characteristics, you can do it through the **options** parameter

#### Type parameters:

| Name |
| :------ |
| `U` |
| `K` |

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | *EventEmitter* | The EventEmitter |
| `keyA` | [*Mapper*](mapper.md)<T, K\> | A mapper that returns the key map value from the left iterable |
| `keyB` | [*Mapper*](mapper.md)<U, K\> | A mapper that returns the key map value from the right iterable |
| `options?` | FluentEmitOptions | The EventEmitter options. Optional |

**Returns:** [*FluentAsyncIterable*](fluentasynciterable.md)<[T, U]\>

Inherited from: FluentIterableEmitter.combineEmitter

▸ **combineEmitter**<U, K\>(`emitter`: *EventEmitter*, `keyA`: keyof T, `keyB`: [*Mapper*](mapper.md)<U, K\>, `options?`: FluentEmitOptions): [*FluentAsyncIterable*](fluentasynciterable.md)<[T, U]\>

Join the iterable with another the EventEmitter, returning a new async iterable with the inner matching combinations

**IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
emission generates a new yielded result. The default key event is **'data'**.

Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.

If you need to change the key event or other characteristics, you can do it through the **options** parameter

#### Type parameters:

| Name |
| :------ |
| `U` |
| `K` |

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | *EventEmitter* | The EventEmitter |
| `keyA` | keyof T | A mapper that returns the key map value from the left iterable |
| `keyB` | [*Mapper*](mapper.md)<U, K\> | A mapper that returns the key map value from the right iterable |
| `options?` | FluentEmitOptions | The EventEmitter options. Optional |

**Returns:** [*FluentAsyncIterable*](fluentasynciterable.md)<[T, U]\>

Inherited from: FluentIterableEmitter.combineEmitter

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | *EventEmitter* | The EventEmitter |
| `options?` | FluentEmitOptions | The EventEmitter options. Optional |

**Returns:** [*FluentAsyncIterable*](fluentasynciterable.md)<T\>

The [FluentAsyncIterable](fluentasynciterable.md) of the concatenated async iterables.

Inherited from: FluentIterableEmitter.concatEmitter

___

### o

▸ **o**(): [*FluentIterable*](fluentiterable.md)<T\>

Alias for assureOrder

Assures the order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be ascending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

**Returns:** [*FluentIterable*](fluentiterable.md)<T\>

Inherited from: [OrderAssurable](orderassurable.md)

___

### od

▸ **od**(): [*FluentIterable*](fluentiterable.md)<T\>

alias for assureOrderDescending

Assures the descending order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be descending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

**Returns:** [*FluentIterable*](fluentiterable.md)<T\>

Inherited from: [OrderAssurable](orderassurable.md)
