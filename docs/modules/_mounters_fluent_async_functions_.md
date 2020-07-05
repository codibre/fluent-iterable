[fluent-iterable - v0.3.2](../README.md) › ["mounters/fluent-async-functions"](_mounters_fluent_async_functions_.md)

# Module: "mounters/fluent-async-functions"

## Index

### Object literals

* [asyncHelper](_mounters_fluent_async_functions_.md#const-asynchelper)
* [asyncIterableFuncs](_mounters_fluent_async_functions_.md#const-asynciterablefuncs)
* [asyncResolvingFuncs](_mounters_fluent_async_functions_.md#const-asyncresolvingfuncs)
* [asyncSpecial](_mounters_fluent_async_functions_.md#const-asyncspecial)

## Object literals

### `Const` asyncHelper

### ▪ **asyncHelper**: *object*

###  all

• **all**: *(Anonymous function)* = allAsync

###  any

• **any**: *(Anonymous function)* = anyAsync

###  append

• **append**: *any* = appendAsync

###  avg

• **avg**: *(Anonymous function)* = avgAsync

###  concat

• **concat**: *(Anonymous function)* = concatAsync

###  contains

• **contains**: *(Anonymous function)* = containsAsync

###  count

• **count**: *(Anonymous function)* = countAsync

###  distinct

• **distinct**: *distinct* = distinctAsync

###  execute

• **execute**: *(Anonymous function)* = executeAsync

###  filter

• **filter**: *filterAsync* = filterAsync

###  first

• **first**: *(Anonymous function)* = firstAsync

###  flatten

• **flatten**: *(Anonymous function)* = flattenAsync

###  forEach

• **forEach**: *forEachAsync* = forEachAsync

###  hasExactly

• **hasExactly**: *(Anonymous function)* = hasExactlyAsync

###  hasLessThan

• **hasLessThan**: *(Anonymous function)* = hasLessThanAsync

###  hasMoreThan

• **hasMoreThan**: *(Anonymous function)* = hasMoreThanAsync

###  join

• **join**: *(Anonymous function)* = joinAsync

###  last

• **last**: *(Anonymous function)* = lastAsync

###  map

• **map**: *mapAsync* = mapAsync

###  max

• **max**: *function* = maxAsync

#### Type declaration:

▸ ‹**T**›(`iterable`: AnyIterable‹T›, `mapper?`: [AsyncMapper](../interfaces/_types_types_.asyncmapper.md)‹T, number›): *Promise‹T | undefined›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AnyIterable‹T› |
`mapper?` | [AsyncMapper](../interfaces/_types_types_.asyncmapper.md)‹T, number› |

###  merge

• **merge**: *merge*

###  mergeCatching

• **mergeCatching**: *mergeCatching*

###  min

• **min**: *(Anonymous function)* = minAsync

###  partition

• **partition**: *partitionAsync* = partitionAsync

###  prepend

• **prepend**: *any* = prependAsync

###  reduce

• **reduce**: *(Anonymous function)* = reduceAsync

###  reduceAndMap

• **reduceAndMap**: *(Anonymous function)* = reduceAndMapAsync

###  repeat

• **repeat**: *(Anonymous function)* = repeatAsync

###  skip

• **skip**: *(Anonymous function)* = skipAsync

###  skipWhile

• **skipWhile**: *(Anonymous function)* = skipWhileAsync

###  sort

• **sort**: *(Anonymous function)* = sortAsync

###  sum

• **sum**: *(Anonymous function)* = sumAsync

###  take

• **take**: *(Anonymous function)* = takeAsync

###  takeWhile

• **takeWhile**: *takeWhileAsync* = takeWhileAsync

###  toArray

• **toArray**: *toArrayAsync* = toArrayAsync

###  toObject

• **toObject**: *(Anonymous function)* = toObjectAsync

###  top

• **top**: *(Anonymous function)* = topAsync

###  withIndex

• **withIndex**: *(Anonymous function)* = withIndexAsync

___

### `Const` asyncIterableFuncs

### ▪ **asyncIterableFuncs**: *object*

###  append

• **append**: *any* = appendAsync

###  concat

• **concat**: *(Anonymous function)* = concatAsync

###  distinct

• **distinct**: *distinct* = distinctAsync

###  distinctAsync

• **distinctAsync**: *distinct*

###  execute

• **execute**: *(Anonymous function)* = executeAsync

###  executeAsync

• **executeAsync**: *(Anonymous function)*

###  filter

• **filter**: *filterAsync* = filterAsync

###  filterAsync

• **filterAsync**: *filterAsync*

###  flatten

• **flatten**: *(Anonymous function)* = flattenAsync

###  flattenAsync

• **flattenAsync**: *(Anonymous function)*

###  group

• **group**: *(Anonymous function)* = groupAsync

###  groupAsync

• **groupAsync**: *(Anonymous function)*

###  map

• **map**: *mapAsync* = mapAsync

###  mapAsync

• **mapAsync**: *mapAsync*

###  merge

• **merge**: *merge*

###  mergeCatching

• **mergeCatching**: *mergeCatching*

###  prepend

• **prepend**: *any* = prependAsync

###  repeat

• **repeat**: *(Anonymous function)* = repeatAsync

###  skip

• **skip**: *(Anonymous function)* = skipAsync

###  skipWhile

• **skipWhile**: *(Anonymous function)* = skipWhileAsync

###  skipWhileAsync

• **skipWhileAsync**: *(Anonymous function)*

###  sort

• **sort**: *(Anonymous function)* = sortAsync

###  take

• **take**: *(Anonymous function)* = takeAsync

###  takeWhile

• **takeWhile**: *takeWhileAsync* = takeWhileAsync

###  takeWhileAsync

• **takeWhileAsync**: *takeWhileAsync*

###  withIndex

• **withIndex**: *(Anonymous function)* = withIndexAsync

___

### `Const` asyncResolvingFuncs

### ▪ **asyncResolvingFuncs**: *object*

###  all

• **all**: *(Anonymous function)* = allAsync

###  any

• **any**: *(Anonymous function)* = anyAsync

###  avg

• **avg**: *(Anonymous function)* = avgAsync

###  contains

• **contains**: *(Anonymous function)* = containsAsync

###  count

• **count**: *(Anonymous function)* = countAsync

###  first

• **first**: *(Anonymous function)* = firstAsync

###  forEach

• **forEach**: *forEachAsync* = forEachAsync

###  hasExactly

• **hasExactly**: *(Anonymous function)* = hasExactlyAsync

###  hasLessThan

• **hasLessThan**: *(Anonymous function)* = hasLessThanAsync

###  hasMoreThan

• **hasMoreThan**: *(Anonymous function)* = hasMoreThanAsync

###  join

• **join**: *(Anonymous function)* = joinAsync

###  last

• **last**: *(Anonymous function)* = lastAsync

###  max

• **max**: *function* = maxAsync

#### Type declaration:

▸ ‹**T**›(`iterable`: AnyIterable‹T›, `mapper?`: [AsyncMapper](../interfaces/_types_types_.asyncmapper.md)‹T, number›): *Promise‹T | undefined›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | AnyIterable‹T› |
`mapper?` | [AsyncMapper](../interfaces/_types_types_.asyncmapper.md)‹T, number› |

###  min

• **min**: *(Anonymous function)* = minAsync

###  reduce

• **reduce**: *(Anonymous function)* = reduceAsync

###  reduceAndMap

• **reduceAndMap**: *(Anonymous function)* = reduceAndMapAsync

###  sum

• **sum**: *(Anonymous function)* = sumAsync

###  toArray

• **toArray**: *toArrayAsync* = toArrayAsync

###  toObject

• **toObject**: *(Anonymous function)* = toObjectAsync

###  top

• **top**: *(Anonymous function)* = topAsync

___

### `Const` asyncSpecial

### ▪ **asyncSpecial**: *object*

###  group

• **group**: *(Anonymous function)* = groupAsync

###  groupAsync

• **groupAsync**: *(Anonymous function)*

###  partition

• **partition**: *partitionAsync* = partitionAsync
