[**fluent-iterable v1.38.1**](../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../README.md) / [index](../README.md) / FluentIterable

# Interface: FluentIterable\<T\>

Represents an iterable extended with common processing and mutating capabilities.<br>
  The capabilities introduced are defined as a [fluent interface](https://en.wikipedia.org/wiki/Fluent_interface) and thus they support *method chaining*.

## Typeparam

T The type of the items in the iterable.

## Extends

- `Iterable`\<`T`\>.[`OrderAssurable`](OrderAssurable.md)\<`FluentIterable`\<`T`\>\>.[`FluentIterableEmitter`](../../types/interfaces/FluentIterableEmitter.md)\<`T`\>

## Type Parameters

• **T**

## Properties

### all

> **all**: [`AllFunction`](../../types/function-types/interfaces/AllFunction.md)\<`T`\>

***

### allAsync

> **allAsync**: [`AsyncAllFunction`](../../types/function-types/interfaces/AsyncAllFunction.md)\<`T`\>

***

### any

> **any**: [`AnyFunction`](../../types/function-types/interfaces/AnyFunction.md)\<`T`\>

***

### anyAsync

> **anyAsync**: [`AsyncAnyFunction`](../../types/function-types/interfaces/AsyncAnyFunction.md)\<`T`\>

***

### append

> **append**: [`AppendFunction`](../../types/function-types/interfaces/AppendFunction.md)\<`T`\>

***

### avg

> **avg**: [`AvgFunction`](../../types/function-types/interfaces/AvgFunction.md)\<`T`\>

***

### avgAsync

> **avgAsync**: [`AsyncAvgFunction`](../../types/function-types/interfaces/AsyncAvgFunction.md)\<`T`\>

***

### catch

> **catch**: [`CatchFunction`](../../types/function-types/interfaces/CatchFunction.md)\<`T`\>

***

### catchAsync

> **catchAsync**: [`AsyncCatchFunction`](../../types/function-types/interfaces/AsyncCatchFunction.md)\<`T`\>

***

### combine

> **combine**: [`CombineFunction`](../../types/function-types/interfaces/CombineFunction.md)\<`T`\>

***

### combineAsync

> **combineAsync**: [`AsyncCombineFunction`](../../types/function-types/interfaces/AsyncCombineFunction.md)\<`T`\>

***

### combineJoin

> **combineJoin**: [`CombineJoinFunction`](../../types/function-types/type-aliases/CombineJoinFunction.md)\<`T`\>

***

### combineJoinAsync

> **combineJoinAsync**: [`AsyncCombineJoinFunction`](../../types/function-types/type-aliases/AsyncCombineJoinFunction.md)\<`T`\>

***

### concat

> **concat**: [`ConcatFunction`](../../types/function-types/interfaces/ConcatFunction.md)\<`T`\>

***

### concatAsync

> **concatAsync**: [`AsyncConcatFunction`](../../types/function-types/interfaces/AsyncConcatFunction.md)\<`T`\>

***

### contains

> **contains**: [`ContainsFunction`](../../types/function-types/interfaces/ContainsFunction.md)\<`T`\>

***

### count

> **count**: [`CountFunction`](../../types/function-types/interfaces/CountFunction.md)\<`T`\>

***

### countAsync

> **countAsync**: [`AsyncCountFunction`](../../types/function-types/interfaces/AsyncCountFunction.md)\<`T`\>

***

### distinct

> **distinct**: [`DistinctFunction`](../../types/function-types/interfaces/DistinctFunction.md)\<`T`\>

***

### distinctAsync

> **distinctAsync**: [`AsyncDistinctFunction`](../../types/function-types/interfaces/AsyncDistinctFunction.md)\<`T`\>

***

### distinctBy

> **distinctBy**: [`DistinctByFunction`](../../types/function-types/interfaces/DistinctByFunction.md)\<`T`\>

***

### distinctByAsync

> **distinctByAsync**: [`AsyncDistinctByFunction`](../../types/function-types/interfaces/AsyncDistinctByFunction.md)\<`T`\>

***

### emit

> **emit**: [`EmitFunction`](../../types/function-types/interfaces/EmitFunction.md)\<`T`\>

***

### every

> **every**: [`AllFunction`](../../types/function-types/interfaces/AllFunction.md)\<`T`\>

***

### everyAsync

> **everyAsync**: [`AsyncAllFunction`](../../types/function-types/interfaces/AsyncAllFunction.md)\<`T`\>

***

### execute

> **execute**: [`ExecuteFunction`](../../types/function-types/interfaces/ExecuteFunction.md)\<`T`\>

***

### executeAsync

> **executeAsync**: [`AsyncExecuteFunction`](../../types/function-types/interfaces/AsyncExecuteFunction.md)\<`T`\>

***

### filter

> **filter**: [`FilterFunction`](../../types/function-types/interfaces/FilterFunction.md)\<`T`\>

***

### filterAsync

> **filterAsync**: [`AsyncFilterFunction`](../../types/function-types/interfaces/AsyncFilterFunction.md)\<`T`\>

***

### finally

> **finally**: [`FinallyFunction`](../../types/function-types/interfaces/FinallyFunction.md)\<`T`, `"sync"`\>

***

### finallyAsync

> **finallyAsync**: [`FinallyFunction`](../../types/function-types/interfaces/FinallyFunction.md)\<`T`, `"async"`\>

***

### first

> **first**: [`FirstFunction`](../../types/function-types/interfaces/FirstFunction.md)\<`T`\>

***

### firstAsync

> **firstAsync**: [`AsyncFirstFunction`](../../types/function-types/interfaces/AsyncFirstFunction.md)\<`T`\>

***

### flatJoin

> **flatJoin**: [`FlatJoinFunction`](../../types/function-types/interfaces/FlatJoinFunction.md)\<`T`\>

***

### flatJoinAsync

> **flatJoinAsync**: [`AsyncFlatJoinFunction`](../../types/function-types/interfaces/AsyncFlatJoinFunction.md)\<`T`\>

***

### flatMap

> **flatMap**: [`FlattenFunction`](../../types/function-types/type-aliases/FlattenFunction.md)\<`T`\>

***

### flatMapAsync

> **flatMapAsync**: [`AsyncFlattenFunction`](../../types/function-types/type-aliases/AsyncFlattenFunction.md)\<`T`\>

***

### flatMerge

> **flatMerge**: [`FlatMergeFunction`](../../types/function-types/interfaces/FlatMergeFunction.md)\<`T`\>

***

### flatten

> **flatten**: [`FlattenFunction`](../../types/function-types/type-aliases/FlattenFunction.md)\<`T`\>

***

### flattenAsync

> **flattenAsync**: [`AsyncFlattenFunction`](../../types/function-types/type-aliases/AsyncFlattenFunction.md)\<`T`\>

***

### forEach

> **forEach**: [`ForEachFunction`](../../types/function-types/interfaces/ForEachFunction.md)\<`T`\>

***

### forEachAsync

> **forEachAsync**: [`AsyncForEachFunction`](../../types/function-types/interfaces/AsyncForEachFunction.md)\<`T`\>

***

### group

> **group**: [`GroupFunction`](../../types/function-types/interfaces/GroupFunction.md)\<`T`\>

***

### groupAsync

> **groupAsync**: [`AsyncGroupFunction`](../../types/function-types/interfaces/AsyncGroupFunction.md)\<`T`\>

***

### hasExactly

> **hasExactly**: [`HasExactlyFunction`](../../types/function-types/interfaces/HasExactlyFunction.md)

***

### hasLessOrExactly

> **hasLessOrExactly**: [`HasLessOrExactly`](../../types/function-types/interfaces/HasLessOrExactly.md)

***

### hasLessThan

> **hasLessThan**: [`HasLessThanFunction`](../../types/function-types/interfaces/HasLessThanFunction.md)

***

### hasMoreOrExactly

> **hasMoreOrExactly**: [`HasMoreOrExactlyFunction`](../../types/function-types/interfaces/HasMoreOrExactlyFunction.md)

***

### hasMoreThan

> **hasMoreThan**: [`HasMoreThanFunction`](../../types/function-types/interfaces/HasMoreThanFunction.md)

***

### isDistinct

> **isDistinct**: [`IsDistinctFunction`](../../types/function-types/interfaces/IsDistinctFunction.md)\<`T`\>

***

### isDistinctAsync

> **isDistinctAsync**: [`AsyncIsDistinctFunction`](../../types/function-types/interfaces/AsyncIsDistinctFunction.md)\<`T`\>

***

### join

> **join**: [`JoinFunction`](../../types/function-types/interfaces/JoinFunction.md)\<`T`\>

***

### joinAsync

> **joinAsync**: [`AsyncJoinFunction`](../../types/function-types/interfaces/AsyncJoinFunction.md)\<`T`\>

***

### last

> **last**: [`LastFunction`](../../types/function-types/interfaces/LastFunction.md)\<`T`\>

***

### lastAsync

> **lastAsync**: [`AsyncLastFunction`](../../types/function-types/interfaces/AsyncLastFunction.md)\<`T`\>

***

### map

> **map**: [`MapFunction`](../../types/function-types/interfaces/MapFunction.md)\<`T`\>

***

### mapAsync

> **mapAsync**: [`AsyncMapFunction`](../../types/function-types/interfaces/AsyncMapFunction.md)\<`T`\>

***

### max

> **max**: [`MaxFunction`](../../types/function-types/interfaces/MaxFunction.md)\<`T`\>

***

### maxAsync

> **maxAsync**: [`AsyncMaxFunction`](../../types/function-types/interfaces/AsyncMaxFunction.md)\<`T`\>

***

### min

> **min**: [`MinFunction`](../../types/function-types/interfaces/MinFunction.md)\<`T`\>

***

### minAsync

> **minAsync**: [`AsyncMinFunction`](../../types/function-types/interfaces/AsyncMinFunction.md)\<`T`\>

***

### next

> **next**: [`NextFunction`](../../types/function-types/interfaces/NextFunction.md)\<`T`\>

***

### partition

> **partition**: [`PartitionFunction`](../../types/function-types/interfaces/PartitionFunction.md)\<`T`\>

***

### prepend

> **prepend**: [`PrependFunction`](../../types/function-types/interfaces/PrependFunction.md)\<`T`\>

***

### reduce

> **reduce**: [`ReduceFunction`](../../types/function-types/interfaces/ReduceFunction.md)\<`T`\>

***

### reduceAndMap

> **reduceAndMap**: [`ReduceAndMapFunction`](../../types/function-types/interfaces/ReduceAndMapFunction.md)\<`T`\>

***

### reduceAndMapAsync

> **reduceAndMapAsync**: [`AsyncReduceAndMapFunction`](../../types/function-types/interfaces/AsyncReduceAndMapFunction.md)\<`T`\>

***

### reduceAsync

> **reduceAsync**: [`AsyncReduceFunction`](../../types/function-types/interfaces/AsyncReduceFunction.md)\<`T`\>

***

### repeat

> **repeat**: [`RepeatFunction`](../../types/function-types/interfaces/RepeatFunction.md)\<`T`\>

***

### skip

> **skip**: [`SkipFunction`](../../types/function-types/interfaces/SkipFunction.md)\<`T`\>

***

### skipWhile

> **skipWhile**: [`SkipWhileFunction`](../../types/function-types/interfaces/SkipWhileFunction.md)\<`T`\>

***

### skipWhileAsync

> **skipWhileAsync**: [`AsyncSkipWhileFunction`](../../types/function-types/interfaces/AsyncSkipWhileFunction.md)\<`T`\>

***

### some

> **some**: [`AnyFunction`](../../types/function-types/interfaces/AnyFunction.md)\<`T`\>

***

### someAsync

> **someAsync**: [`AsyncAnyFunction`](../../types/function-types/interfaces/AsyncAnyFunction.md)\<`T`\>

***

### sort

> **sort**: [`SortFunction`](../../types/function-types/interfaces/SortFunction.md)\<`T`\>

***

### sortBy

> **sortBy**: [`SortByFunction`](../../types/function-types/interfaces/SortByFunction.md)\<`T`\>

***

### sum

> **sum**: [`SumFunction`](../../types/function-types/interfaces/SumFunction.md)\<`T`\>

***

### sumAsync

> **sumAsync**: [`AsyncSumFunction`](../../types/function-types/interfaces/AsyncSumFunction.md)\<`T`\>

***

### take

> **take**: [`TakeFunction`](../../types/function-types/interfaces/TakeFunction.md)\<`T`\>

***

### takeWhile

> **takeWhile**: [`TakeWhileFunction`](../../types/function-types/interfaces/TakeWhileFunction.md)\<`T`\>

***

### takeWhileAsync

> **takeWhileAsync**: [`AsyncTakeWhileFunction`](../../types/function-types/interfaces/AsyncTakeWhileFunction.md)\<`T`\>

***

### toArray

> **toArray**: [`ToArrayFunction`](../../types/function-types/interfaces/ToArrayFunction.md)\<`T`\>

***

### toAsync

> **toAsync**: [`ToAsyncFunction`](../../types/function-types/interfaces/ToAsyncFunction.md)\<`T`\>

***

### toMap

> **toMap**: [`ToMapFunction`](../../types/function-types/interfaces/ToMapFunction.md)\<`T`\>

***

### toMapAsync

> **toMapAsync**: [`AsyncToMapFunction`](../../types/function-types/interfaces/AsyncToMapFunction.md)\<`T`\>

***

### toMapChain

> **toMapChain**: [`ToMapChainFunction`](../../types/function-types/interfaces/ToMapChainFunction.md)\<`T`\>

***

### toMapChainAsync

> **toMapChainAsync**: [`AsyncToMapChainFunction`](../../types/function-types/interfaces/AsyncToMapChainFunction.md)\<`T`\>

***

### toMapChainReduce

> **toMapChainReduce**: [`ToMapChainReduceFunction`](../../types/function-types/interfaces/ToMapChainReduceFunction.md)\<`T`\>

***

### toMapChainReduceAsync

> **toMapChainReduceAsync**: [`AsyncToMapChainReduceFunction`](../../types/function-types/interfaces/AsyncToMapChainReduceFunction.md)\<`T`\>

***

### toObject

> **toObject**: [`ToObjectFunction`](../../types/function-types/interfaces/ToObjectFunction.md)\<`T`\>

***

### toObjectAsync

> **toObjectAsync**: [`AsyncToObjectFunction`](../../types/function-types/interfaces/AsyncToObjectFunction.md)\<`T`\>

***

### toObjectChain

> **toObjectChain**: [`ToObjectChainFunction`](../../types/function-types/interfaces/ToObjectChainFunction.md)\<`T`\>

***

### toObjectChainAsync

> **toObjectChainAsync**: [`AsyncToObjectChainFunction`](../../types/function-types/interfaces/AsyncToObjectChainFunction.md)\<`T`\>

***

### toObjectChainReduce

> **toObjectChainReduce**: [`ToObjectChainReduceFunction`](../../types/function-types/interfaces/ToObjectChainReduceFunction.md)\<`T`\>

***

### toObjectChainReduceAsync

> **toObjectChainReduceAsync**: [`AsyncToObjectChainReduceFunction`](../../types/function-types/interfaces/AsyncToObjectChainReduceFunction.md)\<`T`\>

***

### top

> **top**: [`TopFunction`](../../types/function-types/interfaces/TopFunction.md)\<`T`\>

***

### topAsync

> **topAsync**: [`AsyncTopFunction`](../../types/function-types/interfaces/AsyncTopFunction.md)\<`T`\>

***

### toSet

> **toSet**: [`ToSetFunction`](../../types/function-types/interfaces/ToSetFunction.md)\<`T`\>

***

### toSetAsync

> **toSetAsync**: [`AsyncToSetFunction`](../../types/function-types/interfaces/AsyncToSetFunction.md)\<`T`\>

***

### unwind

> **unwind**: [`UnwindFunction`](../../types/function-types/interfaces/UnwindFunction.md)\<`T`, `"sync"`\>

***

### unwindAsync

> **unwindAsync**: [`UnwindFunction`](../../types/function-types/interfaces/UnwindFunction.md)\<`T`, `"async"`\>

***

### waitAll

> **waitAll**: [`WaitAllFunction`](../../types/function-types/interfaces/WaitAllFunction.md)\<`T`\>

***

### whenEmpty

> **whenEmpty**: [`WhenEmptyFunction`](../../types/function-types/interfaces/WhenEmptyFunction.md)

***

### withIndex

> **withIndex**: [`WithIndexFunction`](../../types/function-types/interfaces/WithIndexFunction.md)\<`T`\>

## Methods

### \[iterator\]()

> **\[iterator\]**(): `Iterator`\<`T`, `any`, `any`\>

#### Returns

`Iterator`\<`T`, `any`, `any`\>

#### Inherited from

`Iterable.[iterator]`

***

### assureOrder()

> **assureOrder**(): `FluentIterable`\<`T`\>

Assures the order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be ascending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

#### Returns

`FluentIterable`\<`T`\>

#### Inherited from

[`OrderAssurable`](OrderAssurable.md).[`assureOrder`](OrderAssurable.md#assureorder)

***

### assureOrderDescending()

> **assureOrderDescending**(): `FluentIterable`\<`T`\>

Assures the descending order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be descending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

#### Returns

`FluentIterable`\<`T`\>

#### Inherited from

[`OrderAssurable`](OrderAssurable.md).[`assureOrderDescending`](OrderAssurable.md#assureorderdescending)

***

### combineEmitter()

#### combineEmitter(emitter, options)

> **combineEmitter**\<`U`\>(`emitter`, `options`?): [`FluentAsyncIterable`](FluentAsyncIterable.md)\<[`T`, `U`]\>

Join the iterable with an EventEmitter, returning a new async iterable with a NxN combination

**IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
emission generates a new yielded result. The default key event is **'data'**.

Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.

If you need to change the key event or other characteristics, you can do it through the **options** parameter

##### Type Parameters

• **U** = `any`

##### Parameters

• **emitter**: `EventEmitter`\<`DefaultEventMap`\>

The EventEmitter

• **options?**: [`FluentEmitOptions`](../../types/interfaces/FluentEmitOptions.md)

The EventEmitter options. Optional

##### Returns

[`FluentAsyncIterable`](FluentAsyncIterable.md)\<[`T`, `U`]\>

##### Inherited from

[`FluentIterableEmitter`](../../types/interfaces/FluentIterableEmitter.md).[`combineEmitter`](../../types/interfaces/FluentIterableEmitter.md#combineemitter)

#### combineEmitter(emitter, keyA, keyB, options)

> **combineEmitter**\<`U`, `K`\>(`emitter`, `keyA`, `keyB`, `options`?): [`FluentAsyncIterable`](FluentAsyncIterable.md)\<[`T`, `U`]\>

Join the iterable with another the EventEmitter, returning a new async iterable with the inner matching combinations

**IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
emission generates a new yielded result. The default key event is **'data'**.

Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.

If you need to change the key event or other characteristics, you can do it through the **options** parameter

##### Type Parameters

• **U**

• **K**

##### Parameters

• **emitter**: `EventEmitter`\<`DefaultEventMap`\>

The EventEmitter

• **keyA**: [`Mapper`](Mapper.md)\<`T`, `K`\>

A mapper that returns the key map value from the left iterable

• **keyB**: [`Mapper`](Mapper.md)\<`U`, `K`\>

A mapper that returns the key map value from the right iterable

• **options?**: [`FluentEmitOptions`](../../types/interfaces/FluentEmitOptions.md)

The EventEmitter options. Optional

##### Returns

[`FluentAsyncIterable`](FluentAsyncIterable.md)\<[`T`, `U`]\>

##### Inherited from

[`FluentIterableEmitter`](../../types/interfaces/FluentIterableEmitter.md).[`combineEmitter`](../../types/interfaces/FluentIterableEmitter.md#combineemitter)

#### combineEmitter(emitter, keyA, keyB, options)

> **combineEmitter**\<`U`, `K`\>(`emitter`, `keyA`, `keyB`, `options`?): [`FluentAsyncIterable`](FluentAsyncIterable.md)\<[`T`, `U`]\>

Join the iterable with another the EventEmitter, returning a new async iterable with the inner matching combinations

**IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
emission generates a new yielded result. The default key event is **'data'**.

Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.

If you need to change the key event or other characteristics, you can do it through the **options** parameter

##### Type Parameters

• **U**

• **K**

##### Parameters

• **emitter**: `EventEmitter`\<`DefaultEventMap`\>

The EventEmitter

• **keyA**: keyof `T`

A mapper that returns the key map value from the left iterable

• **keyB**: [`Mapper`](Mapper.md)\<`U`, `K`\>

A mapper that returns the key map value from the right iterable

• **options?**: [`FluentEmitOptions`](../../types/interfaces/FluentEmitOptions.md)

The EventEmitter options. Optional

##### Returns

[`FluentAsyncIterable`](FluentAsyncIterable.md)\<[`T`, `U`]\>

##### Inherited from

[`FluentIterableEmitter`](../../types/interfaces/FluentIterableEmitter.md).[`combineEmitter`](../../types/interfaces/FluentIterableEmitter.md#combineemitter)

***

### concatEmitter()

> **concatEmitter**(`emitter`, `options`?): [`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

Concatenates the specified Emitter to the async iterable.

**IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
emission generates a new yielded result. The default key event is **'data'**.

Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.

If you need to change the key event or other characteristics, you can do it through the **options** parameter

#### Parameters

• **emitter**: `EventEmitter`\<`DefaultEventMap`\>

The EventEmitter

• **options?**: [`FluentEmitOptions`](../../types/interfaces/FluentEmitOptions.md)

The EventEmitter options. Optional

#### Returns

[`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

The [[FluentAsyncIterable]] of the concatenated async iterables.

#### Inherited from

[`FluentIterableEmitter`](../../types/interfaces/FluentIterableEmitter.md).[`concatEmitter`](../../types/interfaces/FluentIterableEmitter.md#concatemitter)

***

### o()

> **o**(): `FluentIterable`\<`T`\>

Alias for assureOrder

Assures the order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be ascending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

#### Returns

`FluentIterable`\<`T`\>

#### Inherited from

[`OrderAssurable`](OrderAssurable.md).[`o`](OrderAssurable.md#o)

***

### od()

> **od**(): `FluentIterable`\<`T`\>

alias for assureOrderDescending

Assures the descending order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be descending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

#### Returns

`FluentIterable`\<`T`\>

#### Inherited from

[`OrderAssurable`](OrderAssurable.md).[`od`](OrderAssurable.md#od)
