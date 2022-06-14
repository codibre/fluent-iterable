[fluent-iterable - v1.22.0](../README.md) / [index](../modules/index.md) / FluentAsyncIterable

# Interface: FluentAsyncIterable<T\>

[index](../modules/index.md).FluentAsyncIterable

Represents an asynchronous iterable extended with common processing and mutating capabilities.<br>
  The capabilities introduced are defined as a [fluent interface](https://en.wikipedia.org/wiki/Fluent_interface) and thus they support *method chaining*.

## Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the items in the asynchronous iterable. |

## Hierarchy

- `AsyncIterable`<`T`\>

- [`OrderAssurable`](index.OrderAssurable.md)<[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>\>

- [`FluentIterableEmitter`](types.FluentIterableEmitter.md)<`T`\>

  ↳ **`FluentAsyncIterable`**

## Table of contents

### Properties

- [all](index.FluentAsyncIterable.md#all)
- [any](index.FluentAsyncIterable.md#any)
- [append](index.FluentAsyncIterable.md#append)
- [avg](index.FluentAsyncIterable.md#avg)
- [catch](index.FluentAsyncIterable.md#catch)
- [combine](index.FluentAsyncIterable.md#combine)
- [concat](index.FluentAsyncIterable.md#concat)
- [contains](index.FluentAsyncIterable.md#contains)
- [count](index.FluentAsyncIterable.md#count)
- [distinct](index.FluentAsyncIterable.md#distinct)
- [emit](index.FluentAsyncIterable.md#emit)
- [every](index.FluentAsyncIterable.md#every)
- [execute](index.FluentAsyncIterable.md#execute)
- [filter](index.FluentAsyncIterable.md#filter)
- [first](index.FluentAsyncIterable.md#first)
- [flatMap](index.FluentAsyncIterable.md#flatmap)
- [flatMerge](index.FluentAsyncIterable.md#flatmerge)
- [flatten](index.FluentAsyncIterable.md#flatten)
- [forEach](index.FluentAsyncIterable.md#foreach)
- [group](index.FluentAsyncIterable.md#group)
- [hasExactly](index.FluentAsyncIterable.md#hasexactly)
- [hasLessOrExactly](index.FluentAsyncIterable.md#haslessorexactly)
- [hasLessThan](index.FluentAsyncIterable.md#haslessthan)
- [hasMoreOrExactly](index.FluentAsyncIterable.md#hasmoreorexactly)
- [hasMoreThan](index.FluentAsyncIterable.md#hasmorethan)
- [isDistinct](index.FluentAsyncIterable.md#isdistinct)
- [join](index.FluentAsyncIterable.md#join)
- [last](index.FluentAsyncIterable.md#last)
- [map](index.FluentAsyncIterable.md#map)
- [max](index.FluentAsyncIterable.md#max)
- [merge](index.FluentAsyncIterable.md#merge)
- [mergeCatching](index.FluentAsyncIterable.md#mergecatching)
- [mergeEmitter](index.FluentAsyncIterable.md#mergeemitter)
- [mergeEmitterCatching](index.FluentAsyncIterable.md#mergeemittercatching)
- [min](index.FluentAsyncIterable.md#min)
- [next](index.FluentAsyncIterable.md#next)
- [partition](index.FluentAsyncIterable.md#partition)
- [prepend](index.FluentAsyncIterable.md#prepend)
- [reduce](index.FluentAsyncIterable.md#reduce)
- [reduceAndMap](index.FluentAsyncIterable.md#reduceandmap)
- [repeat](index.FluentAsyncIterable.md#repeat)
- [skip](index.FluentAsyncIterable.md#skip)
- [skipWhile](index.FluentAsyncIterable.md#skipwhile)
- [some](index.FluentAsyncIterable.md#some)
- [sort](index.FluentAsyncIterable.md#sort)
- [sortBy](index.FluentAsyncIterable.md#sortby)
- [sum](index.FluentAsyncIterable.md#sum)
- [take](index.FluentAsyncIterable.md#take)
- [takeWhile](index.FluentAsyncIterable.md#takewhile)
- [toArray](index.FluentAsyncIterable.md#toarray)
- [toMap](index.FluentAsyncIterable.md#tomap)
- [toObject](index.FluentAsyncIterable.md#toobject)
- [toSet](index.FluentAsyncIterable.md#toset)
- [top](index.FluentAsyncIterable.md#top)
- [waitAll](index.FluentAsyncIterable.md#waitall)
- [whenEmpty](index.FluentAsyncIterable.md#whenempty)
- [withIndex](index.FluentAsyncIterable.md#withindex)

### Methods

- [[asyncIterator]](index.FluentAsyncIterable.md#[asynciterator])
- [assureOrder](index.FluentAsyncIterable.md#assureorder)
- [assureOrderDescending](index.FluentAsyncIterable.md#assureorderdescending)
- [combineEmitter](index.FluentAsyncIterable.md#combineemitter)
- [concatEmitter](index.FluentAsyncIterable.md#concatemitter)
- [o](index.FluentAsyncIterable.md#o)
- [od](index.FluentAsyncIterable.md#od)

## Properties

### all

• **all**: [`AsyncAllFunction`](types_function_types.AsyncAllFunction.md)<`T`\>

___

### any

• **any**: [`AsyncAnyFunction`](types_function_types.AsyncAnyFunction.md)<`T`\>

___

### append

• **append**: [`AsyncAppendFunction`](types_function_types.AsyncAppendFunction.md)<`T`\>

___

### avg

• **avg**: [`AsyncAvgFunction`](types_function_types.AsyncAvgFunction.md)<`T`\>

___

### catch

• **catch**: [`AsyncCatchFunction`](types_function_types.AsyncCatchFunction.md)<`T`\>

___

### combine

• **combine**: [`AsyncCombineFunction`](types_function_types.AsyncCombineFunction.md)<`T`\>

___

### concat

• **concat**: [`AsyncConcatFunction`](types_function_types.AsyncConcatFunction.md)<`T`\>

___

### contains

• **contains**: [`AsyncContainsFunction`](types_function_types.AsyncContainsFunction.md)<`T`\>

___

### count

• **count**: [`AsyncCountFunction`](types_function_types.AsyncCountFunction.md)<`T`\>

___

### distinct

• **distinct**: [`AsyncDistinctFunction`](types_function_types.AsyncDistinctFunction.md)<`T`\>

___

### emit

• **emit**: [`AsyncEmitFunction`](types_function_types.AsyncEmitFunction.md)<`T`\>

___

### every

• **every**: [`AsyncAllFunction`](types_function_types.AsyncAllFunction.md)<`T`\>

___

### execute

• **execute**: [`AsyncExecuteFunction`](types_function_types.AsyncExecuteFunction.md)<`T`\>

___

### filter

• **filter**: [`AsyncFilterFunction`](types_function_types.AsyncFilterFunction.md)<`T`\>

___

### first

• **first**: [`AsyncFirstFunction`](types_function_types.AsyncFirstFunction.md)<`T`\>

___

### flatMap

• **flatMap**: [`AsyncFlattenFunction`](../modules/types_function_types.md#asyncflattenfunction)<`T`\>

___

### flatMerge

• **flatMerge**: [`FlatMergeFunction`](types_function_types.FlatMergeFunction.md)<`T`\>

___

### flatten

• **flatten**: [`AsyncFlattenFunction`](../modules/types_function_types.md#asyncflattenfunction)<`T`\>

___

### forEach

• **forEach**: [`AsyncForEachFunction`](types_function_types.AsyncForEachFunction.md)<`T`\>

___

### group

• **group**: [`AsyncGroupFunction`](types_function_types.AsyncGroupFunction.md)<`T`\>

___

### hasExactly

• **hasExactly**: [`AsyncHasExactlyFunction`](types_function_types.AsyncHasExactlyFunction.md)

___

### hasLessOrExactly

• **hasLessOrExactly**: [`AsyncHasLessOrExactly`](types_function_types.AsyncHasLessOrExactly.md)

___

### hasLessThan

• **hasLessThan**: [`AsyncHasLessThanFunction`](types_function_types.AsyncHasLessThanFunction.md)

___

### hasMoreOrExactly

• **hasMoreOrExactly**: [`AsyncHasMoreOrExactlyFunction`](types_function_types.AsyncHasMoreOrExactlyFunction.md)

___

### hasMoreThan

• **hasMoreThan**: [`AsyncHasMoreThanFunction`](types_function_types.AsyncHasMoreThanFunction.md)

___

### isDistinct

• **isDistinct**: [`AsyncIsDistinctFunction`](types_function_types.AsyncIsDistinctFunction.md)<`T`\>

___

### join

• **join**: [`AsyncJoinFunction`](types_function_types.AsyncJoinFunction.md)<`T`\>

___

### last

• **last**: [`AsyncLastFunction`](types_function_types.AsyncLastFunction.md)<`T`\>

___

### map

• **map**: [`AsyncMapFunction`](types_function_types.AsyncMapFunction.md)<`T`\>

___

### max

• **max**: [`AsyncMaxFunction`](types_function_types.AsyncMaxFunction.md)<`T`\>

___

### merge

• **merge**: [`AsyncMergeFunction`](types_function_types.AsyncMergeFunction.md)<`T`\>

___

### mergeCatching

• **mergeCatching**: [`AsyncMergeCatchingFunction`](types_function_types.AsyncMergeCatchingFunction.md)<`T`\>

___

### mergeEmitter

• **mergeEmitter**: [`AsyncMergeEmitterFunction`](types_function_types.AsyncMergeEmitterFunction.md)<`T`\>

___

### mergeEmitterCatching

• **mergeEmitterCatching**: [`AsyncMergeEmitterCatchingFunction`](types_function_types.AsyncMergeEmitterCatchingFunction.md)<`T`\>

___

### min

• **min**: [`AsyncMinFunction`](types_function_types.AsyncMinFunction.md)<`T`\>

___

### next

• **next**: [`AsyncNextFunction`](types_function_types.AsyncNextFunction.md)<`T`\>

___

### partition

• **partition**: [`AsyncPartitionFunction`](types_function_types.AsyncPartitionFunction.md)<`T`\>

___

### prepend

• **prepend**: [`AsyncPrependFunction`](types_function_types.AsyncPrependFunction.md)<`T`\>

___

### reduce

• **reduce**: [`AsyncReduceFunction`](types_function_types.AsyncReduceFunction.md)<`T`\>

___

### reduceAndMap

• **reduceAndMap**: [`AsyncReduceAndMapFunction`](types_function_types.AsyncReduceAndMapFunction.md)<`T`\>

___

### repeat

• **repeat**: [`AsyncRepeatFunction`](types_function_types.AsyncRepeatFunction.md)<`T`\>

___

### skip

• **skip**: [`AsyncSkipFunction`](types_function_types.AsyncSkipFunction.md)<`T`\>

___

### skipWhile

• **skipWhile**: [`AsyncSkipWhileFunction`](types_function_types.AsyncSkipWhileFunction.md)<`T`\>

___

### some

• **some**: [`AsyncAnyFunction`](types_function_types.AsyncAnyFunction.md)<`T`\>

___

### sort

• **sort**: [`AsyncSortFunction`](types_function_types.AsyncSortFunction.md)<`T`\>

___

### sortBy

• **sortBy**: [`AsyncSortByFunction`](types_function_types.AsyncSortByFunction.md)<`T`\>

___

### sum

• **sum**: [`AsyncSumFunction`](types_function_types.AsyncSumFunction.md)<`T`\>

___

### take

• **take**: [`AsyncTakeFunction`](types_function_types.AsyncTakeFunction.md)<`T`\>

___

### takeWhile

• **takeWhile**: [`AsyncTakeWhileFunction`](types_function_types.AsyncTakeWhileFunction.md)<`T`\>

___

### toArray

• **toArray**: [`AsyncToArrayFunction`](types_function_types.AsyncToArrayFunction.md)<`T`\>

___

### toMap

• **toMap**: [`AsyncToMapFunction`](types_function_types.AsyncToMapFunction.md)<`T`\>

___

### toObject

• **toObject**: [`AsyncToObjectFunction`](types_function_types.AsyncToObjectFunction.md)<`T`\>

___

### toSet

• **toSet**: [`AsyncToSetFunction`](types_function_types.AsyncToSetFunction.md)<`T`\>

___

### top

• **top**: [`AsyncTopFunction`](types_function_types.AsyncTopFunction.md)<`T`\>

___

### waitAll

• **waitAll**: [`AsyncWaitAllFunction`](types_function_types.AsyncWaitAllFunction.md)<`T`\>

___

### whenEmpty

• **whenEmpty**: [`AsyncWhenEmptyFunction`](types_function_types.AsyncWhenEmptyFunction.md)

___

### withIndex

• **withIndex**: [`AsyncWithIndexFunction`](types_function_types.AsyncWithIndexFunction.md)<`T`\>

## Methods

### [asyncIterator]

▸ **[asyncIterator]**(): `AsyncIterator`<`T`, `any`, `undefined`\>

#### Returns

`AsyncIterator`<`T`, `any`, `undefined`\>

#### Inherited from

AsyncIterable.\_\_@asyncIterator@20783

___

### assureOrder

▸ **assureOrder**(): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

Assures the order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be ascending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

#### Inherited from

[OrderAssurable](index.OrderAssurable.md).[assureOrder](index.OrderAssurable.md#assureorder)

___

### assureOrderDescending

▸ **assureOrderDescending**(): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

Assures the descending order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be descending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

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

▸ **o**(): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

Alias for assureOrder

Assures the order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be ascending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

#### Inherited from

[OrderAssurable](index.OrderAssurable.md).[o](index.OrderAssurable.md#o)

___

### od

▸ **od**(): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

alias for assureOrderDescending

Assures the descending order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be descending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

#### Inherited from

[OrderAssurable](index.OrderAssurable.md).[od](index.OrderAssurable.md#od)
