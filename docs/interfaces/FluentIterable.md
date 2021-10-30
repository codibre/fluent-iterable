[fluent-iterable - v1.19.0](../README.md) / FluentIterable

# Interface: FluentIterable<T\>

Represents an iterable extended with common processing and mutating capabilities.<br>
  The capabilities introduced are defined as a [fluent interface](https://en.wikipedia.org/wiki/Fluent_interface) and thus they support *method chaining*.

## Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the items in the iterable. |

## Hierarchy

- `Iterable`<`T`\>

- [`OrderAssurable`](OrderAssurable.md)<[`FluentIterable`](FluentIterable.md)<`T`\>\>

- `FluentIterableEmitter`<`T`\>

  ↳ **`FluentIterable`**

## Table of contents

### Properties

- [all](FluentIterable.md#all)
- [allAsync](FluentIterable.md#allasync)
- [any](FluentIterable.md#any)
- [anyAsync](FluentIterable.md#anyasync)
- [append](FluentIterable.md#append)
- [avg](FluentIterable.md#avg)
- [avgAsync](FluentIterable.md#avgasync)
- [catch](FluentIterable.md#catch)
- [catchAsync](FluentIterable.md#catchasync)
- [combine](FluentIterable.md#combine)
- [combineAsync](FluentIterable.md#combineasync)
- [concat](FluentIterable.md#concat)
- [concatAsync](FluentIterable.md#concatasync)
- [contains](FluentIterable.md#contains)
- [count](FluentIterable.md#count)
- [countAsync](FluentIterable.md#countasync)
- [distinct](FluentIterable.md#distinct)
- [distinctAsync](FluentIterable.md#distinctasync)
- [emit](FluentIterable.md#emit)
- [every](FluentIterable.md#every)
- [everyAsync](FluentIterable.md#everyasync)
- [execute](FluentIterable.md#execute)
- [executeAsync](FluentIterable.md#executeasync)
- [filter](FluentIterable.md#filter)
- [filterAsync](FluentIterable.md#filterasync)
- [first](FluentIterable.md#first)
- [firstAsync](FluentIterable.md#firstasync)
- [flatMap](FluentIterable.md#flatmap)
- [flatMapAsync](FluentIterable.md#flatmapasync)
- [flatMerge](FluentIterable.md#flatmerge)
- [flatten](FluentIterable.md#flatten)
- [flattenAsync](FluentIterable.md#flattenasync)
- [forEach](FluentIterable.md#foreach)
- [forEachAsync](FluentIterable.md#foreachasync)
- [group](FluentIterable.md#group)
- [groupAsync](FluentIterable.md#groupasync)
- [hasExactly](FluentIterable.md#hasexactly)
- [hasLessOrExactly](FluentIterable.md#haslessorexactly)
- [hasLessThan](FluentIterable.md#haslessthan)
- [hasMoreOrExactly](FluentIterable.md#hasmoreorexactly)
- [hasMoreThan](FluentIterable.md#hasmorethan)
- [isDistinct](FluentIterable.md#isdistinct)
- [isDistinctAsync](FluentIterable.md#isdistinctasync)
- [join](FluentIterable.md#join)
- [joinAsync](FluentIterable.md#joinasync)
- [last](FluentIterable.md#last)
- [lastAsync](FluentIterable.md#lastasync)
- [map](FluentIterable.md#map)
- [mapAsync](FluentIterable.md#mapasync)
- [max](FluentIterable.md#max)
- [maxAsync](FluentIterable.md#maxasync)
- [min](FluentIterable.md#min)
- [minAsync](FluentIterable.md#minasync)
- [next](FluentIterable.md#next)
- [partition](FluentIterable.md#partition)
- [prepend](FluentIterable.md#prepend)
- [reduce](FluentIterable.md#reduce)
- [reduceAndMap](FluentIterable.md#reduceandmap)
- [reduceAndMapAsync](FluentIterable.md#reduceandmapasync)
- [reduceAsync](FluentIterable.md#reduceasync)
- [repeat](FluentIterable.md#repeat)
- [skip](FluentIterable.md#skip)
- [skipWhile](FluentIterable.md#skipwhile)
- [skipWhileAsync](FluentIterable.md#skipwhileasync)
- [some](FluentIterable.md#some)
- [someAsync](FluentIterable.md#someasync)
- [sort](FluentIterable.md#sort)
- [sortBy](FluentIterable.md#sortby)
- [sum](FluentIterable.md#sum)
- [sumAsync](FluentIterable.md#sumasync)
- [take](FluentIterable.md#take)
- [takeWhile](FluentIterable.md#takewhile)
- [takeWhileAsync](FluentIterable.md#takewhileasync)
- [toArray](FluentIterable.md#toarray)
- [toAsync](FluentIterable.md#toasync)
- [toMap](FluentIterable.md#tomap)
- [toMapAsync](FluentIterable.md#tomapasync)
- [toObject](FluentIterable.md#toobject)
- [toObjectAsync](FluentIterable.md#toobjectasync)
- [toSet](FluentIterable.md#toset)
- [toSetAsync](FluentIterable.md#tosetasync)
- [top](FluentIterable.md#top)
- [topAsync](FluentIterable.md#topasync)
- [waitAll](FluentIterable.md#waitall)
- [whenEmpty](FluentIterable.md#whenempty)
- [withIndex](FluentIterable.md#withindex)

### Methods

- [[iterator]](FluentIterable.md#[iterator])
- [assureOrder](FluentIterable.md#assureorder)
- [assureOrderDescending](FluentIterable.md#assureorderdescending)
- [combineEmitter](FluentIterable.md#combineemitter)
- [concatEmitter](FluentIterable.md#concatemitter)
- [o](FluentIterable.md#o)
- [od](FluentIterable.md#od)

## Properties

### all

• **all**: `AllFunction`<`T`\>

___

### allAsync

• **allAsync**: `AsyncAllFunction`<`T`\>

___

### any

• **any**: `AnyFunction`<`T`\>

___

### anyAsync

• **anyAsync**: `AsyncAnyFunction`<`T`\>

___

### append

• **append**: `AppendFunction`<`T`\>

___

### avg

• **avg**: `AvgFunction`<`T`\>

___

### avgAsync

• **avgAsync**: `AsyncAvgFunction`<`T`\>

___

### catch

• **catch**: `CatchFunction`<`T`\>

___

### catchAsync

• **catchAsync**: `AsyncCatchFunction`<`T`\>

___

### combine

• **combine**: `CombineFunction`<`T`\>

___

### combineAsync

• **combineAsync**: `AsyncCombineFunction`<`T`\>

___

### concat

• **concat**: `ConcatFunction`<`T`\>

___

### concatAsync

• **concatAsync**: `AsyncConcatFunction`<`T`\>

___

### contains

• **contains**: `ContainsFunction`<`T`\>

___

### count

• **count**: `CountFunction`<`T`\>

___

### countAsync

• **countAsync**: `AsyncCountFunction`<`T`\>

___

### distinct

• **distinct**: `DistinctFunction`<`T`\>

___

### distinctAsync

• **distinctAsync**: `AsyncDistinctFunction`<`T`\>

___

### emit

• **emit**: `EmitFunction`<`T`\>

___

### every

• **every**: `AllFunction`<`T`\>

___

### everyAsync

• **everyAsync**: `AsyncAllFunction`<`T`\>

___

### execute

• **execute**: `ExecuteFunction`<`T`\>

___

### executeAsync

• **executeAsync**: `AsyncExecuteFunction`<`T`\>

___

### filter

• **filter**: `FilterFunction`<`T`\>

___

### filterAsync

• **filterAsync**: `AsyncFilterFunction`<`T`\>

___

### first

• **first**: `FirstFunction`<`T`\>

___

### firstAsync

• **firstAsync**: `AsyncFirstFunction`<`T`\>

___

### flatMap

• **flatMap**: `FlattenFunction`<`T`\>

___

### flatMapAsync

• **flatMapAsync**: `AsyncFlattenFunction`<`T`\>

___

### flatMerge

• **flatMerge**: `FlatMergeFunction`<`T`\>

___

### flatten

• **flatten**: `FlattenFunction`<`T`\>

___

### flattenAsync

• **flattenAsync**: `AsyncFlattenFunction`<`T`\>

___

### forEach

• **forEach**: `ForEachFunction`<`T`\>

___

### forEachAsync

• **forEachAsync**: `AsyncForEachFunction`<`T`\>

___

### group

• **group**: `GroupFunction`<`T`\>

___

### groupAsync

• **groupAsync**: `AsyncGroupFunction`<`T`\>

___

### hasExactly

• **hasExactly**: `HasExactlyFunction`

___

### hasLessOrExactly

• **hasLessOrExactly**: `HasLessOrExactly`

___

### hasLessThan

• **hasLessThan**: `HasLessThanFunction`

___

### hasMoreOrExactly

• **hasMoreOrExactly**: `HasMoreOrExactlyFunction`

___

### hasMoreThan

• **hasMoreThan**: `HasMoreThanFunction`

___

### isDistinct

• **isDistinct**: `IsDistinctFunction`<`T`\>

___

### isDistinctAsync

• **isDistinctAsync**: `AsyncIsDistinctFunction`<`T`\>

___

### join

• **join**: `JoinFunction`<`T`\>

___

### joinAsync

• **joinAsync**: `AsyncJoinFunction`<`T`\>

___

### last

• **last**: `LastFunction`<`T`\>

___

### lastAsync

• **lastAsync**: `AsyncLastFunction`<`T`\>

___

### map

• **map**: `MapFunction`<`T`\>

___

### mapAsync

• **mapAsync**: `AsyncMapFunction`<`T`\>

___

### max

• **max**: `MaxFunction`<`T`\>

___

### maxAsync

• **maxAsync**: `AsyncMaxFunction`<`T`\>

___

### min

• **min**: `MinFunction`<`T`\>

___

### minAsync

• **minAsync**: `AsyncMinFunction`<`T`\>

___

### next

• **next**: `NextFunction`<`T`\>

___

### partition

• **partition**: `PartitionFunction`<`T`\>

___

### prepend

• **prepend**: `PrependFunction`<`T`\>

___

### reduce

• **reduce**: `ReduceFunction`<`T`\>

___

### reduceAndMap

• **reduceAndMap**: `ReduceAndMapFunction`<`T`\>

___

### reduceAndMapAsync

• **reduceAndMapAsync**: `AsyncReduceAndMapFunction`<`T`\>

___

### reduceAsync

• **reduceAsync**: `AsyncReduceFunction`<`T`\>

___

### repeat

• **repeat**: `RepeatFunction`<`T`\>

___

### skip

• **skip**: `SkipFunction`<`T`\>

___

### skipWhile

• **skipWhile**: `SkipWhileFunction`<`T`\>

___

### skipWhileAsync

• **skipWhileAsync**: `AsyncSkipWhileFunction`<`T`\>

___

### some

• **some**: `AnyFunction`<`T`\>

___

### someAsync

• **someAsync**: `AsyncAnyFunction`<`T`\>

___

### sort

• **sort**: `SortFunction`<`T`\>

___

### sortBy

• **sortBy**: `SortByFunction`<`T`\>

___

### sum

• **sum**: `SumFunction`<`T`\>

___

### sumAsync

• **sumAsync**: `AsyncSumFunction`<`T`\>

___

### take

• **take**: `TakeFunction`<`T`\>

___

### takeWhile

• **takeWhile**: `TakeWhileFunction`<`T`\>

___

### takeWhileAsync

• **takeWhileAsync**: `AsyncTakeWhileFunction`<`T`\>

___

### toArray

• **toArray**: `ToArrayFunction`<`T`\>

___

### toAsync

• **toAsync**: `ToAsyncFunction`<`T`\>

___

### toMap

• **toMap**: `ToMapFunction`<`T`\>

___

### toMapAsync

• **toMapAsync**: `AsyncToMapFunction`<`T`\>

___

### toObject

• **toObject**: `ToObjectFunction`<`T`\>

___

### toObjectAsync

• **toObjectAsync**: `AsyncToObjectFunction`<`T`\>

___

### toSet

• **toSet**: `ToSetFunction`<`T`\>

___

### toSetAsync

• **toSetAsync**: `AsyncToSetFunction`<`T`\>

___

### top

• **top**: `TopFunction`<`T`\>

___

### topAsync

• **topAsync**: `AsyncTopFunction`<`T`\>

___

### waitAll

• **waitAll**: `WaitAllFunction`<`T`\>

___

### whenEmpty

• **whenEmpty**: `WhenEmptyFunction`

___

### withIndex

• **withIndex**: `WithIndexFunction`<`T`\>

## Methods

### [iterator]

▸ **[iterator]**(): `Iterator`<`T`, `any`, `undefined`\>

#### Returns

`Iterator`<`T`, `any`, `undefined`\>

#### Inherited from

Iterable.\_\_@iterator@82

___

### assureOrder

▸ **assureOrder**(): [`FluentIterable`](FluentIterable.md)<`T`\>

Assures the order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be ascending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

#### Returns

[`FluentIterable`](FluentIterable.md)<`T`\>

#### Inherited from

[OrderAssurable](OrderAssurable.md).[assureOrder](OrderAssurable.md#assureorder)

___

### assureOrderDescending

▸ **assureOrderDescending**(): [`FluentIterable`](FluentIterable.md)<`T`\>

Assures the descending order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be descending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

#### Returns

[`FluentIterable`](FluentIterable.md)<`T`\>

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

▸ **o**(): [`FluentIterable`](FluentIterable.md)<`T`\>

Alias for assureOrder

Assures the order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be ascending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

#### Returns

[`FluentIterable`](FluentIterable.md)<`T`\>

#### Inherited from

[OrderAssurable](OrderAssurable.md).[o](OrderAssurable.md#o)

___

### od

▸ **od**(): [`FluentIterable`](FluentIterable.md)<`T`\>

alias for assureOrderDescending

Assures the descending order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be descending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

#### Returns

[`FluentIterable`](FluentIterable.md)<`T`\>

#### Inherited from

[OrderAssurable](OrderAssurable.md).[od](OrderAssurable.md#od)
