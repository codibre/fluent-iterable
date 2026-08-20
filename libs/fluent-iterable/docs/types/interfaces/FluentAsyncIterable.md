[**fluent-iterable v1.38.1**](../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../README.md) / [types](../README.md) / FluentAsyncIterable

# Interface: FluentAsyncIterable\<T\>

Represents an asynchronous iterable extended with common processing and mutating capabilities.<br>
  The capabilities introduced are defined as a [fluent interface](https://en.wikipedia.org/wiki/Fluent_interface) and thus they support *method chaining*.

## Typeparam

T The type of the items in the asynchronous iterable.

## Extends

- `AsyncIterable`\<`T`\>.[`OrderAssurable`](../../index/interfaces/OrderAssurable.md)\<[`FluentAsyncIterable`](../../index/interfaces/FluentAsyncIterable.md)\<`T`\>\>.[`FluentIterableEmitter`](FluentIterableEmitter.md)\<`T`\>

## Type Parameters

• **T**

## Properties

### all

> **all**: [`AsyncAllFunction`](../function-types/interfaces/AsyncAllFunction.md)\<`T`\>

***

### any

> **any**: [`AsyncAnyFunction`](../function-types/interfaces/AsyncAnyFunction.md)\<`T`\>

***

### append

> **append**: [`AsyncAppendFunction`](../function-types/interfaces/AsyncAppendFunction.md)\<`T`\>

***

### avg

> **avg**: [`AsyncAvgFunction`](../function-types/interfaces/AsyncAvgFunction.md)\<`T`\>

***

### catch

> **catch**: [`AsyncCatchFunction`](../function-types/interfaces/AsyncCatchFunction.md)\<`T`\>

***

### combine

> **combine**: [`AsyncCombineFunction`](../function-types/interfaces/AsyncCombineFunction.md)\<`T`\>

***

### combineJoin

> **combineJoin**: [`AsyncCombineJoinFunction`](../function-types/type-aliases/AsyncCombineJoinFunction.md)\<`T`\>

***

### concat

> **concat**: [`AsyncConcatFunction`](../function-types/interfaces/AsyncConcatFunction.md)\<`T`\>

***

### contains

> **contains**: [`AsyncContainsFunction`](../function-types/interfaces/AsyncContainsFunction.md)\<`T`\>

***

### count

> **count**: [`AsyncCountFunction`](../function-types/interfaces/AsyncCountFunction.md)\<`T`\>

***

### distinct

> **distinct**: [`AsyncDistinctFunction`](../function-types/interfaces/AsyncDistinctFunction.md)\<`T`\>

***

### distinctBy

> **distinctBy**: [`AsyncDistinctByFunction`](../function-types/interfaces/AsyncDistinctByFunction.md)\<`T`\>

***

### emit

> **emit**: [`AsyncEmitFunction`](../function-types/interfaces/AsyncEmitFunction.md)\<`T`\>

***

### every

> **every**: [`AsyncAllFunction`](../function-types/interfaces/AsyncAllFunction.md)\<`T`\>

***

### execute

> **execute**: [`AsyncExecuteFunction`](../function-types/interfaces/AsyncExecuteFunction.md)\<`T`\>

***

### filter

> **filter**: [`AsyncFilterFunction`](../function-types/interfaces/AsyncFilterFunction.md)\<`T`\>

***

### finally

> **finally**: [`FinallyFunction`](../function-types/interfaces/FinallyFunction.md)\<`T`, `"async"`\>

***

### first

> **first**: [`AsyncFirstFunction`](../function-types/interfaces/AsyncFirstFunction.md)\<`T`\>

***

### flatJoin

> **flatJoin**: [`AsyncFlatJoinFunction`](../function-types/interfaces/AsyncFlatJoinFunction.md)\<`T`\>

***

### flatMap

> **flatMap**: [`AsyncFlattenFunction`](../function-types/type-aliases/AsyncFlattenFunction.md)\<`T`\>

***

### flatMerge

> **flatMerge**: [`FlatMergeFunction`](../function-types/interfaces/FlatMergeFunction.md)\<`T`\>

***

### flatten

> **flatten**: [`AsyncFlattenFunction`](../function-types/type-aliases/AsyncFlattenFunction.md)\<`T`\>

***

### forEach

> **forEach**: [`AsyncForEachFunction`](../function-types/interfaces/AsyncForEachFunction.md)\<`T`\>

***

### group

> **group**: [`AsyncGroupFunction`](../function-types/interfaces/AsyncGroupFunction.md)\<`T`\>

***

### hasExactly

> **hasExactly**: [`AsyncHasExactlyFunction`](../function-types/interfaces/AsyncHasExactlyFunction.md)

***

### hasLessOrExactly

> **hasLessOrExactly**: [`AsyncHasLessOrExactly`](../function-types/interfaces/AsyncHasLessOrExactly.md)

***

### hasLessThan

> **hasLessThan**: [`AsyncHasLessThanFunction`](../function-types/interfaces/AsyncHasLessThanFunction.md)

***

### hasMoreOrExactly

> **hasMoreOrExactly**: [`AsyncHasMoreOrExactlyFunction`](../function-types/interfaces/AsyncHasMoreOrExactlyFunction.md)

***

### hasMoreThan

> **hasMoreThan**: [`AsyncHasMoreThanFunction`](../function-types/interfaces/AsyncHasMoreThanFunction.md)

***

### isDistinct

> **isDistinct**: [`AsyncIsDistinctFunction`](../function-types/interfaces/AsyncIsDistinctFunction.md)\<`T`\>

***

### join

> **join**: [`AsyncJoinFunction`](../function-types/interfaces/AsyncJoinFunction.md)\<`T`\>

***

### last

> **last**: [`AsyncLastFunction`](../function-types/interfaces/AsyncLastFunction.md)\<`T`\>

***

### map

> **map**: [`AsyncMapFunction`](../function-types/interfaces/AsyncMapFunction.md)\<`T`\>

***

### max

> **max**: [`AsyncMaxFunction`](../function-types/interfaces/AsyncMaxFunction.md)\<`T`\>

***

### merge

> **merge**: [`AsyncMergeFunction`](../function-types/interfaces/AsyncMergeFunction.md)\<`T`\>

***

### mergeCatching

> **mergeCatching**: [`AsyncMergeCatchingFunction`](../function-types/interfaces/AsyncMergeCatchingFunction.md)\<`T`\>

***

### mergeEmitter

> **mergeEmitter**: [`AsyncMergeEmitterFunction`](../function-types/interfaces/AsyncMergeEmitterFunction.md)\<`T`\>

***

### mergeEmitterCatching

> **mergeEmitterCatching**: [`AsyncMergeEmitterCatchingFunction`](../function-types/interfaces/AsyncMergeEmitterCatchingFunction.md)\<`T`\>

***

### min

> **min**: [`AsyncMinFunction`](../function-types/interfaces/AsyncMinFunction.md)\<`T`\>

***

### next

> **next**: [`AsyncNextFunction`](../function-types/interfaces/AsyncNextFunction.md)\<`T`\>

***

### partition

> **partition**: [`AsyncPartitionFunction`](../function-types/interfaces/AsyncPartitionFunction.md)\<`T`\>

***

### prepend

> **prepend**: [`AsyncPrependFunction`](../function-types/interfaces/AsyncPrependFunction.md)\<`T`\>

***

### reduce

> **reduce**: [`AsyncReduceFunction`](../function-types/interfaces/AsyncReduceFunction.md)\<`T`\>

***

### reduceAndMap

> **reduceAndMap**: [`AsyncReduceAndMapFunction`](../function-types/interfaces/AsyncReduceAndMapFunction.md)\<`T`\>

***

### repeat

> **repeat**: [`AsyncRepeatFunction`](../function-types/interfaces/AsyncRepeatFunction.md)\<`T`\>

***

### skip

> **skip**: [`AsyncSkipFunction`](../function-types/interfaces/AsyncSkipFunction.md)\<`T`\>

***

### skipWhile

> **skipWhile**: [`AsyncSkipWhileFunction`](../function-types/interfaces/AsyncSkipWhileFunction.md)\<`T`\>

***

### some

> **some**: [`AsyncAnyFunction`](../function-types/interfaces/AsyncAnyFunction.md)\<`T`\>

***

### sort

> **sort**: [`AsyncSortFunction`](../function-types/interfaces/AsyncSortFunction.md)\<`T`\>

***

### sortBy

> **sortBy**: [`AsyncSortByFunction`](../function-types/interfaces/AsyncSortByFunction.md)\<`T`\>

***

### sum

> **sum**: [`AsyncSumFunction`](../function-types/interfaces/AsyncSumFunction.md)\<`T`\>

***

### take

> **take**: [`AsyncTakeFunction`](../function-types/interfaces/AsyncTakeFunction.md)\<`T`\>

***

### takeWhile

> **takeWhile**: [`AsyncTakeWhileFunction`](../function-types/interfaces/AsyncTakeWhileFunction.md)\<`T`\>

***

### toArray

> **toArray**: [`AsyncToArrayFunction`](../function-types/interfaces/AsyncToArrayFunction.md)\<`T`\>

***

### toMap

> **toMap**: [`AsyncToMapFunction`](../function-types/interfaces/AsyncToMapFunction.md)\<`T`\>

***

### toMapChain

> **toMapChain**: [`AsyncToMapChainFunction`](../function-types/interfaces/AsyncToMapChainFunction.md)\<`T`\>

***

### toMapChainReduce

> **toMapChainReduce**: [`AsyncToMapChainReduceFunction`](../function-types/interfaces/AsyncToMapChainReduceFunction.md)\<`T`\>

***

### toObject

> **toObject**: [`AsyncToObjectFunction`](../function-types/interfaces/AsyncToObjectFunction.md)\<`T`\>

***

### toObjectChain

> **toObjectChain**: [`AsyncToObjectChainFunction`](../function-types/interfaces/AsyncToObjectChainFunction.md)\<`T`\>

***

### toObjectChainReduce

> **toObjectChainReduce**: [`AsyncToObjectChainReduceFunction`](../function-types/interfaces/AsyncToObjectChainReduceFunction.md)\<`T`\>

***

### top

> **top**: [`AsyncTopFunction`](../function-types/interfaces/AsyncTopFunction.md)\<`T`\>

***

### toSet

> **toSet**: [`AsyncToSetFunction`](../function-types/interfaces/AsyncToSetFunction.md)\<`T`\>

***

### unwind

> **unwind**: [`UnwindFunction`](../function-types/interfaces/UnwindFunction.md)\<`T`, `"async"`\>

***

### waitAll

> **waitAll**: [`AsyncWaitAllFunction`](../function-types/interfaces/AsyncWaitAllFunction.md)\<`T`\>

***

### whenEmpty

> **whenEmpty**: [`AsyncWhenEmptyFunction`](../function-types/interfaces/AsyncWhenEmptyFunction.md)

***

### withIndex

> **withIndex**: [`AsyncWithIndexFunction`](../function-types/interfaces/AsyncWithIndexFunction.md)\<`T`\>

## Methods

### \[asyncIterator\]()

> **\[asyncIterator\]**(): `AsyncIterator`\<`T`, `any`, `any`\>

#### Returns

`AsyncIterator`\<`T`, `any`, `any`\>

#### Inherited from

`AsyncIterable.[asyncIterator]`

***

### assureOrder()

> **assureOrder**(): [`FluentAsyncIterable`](../../index/interfaces/FluentAsyncIterable.md)\<`T`\>

Assures the order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be ascending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

#### Returns

[`FluentAsyncIterable`](../../index/interfaces/FluentAsyncIterable.md)\<`T`\>

#### Inherited from

[`OrderAssurable`](../../index/interfaces/OrderAssurable.md).[`assureOrder`](../../index/interfaces/OrderAssurable.md#assureorder)

***

### assureOrderDescending()

> **assureOrderDescending**(): [`FluentAsyncIterable`](../../index/interfaces/FluentAsyncIterable.md)\<`T`\>

Assures the descending order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be descending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

#### Returns

[`FluentAsyncIterable`](../../index/interfaces/FluentAsyncIterable.md)\<`T`\>

#### Inherited from

[`OrderAssurable`](../../index/interfaces/OrderAssurable.md).[`assureOrderDescending`](../../index/interfaces/OrderAssurable.md#assureorderdescending)

***

### combineEmitter()

#### combineEmitter(emitter, options)

> **combineEmitter**\<`U`\>(`emitter`, `options`?): [`FluentAsyncIterable`](../../index/interfaces/FluentAsyncIterable.md)\<[`T`, `U`]\>

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

• **options?**: [`FluentEmitOptions`](FluentEmitOptions.md)

The EventEmitter options. Optional

##### Returns

[`FluentAsyncIterable`](../../index/interfaces/FluentAsyncIterable.md)\<[`T`, `U`]\>

##### Inherited from

[`FluentIterableEmitter`](FluentIterableEmitter.md).[`combineEmitter`](FluentIterableEmitter.md#combineemitter)

#### combineEmitter(emitter, keyA, keyB, options)

> **combineEmitter**\<`U`, `K`\>(`emitter`, `keyA`, `keyB`, `options`?): [`FluentAsyncIterable`](../../index/interfaces/FluentAsyncIterable.md)\<[`T`, `U`]\>

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

• **keyA**: [`Mapper`](../../index/interfaces/Mapper.md)\<`T`, `K`\>

A mapper that returns the key map value from the left iterable

• **keyB**: [`Mapper`](../../index/interfaces/Mapper.md)\<`U`, `K`\>

A mapper that returns the key map value from the right iterable

• **options?**: [`FluentEmitOptions`](FluentEmitOptions.md)

The EventEmitter options. Optional

##### Returns

[`FluentAsyncIterable`](../../index/interfaces/FluentAsyncIterable.md)\<[`T`, `U`]\>

##### Inherited from

[`FluentIterableEmitter`](FluentIterableEmitter.md).[`combineEmitter`](FluentIterableEmitter.md#combineemitter)

#### combineEmitter(emitter, keyA, keyB, options)

> **combineEmitter**\<`U`, `K`\>(`emitter`, `keyA`, `keyB`, `options`?): [`FluentAsyncIterable`](../../index/interfaces/FluentAsyncIterable.md)\<[`T`, `U`]\>

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

• **keyB**: [`Mapper`](../../index/interfaces/Mapper.md)\<`U`, `K`\>

A mapper that returns the key map value from the right iterable

• **options?**: [`FluentEmitOptions`](FluentEmitOptions.md)

The EventEmitter options. Optional

##### Returns

[`FluentAsyncIterable`](../../index/interfaces/FluentAsyncIterable.md)\<[`T`, `U`]\>

##### Inherited from

[`FluentIterableEmitter`](FluentIterableEmitter.md).[`combineEmitter`](FluentIterableEmitter.md#combineemitter)

***

### concatEmitter()

> **concatEmitter**(`emitter`, `options`?): [`FluentAsyncIterable`](../../index/interfaces/FluentAsyncIterable.md)\<`T`\>

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

• **options?**: [`FluentEmitOptions`](FluentEmitOptions.md)

The EventEmitter options. Optional

#### Returns

[`FluentAsyncIterable`](../../index/interfaces/FluentAsyncIterable.md)\<`T`\>

The [[FluentAsyncIterable]] of the concatenated async iterables.

#### Inherited from

[`FluentIterableEmitter`](FluentIterableEmitter.md).[`concatEmitter`](FluentIterableEmitter.md#concatemitter)

***

### o()

> **o**(): [`FluentAsyncIterable`](../../index/interfaces/FluentAsyncIterable.md)\<`T`\>

Alias for assureOrder

Assures the order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be ascending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

#### Returns

[`FluentAsyncIterable`](../../index/interfaces/FluentAsyncIterable.md)\<`T`\>

#### Inherited from

[`OrderAssurable`](../../index/interfaces/OrderAssurable.md).[`o`](../../index/interfaces/OrderAssurable.md#o)

***

### od()

> **od**(): [`FluentAsyncIterable`](../../index/interfaces/FluentAsyncIterable.md)\<`T`\>

alias for assureOrderDescending

Assures the descending order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be descending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

#### Returns

[`FluentAsyncIterable`](../../index/interfaces/FluentAsyncIterable.md)\<`T`\>

#### Inherited from

[`OrderAssurable`](../../index/interfaces/OrderAssurable.md).[`od`](../../index/interfaces/OrderAssurable.md#od)
