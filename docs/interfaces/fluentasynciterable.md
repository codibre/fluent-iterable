P[fluent-iterable - v1.10.3](../README.md) / FluentAsyncIterable

# Interface: FluentAsyncIterable<T\>

Represents an asynchronous iterable extended with common processing and mutating capabilities.<br>
The capabilities introduced are defined as a [fluent interface](https://en.wikipedia.org/wiki/Fluent_interface) and thus they support _method chaining_.

## Type parameters

| Name | Description                                         |
| ---- | --------------------------------------------------- |
| `T`  | The type of the items in the asynchronous iterable. |

## Hierarchy

- _AsyncIterable_<T\>

- [_OrderAssurable_](orderassurable.md)<[_FluentAsyncIterable_](fluentasynciterable.md)<T\>\>

- _FluentIterableEmitter_<T\>

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
- [every](fluentasynciterable.md#every)
- [execute](fluentasynciterable.md#execute)
- [filter](fluentasynciterable.md#filter)
- [first](fluentasynciterable.md#first)
- [flatMap](fluentasynciterable.md#flatmap)
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
- [some](fluentasynciterable.md#some)
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

• **all**: _AsyncAllFunction_<T\>

---

### any

• **any**: _AsyncAnyFunction_<T\>

---

### append

• **append**: _AsyncAppendFunction_<T\>

---

### avg

• **avg**: _AsyncAvgFunction_<T\>

---

### combine

• **combine**: _AsyncCombineFunction_<T\>

---

### concat

• **concat**: _AsyncConcatFunction_<T\>

---

### contains

• **contains**: _AsyncContainsFunction_<T\>

---

### count

• **count**: _AsyncCountFunction_<T\>

---

### distinct

• **distinct**: _AsyncDistinctFunction_<T\>

---

### emit

• **emit**: _AsyncEmitFunction_<T\>

---

### every

• **every**: _AsyncAllFunction_<T\>

---

### execute

• **execute**: _AsyncExecuteFunction_<T\>

---

### filter

• **filter**: _AsyncFilterFunction_<T\>

---

### first

• **first**: _AsyncFirstFunction_<T\>

---

### flatMap

• **flatMap**: _AsyncFlattenFunction_<T\>

---

### flatten

• **flatten**: _AsyncFlattenFunction_<T\>

---

### forEach

• **forEach**: _AsyncForEachFunction_<T\>

---

### group

• **group**: _AsyncGroupFunction_<T\>

---

### hasExactly

• **hasExactly**: AsyncHasExactlyFunction

---

### hasLessOrExactly

• **hasLessOrExactly**: AsyncHasLessOrExactly

---

### hasLessThan

• **hasLessThan**: AsyncHasLessThanFunction

---

### hasMoreOrExactly

• **hasMoreOrExactly**: AsyncHasMoreOrExactlyFunction

---

### hasMoreThan

• **hasMoreThan**: AsyncHasMoreThanFunction

---

### isDistinct

• **isDistinct**: _AsyncIsDistinctFunction_<T\>

---

### join

• **join**: _AsyncJoinFunction_<T\>

---

### last

• **last**: _AsyncLastFunction_<T\>

---

### map

• **map**: _AsyncMapFunction_<T\>

---

### max

• **max**: _AsyncMaxFunction_<T\>

---

### merge

• **merge**: _AsyncMergeFunction_<T\>

---

### mergeCatching

• **mergeCatching**: _AsyncMergeCatchingFunction_<T\>

---

### mergeEmitter

• **mergeEmitter**: _AsyncMergeEmitterFunction_<T\>

---

### mergeEmitterCatching

• **mergeEmitterCatching**: _AsyncMergeEmitterCatchingFunction_<T\>

---

### min

• **min**: _AsyncMinFunction_<T\>

---

### partition

• **partition**: _AsyncPartitionFunction_<T\>

---

### prepend

• **prepend**: _AsyncPrependFunction_<T\>

---

### reduce

• **reduce**: _AsyncReduceFunction_<T\>

---

### reduceAndMap

• **reduceAndMap**: _AsyncReduceAndMapFunction_<T\>

---

### repeat

• **repeat**: _AsyncRepeatFunction_<T\>

---

### skip

• **skip**: _AsyncSkipFunction_<T\>

---

### skipWhile

• **skipWhile**: _AsyncSkipWhileFunction_<T\>

---

### some

• **some**: _AsyncAnyFunction_<T\>

---

### sort

• **sort**: _AsyncSortFunction_<T\>

---

### sortBy

• **sortBy**: _AsyncSortByFunction_<T\>

---

### sum

• **sum**: _AsyncSumFunction_<T\>

---

### take

• **take**: _AsyncTakeFunction_<T\>

---

### takeWhile

• **takeWhile**: _AsyncTakeWhileFunction_<T\>

---

### toArray

• **toArray**: _AsyncToArrayFunction_<T\>

---

### toObject

• **toObject**: _AsyncToObjectFunction_<T\>

---

### top

• **top**: _AsyncTopFunction_<T\>

---

### waitAll

• **waitAll**: _AsyncWaitAllFunction_<T\>

---

### withIndex

• **withIndex**: _AsyncWithIndexFunction_<T\>

## Methods

### [Symbol.asyncIterator]

▸ **[Symbol.asyncIterator]**(): _AsyncIterator_<T, _any_, _undefined_\>

**Returns:** _AsyncIterator_<T, _any_, _undefined_\>

---

### assureOrder

▸ **assureOrder**(): [_FluentAsyncIterable_](fluentasynciterable.md)<T\>

Assures the order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be ascending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

**Returns:** [_FluentAsyncIterable_](fluentasynciterable.md)<T\>

Inherited from: [OrderAssurable](orderassurable.md)

---

### assureOrderDescending

▸ **assureOrderDescending**(): [_FluentAsyncIterable_](fluentasynciterable.md)<T\>

Assures the descending order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be descending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

**Returns:** [_FluentAsyncIterable_](fluentasynciterable.md)<T\>

Inherited from: [OrderAssurable](orderassurable.md)

---

### combineEmitter

▸ **combineEmitter**<U\>(`emitter`: _EventEmitter_, `options?`: FluentEmitOptions): [_FluentAsyncIterable_](fluentasynciterable.md)<[T, U]\>

Join the iterable with an EventEmitter, returning a new async iterable with a NxN combination

**IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
emission generates a new yielded result. The default key event is **'data'**.

Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.

If you need to change the key event or other characteristics, you can do it through the **options** parameter

#### Type parameters:

| Name | Default |
| ---- | ------- |
| `U`  | _any_   |

#### Parameters:

| Name       | Type              | Description                        |
| ---------- | ----------------- | ---------------------------------- |
| `emitter`  | _EventEmitter_    | The EventEmitter                   |
| `options?` | FluentEmitOptions | The EventEmitter options. Optional |

**Returns:** [_FluentAsyncIterable_](fluentasynciterable.md)<[T, U]\>

▸ **combineEmitter**<U, K\>(`emitter`: _EventEmitter_, `keyA`: [_Mapper_](mapper.md)<T, K\>, `keyB`: [_Mapper_](mapper.md)<U, K\>, `options?`: FluentEmitOptions): [_FluentAsyncIterable_](fluentasynciterable.md)<[T, U]\>

Join the iterable with another the EventEmitter, returning a new async iterable with the inner matching combinations

**IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
emission generates a new yielded result. The default key event is **'data'**.

Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.

If you need to change the key event or other characteristics, you can do it through the **options** parameter

#### Type parameters:

| Name |
| ---- |
| `U`  |
| `K`  |

#### Parameters:

| Name       | Type                         | Description                                                     |
| ---------- | ---------------------------- | --------------------------------------------------------------- |
| `emitter`  | _EventEmitter_               | The EventEmitter                                                |
| `keyA`     | [_Mapper_](mapper.md)<T, K\> | A mapper that returns the key map value from the left iterable  |
| `keyB`     | [_Mapper_](mapper.md)<U, K\> | A mapper that returns the key map value from the right iterable |
| `options?` | FluentEmitOptions            | The EventEmitter options. Optional                              |

**Returns:** [_FluentAsyncIterable_](fluentasynciterable.md)<[T, U]\>

▸ **combineEmitter**<U, K\>(`emitter`: _EventEmitter_, `keyA`: keyof T, `keyB`: [_Mapper_](mapper.md)<U, K\>, `options?`: FluentEmitOptions): [_FluentAsyncIterable_](fluentasynciterable.md)<[T, U]\>

Join the iterable with another the EventEmitter, returning a new async iterable with the inner matching combinations

**IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
emission generates a new yielded result. The default key event is **'data'**.

Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.

If you need to change the key event or other characteristics, you can do it through the **options** parameter

#### Type parameters:

| Name |
| ---- |
| `U`  |
| `K`  |

#### Parameters:

| Name       | Type                         | Description                                                     |
| ---------- | ---------------------------- | --------------------------------------------------------------- |
| `emitter`  | _EventEmitter_               | The EventEmitter                                                |
| `keyA`     | keyof T                      | A mapper that returns the key map value from the left iterable  |
| `keyB`     | [_Mapper_](mapper.md)<U, K\> | A mapper that returns the key map value from the right iterable |
| `options?` | FluentEmitOptions            | The EventEmitter options. Optional                              |

**Returns:** [_FluentAsyncIterable_](fluentasynciterable.md)<[T, U]\>

---

### concatEmitter

▸ **concatEmitter**(`emitter`: _EventEmitter_, `options?`: FluentEmitOptions): [_FluentAsyncIterable_](fluentasynciterable.md)<T\>

Concatenates the specified Emitter to the async iterable.

**IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
emission generates a new yielded result. The default key event is **'data'**.

Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.

If you need to change the key event or other characteristics, you can do it through the **options** parameter

#### Parameters:

| Name       | Type              | Description                        |
| ---------- | ----------------- | ---------------------------------- |
| `emitter`  | _EventEmitter_    | The EventEmitter                   |
| `options?` | FluentEmitOptions | The EventEmitter options. Optional |

**Returns:** [_FluentAsyncIterable_](fluentasynciterable.md)<T\>

The [FluentAsyncIterable](fluentasynciterable.md) of the concatenated async iterables.

---

### o

▸ **o**(): [_FluentAsyncIterable_](fluentasynciterable.md)<T\>

Alias for assureOrder

Assures the order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be ascending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

**Returns:** [_FluentAsyncIterable_](fluentasynciterable.md)<T\>

Inherited from: [OrderAssurable](orderassurable.md)

---

### od

▸ **od**(): [_FluentAsyncIterable_](fluentasynciterable.md)<T\>

alias for assureOrderDescending

Assures the descending order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be descending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

**Returns:** [_FluentAsyncIterable_](fluentasynciterable.md)<T\>

Inherited from: [OrderAssurable](orderassurable.md)
