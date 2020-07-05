[fluent-iterable - v0.2.1](../README.md) › ["types/types"](../modules/_types_types_.md) › [FluentAsyncIterable](_types_types_.fluentasynciterable.md)

# Interface: FluentAsyncIterable ‹**T**›

Represents an asynchronous iterable extended with common processing and mutating capabilities.<br>
  The capabilities introduced are defined as a [fluent interface](https://en.wikipedia.org/wiki/Fluent_interface) and thus they support *method chaining*.

## Type parameters

▪ **T**

The type of the items in the asynchronous iterable.

## Hierarchy

* AsyncIterable‹T›

  ↳ **FluentAsyncIterable**

## Index

### Properties

* [all](_types_types_.fluentasynciterable.md#all)
* [any](_types_types_.fluentasynciterable.md#any)
* [avg](_types_types_.fluentasynciterable.md#avg)
* [count](_types_types_.fluentasynciterable.md#count)
* [first](_types_types_.fluentasynciterable.md#first)
* [flatten](_types_types_.fluentasynciterable.md#flatten)
* [forEach](_types_types_.fluentasynciterable.md#foreach)
* [group](_types_types_.fluentasynciterable.md#group)
* [join](_types_types_.fluentasynciterable.md#join)
* [last](_types_types_.fluentasynciterable.md#last)
* [max](_types_types_.fluentasynciterable.md#max)
* [min](_types_types_.fluentasynciterable.md#min)
* [reduce](_types_types_.fluentasynciterable.md#reduce)
* [reduceAndMap](_types_types_.fluentasynciterable.md#reduceandmap)
* [sum](_types_types_.fluentasynciterable.md#sum)
* [toObject](_types_types_.fluentasynciterable.md#toobject)
* [top](_types_types_.fluentasynciterable.md#top)

### Methods

* [[Symbol.asyncIterator]](_types_types_.fluentasynciterable.md#[symbol.asynciterator])
* [append](_types_types_.fluentasynciterable.md#append)
* [concat](_types_types_.fluentasynciterable.md#concat)
* [contains](_types_types_.fluentasynciterable.md#contains)
* [distinct](_types_types_.fluentasynciterable.md#distinct)
* [distinctAsync](_types_types_.fluentasynciterable.md#distinctasync)
* [execute](_types_types_.fluentasynciterable.md#execute)
* [executeAsync](_types_types_.fluentasynciterable.md#executeasync)
* [filter](_types_types_.fluentasynciterable.md#filter)
* [filterAsync](_types_types_.fluentasynciterable.md#filterasync)
* [hasExactly](_types_types_.fluentasynciterable.md#hasexactly)
* [hasLessThan](_types_types_.fluentasynciterable.md#haslessthan)
* [hasMoreThan](_types_types_.fluentasynciterable.md#hasmorethan)
* [map](_types_types_.fluentasynciterable.md#map)
* [mapAsync](_types_types_.fluentasynciterable.md#mapasync)
* [merge](_types_types_.fluentasynciterable.md#merge)
* [mergeCatching](_types_types_.fluentasynciterable.md#mergecatching)
* [partition](_types_types_.fluentasynciterable.md#partition)
* [prepend](_types_types_.fluentasynciterable.md#prepend)
* [repeat](_types_types_.fluentasynciterable.md#repeat)
* [skip](_types_types_.fluentasynciterable.md#skip)
* [skipWhile](_types_types_.fluentasynciterable.md#skipwhile)
* [skipWhileAsync](_types_types_.fluentasynciterable.md#skipwhileasync)
* [sort](_types_types_.fluentasynciterable.md#sort)
* [take](_types_types_.fluentasynciterable.md#take)
* [takeWhile](_types_types_.fluentasynciterable.md#takewhile)
* [takeWhileAsync](_types_types_.fluentasynciterable.md#takewhileasync)
* [toArray](_types_types_.fluentasynciterable.md#toarray)
* [withIndex](_types_types_.fluentasynciterable.md#withindex)

## Properties

###  all

• **all**: *[AllAsync](_types_types_.allasync.md)‹T›*

Determines whether all elements of the iterable satisfy a condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

**`param`** The condition checked for all elements in the iterable.

**`returns`** A promise of `true` if all elements in the iterable satisfy the specified condition, `false` otherwise.

___

###  any

• **any**: *[AnyAsync](_types_types_.anyasync.md)‹T›*

Determines whether any element of the iterable exists or satisfies a condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

**`param`** The condition checked for the elements in the iterable. Defaults to the always true function and thus, returns if the iterable is empty.

**`returns`** A promise of `true` if any of the elements in the iterable satisfy the specified condition, `false` otherwise.

___

###  avg

• **avg**: *[AvgAsync](_types_types_.avgasync.md)‹T›*

Calculates the average of the elements of the iterable projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**`param`** The function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted.

**`returns`** A promise of the average of the projected elements of the iterable.

___

###  count

• **count**: *[CountAsync](_types_types_.countasync.md)‹T›*

Returns the number of elements that matches a predicate in the iterable. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**`param`** The count will consider elements which match this predicate. Defaults to the always true function and thus, counts all the elements in the iterable if omitted.

**`returns`** A promise of the number of elements matching the specified predicate.

___

###  first

• **first**: *[FirstAsync](_types_types_.firstasync.md)‹T›*

Returns the first element of the iterable matching a predicate, or `undefined` value if no such element is found. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

**`param`** The first element is to be returned which matches this predicate. Defaults to the always true function and thus, returns the first element in the iterable if omitted.

**`returns`** A promise of the first element matching the specified predicate, or `undefined` if no such element found.

___

###  flatten

• **flatten**: *[FlattenAsync](_types_types_.flattenasync.md)‹T›*

Projects each element of the iterable to an iterable and flattens the resulting iterable into one iterable.

**`typeparam`** The type of the elements in the inner iterable.

**`param`** Specifies the projection from the elements of `T` to iterables of `R`. Identity mapping is applied (taking the elements as iterables) if omitted.

**`returns`** The [FluentAsyncIterable](_types_types_.fluentasynciterable.md) of the flattened iterable.

___

###  forEach

• **forEach**: *[ForEachAsync](_types_types_.foreachasync.md)‹T›*

Iterates through the iterable and executes an action against each element. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**`param`** A promise of the action to execute against each element.

___

###  group

• **group**: *[GroupAsync](_types_types_.groupasync.md)‹T›*

Groups the elements of the iterable keyed by equality of data at the specified projection.

**`typeparam`** The type of the groups' key.

**`param`** Projects the elements of the iterable into the group key they belong to.

**`returns`** The [FluentAsyncIterable](_types_types_.fluentasynciterable.md) of the distinct groups.

___

###  join

• **join**: *[JoinAsync](_types_types_.joinasync.md)‹T›*

Projects and concatenates the elements of the iterable into a `string` using a separator. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**`param`** The separator to use in between the elements of the iterable.

**`param`** The function which projects the elements of the iterable into `string`s. Falls back to the identity function if omitted.

**`returns`** A promise of the concatenated string of the elements in the iterable.

___

###  last

• **last**: *[LastAsync](_types_types_.lastasync.md)‹T›*

Returns the last element of the iterable matching a predicate, or `undefined` value if no such element is found. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**`param`** The last element is to be returned which matches this predicate. Defaults to the always true function and thus, returns the last element in the iterable if omitted.

**`returns`** A promise of the last element matching the specified predicate, or `undefined` if no such element found.

___

###  max

• **max**: *[MaxAsync](_types_types_.maxasync.md)‹T›*

Finds the numeric maximum element of the iterable using a projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**`param`** The function which projects the elements of the iterable into numbers. Falls back to the identity function if omitted.

**`returns`** A promise of the maximum of the iterable's projected elements.

___

###  min

• **min**: *[MinAsync](_types_types_.minasync.md)‹T›*

Finds the numeric minimum element of the iterable using a projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**`param`** The function which projects the elements of the iterable into numbers. Falls back to the identity function if omitted.

**`returns`** A promise of the minimum of the iterable's projected elements.

___

###  reduce

• **reduce**: *[ReduceAsync](_types_types_.reduceasync.md)‹T›*

Aggregates the iterable by applying an accumulator function over the elements of the iterable. The specified seed value is used as the initial accumulator value. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**`typeparam`** The type of the accumulator value.

**`param`** The accumulator function, provides the next accumulator value out of the last accumulator value and the next element in the iterable.

**`param`** The initial (aka *seed*) value of the accumulator.

**`returns`** A promise of the aggregated value.

___

###  reduceAndMap

• **reduceAndMap**: *[ReduceAndMapAsync](_types_types_.reduceandmapasync.md)‹T›*

Aggregates the iterable by applying an accumulator function over the elements of the iterable. The specified seed value is used as the initial accumulator value, and the specified map function is used to project the result value from the accumulator value. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**`typeparam`** The type of the accumulator value.

**`typeparam`** The type of the aggregation result.

**`param`** The accumulator function, provides the next accumulator value out of the last accumulator value and the next element in the iterable.

**`param`** The initial (aka *seed*) value of the accumulator.

**`param`** The mapping function, projects the accumulator value of type `A` to the result value of type `R`.

**`returns`** A promise of the aggregated value.

___

###  sum

• **sum**: *[SumAsync](_types_types_.sumasync.md)‹T›*

Calculates the sum of the elements of the iterable projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**`param`** The function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted.

**`returns`** A promise of the sum of the projected elements of the iterable.

___

###  toObject

• **toObject**: *[ToObjectAsync](_types_types_.toobjectasync.md)‹T›*

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by a key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**`typeparam`** The expected type of the object. Cannot be enforced, this is strictly informal.

**`param`** Projects an element of the iterable into the key of the corresponding field.

**`param`** Projects an element of the iterable into the value of the corresponding field. The identity function is being used if omitted.

**`returns`** A promise of the object composed of the elements of the iterable as fields.

___

###  top

• **top**: *[TopAsync](_types_types_.topasync.md)‹T›*

Calculates the top element of the iterable using a projection and a comparer. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**`typeparam`** The type of the projected elements used for comparison.

**`param`** The function which projects the elements of the iterable into comparable.

**`param`** The comparison function.

**`returns`** A promise of the top of the iterable's projected elements.

## Methods

###  [Symbol.asyncIterator]

▸ **[Symbol.asyncIterator]**(): *AsyncIterator‹T›*

*Inherited from [FluentAsyncIterable](_types_types_.fluentasynciterable.md).[[Symbol.asyncIterator]](_types_types_.fluentasynciterable.md#[symbol.asynciterator])*

**Returns:** *AsyncIterator‹T›*

___

###  append

▸ **append**(`item`: T): *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹T›*

Appends a value to the end of the iterable.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`item` | T | The item to be appended to the iterable. |

**Returns:** *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹T›*

The [FluentAsyncIterable](_types_types_.fluentasynciterable.md) appended with the element.

___

###  concat

▸ **concat**(...`iterables`: Array‹AsyncIterable‹T››): *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹T›*

Concatenates specified iterables to the iterable.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...iterables` | Array‹AsyncIterable‹T›› | The iterables to concatenate. |

**Returns:** *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹T›*

The [FluentAsyncIterable](_types_types_.fluentasynciterable.md) of the concatenated iterables.

___

###  contains

▸ **contains**(`item`: T): *Promise‹boolean›*

Determines whether the iterable contains a specified element. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`item` | T | The element to check. |

**Returns:** *Promise‹boolean›*

A promise of `true` if the specified element exists in the iterable, `false` otherwise.

___

###  distinct

▸ **distinct**‹**R**›(`mapper?`: [Mapper](_types_types_.mapper.md)‹T, R›): *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹T›*

Returns distinct elements from the iterable from a certain projections perspective.

**Type parameters:**

▪ **R**

The type of the data the element equality is based on.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | [Mapper](_types_types_.mapper.md)‹T, R› | The projection to use to determine element equality. Identity mapping is used if omitted. |

**Returns:** *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹T›*

The [FluentAsyncIterable](_types_types_.fluentasynciterable.md) of the distinct elements.

___

###  distinctAsync

▸ **distinctAsync**‹**R**›(`mapper`: [AsyncMapper](_types_types_.asyncmapper.md)‹T, R›): *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹T›*

Returns distinct elements from the iterable from a certain asynchronous projections perspective.

**Type parameters:**

▪ **R**

The type of the data the element equality is based on.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mapper` | [AsyncMapper](_types_types_.asyncmapper.md)‹T, R› | The asynchronous projection to use to determine element equality. Identity mapping is used if omitted. |

**Returns:** *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹T›*

The [FluentAsyncIterable](_types_types_.fluentasynciterable.md) of the distinct elements.

___

###  execute

▸ **execute**(`action`: [Action](_types_types_.action.md)‹T›): *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹T›*

Translate an iterable into one which executes an action against each element before yield them.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`action` | [Action](_types_types_.action.md)‹T› | The action to execute against each element. |

**Returns:** *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹T›*

The [FluentAsyncIterable](_types_types_.fluentasynciterable.md) with the action injected to it.

___

###  executeAsync

▸ **executeAsync**(`action`: [AsyncAction](_types_types_.asyncaction.md)‹T›): *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹T›*

Translate an iterable into one which executes an asynchronous action against each element before yield them.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`action` | [AsyncAction](_types_types_.asyncaction.md)‹T› | The asynchronous action to execute against each element. |

**Returns:** *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹T›*

The [FluentAsyncIterable](_types_types_.fluentasynciterable.md) with the action injected to it.

___

###  filter

▸ **filter**(`predicate`: [Predicate](_types_types_.predicate.md)‹T›): *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹T›*

Filters the iterable of `T` based on a predicate.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [Predicate](_types_types_.predicate.md)‹T› | A predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`. |

**Returns:** *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹T›*

A [FluentAsyncIterable](_types_types_.fluentasynciterable.md) of the elements against which the predicate evaluates to `true`.

___

###  filterAsync

▸ **filterAsync**(`predicate`: [AsyncPredicate](_types_types_.asyncpredicate.md)‹T›): *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹T›*

Filters the iterable of `T` based on an asynchronous predicate.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [AsyncPredicate](_types_types_.asyncpredicate.md)‹T› | An asynchronous predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`. |

**Returns:** *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹T›*

A [FluentAsyncIterable](_types_types_.fluentasynciterable.md) of the elements against which the predicate evaluates to `true`.

___

###  hasExactly

▸ **hasExactly**(`expectedNumber`: number): *Promise‹boolean›*

Checks if the number of elements of the iterable is equal to the threshold using a projection. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

**Parameters:**

Name | Type |
------ | ------ |
`expectedNumber` | number |

**Returns:** *Promise‹boolean›*

A promise that resolves to true if the number of elements of the iterable is equal to threshold and false if its not;

___

###  hasLessThan

▸ **hasLessThan**(`threshold`: number): *Promise‹boolean›*

Checks if the number of elements of the iterable is less than the threshold using a projection. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`threshold` | number | The validation threshold |

**Returns:** *Promise‹boolean›*

A promise that resolves to true if the number of elements of the iterable is lesser than the threshold and false if it is not.

___

###  hasMoreThan

▸ **hasMoreThan**(`threshold`: number): *Promise‹boolean›*

Checks if the number of elements of the iterable is more than the threshold using a projection. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`threshold` | number | The validation threshold |

**Returns:** *Promise‹boolean›*

A promise that resolves to true if the number of elements of the iterable is greater than the threshold and false if it is not.

___

###  map

▸ **map**‹**R**›(`mapper`: [Mapper](_types_types_.mapper.md)‹T, R›): *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹R›*

Transforms the iterable of `T` into an iterable of `R` by mapping all elements to an element of `R`.

**Type parameters:**

▪ **R**

The destination type of the mapping.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mapper` | [Mapper](_types_types_.mapper.md)‹T, R› | The operation which maps an instance of `T` into an instance of `R`. |

**Returns:** *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹R›*

A [FluentAsyncIterable](_types_types_.fluentasynciterable.md) of the mapped elements.

___

###  mapAsync

▸ **mapAsync**‹**R**›(`mapper`: [AsyncMapper](_types_types_.asyncmapper.md)‹T, R›): *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹R›*

Transforms the iterable of `T` into an iterable of `R` by mapping all elements to an element of `R`.

**Type parameters:**

▪ **R**

The destination type of the mapping.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mapper` | [AsyncMapper](_types_types_.asyncmapper.md)‹T, R› | The asynchronous operation which maps an instance of `T` into an instance of `R`. |

**Returns:** *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹R›*

A [FluentAsyncIterable](_types_types_.fluentasynciterable.md) of the mapped elements.

___

###  merge

▸ **merge**‹**R**›(...`iterables`: AsyncIterable‹R›[]): *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹T | R›*

Merge the iterable with the informed ones.

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...iterables` | AsyncIterable‹R›[] | The iterables to be merged |

**Returns:** *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹T | R›*

A new iterable that returns the elements of all others in the order of which resolves first

___

###  mergeCatching

▸ **mergeCatching**‹**R**›(`errorCallback`: ErrorCallback, ...`iterables`: AsyncIterable‹R›[]): *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹T | R›*

Merge the iterable with the informed ones, catching the errors of any of the iterables that fails, so the process can continue until all the successful iterables ends.

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`errorCallback` | ErrorCallback | A callback to be called if any of the iterables fail |
`...iterables` | AsyncIterable‹R›[] | The iterables to be merged |

**Returns:** *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹T | R›*

A new iterable that returns the elements of all others in the order of which resolves first

___

###  partition

▸ **partition**(`size`: number): *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹T››*

Groups the elements of the iterable into partitions of a specified size.<br>
  Note: the last partition size can be smaller than the specified size.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`size` | number | The expected size of the partitions. Has to be larger than zero. |

**Returns:** *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹T››*

The [FluentAsyncIterable](_types_types_.fluentasynciterable.md) of partitions.

___

###  prepend

▸ **prepend**(`item`: T): *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹T›*

Adds a value to the beginning of the iterable.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`item` | T | The item to be prepended to the iterable. |

**Returns:** *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹T›*

The [FluentAsyncIterable](_types_types_.fluentasynciterable.md) prepended with the element.

___

###  repeat

▸ **repeat**(`n`: number): *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹T›*

Repeats the elements of the iterable a specified amount of times.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`n` | number | The amount of times the iterable is to be repeated. |

**Returns:** *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹T›*

The [FluentAsyncIterable](_types_types_.fluentasynciterable.md) of the repeated iterable.

___

###  skip

▸ **skip**(`n`: number): *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹T›*

Bypasses a specified number of elements in the iterable and then returns the remaining elements.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`n` | number | The number of elements to skip. |

**Returns:** *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹T›*

A [FluentAsyncIterable](_types_types_.fluentasynciterable.md) of all the elements after the first `n` elements.

___

###  skipWhile

▸ **skipWhile**(`condition`: [Predicate](_types_types_.predicate.md)‹T›): *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹T›*

Bypasses elements in the iterable as long as a specified condition is true and then returns the remaining elements.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`condition` | [Predicate](_types_types_.predicate.md)‹T› | A predicate of `T`. All elements are skipped from the iterable until this evaluates to `false` for the first time. |

**Returns:** *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹T›*

A [FluentAsyncIterable](_types_types_.fluentasynciterable.md) of the elements after the condition is not met.

___

###  skipWhileAsync

▸ **skipWhileAsync**(`condition`: [AsyncPredicate](_types_types_.asyncpredicate.md)‹T›): *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹T›*

Bypasses elements in the iterable as long as a specified asynchronous condition is true and then returns the remaining elements.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`condition` | [AsyncPredicate](_types_types_.asyncpredicate.md)‹T› | An asynchronous predicate of `T`. All elements are skipped from the iterable until this evaluates to `false` for the first time. |

**Returns:** *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹T›*

A [FluentAsyncIterable](_types_types_.fluentasynciterable.md) of the elements after the condition is not met.

___

###  sort

▸ **sort**(`comparer?`: [Comparer](_types_types_.comparer.md)‹T›): *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹T›*

Sorts the elements of the iterable based on a specified comparer. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`comparer?` | [Comparer](_types_types_.comparer.md)‹T› | The comparer operation to use to determine the order of elements. Alphabetical ascending is used for [[string]] elements and numerical ascending is used for [[number]] |

**Returns:** *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹T›*

The sorted [FluentAsyncIterable](_types_types_.fluentasynciterable.md).

___

###  take

▸ **take**(`n`: number): *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹T›*

Returns a specified number of contiguous elements from the start of the iterable.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`n` | number | The number of elements to take. |

**Returns:** *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹T›*

A [FluentAsyncIterable](_types_types_.fluentasynciterable.md) of the first `n` elements.

___

###  takeWhile

▸ **takeWhile**(`condition`: [Predicate](_types_types_.predicate.md)‹T›): *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹T›*

Returns elements from the iterable as long as a specified condition is met.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`condition` | [Predicate](_types_types_.predicate.md)‹T› | A predicate of `T`. All elements are yielded from the iterable until this evaluates to `false` for the first time. |

**Returns:** *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹T›*

A [FluentAsyncIterable](_types_types_.fluentasynciterable.md) of the elements until the condition is met.

___

###  takeWhileAsync

▸ **takeWhileAsync**(`condition`: [AsyncPredicate](_types_types_.asyncpredicate.md)‹T›): *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹T›*

Returns elements from the iterable as long as a specified asynchronous condition is met.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`condition` | [AsyncPredicate](_types_types_.asyncpredicate.md)‹T› | An asynchronous predicate of `T`. All elements are yielded from the iterable until this evaluates to `false` for the first time. |

**Returns:** *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹T›*

A [FluentAsyncIterable](_types_types_.fluentasynciterable.md) of the elements until the condition is met.

___

###  toArray

▸ **toArray**(): *Promise‹T[]›*

Translates the iterable into an array. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**Returns:** *Promise‹T[]›*

A promise of the array equivalent of the iterable.

___

###  withIndex

▸ **withIndex**(): *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹[Indexed](_types_types_.indexed.md)‹T››*

Maps all elements of the iterable to an instance of [Indexed](_types_types_.indexed.md), an index-value pair constructed of the original element in the iterable and it's index (starting from 0 for the first element in the iterable).

**Returns:** *[FluentAsyncIterable](_types_types_.fluentasynciterable.md)‹[Indexed](_types_types_.indexed.md)‹T››*

A [FluentAsyncIterable](_types_types_.fluentasynciterable.md) of [Indexed](_types_types_.indexed.md).
