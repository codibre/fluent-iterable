[**fluent-iterable v1.38.1**](../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../README.md) / [index](../README.md) / FluentAsyncIterable

# Interface: FluentAsyncIterable\<T\>

Represents an asynchronous iterable extended with common processing and mutating capabilities.<br>
  The capabilities introduced are defined as a [fluent interface](https://en.wikipedia.org/wiki/Fluent_interface) and thus they support *method chaining*.

## Typeparam

T The type of the items in the asynchronous iterable.

## Extends

- `AsyncIterable`\<`T`\>.[`OrderAssurable`](OrderAssurable.md)\<[`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>\>.[`FluentIterableEmitter`](../../types/interfaces/FluentIterableEmitter.md)\<`T`\>

## Type Parameters

• **T**

## Properties

### all

> **all**: [`AsyncAllFunction`](../../types/function-types/interfaces/AsyncAllFunction.md)\<`T`\>

***

### any

> **any**: [`AsyncAnyFunction`](../../types/function-types/interfaces/AsyncAnyFunction.md)\<`T`\>

***

### append

> **append**: [`AsyncAppendFunction`](../../types/function-types/interfaces/AsyncAppendFunction.md)\<`T`\>

***

### avg

> **avg**: [`AsyncAvgFunction`](../../types/function-types/interfaces/AsyncAvgFunction.md)\<`T`\>

***

### catch

> **catch**: [`AsyncCatchFunction`](../../types/function-types/interfaces/AsyncCatchFunction.md)\<`T`\>

***

### combine

> **combine**: [`AsyncCombineFunction`](../../types/function-types/interfaces/AsyncCombineFunction.md)\<`T`\>

***

### combineJoin

> **combineJoin**: [`AsyncCombineJoinFunction`](../../types/function-types/type-aliases/AsyncCombineJoinFunction.md)\<`T`\>

***

### concat

> **concat**: [`AsyncConcatFunction`](../../types/function-types/interfaces/AsyncConcatFunction.md)\<`T`\>

***

### contains

> **contains**: [`AsyncContainsFunction`](../../types/function-types/interfaces/AsyncContainsFunction.md)\<`T`\>

***

### count

> **count**: [`AsyncCountFunction`](../../types/function-types/interfaces/AsyncCountFunction.md)\<`T`\>

***

### distinct

> **distinct**: [`AsyncDistinctFunction`](../../types/function-types/interfaces/AsyncDistinctFunction.md)\<`T`\>

***

### distinctBy

> **distinctBy**: [`AsyncDistinctByFunction`](../../types/function-types/interfaces/AsyncDistinctByFunction.md)\<`T`\>

***

### emit

> **emit**: [`AsyncEmitFunction`](../../types/function-types/interfaces/AsyncEmitFunction.md)\<`T`\>

***

### every

> **every**: [`AsyncAllFunction`](../../types/function-types/interfaces/AsyncAllFunction.md)\<`T`\>

***

### execute

> **execute**: [`AsyncExecuteFunction`](../../types/function-types/interfaces/AsyncExecuteFunction.md)\<`T`\>

***

### filter

> **filter**: [`AsyncFilterFunction`](../../types/function-types/interfaces/AsyncFilterFunction.md)\<`T`\>

***

### finally

> **finally**: [`FinallyFunction`](../../types/function-types/interfaces/FinallyFunction.md)\<`T`, `"async"`\>

***

### first

> **first**: [`AsyncFirstFunction`](../../types/function-types/interfaces/AsyncFirstFunction.md)\<`T`\>

***

### flatJoin

> **flatJoin**: [`AsyncFlatJoinFunction`](../../types/function-types/interfaces/AsyncFlatJoinFunction.md)\<`T`\>

***

### flatMap

> **flatMap**: [`AsyncFlattenFunction`](../../types/function-types/type-aliases/AsyncFlattenFunction.md)\<`T`\>

***

### flatMerge

> **flatMerge**: [`FlatMergeFunction`](../../types/function-types/interfaces/FlatMergeFunction.md)\<`T`\>

***

### flatten

> **flatten**: [`AsyncFlattenFunction`](../../types/function-types/type-aliases/AsyncFlattenFunction.md)\<`T`\>

***

### forEach

> **forEach**: [`AsyncForEachFunction`](../../types/function-types/interfaces/AsyncForEachFunction.md)\<`T`\>

***

### group

> **group**: [`AsyncGroupFunction`](../../types/function-types/interfaces/AsyncGroupFunction.md)\<`T`\>

***

### hasExactly

> **hasExactly**: [`AsyncHasExactlyFunction`](../../types/function-types/interfaces/AsyncHasExactlyFunction.md)

***

### hasLessOrExactly

> **hasLessOrExactly**: [`AsyncHasLessOrExactly`](../../types/function-types/interfaces/AsyncHasLessOrExactly.md)

***

### hasLessThan

> **hasLessThan**: [`AsyncHasLessThanFunction`](../../types/function-types/interfaces/AsyncHasLessThanFunction.md)

***

### hasMoreOrExactly

> **hasMoreOrExactly**: [`AsyncHasMoreOrExactlyFunction`](../../types/function-types/interfaces/AsyncHasMoreOrExactlyFunction.md)

***

### hasMoreThan

> **hasMoreThan**: [`AsyncHasMoreThanFunction`](../../types/function-types/interfaces/AsyncHasMoreThanFunction.md)

***

### isDistinct

> **isDistinct**: [`AsyncIsDistinctFunction`](../../types/function-types/interfaces/AsyncIsDistinctFunction.md)\<`T`\>

***

### join

> **join**: [`AsyncJoinFunction`](../../types/function-types/interfaces/AsyncJoinFunction.md)\<`T`\>

***

### last

> **last**: [`AsyncLastFunction`](../../types/function-types/interfaces/AsyncLastFunction.md)\<`T`\>

***

### map

> **map**: [`AsyncMapFunction`](../../types/function-types/interfaces/AsyncMapFunction.md)\<`T`\>

***

### max

> **max**: [`AsyncMaxFunction`](../../types/function-types/interfaces/AsyncMaxFunction.md)\<`T`\>

***

### merge

> **merge**: [`AsyncMergeFunction`](../../types/function-types/interfaces/AsyncMergeFunction.md)\<`T`\>

***

### mergeCatching

> **mergeCatching**: [`AsyncMergeCatchingFunction`](../../types/function-types/interfaces/AsyncMergeCatchingFunction.md)\<`T`\>

***

### mergeEmitter

> **mergeEmitter**: [`AsyncMergeEmitterFunction`](../../types/function-types/interfaces/AsyncMergeEmitterFunction.md)\<`T`\>

***

### mergeEmitterCatching

> **mergeEmitterCatching**: [`AsyncMergeEmitterCatchingFunction`](../../types/function-types/interfaces/AsyncMergeEmitterCatchingFunction.md)\<`T`\>

***

### min

> **min**: [`AsyncMinFunction`](../../types/function-types/interfaces/AsyncMinFunction.md)\<`T`\>

***

### next

> **next**: [`AsyncNextFunction`](../../types/function-types/interfaces/AsyncNextFunction.md)\<`T`\>

***

### partition

> **partition**: [`AsyncPartitionFunction`](../../types/function-types/interfaces/AsyncPartitionFunction.md)\<`T`\>

***

### prepend

> **prepend**: [`AsyncPrependFunction`](../../types/function-types/interfaces/AsyncPrependFunction.md)\<`T`\>

***

### reduce

> **reduce**: [`AsyncReduceFunction`](../../types/function-types/interfaces/AsyncReduceFunction.md)\<`T`\>

***

### reduceAndMap

> **reduceAndMap**: [`AsyncReduceAndMapFunction`](../../types/function-types/interfaces/AsyncReduceAndMapFunction.md)\<`T`\>

***

### repeat

> **repeat**: [`AsyncRepeatFunction`](../../types/function-types/interfaces/AsyncRepeatFunction.md)\<`T`\>

***

### skip

> **skip**: [`AsyncSkipFunction`](../../types/function-types/interfaces/AsyncSkipFunction.md)\<`T`\>

***

### skipWhile

> **skipWhile**: [`AsyncSkipWhileFunction`](../../types/function-types/interfaces/AsyncSkipWhileFunction.md)\<`T`\>

***

### some

> **some**: [`AsyncAnyFunction`](../../types/function-types/interfaces/AsyncAnyFunction.md)\<`T`\>

***

### sort

> **sort**: [`AsyncSortFunction`](../../types/function-types/interfaces/AsyncSortFunction.md)\<`T`\>

***

### sortBy

> **sortBy**: [`AsyncSortByFunction`](../../types/function-types/interfaces/AsyncSortByFunction.md)\<`T`\>

***

### sum

> **sum**: [`AsyncSumFunction`](../../types/function-types/interfaces/AsyncSumFunction.md)\<`T`\>

***

### take

> **take**: [`AsyncTakeFunction`](../../types/function-types/interfaces/AsyncTakeFunction.md)\<`T`\>

***

### takeWhile

> **takeWhile**: [`AsyncTakeWhileFunction`](../../types/function-types/interfaces/AsyncTakeWhileFunction.md)\<`T`\>

***

### toArray

> **toArray**: [`AsyncToArrayFunction`](../../types/function-types/interfaces/AsyncToArrayFunction.md)\<`T`\>

***

### toMap

> **toMap**: [`AsyncToMapFunction`](../../types/function-types/interfaces/AsyncToMapFunction.md)\<`T`\>

***

### toMapChain

> **toMapChain**: [`AsyncToMapChainFunction`](../../types/function-types/interfaces/AsyncToMapChainFunction.md)\<`T`\>

***

### toMapChainReduce

> **toMapChainReduce**: [`AsyncToMapChainReduceFunction`](../../types/function-types/interfaces/AsyncToMapChainReduceFunction.md)\<`T`\>

***

### toObject

> **toObject**: [`AsyncToObjectFunction`](../../types/function-types/interfaces/AsyncToObjectFunction.md)\<`T`\>

***

### toObjectChain

> **toObjectChain**: [`AsyncToObjectChainFunction`](../../types/function-types/interfaces/AsyncToObjectChainFunction.md)\<`T`\>

***

### toObjectChainReduce

> **toObjectChainReduce**: [`AsyncToObjectChainReduceFunction`](../../types/function-types/interfaces/AsyncToObjectChainReduceFunction.md)\<`T`\>

***

### top

> **top**: [`AsyncTopFunction`](../../types/function-types/interfaces/AsyncTopFunction.md)\<`T`\>

***

### toSet

> **toSet**: [`AsyncToSetFunction`](../../types/function-types/interfaces/AsyncToSetFunction.md)\<`T`\>

***

### unwind

> **unwind**: [`UnwindFunction`](../../types/function-types/interfaces/UnwindFunction.md)\<`T`, `"async"`\>

***

### waitAll

> **waitAll**: [`AsyncWaitAllFunction`](../../types/function-types/interfaces/AsyncWaitAllFunction.md)\<`T`\>

***

### whenEmpty

> **whenEmpty**: [`AsyncWhenEmptyFunction`](../../types/function-types/interfaces/AsyncWhenEmptyFunction.md)

***

### withIndex

> **withIndex**: [`AsyncWithIndexFunction`](../../types/function-types/interfaces/AsyncWithIndexFunction.md)\<`T`\>

## Methods

### \[asyncIterator\]()

> **\[asyncIterator\]**(): `AsyncIterator`\<`T`, `any`, `any`\>

#### Returns

`AsyncIterator`\<`T`, `any`, `any`\>

#### Inherited from

`AsyncIterable.[asyncIterator]`

***

### assureOrder()

> **assureOrder**(): [`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

Assures the order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be ascending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

#### Returns

[`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

#### Inherited from

[`OrderAssurable`](OrderAssurable.md).[`assureOrder`](OrderAssurable.md#assureorder)

***

### assureOrderDescending()

> **assureOrderDescending**(): [`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

Assures the descending order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be descending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

#### Returns

[`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

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

> **o**(): [`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

Alias for assureOrder

Assures the order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be ascending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

#### Returns

[`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

#### Inherited from

[`OrderAssurable`](OrderAssurable.md).[`o`](OrderAssurable.md#o)

***

### od()

> **od**(): [`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

alias for assureOrderDescending

Assures the descending order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be descending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

#### Returns

[`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

#### Inherited from

[`OrderAssurable`](OrderAssurable.md).[`od`](OrderAssurable.md#od)

***

### testIterable()

> **testIterable**(): [`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

#### Returns

[`FluentAsyncIterable`](FluentAsyncIterable.md)\<`T`\>

***

### testResolving()

> **testResolving**(): `PromiseLike`\<`number`\>

#### Returns

`PromiseLike`\<`number`\>
