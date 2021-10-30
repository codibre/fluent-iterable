[fluent-iterable - v1.19.0](../README.md) / FluentAsyncIterable

# Interface: FluentAsyncIterable<T\>

Represents an asynchronous iterable extended with common processing and mutating capabilities.<br>
  The capabilities introduced are defined as a [fluent interface](https://en.wikipedia.org/wiki/Fluent_interface) and thus they support *method chaining*.

## Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the items in the asynchronous iterable. |

## Hierarchy

- `AsyncIterable`<`T`\>

- [`OrderAssurable`](OrderAssurable.md)<[`FluentAsyncIterable`](FluentAsyncIterable.md)<`T`\>\>

- `FluentIterableEmitter`<`T`\>

  ↳ **`FluentAsyncIterable`**

## Table of contents

### Properties

- [all](FluentAsyncIterable.md#all)
- [any](FluentAsyncIterable.md#any)
- [append](FluentAsyncIterable.md#append)
- [avg](FluentAsyncIterable.md#avg)
- [catch](FluentAsyncIterable.md#catch)
- [combine](FluentAsyncIterable.md#combine)
- [concat](FluentAsyncIterable.md#concat)
- [contains](FluentAsyncIterable.md#contains)
- [count](FluentAsyncIterable.md#count)
- [distinct](FluentAsyncIterable.md#distinct)
- [emit](FluentAsyncIterable.md#emit)
- [every](FluentAsyncIterable.md#every)
- [execute](FluentAsyncIterable.md#execute)
- [filter](FluentAsyncIterable.md#filter)
- [first](FluentAsyncIterable.md#first)
- [flatMap](FluentAsyncIterable.md#flatmap)
- [flatMerge](FluentAsyncIterable.md#flatmerge)
- [flatten](FluentAsyncIterable.md#flatten)
- [forEach](FluentAsyncIterable.md#foreach)
- [group](FluentAsyncIterable.md#group)
- [hasExactly](FluentAsyncIterable.md#hasexactly)
- [hasLessOrExactly](FluentAsyncIterable.md#haslessorexactly)
- [hasLessThan](FluentAsyncIterable.md#haslessthan)
- [hasMoreOrExactly](FluentAsyncIterable.md#hasmoreorexactly)
- [hasMoreThan](FluentAsyncIterable.md#hasmorethan)
- [isDistinct](FluentAsyncIterable.md#isdistinct)
- [join](FluentAsyncIterable.md#join)
- [last](FluentAsyncIterable.md#last)
- [map](FluentAsyncIterable.md#map)
- [max](FluentAsyncIterable.md#max)
- [merge](FluentAsyncIterable.md#merge)
- [mergeCatching](FluentAsyncIterable.md#mergecatching)
- [mergeEmitter](FluentAsyncIterable.md#mergeemitter)
- [mergeEmitterCatching](FluentAsyncIterable.md#mergeemittercatching)
- [min](FluentAsyncIterable.md#min)
- [next](FluentAsyncIterable.md#next)
- [partition](FluentAsyncIterable.md#partition)
- [prepend](FluentAsyncIterable.md#prepend)
- [reduce](FluentAsyncIterable.md#reduce)
- [reduceAndMap](FluentAsyncIterable.md#reduceandmap)
- [repeat](FluentAsyncIterable.md#repeat)
- [skip](FluentAsyncIterable.md#skip)
- [skipWhile](FluentAsyncIterable.md#skipwhile)
- [some](FluentAsyncIterable.md#some)
- [sort](FluentAsyncIterable.md#sort)
- [sortBy](FluentAsyncIterable.md#sortby)
- [sum](FluentAsyncIterable.md#sum)
- [take](FluentAsyncIterable.md#take)
- [takeWhile](FluentAsyncIterable.md#takewhile)
- [toArray](FluentAsyncIterable.md#toarray)
- [toMap](FluentAsyncIterable.md#tomap)
- [toObject](FluentAsyncIterable.md#toobject)
- [toSet](FluentAsyncIterable.md#toset)
- [top](FluentAsyncIterable.md#top)
- [waitAll](FluentAsyncIterable.md#waitall)
- [whenEmpty](FluentAsyncIterable.md#whenempty)
- [withIndex](FluentAsyncIterable.md#withindex)

### Methods

- [[asyncIterator]](FluentAsyncIterable.md#[asynciterator])
- [assureOrder](FluentAsyncIterable.md#assureorder)
- [assureOrderDescending](FluentAsyncIterable.md#assureorderdescending)
- [combineEmitter](FluentAsyncIterable.md#combineemitter)
- [concatEmitter](FluentAsyncIterable.md#concatemitter)
- [o](FluentAsyncIterable.md#o)
- [od](FluentAsyncIterable.md#od)

## Properties

### all

• **all**: `AsyncAllFunction`<`T`\>

___

### any

• **any**: `AsyncAnyFunction`<`T`\>

___

### append

• **append**: `AsyncAppendFunction`<`T`\>

___

### avg

• **avg**: `AsyncAvgFunction`<`T`\>

___

### catch

• **catch**: `AsyncCatchFunction`<`T`\>

___

### combine

• **combine**: `AsyncCombineFunction`<`T`\>

___

### concat

• **concat**: `AsyncConcatFunction`<`T`\>

___

### contains

• **contains**: `AsyncContainsFunction`<`T`\>

___

### count

• **count**: `AsyncCountFunction`<`T`\>

___

### distinct

• **distinct**: `AsyncDistinctFunction`<`T`\>

___

### emit

• **emit**: `AsyncEmitFunction`<`T`\>

___

### every

• **every**: `AsyncAllFunction`<`T`\>

___

### execute

• **execute**: `AsyncExecuteFunction`<`T`\>

___

### filter

• **filter**: `AsyncFilterFunction`<`T`\>

___

### first

• **first**: `AsyncFirstFunction`<`T`\>

___

### flatMap

• **flatMap**: `AsyncFlattenFunction`<`T`\>

___

### flatMerge

• **flatMerge**: `FlatMergeFunction`<`T`\>

___

### flatten

• **flatten**: `AsyncFlattenFunction`<`T`\>

___

### forEach

• **forEach**: `AsyncForEachFunction`<`T`\>

___

### group

• **group**: `AsyncGroupFunction`<`T`\>

___

### hasExactly

• **hasExactly**: `AsyncHasExactlyFunction`

___

### hasLessOrExactly

• **hasLessOrExactly**: `AsyncHasLessOrExactly`

___

### hasLessThan

• **hasLessThan**: `AsyncHasLessThanFunction`

___

### hasMoreOrExactly

• **hasMoreOrExactly**: `AsyncHasMoreOrExactlyFunction`

___

### hasMoreThan

• **hasMoreThan**: `AsyncHasMoreThanFunction`

___

### isDistinct

• **isDistinct**: `AsyncIsDistinctFunction`<`T`\>

___

### join

• **join**: `AsyncJoinFunction`<`T`\>

___

### last

• **last**: `AsyncLastFunction`<`T`\>

___

### map

• **map**: `AsyncMapFunction`<`T`\>

___

### max

• **max**: `AsyncMaxFunction`<`T`\>

___

### merge

• **merge**: `AsyncMergeFunction`<`T`\>

___

### mergeCatching

• **mergeCatching**: `AsyncMergeCatchingFunction`<`T`\>

___

### mergeEmitter

• **mergeEmitter**: `AsyncMergeEmitterFunction`<`T`\>

___

### mergeEmitterCatching

• **mergeEmitterCatching**: `AsyncMergeEmitterCatchingFunction`<`T`\>

___

### min

• **min**: `AsyncMinFunction`<`T`\>

___

### next

• **next**: `AsyncNextFunction`<`T`\>

___

### partition

• **partition**: `AsyncPartitionFunction`<`T`\>

___

### prepend

• **prepend**: `AsyncPrependFunction`<`T`\>

___

### reduce

• **reduce**: `AsyncReduceFunction`<`T`\>

___

### reduceAndMap

• **reduceAndMap**: `AsyncReduceAndMapFunction`<`T`\>

___

### repeat

• **repeat**: `AsyncRepeatFunction`<`T`\>

___

### skip

• **skip**: `AsyncSkipFunction`<`T`\>

___

### skipWhile

• **skipWhile**: `AsyncSkipWhileFunction`<`T`\>

___

### some

• **some**: `AsyncAnyFunction`<`T`\>

___

### sort

• **sort**: `AsyncSortFunction`<`T`\>

___

### sortBy

• **sortBy**: `AsyncSortByFunction`<`T`\>

___

### sum

• **sum**: `AsyncSumFunction`<`T`\>

___

### take

• **take**: `AsyncTakeFunction`<`T`\>

___

### takeWhile

• **takeWhile**: `AsyncTakeWhileFunction`<`T`\>

___

### toArray

• **toArray**: `AsyncToArrayFunction`<`T`\>

___

### toMap

• **toMap**: `AsyncToMapFunction`<`T`\>

___

### toObject

• **toObject**: `AsyncToObjectFunction`<`T`\>

___

### toSet

• **toSet**: `AsyncToSetFunction`<`T`\>

___

### top

• **top**: `AsyncTopFunction`<`T`\>

___

### waitAll

• **waitAll**: `AsyncWaitAllFunction`<`T`\>

___

### whenEmpty

• **whenEmpty**: `AsyncWhenEmptyFunction`

___

### withIndex

• **withIndex**: `AsyncWithIndexFunction`<`T`\>

## Methods

### [asyncIterator]

▸ **[asyncIterator]**(): `AsyncIterator`<`T`, `any`, `undefined`\>

#### Returns

`AsyncIterator`<`T`, `any`, `undefined`\>

#### Inherited from

AsyncIterable.\_\_@asyncIterator@20783

___

### assureOrder

▸ **assureOrder**(): [`FluentAsyncIterable`](FluentAsyncIterable.md)<`T`\>

Assures the order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be ascending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

#### Returns

[`FluentAsyncIterable`](FluentAsyncIterable.md)<`T`\>

#### Inherited from

[OrderAssurable](OrderAssurable.md).[assureOrder](OrderAssurable.md#assureorder)

___

### assureOrderDescending

▸ **assureOrderDescending**(): [`FluentAsyncIterable`](FluentAsyncIterable.md)<`T`\>

Assures the descending order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be descending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

#### Returns

[`FluentAsyncIterable`](FluentAsyncIterable.md)<`T`\>

#### Inherited from

[OrderAssurable](OrderAssurable.md).[assureOrderDescending](OrderAssurable.md#assureorderdescending)

___

### combineEmitter

▸ **combineEmitter**<`U`\>(`emitter`, `options?`): [`FluentAsyncIterable`](FluentAsyncIterable.md)<[`T`, `U`]\>

Join the iterable with an EventEmitter, returning a new async iterable with a NxN combination

**IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
emission generates a new yielded result. The default key event is **'data'**.

Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.

If you need to change the key event or other characteristics, you can do it through the **options** parameter

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | The EventEmitter |
| `options?` | `FluentEmitOptions` | The EventEmitter options. Optional |

#### Returns

[`FluentAsyncIterable`](FluentAsyncIterable.md)<[`T`, `U`]\>

#### Inherited from

FluentIterableEmitter.combineEmitter

▸ **combineEmitter**<`U`, `K`\>(`emitter`, `keyA`, `keyB`, `options?`): [`FluentAsyncIterable`](FluentAsyncIterable.md)<[`T`, `U`]\>

Join the iterable with another the EventEmitter, returning a new async iterable with the inner matching combinations

**IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
emission generates a new yielded result. The default key event is **'data'**.

Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.

If you need to change the key event or other characteristics, you can do it through the **options** parameter

#### Type parameters

| Name |
| :------ |
| `U` |
| `K` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | The EventEmitter |
| `keyA` | [`Mapper`](Mapper.md)<`T`, `K`\> | A mapper that returns the key map value from the left iterable |
| `keyB` | [`Mapper`](Mapper.md)<`U`, `K`\> | A mapper that returns the key map value from the right iterable |
| `options?` | `FluentEmitOptions` | The EventEmitter options. Optional |

#### Returns

[`FluentAsyncIterable`](FluentAsyncIterable.md)<[`T`, `U`]\>

#### Inherited from

FluentIterableEmitter.combineEmitter

▸ **combineEmitter**<`U`, `K`\>(`emitter`, `keyA`, `keyB`, `options?`): [`FluentAsyncIterable`](FluentAsyncIterable.md)<[`T`, `U`]\>

Join the iterable with another the EventEmitter, returning a new async iterable with the inner matching combinations

**IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
emission generates a new yielded result. The default key event is **'data'**.

Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.

If you need to change the key event or other characteristics, you can do it through the **options** parameter

#### Type parameters

| Name |
| :------ |
| `U` |
| `K` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | The EventEmitter |
| `keyA` | keyof `T` | A mapper that returns the key map value from the left iterable |
| `keyB` | [`Mapper`](Mapper.md)<`U`, `K`\> | A mapper that returns the key map value from the right iterable |
| `options?` | `FluentEmitOptions` | The EventEmitter options. Optional |

#### Returns

[`FluentAsyncIterable`](FluentAsyncIterable.md)<[`T`, `U`]\>

#### Inherited from

FluentIterableEmitter.combineEmitter

___

### concatEmitter

▸ **concatEmitter**(`emitter`, `options?`): [`FluentAsyncIterable`](FluentAsyncIterable.md)<`T`\>

Concatenates the specified Emitter to the async iterable.

**IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
emission generates a new yielded result. The default key event is **'data'**.

Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.

If you need to change the key event or other characteristics, you can do it through the **options** parameter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | The EventEmitter |
| `options?` | `FluentEmitOptions` | The EventEmitter options. Optional |

#### Returns

[`FluentAsyncIterable`](FluentAsyncIterable.md)<`T`\>

The [FluentAsyncIterable](FluentAsyncIterable.md) of the concatenated async iterables.

#### Inherited from

FluentIterableEmitter.concatEmitter

___

### o

▸ **o**(): [`FluentAsyncIterable`](FluentAsyncIterable.md)<`T`\>

Alias for assureOrder

Assures the order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be ascending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

#### Returns

[`FluentAsyncIterable`](FluentAsyncIterable.md)<`T`\>

#### Inherited from

[OrderAssurable](OrderAssurable.md).[o](OrderAssurable.md#o)

___

### od

▸ **od**(): [`FluentAsyncIterable`](FluentAsyncIterable.md)<`T`\>

alias for assureOrderDescending

Assures the descending order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be descending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

#### Returns

[`FluentAsyncIterable`](FluentAsyncIterable.md)<`T`\>

#### Inherited from

[OrderAssurable](OrderAssurable.md).[od](OrderAssurable.md#od)
