[fluent-iterable - v1.22.0](../README.md) / [index](../modules/index.md) / FluentIterable

# Interface: FluentIterable<T\>

[index](../modules/index.md).FluentIterable

Represents an iterable extended with common processing and mutating capabilities.<br>
  The capabilities introduced are defined as a [fluent interface](https://en.wikipedia.org/wiki/Fluent_interface) and thus they support *method chaining*.

## Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the items in the iterable. |

## Hierarchy

- `Iterable`<`T`\>

- [`OrderAssurable`](index.OrderAssurable.md)<[`FluentIterable`](index.FluentIterable.md)<`T`\>\>

- [`FluentIterableEmitter`](types.FluentIterableEmitter.md)<`T`\>

  ↳ **`FluentIterable`**

## Table of contents

### Properties

- [all](index.FluentIterable.md#all)
- [allAsync](index.FluentIterable.md#allasync)
- [any](index.FluentIterable.md#any)
- [anyAsync](index.FluentIterable.md#anyasync)
- [append](index.FluentIterable.md#append)
- [avg](index.FluentIterable.md#avg)
- [avgAsync](index.FluentIterable.md#avgasync)
- [catch](index.FluentIterable.md#catch)
- [catchAsync](index.FluentIterable.md#catchasync)
- [combine](index.FluentIterable.md#combine)
- [combineAsync](index.FluentIterable.md#combineasync)
- [concat](index.FluentIterable.md#concat)
- [concatAsync](index.FluentIterable.md#concatasync)
- [contains](index.FluentIterable.md#contains)
- [count](index.FluentIterable.md#count)
- [countAsync](index.FluentIterable.md#countasync)
- [distinct](index.FluentIterable.md#distinct)
- [distinctAsync](index.FluentIterable.md#distinctasync)
- [emit](index.FluentIterable.md#emit)
- [every](index.FluentIterable.md#every)
- [everyAsync](index.FluentIterable.md#everyasync)
- [execute](index.FluentIterable.md#execute)
- [executeAsync](index.FluentIterable.md#executeasync)
- [filter](index.FluentIterable.md#filter)
- [filterAsync](index.FluentIterable.md#filterasync)
- [first](index.FluentIterable.md#first)
- [firstAsync](index.FluentIterable.md#firstasync)
- [flatJoin](index.FluentIterable.md#flatjoin)
- [flatMap](index.FluentIterable.md#flatmap)
- [flatMapAsync](index.FluentIterable.md#flatmapasync)
- [flatMerge](index.FluentIterable.md#flatmerge)
- [flatten](index.FluentIterable.md#flatten)
- [flattenAsync](index.FluentIterable.md#flattenasync)
- [forEach](index.FluentIterable.md#foreach)
- [forEachAsync](index.FluentIterable.md#foreachasync)
- [group](index.FluentIterable.md#group)
- [groupAsync](index.FluentIterable.md#groupasync)
- [hasExactly](index.FluentIterable.md#hasexactly)
- [hasLessOrExactly](index.FluentIterable.md#haslessorexactly)
- [hasLessThan](index.FluentIterable.md#haslessthan)
- [hasMoreOrExactly](index.FluentIterable.md#hasmoreorexactly)
- [hasMoreThan](index.FluentIterable.md#hasmorethan)
- [isDistinct](index.FluentIterable.md#isdistinct)
- [isDistinctAsync](index.FluentIterable.md#isdistinctasync)
- [join](index.FluentIterable.md#join)
- [joinAsync](index.FluentIterable.md#joinasync)
- [last](index.FluentIterable.md#last)
- [lastAsync](index.FluentIterable.md#lastasync)
- [map](index.FluentIterable.md#map)
- [mapAsync](index.FluentIterable.md#mapasync)
- [max](index.FluentIterable.md#max)
- [maxAsync](index.FluentIterable.md#maxasync)
- [min](index.FluentIterable.md#min)
- [minAsync](index.FluentIterable.md#minasync)
- [next](index.FluentIterable.md#next)
- [partition](index.FluentIterable.md#partition)
- [prepend](index.FluentIterable.md#prepend)
- [reduce](index.FluentIterable.md#reduce)
- [reduceAndMap](index.FluentIterable.md#reduceandmap)
- [reduceAndMapAsync](index.FluentIterable.md#reduceandmapasync)
- [reduceAsync](index.FluentIterable.md#reduceasync)
- [repeat](index.FluentIterable.md#repeat)
- [skip](index.FluentIterable.md#skip)
- [skipWhile](index.FluentIterable.md#skipwhile)
- [skipWhileAsync](index.FluentIterable.md#skipwhileasync)
- [some](index.FluentIterable.md#some)
- [someAsync](index.FluentIterable.md#someasync)
- [sort](index.FluentIterable.md#sort)
- [sortBy](index.FluentIterable.md#sortby)
- [sum](index.FluentIterable.md#sum)
- [sumAsync](index.FluentIterable.md#sumasync)
- [take](index.FluentIterable.md#take)
- [takeWhile](index.FluentIterable.md#takewhile)
- [takeWhileAsync](index.FluentIterable.md#takewhileasync)
- [toArray](index.FluentIterable.md#toarray)
- [toAsync](index.FluentIterable.md#toasync)
- [toMap](index.FluentIterable.md#tomap)
- [toMapAsync](index.FluentIterable.md#tomapasync)
- [toObject](index.FluentIterable.md#toobject)
- [toObjectAsync](index.FluentIterable.md#toobjectasync)
- [toSet](index.FluentIterable.md#toset)
- [toSetAsync](index.FluentIterable.md#tosetasync)
- [top](index.FluentIterable.md#top)
- [topAsync](index.FluentIterable.md#topasync)
- [waitAll](index.FluentIterable.md#waitall)
- [whenEmpty](index.FluentIterable.md#whenempty)
- [withIndex](index.FluentIterable.md#withindex)

### Methods

- [[iterator]](index.FluentIterable.md#[iterator])
- [assureOrder](index.FluentIterable.md#assureorder)
- [assureOrderDescending](index.FluentIterable.md#assureorderdescending)
- [combineEmitter](index.FluentIterable.md#combineemitter)
- [concatEmitter](index.FluentIterable.md#concatemitter)
- [o](index.FluentIterable.md#o)
- [od](index.FluentIterable.md#od)

## Properties

### all

• **all**: [`AllFunction`](types_function_types.AllFunction.md)<`T`\>

___

### allAsync

• **allAsync**: [`AsyncAllFunction`](types_function_types.AsyncAllFunction.md)<`T`\>

___

### any

• **any**: [`AnyFunction`](types_function_types.AnyFunction.md)<`T`\>

___

### anyAsync

• **anyAsync**: [`AsyncAnyFunction`](types_function_types.AsyncAnyFunction.md)<`T`\>

___

### append

• **append**: [`AppendFunction`](types_function_types.AppendFunction.md)<`T`\>

___

### avg

• **avg**: [`AvgFunction`](types_function_types.AvgFunction.md)<`T`\>

___

### avgAsync

• **avgAsync**: [`AsyncAvgFunction`](types_function_types.AsyncAvgFunction.md)<`T`\>

___

### catch

• **catch**: [`CatchFunction`](types_function_types.CatchFunction.md)<`T`\>

___

### catchAsync

• **catchAsync**: [`AsyncCatchFunction`](types_function_types.AsyncCatchFunction.md)<`T`\>

___

### combine

• **combine**: [`CombineFunction`](types_function_types.CombineFunction.md)<`T`\>

___

### combineAsync

• **combineAsync**: [`AsyncCombineFunction`](types_function_types.AsyncCombineFunction.md)<`T`\>

___

### concat

• **concat**: [`ConcatFunction`](types_function_types.ConcatFunction.md)<`T`\>

___

### concatAsync

• **concatAsync**: [`AsyncConcatFunction`](types_function_types.AsyncConcatFunction.md)<`T`\>

___

### contains

• **contains**: [`ContainsFunction`](types_function_types.ContainsFunction.md)<`T`\>

___

### count

• **count**: [`CountFunction`](types_function_types.CountFunction.md)<`T`\>

___

### countAsync

• **countAsync**: [`AsyncCountFunction`](types_function_types.AsyncCountFunction.md)<`T`\>

___

### distinct

• **distinct**: [`DistinctFunction`](types_function_types.DistinctFunction.md)<`T`\>

___

### distinctAsync

• **distinctAsync**: [`AsyncDistinctFunction`](types_function_types.AsyncDistinctFunction.md)<`T`\>

___

### emit

• **emit**: [`EmitFunction`](types_function_types.EmitFunction.md)<`T`\>

___

### every

• **every**: [`AllFunction`](types_function_types.AllFunction.md)<`T`\>

___

### everyAsync

• **everyAsync**: [`AsyncAllFunction`](types_function_types.AsyncAllFunction.md)<`T`\>

___

### execute

• **execute**: [`ExecuteFunction`](types_function_types.ExecuteFunction.md)<`T`\>

___

### executeAsync

• **executeAsync**: [`AsyncExecuteFunction`](types_function_types.AsyncExecuteFunction.md)<`T`\>

___

### filter

• **filter**: [`FilterFunction`](types_function_types.FilterFunction.md)<`T`\>

___

### filterAsync

• **filterAsync**: [`AsyncFilterFunction`](types_function_types.AsyncFilterFunction.md)<`T`\>

___

### first

• **first**: [`FirstFunction`](types_function_types.FirstFunction.md)<`T`\>

___

### firstAsync

• **firstAsync**: [`AsyncFirstFunction`](types_function_types.AsyncFirstFunction.md)<`T`\>

___

### flatJoin

• **flatJoin**: [`FlatJoinFunction`](types_function_types.FlatJoinFunction.md)<`T`\>

___

### flatMap

• **flatMap**: [`FlattenFunction`](../modules/types_function_types.md#flattenfunction)<`T`\>

___

### flatMapAsync

• **flatMapAsync**: [`AsyncFlattenFunction`](../modules/types_function_types.md#asyncflattenfunction)<`T`\>

___

### flatMerge

• **flatMerge**: [`FlatMergeFunction`](types_function_types.FlatMergeFunction.md)<`T`\>

___

### flatten

• **flatten**: [`FlattenFunction`](../modules/types_function_types.md#flattenfunction)<`T`\>

___

### flattenAsync

• **flattenAsync**: [`AsyncFlattenFunction`](../modules/types_function_types.md#asyncflattenfunction)<`T`\>

___

### forEach

• **forEach**: [`ForEachFunction`](types_function_types.ForEachFunction.md)<`T`\>

___

### forEachAsync

• **forEachAsync**: [`AsyncForEachFunction`](types_function_types.AsyncForEachFunction.md)<`T`\>

___

### group

• **group**: [`GroupFunction`](types_function_types.GroupFunction.md)<`T`\>

___

### groupAsync

• **groupAsync**: [`AsyncGroupFunction`](types_function_types.AsyncGroupFunction.md)<`T`\>

___

### hasExactly

• **hasExactly**: [`HasExactlyFunction`](types_function_types.HasExactlyFunction.md)

___

### hasLessOrExactly

• **hasLessOrExactly**: [`HasLessOrExactly`](types_function_types.HasLessOrExactly.md)

___

### hasLessThan

• **hasLessThan**: [`HasLessThanFunction`](types_function_types.HasLessThanFunction.md)

___

### hasMoreOrExactly

• **hasMoreOrExactly**: [`HasMoreOrExactlyFunction`](types_function_types.HasMoreOrExactlyFunction.md)

___

### hasMoreThan

• **hasMoreThan**: [`HasMoreThanFunction`](types_function_types.HasMoreThanFunction.md)

___

### isDistinct

• **isDistinct**: [`IsDistinctFunction`](types_function_types.IsDistinctFunction.md)<`T`\>

___

### isDistinctAsync

• **isDistinctAsync**: [`AsyncIsDistinctFunction`](types_function_types.AsyncIsDistinctFunction.md)<`T`\>

___

### join

• **join**: [`JoinFunction`](types_function_types.JoinFunction.md)<`T`\>

___

### joinAsync

• **joinAsync**: [`AsyncJoinFunction`](types_function_types.AsyncJoinFunction.md)<`T`\>

___

### last

• **last**: [`LastFunction`](types_function_types.LastFunction.md)<`T`\>

___

### lastAsync

• **lastAsync**: [`AsyncLastFunction`](types_function_types.AsyncLastFunction.md)<`T`\>

___

### map

• **map**: [`MapFunction`](types_function_types.MapFunction.md)<`T`\>

___

### mapAsync

• **mapAsync**: [`AsyncMapFunction`](types_function_types.AsyncMapFunction.md)<`T`\>

___

### max

• **max**: [`MaxFunction`](types_function_types.MaxFunction.md)<`T`\>

___

### maxAsync

• **maxAsync**: [`AsyncMaxFunction`](types_function_types.AsyncMaxFunction.md)<`T`\>

___

### min

• **min**: [`MinFunction`](types_function_types.MinFunction.md)<`T`\>

___

### minAsync

• **minAsync**: [`AsyncMinFunction`](types_function_types.AsyncMinFunction.md)<`T`\>

___

### next

• **next**: [`NextFunction`](types_function_types.NextFunction.md)<`T`\>

___

### partition

• **partition**: [`PartitionFunction`](types_function_types.PartitionFunction.md)<`T`\>

___

### prepend

• **prepend**: [`PrependFunction`](types_function_types.PrependFunction.md)<`T`\>

___

### reduce

• **reduce**: [`ReduceFunction`](types_function_types.ReduceFunction.md)<`T`\>

___

### reduceAndMap

• **reduceAndMap**: [`ReduceAndMapFunction`](types_function_types.ReduceAndMapFunction.md)<`T`\>

___

### reduceAndMapAsync

• **reduceAndMapAsync**: [`AsyncReduceAndMapFunction`](types_function_types.AsyncReduceAndMapFunction.md)<`T`\>

___

### reduceAsync

• **reduceAsync**: [`AsyncReduceFunction`](types_function_types.AsyncReduceFunction.md)<`T`\>

___

### repeat

• **repeat**: [`RepeatFunction`](types_function_types.RepeatFunction.md)<`T`\>

___

### skip

• **skip**: [`SkipFunction`](types_function_types.SkipFunction.md)<`T`\>

___

### skipWhile

• **skipWhile**: [`SkipWhileFunction`](types_function_types.SkipWhileFunction.md)<`T`\>

___

### skipWhileAsync

• **skipWhileAsync**: [`AsyncSkipWhileFunction`](types_function_types.AsyncSkipWhileFunction.md)<`T`\>

___

### some

• **some**: [`AnyFunction`](types_function_types.AnyFunction.md)<`T`\>

___

### someAsync

• **someAsync**: [`AsyncAnyFunction`](types_function_types.AsyncAnyFunction.md)<`T`\>

___

### sort

• **sort**: [`SortFunction`](types_function_types.SortFunction.md)<`T`\>

___

### sortBy

• **sortBy**: [`SortByFunction`](types_function_types.SortByFunction.md)<`T`\>

___

### sum

• **sum**: [`SumFunction`](types_function_types.SumFunction.md)<`T`\>

___

### sumAsync

• **sumAsync**: [`AsyncSumFunction`](types_function_types.AsyncSumFunction.md)<`T`\>

___

### take

• **take**: [`TakeFunction`](types_function_types.TakeFunction.md)<`T`\>

___

### takeWhile

• **takeWhile**: [`TakeWhileFunction`](types_function_types.TakeWhileFunction.md)<`T`\>

___

### takeWhileAsync

• **takeWhileAsync**: [`AsyncTakeWhileFunction`](types_function_types.AsyncTakeWhileFunction.md)<`T`\>

___

### toArray

• **toArray**: [`ToArrayFunction`](types_function_types.ToArrayFunction.md)<`T`\>

___

### toAsync

• **toAsync**: [`ToAsyncFunction`](types_function_types.ToAsyncFunction.md)<`T`\>

___

### toMap

• **toMap**: [`ToMapFunction`](types_function_types.ToMapFunction.md)<`T`\>

___

### toMapAsync

• **toMapAsync**: [`AsyncToMapFunction`](types_function_types.AsyncToMapFunction.md)<`T`\>

___

### toObject

• **toObject**: [`ToObjectFunction`](types_function_types.ToObjectFunction.md)<`T`\>

___

### toObjectAsync

• **toObjectAsync**: [`AsyncToObjectFunction`](types_function_types.AsyncToObjectFunction.md)<`T`\>

___

### toSet

• **toSet**: [`ToSetFunction`](types_function_types.ToSetFunction.md)<`T`\>

___

### toSetAsync

• **toSetAsync**: [`AsyncToSetFunction`](types_function_types.AsyncToSetFunction.md)<`T`\>

___

### top

• **top**: [`TopFunction`](types_function_types.TopFunction.md)<`T`\>

___

### topAsync

• **topAsync**: [`AsyncTopFunction`](types_function_types.AsyncTopFunction.md)<`T`\>

___

### waitAll

• **waitAll**: [`WaitAllFunction`](types_function_types.WaitAllFunction.md)<`T`\>

___

### whenEmpty

• **whenEmpty**: [`WhenEmptyFunction`](types_function_types.WhenEmptyFunction.md)

___

### withIndex

• **withIndex**: [`WithIndexFunction`](types_function_types.WithIndexFunction.md)<`T`\>

## Methods

### [iterator]

▸ **[iterator]**(): `Iterator`<`T`, `any`, `undefined`\>

#### Returns

`Iterator`<`T`, `any`, `undefined`\>

#### Inherited from

Iterable.\_\_@iterator@82

___

### assureOrder

▸ **assureOrder**(): [`FluentIterable`](index.FluentIterable.md)<`T`\>

Assures the order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be ascending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

#### Returns

[`FluentIterable`](index.FluentIterable.md)<`T`\>

#### Inherited from

[OrderAssurable](index.OrderAssurable.md).[assureOrder](index.OrderAssurable.md#assureorder)

___

### assureOrderDescending

▸ **assureOrderDescending**(): [`FluentIterable`](index.FluentIterable.md)<`T`\>

Assures the descending order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be descending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

#### Returns

[`FluentIterable`](index.FluentIterable.md)<`T`\>

#### Inherited from

[OrderAssurable](index.OrderAssurable.md).[assureOrderDescending](index.OrderAssurable.md#assureorderdescending)

___

### combineEmitter

▸ **combineEmitter**<`U`\>(`emitter`, `options?`): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<[`T`, `U`]\>

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
| `options?` | [`FluentEmitOptions`](types.FluentEmitOptions.md) | The EventEmitter options. Optional |

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<[`T`, `U`]\>

#### Inherited from

[FluentIterableEmitter](types.FluentIterableEmitter.md).[combineEmitter](types.FluentIterableEmitter.md#combineemitter)

▸ **combineEmitter**<`U`, `K`\>(`emitter`, `keyA`, `keyB`, `options?`): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<[`T`, `U`]\>

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
| `keyA` | [`Mapper`](index.Mapper.md)<`T`, `K`\> | A mapper that returns the key map value from the left iterable |
| `keyB` | [`Mapper`](index.Mapper.md)<`U`, `K`\> | A mapper that returns the key map value from the right iterable |
| `options?` | [`FluentEmitOptions`](types.FluentEmitOptions.md) | The EventEmitter options. Optional |

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<[`T`, `U`]\>

#### Inherited from

[FluentIterableEmitter](types.FluentIterableEmitter.md).[combineEmitter](types.FluentIterableEmitter.md#combineemitter)

▸ **combineEmitter**<`U`, `K`\>(`emitter`, `keyA`, `keyB`, `options?`): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<[`T`, `U`]\>

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
| `keyB` | [`Mapper`](index.Mapper.md)<`U`, `K`\> | A mapper that returns the key map value from the right iterable |
| `options?` | [`FluentEmitOptions`](types.FluentEmitOptions.md) | The EventEmitter options. Optional |

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<[`T`, `U`]\>

#### Inherited from

[FluentIterableEmitter](types.FluentIterableEmitter.md).[combineEmitter](types.FluentIterableEmitter.md#combineemitter)

___

### concatEmitter

▸ **concatEmitter**(`emitter`, `options?`): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

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
| `options?` | [`FluentEmitOptions`](types.FluentEmitOptions.md) | The EventEmitter options. Optional |

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

The [FluentAsyncIterable](index.FluentAsyncIterable.md) of the concatenated async iterables.

#### Inherited from

[FluentIterableEmitter](types.FluentIterableEmitter.md).[concatEmitter](types.FluentIterableEmitter.md#concatemitter)

___

### o

▸ **o**(): [`FluentIterable`](index.FluentIterable.md)<`T`\>

Alias for assureOrder

Assures the order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be ascending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

#### Returns

[`FluentIterable`](index.FluentIterable.md)<`T`\>

#### Inherited from

[OrderAssurable](index.OrderAssurable.md).[o](index.OrderAssurable.md#o)

___

### od

▸ **od**(): [`FluentIterable`](index.FluentIterable.md)<`T`\>

alias for assureOrderDescending

Assures the descending order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be descending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

#### Returns

[`FluentIterable`](index.FluentIterable.md)<`T`\>

#### Inherited from

[OrderAssurable](index.OrderAssurable.md).[od](index.OrderAssurable.md#od)
