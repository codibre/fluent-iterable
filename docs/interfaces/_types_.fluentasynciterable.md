[fluent-iterable - v0.2.0](../README.md) › ["types"](../modules/_types_.md) › [FluentAsyncIterable](_types_.fluentasynciterable.md)

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

### Methods

* [[Symbol.asyncIterator]](_types_.fluentasynciterable.md#[symbol.asynciterator])
* [all](_types_.fluentasynciterable.md#all)
* [allAsync](_types_.fluentasynciterable.md#allasync)
* [any](_types_.fluentasynciterable.md#any)
* [anyAsync](_types_.fluentasynciterable.md#anyasync)
* [append](_types_.fluentasynciterable.md#append)
* [avg](_types_.fluentasynciterable.md#avg)
* [avgAsync](_types_.fluentasynciterable.md#avgasync)
* [concat](_types_.fluentasynciterable.md#concat)
* [contains](_types_.fluentasynciterable.md#contains)
* [count](_types_.fluentasynciterable.md#count)
* [countAsync](_types_.fluentasynciterable.md#countasync)
* [distinct](_types_.fluentasynciterable.md#distinct)
* [distinctAsync](_types_.fluentasynciterable.md#distinctasync)
* [execute](_types_.fluentasynciterable.md#execute)
* [executeAsync](_types_.fluentasynciterable.md#executeasync)
* [filter](_types_.fluentasynciterable.md#filter)
* [filterAsync](_types_.fluentasynciterable.md#filterasync)
* [first](_types_.fluentasynciterable.md#first)
* [firstAsync](_types_.fluentasynciterable.md#firstasync)
* [flatten](_types_.fluentasynciterable.md#flatten)
* [flattenAsync](_types_.fluentasynciterable.md#flattenasync)
* [forEach](_types_.fluentasynciterable.md#foreach)
* [forEachAsync](_types_.fluentasynciterable.md#foreachasync)
* [group](_types_.fluentasynciterable.md#group)
* [groupAsync](_types_.fluentasynciterable.md#groupasync)
* [hasExactly](_types_.fluentasynciterable.md#hasexactly)
* [hasLessThan](_types_.fluentasynciterable.md#haslessthan)
* [hasMoreThan](_types_.fluentasynciterable.md#hasmorethan)
* [join](_types_.fluentasynciterable.md#join)
* [joinAsync](_types_.fluentasynciterable.md#joinasync)
* [last](_types_.fluentasynciterable.md#last)
* [lastAsync](_types_.fluentasynciterable.md#lastasync)
* [map](_types_.fluentasynciterable.md#map)
* [mapAsync](_types_.fluentasynciterable.md#mapasync)
* [max](_types_.fluentasynciterable.md#max)
* [maxAsync](_types_.fluentasynciterable.md#maxasync)
* [merge](_types_.fluentasynciterable.md#merge)
* [mergeCatching](_types_.fluentasynciterable.md#mergecatching)
* [min](_types_.fluentasynciterable.md#min)
* [minAsync](_types_.fluentasynciterable.md#minasync)
* [partition](_types_.fluentasynciterable.md#partition)
* [prepend](_types_.fluentasynciterable.md#prepend)
* [reduce](_types_.fluentasynciterable.md#reduce)
* [reduceAndMap](_types_.fluentasynciterable.md#reduceandmap)
* [reduceAndMapAsync](_types_.fluentasynciterable.md#reduceandmapasync)
* [reduceAsync](_types_.fluentasynciterable.md#reduceasync)
* [repeat](_types_.fluentasynciterable.md#repeat)
* [skip](_types_.fluentasynciterable.md#skip)
* [skipWhile](_types_.fluentasynciterable.md#skipwhile)
* [skipWhileAsync](_types_.fluentasynciterable.md#skipwhileasync)
* [sort](_types_.fluentasynciterable.md#sort)
* [sum](_types_.fluentasynciterable.md#sum)
* [sumAsync](_types_.fluentasynciterable.md#sumasync)
* [take](_types_.fluentasynciterable.md#take)
* [takeWhile](_types_.fluentasynciterable.md#takewhile)
* [takeWhileAsync](_types_.fluentasynciterable.md#takewhileasync)
* [toArray](_types_.fluentasynciterable.md#toarray)
* [toObject](_types_.fluentasynciterable.md#toobject)
* [toObjectAsync](_types_.fluentasynciterable.md#toobjectasync)
* [top](_types_.fluentasynciterable.md#top)
* [topAsync](_types_.fluentasynciterable.md#topasync)
* [withIndex](_types_.fluentasynciterable.md#withindex)

## Methods

###  [Symbol.asyncIterator]

▸ **[Symbol.asyncIterator]**(): *AsyncIterator‹T›*

*Inherited from [FluentAsyncIterable](_types_.fluentasynciterable.md).[[Symbol.asyncIterator]](_types_.fluentasynciterable.md#[symbol.asynciterator])*

**Returns:** *AsyncIterator‹T›*

___

###  all

▸ **all**(`predicate`: [Predicate](_types_.predicate.md)‹T›): *Promise‹boolean›*

Determines whether all elements of the iterable satisfy a condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [Predicate](_types_.predicate.md)‹T› | The condition checked for all elements in the iterable. |

**Returns:** *Promise‹boolean›*

A promise of `true` if all elements in the iterable satisfy the specified condition, `false` otherwise.

___

###  allAsync

▸ **allAsync**(`predicate`: [AsyncPredicate](_types_.asyncpredicate.md)‹T›): *Promise‹boolean›*

Determines whether all elements of the iterable satisfy an asynchronous condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
  Note: This operation stops reading elements from the iterable as soon as the result can be determined.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [AsyncPredicate](_types_.asyncpredicate.md)‹T› | The asynchronous condition checked for all elements in the iterable. |

**Returns:** *Promise‹boolean›*

A promise of `true` if all elements in the iterable satisfy the specified condition, `false` otherwise.

___

###  any

▸ **any**(`predicate?`: [Predicate](_types_.predicate.md)‹T›): *Promise‹boolean›*

Determines whether any element of the iterable exists or satisfies a condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate?` | [Predicate](_types_.predicate.md)‹T› | The condition checked for the elements in the iterable. Defaults to the always true function and thus, returns if the iterable is empty. |

**Returns:** *Promise‹boolean›*

A promise of `true` if any of the elements in the iterable satisfy the specified condition, `false` otherwise.

___

###  anyAsync

▸ **anyAsync**(`predicate`: [AsyncPredicate](_types_.asyncpredicate.md)‹T›): *Promise‹boolean›*

Determines whether any element of the iterable exists or satisfies an asynchronous condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
  Note: This operation stops reading elements from the iterable as soon as the result can be determined.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [AsyncPredicate](_types_.asyncpredicate.md)‹T› | The asynchronous condition checked for the elements in the iterable. |

**Returns:** *Promise‹boolean›*

A promise of `true` if any of the elements in the iterable satisfy the specified condition, `false` otherwise.

___

###  append

▸ **append**(`item`: T): *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹T›*

Appends a value to the end of the iterable.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`item` | T | The item to be appended to the iterable. |

**Returns:** *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹T›*

The [FluentAsyncIterable](_types_.fluentasynciterable.md) appended with the element.

___

###  avg

▸ **avg**(`mapper?`: [Mapper](_types_.mapper.md)‹T, number›): *Promise‹number›*

Calculates the average of the elements of the iterable projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | [Mapper](_types_.mapper.md)‹T, number› | The function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted. |

**Returns:** *Promise‹number›*

A promise of the average of the projected elements of the iterable.

___

###  avgAsync

▸ **avgAsync**(`mapper`: [AsyncMapper](_types_.asyncmapper.md)‹T, number›): *Promise‹number›*

Calculates the average of the elements of the iterable asynchronously projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mapper` | [AsyncMapper](_types_.asyncmapper.md)‹T, number› | The asynchronous function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted. |

**Returns:** *Promise‹number›*

A promise of the average of the projected elements of the iterable.

___

###  concat

▸ **concat**(...`iterables`: Array‹AsyncIterable‹T››): *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹T›*

Concatenates specified iterables to the iterable.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...iterables` | Array‹AsyncIterable‹T›› | The iterables to concatenate. |

**Returns:** *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹T›*

The [FluentAsyncIterable](_types_.fluentasynciterable.md) of the concatenated iterables.

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

###  count

▸ **count**(`predicate?`: [Predicate](_types_.predicate.md)‹T›): *Promise‹number›*

Returns the number of elements that matches a predicate in the iterable. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate?` | [Predicate](_types_.predicate.md)‹T› | The count will consider elements which match this predicate. Defaults to the always true function and thus, counts all the elements in the iterable if omitted. |

**Returns:** *Promise‹number›*

A promise of the number of elements matching the specified predicate.

___

###  countAsync

▸ **countAsync**(`predicate`: [AsyncPredicate](_types_.asyncpredicate.md)‹T›): *Promise‹number›*

Returns the number of elements that matches an asynchronous predicate in the iterable. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [AsyncPredicate](_types_.asyncpredicate.md)‹T› | The count will consider elements which match this asynchronous predicate. |

**Returns:** *Promise‹number›*

A promise of the number of elements matching the specified predicate.

___

###  distinct

▸ **distinct**‹**R**›(`mapper?`: [Mapper](_types_.mapper.md)‹T, R›): *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹T›*

Returns distinct elements from the iterable from a certain projections perspective.

**Type parameters:**

▪ **R**

The type of the data the element equality is based on.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | [Mapper](_types_.mapper.md)‹T, R› | The projection to use to determine element equality. Identity mapping is used if omitted. |

**Returns:** *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹T›*

The [FluentAsyncIterable](_types_.fluentasynciterable.md) of the distinct elements.

___

###  distinctAsync

▸ **distinctAsync**‹**R**›(`mapper`: [AsyncMapper](_types_.asyncmapper.md)‹T, R›): *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹T›*

Returns distinct elements from the iterable from a certain asynchronous projections perspective.

**Type parameters:**

▪ **R**

The type of the data the element equality is based on.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mapper` | [AsyncMapper](_types_.asyncmapper.md)‹T, R› | The asynchronous projection to use to determine element equality. Identity mapping is used if omitted. |

**Returns:** *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹T›*

The [FluentAsyncIterable](_types_.fluentasynciterable.md) of the distinct elements.

___

###  execute

▸ **execute**(`action`: [Action](_types_.action.md)‹T›): *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹T›*

Translate an iterable into one which executes an action against each element before yield them.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`action` | [Action](_types_.action.md)‹T› | The action to execute against each element. |

**Returns:** *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹T›*

The [FluentAsyncIterable](_types_.fluentasynciterable.md) with the action injected to it.

___

###  executeAsync

▸ **executeAsync**(`action`: [AsyncAction](_types_.asyncaction.md)‹T›): *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹T›*

Translate an iterable into one which executes an asynchronous action against each element before yield them.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`action` | [AsyncAction](_types_.asyncaction.md)‹T› | The asynchronous action to execute against each element. |

**Returns:** *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹T›*

The [FluentAsyncIterable](_types_.fluentasynciterable.md) with the action injected to it.

___

###  filter

▸ **filter**(`predicate`: [Predicate](_types_.predicate.md)‹T›): *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹T›*

Filters the iterable of `T` based on a predicate.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [Predicate](_types_.predicate.md)‹T› | A predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`. |

**Returns:** *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹T›*

A [FluentAsyncIterable](_types_.fluentasynciterable.md) of the elements against which the predicate evaluates to `true`.

___

###  filterAsync

▸ **filterAsync**(`predicate`: [AsyncPredicate](_types_.asyncpredicate.md)‹T›): *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹T›*

Filters the iterable of `T` based on an asynchronous predicate.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [AsyncPredicate](_types_.asyncpredicate.md)‹T› | An asynchronous predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`. |

**Returns:** *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹T›*

A [FluentAsyncIterable](_types_.fluentasynciterable.md) of the elements against which the predicate evaluates to `true`.

___

###  first

▸ **first**(`predicate?`: [Predicate](_types_.predicate.md)‹T›): *Promise‹T | undefined›*

Returns the first element of the iterable matching a predicate, or `undefined` value if no such element is found. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate?` | [Predicate](_types_.predicate.md)‹T› | The first element is to be returned which matches this predicate. Defaults to the always true function and thus, returns the first element in the iterable if omitted. |

**Returns:** *Promise‹T | undefined›*

A promise of the first element matching the specified predicate, or `undefined` if no such element found.

___

###  firstAsync

▸ **firstAsync**(`predicate`: [AsyncPredicate](_types_.asyncpredicate.md)‹T›): *Promise‹T | undefined›*

Returns the first element of the iterable matching an asynchronous predicate, or `undefined` value if no such element is found. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [AsyncPredicate](_types_.asyncpredicate.md)‹T› | The first element is to be returned which matches this asynchronous predicate. |

**Returns:** *Promise‹T | undefined›*

A promise of the first element matching the specified predicate, or `undefined` if no such element found.

___

###  flatten

▸ **flatten**‹**R**›(`mapper?`: [Mapper](_types_.mapper.md)‹T, Iterable‹R››): *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹R›*

Projects each element of the iterable to an iterable and flattens the resulting iterable into one iterable.

**Type parameters:**

▪ **R**

The type of the elements in the inner iterable.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | [Mapper](_types_.mapper.md)‹T, Iterable‹R›› | Specifies the projection from the elements of `T` to iterables of `R`. Identity mapping is applied (taking the elements as iterables) if omitted. |

**Returns:** *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹R›*

The [FluentAsyncIterable](_types_.fluentasynciterable.md) of the flattened iterable.

___

###  flattenAsync

▸ **flattenAsync**‹**R**›(`mapper`: [AsyncMapper](_types_.asyncmapper.md)‹T, AsyncIterable‹R››): *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹R›*

Asynchronously projects each element of the iterable to an iterable and flattens the resulting iterable into one iterable.

**Type parameters:**

▪ **R**

The type of the elements in the inner iterable.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mapper` | [AsyncMapper](_types_.asyncmapper.md)‹T, AsyncIterable‹R›› | Specifies the asynchronous projection from the elements of `T` to iterables of `R`. |

**Returns:** *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹R›*

The flattened [FluentAsyncIterable](_types_.fluentasynciterable.md).

___

###  forEach

▸ **forEach**(`action`: [Action](_types_.action.md)‹T›): *Promise‹void›*

Iterates through the iterable and executes an action against each element. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`action` | [Action](_types_.action.md)‹T› | A promise of the action to execute against each element.  |

**Returns:** *Promise‹void›*

___

###  forEachAsync

▸ **forEachAsync**(`action`: [AsyncAction](_types_.asyncaction.md)‹T›): *Promise‹void›*

Iterates through the iterable and executes an asynchronous action against each element. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`action` | [AsyncAction](_types_.asyncaction.md)‹T› | The asynchronous action to execute against each element. |

**Returns:** *Promise‹void›*

A promise of the executions.

___

###  group

▸ **group**‹**R**›(`mapper`: [Mapper](_types_.mapper.md)‹T, R›): *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹[FluentGroup](_types_.fluentgroup.md)‹T, R››*

Groups the elements of the iterable keyed by equality of data at the specified projection.

**Type parameters:**

▪ **R**

The type of the groups' key.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mapper` | [Mapper](_types_.mapper.md)‹T, R› | Projects the elements of the iterable into the group key they belong to. |

**Returns:** *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹[FluentGroup](_types_.fluentgroup.md)‹T, R››*

The [FluentAsyncIterable](_types_.fluentasynciterable.md) of the distinct groups.

___

###  groupAsync

▸ **groupAsync**‹**R**›(`mapper`: [AsyncMapper](_types_.asyncmapper.md)‹T, R›): *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹[FluentGroup](_types_.fluentgroup.md)‹T, R››*

Groups the elements of the iterable keyed by equality of data at the specified asynchronous projection.

**Type parameters:**

▪ **R**

The type of the groups key.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mapper` | [AsyncMapper](_types_.asyncmapper.md)‹T, R› | Asynchronously projects the elements of the iterable into the group key they belong to. |

**Returns:** *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹[FluentGroup](_types_.fluentgroup.md)‹T, R››*

The [FluentAsyncIterable](_types_.fluentasynciterable.md) of the distinct groups.

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

###  join

▸ **join**(`separator`: string, `mapper?`: [Mapper](_types_.mapper.md)‹T, string›): *Promise‹string›*

Projects and concatenates the elements of the iterable into a `string` using a separator. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`separator` | string | The separator to use in between the elements of the iterable. |
`mapper?` | [Mapper](_types_.mapper.md)‹T, string› | The function which projects the elements of the iterable into `string`s. Falls back to the identity function if omitted. |

**Returns:** *Promise‹string›*

A promise of the concatenated string of the elements in the iterable.

___

###  joinAsync

▸ **joinAsync**(`separator`: string, `mapper`: [AsyncMapper](_types_.asyncmapper.md)‹T, string›): *Promise‹string›*

Asynchronously projects and concatenates the elements of the iterable into a `string` using a separator. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`separator` | string | The separator to use in between the elements of the iterable. |
`mapper` | [AsyncMapper](_types_.asyncmapper.md)‹T, string› | The function which asynchronously projects the elements of the iterable into `string`s. Falls back to the identity function if omitted. |

**Returns:** *Promise‹string›*

A promise of the concatenated string of the elements in the iterable.

___

###  last

▸ **last**(`predicate?`: [Predicate](_types_.predicate.md)‹T›): *Promise‹T | undefined›*

Returns the last element of the iterable matching a predicate, or `undefined` value if no such element is found. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate?` | [Predicate](_types_.predicate.md)‹T› | The last element is to be returned which matches this predicate. Defaults to the always true function and thus, returns the last element in the iterable if omitted. |

**Returns:** *Promise‹T | undefined›*

A promise of the last element matching the specified predicate, or `undefined` if no such element found.

___

###  lastAsync

▸ **lastAsync**(`predicate`: [AsyncPredicate](_types_.asyncpredicate.md)‹T›): *Promise‹T | undefined›*

Returns the last element of the iterable matching an asynchronous predicate, or `undefined` value if no such element is found. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [AsyncPredicate](_types_.asyncpredicate.md)‹T› | The last element is to be returned which matches this asynchronous predicate. |

**Returns:** *Promise‹T | undefined›*

A promise of the last element matching the specified predicate, or `undefined` if no such element found.

___

###  map

▸ **map**‹**R**›(`mapper`: [Mapper](_types_.mapper.md)‹T, R›): *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹R›*

Transforms the iterable of `T` into an iterable of `R` by mapping all elements to an element of `R`.

**Type parameters:**

▪ **R**

The destination type of the mapping.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mapper` | [Mapper](_types_.mapper.md)‹T, R› | The operation which maps an instance of `T` into an instance of `R`. |

**Returns:** *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹R›*

A [FluentAsyncIterable](_types_.fluentasynciterable.md) of the mapped elements.

___

###  mapAsync

▸ **mapAsync**‹**R**›(`mapper`: [AsyncMapper](_types_.asyncmapper.md)‹T, R›): *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹R›*

Transforms the iterable of `T` into an iterable of `R` by mapping all elements to an element of `R`.

**Type parameters:**

▪ **R**

The destination type of the mapping.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mapper` | [AsyncMapper](_types_.asyncmapper.md)‹T, R› | The asynchronous operation which maps an instance of `T` into an instance of `R`. |

**Returns:** *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹R›*

A [FluentAsyncIterable](_types_.fluentasynciterable.md) of the mapped elements.

___

###  max

▸ **max**(`mapper?`: [Mapper](_types_.mapper.md)‹T, number›): *Promise‹T | undefined›*

Finds the numeric maximum element of the iterable using a projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | [Mapper](_types_.mapper.md)‹T, number› | The function which projects the elements of the iterable into numbers. Falls back to the identity function if omitted. |

**Returns:** *Promise‹T | undefined›*

A promise of the maximum of the iterable's projected elements.

___

###  maxAsync

▸ **maxAsync**(`mapper`: [AsyncMapper](_types_.asyncmapper.md)‹T, number›): *Promise‹T | undefined›*

Finds the numeric maximum element of the iterable using an asynchronous projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mapper` | [AsyncMapper](_types_.asyncmapper.md)‹T, number› | The function which asynchronously projects the elements of the iterable into numbers. |

**Returns:** *Promise‹T | undefined›*

A promise of the maximum of the iterable's projected elements.

___

###  merge

▸ **merge**‹**R**›(...`iterables`: AsyncIterable‹R›[]): *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹T | R›*

Merge the iterable with the informed ones.

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...iterables` | AsyncIterable‹R›[] | The iterables to be merged |

**Returns:** *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹T | R›*

A new iterable that returns the elements of all others in the order of which resolves first

___

###  mergeCatching

▸ **mergeCatching**‹**R**›(`errorCallback`: [ErrorCallback](_mergeiterators_.errorcallback.md), ...`iterables`: AsyncIterable‹R›[]): *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹T | R›*

Merge the iterable with the informed ones, catching the errors of any of the iterables that fails, so the process can continue until all the successful iterables ends.

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`errorCallback` | [ErrorCallback](_mergeiterators_.errorcallback.md) | A callback to be called if any of the iterables fail |
`...iterables` | AsyncIterable‹R›[] | The iterables to be merged |

**Returns:** *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹T | R›*

A new iterable that returns the elements of all others in the order of which resolves first

___

###  min

▸ **min**(`mapper?`: [Mapper](_types_.mapper.md)‹T, number›): *Promise‹T | undefined›*

Finds the numeric minimum element of the iterable using a projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | [Mapper](_types_.mapper.md)‹T, number› | The function which projects the elements of the iterable into numbers. Falls back to the identity function if omitted. |

**Returns:** *Promise‹T | undefined›*

A promise of the minimum of the iterable's projected elements.

___

###  minAsync

▸ **minAsync**(`mapper`: [AsyncMapper](_types_.asyncmapper.md)‹T, number›): *Promise‹T | undefined›*

Finds the numeric minimum element of the iterable using an asynchronous projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mapper` | [AsyncMapper](_types_.asyncmapper.md)‹T, number› | The asynchronous function which projects the elements of the iterable into numbers. |

**Returns:** *Promise‹T | undefined›*

A promise of the minimum of the iterable's projected elements.

___

###  partition

▸ **partition**(`size`: number): *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹[FluentAsyncIterable](_types_.fluentasynciterable.md)‹T››*

Groups the elements of the iterable into partitions of a specified size.<br>
  Note: the last partition size can be smaller than the specified size.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`size` | number | The expected size of the partitions. Has to be larger than zero. |

**Returns:** *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹[FluentAsyncIterable](_types_.fluentasynciterable.md)‹T››*

The [FluentAsyncIterable](_types_.fluentasynciterable.md) of partitions.

___

###  prepend

▸ **prepend**(`item`: T): *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹T›*

Adds a value to the beginning of the iterable.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`item` | T | The item to be prepended to the iterable. |

**Returns:** *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹T›*

The [FluentAsyncIterable](_types_.fluentasynciterable.md) prepended with the element.

___

###  reduce

▸ **reduce**‹**R**›(`reducer`: [Reducer](_types_.reducer.md)‹T, R›, `initial`: R): *Promise‹R›*

Aggregates the iterable by applying an accumulator function over the elements of the iterable. The specified seed value is used as the initial accumulator value. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**Type parameters:**

▪ **R**

The type of the accumulator value.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`reducer` | [Reducer](_types_.reducer.md)‹T, R› | The accumulator function, provides the next accumulator value out of the last accumulator value and the next element in the iterable. |
`initial` | R | The initial (aka *seed*) value of the accumulator. |

**Returns:** *Promise‹R›*

A promise of the aggregated value.

___

###  reduceAndMap

▸ **reduceAndMap**‹**A**, **R**›(`reducer`: [Reducer](_types_.reducer.md)‹T, A›, `initial`: A, `result`: [Mapper](_types_.mapper.md)‹A, R›): *Promise‹R›*

Aggregates the iterable by applying an accumulator function over the elements of the iterable. The specified seed value is used as the initial accumulator value, and the specified map function is used to project the result value from the accumulator value. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**Type parameters:**

▪ **A**

The type of the accumulator value.

▪ **R**

The type of the aggregation result.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`reducer` | [Reducer](_types_.reducer.md)‹T, A› | The accumulator function, provides the next accumulator value out of the last accumulator value and the next element in the iterable. |
`initial` | A | The initial (aka *seed*) value of the accumulator. |
`result` | [Mapper](_types_.mapper.md)‹A, R› | The mapping function, projects the accumulator value of type `A` to the result value of type `R`. |

**Returns:** *Promise‹R›*

A promise of the aggregated value.

___

###  reduceAndMapAsync

▸ **reduceAndMapAsync**‹**A**, **R**›(`reducer`: [AsyncReducer](_types_.asyncreducer.md)‹T, A›, `initial`: A, `result`: [AsyncMapper](_types_.asyncmapper.md)‹A, R›): *Promise‹R›*

Aggregates the iterable by applying an asynchronous accumulator function over the elements of the iterable. The specified seed value is used as the initial accumulator value, and the specified asynchronous map function is used to project the result value from the accumulator value. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**Type parameters:**

▪ **A**

The type of the accumulator value.

▪ **R**

The type of the aggregation result.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`reducer` | [AsyncReducer](_types_.asyncreducer.md)‹T, A› | The asynchronous accumulator function, provides the next accumulator value out of the last accumulator value and the next element in the iterable. |
`initial` | A | The initial (aka *seed*) value of the accumulator. |
`result` | [AsyncMapper](_types_.asyncmapper.md)‹A, R› | The asynchronous mapping function, projects the accumulator value of type `A` to the result value of type `R`. |

**Returns:** *Promise‹R›*

A promise of the aggregated value.

___

###  reduceAsync

▸ **reduceAsync**‹**R**›(`reducer`: [AsyncReducer](_types_.asyncreducer.md)‹T, R›, `initial`: R): *Promise‹R›*

Aggregates the iterable by applying an asynchronous accumulator function over the elements of the iterable. The specified seed value is used as the initial accumulator value. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**Type parameters:**

▪ **R**

The type of the accumulator value.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`reducer` | [AsyncReducer](_types_.asyncreducer.md)‹T, R› | The asynchronous accumulator function, provides the next accumulator value out of the last accumulator value and the next element in the iterable. |
`initial` | R | The initial (aka *seed*) value of the accumulator. |

**Returns:** *Promise‹R›*

A promise of the aggregated value.

___

###  repeat

▸ **repeat**(`n`: number): *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹T›*

Repeats the elements of the iterable a specified amount of times.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`n` | number | The amount of times the iterable is to be repeated. |

**Returns:** *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹T›*

The [FluentAsyncIterable](_types_.fluentasynciterable.md) of the repeated iterable.

___

###  skip

▸ **skip**(`n`: number): *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹T›*

Bypasses a specified number of elements in the iterable and then returns the remaining elements.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`n` | number | The number of elements to skip. |

**Returns:** *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹T›*

A [FluentAsyncIterable](_types_.fluentasynciterable.md) of all the elements after the first `n` elements.

___

###  skipWhile

▸ **skipWhile**(`condition`: [Predicate](_types_.predicate.md)‹T›): *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹T›*

Bypasses elements in the iterable as long as a specified condition is true and then returns the remaining elements.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`condition` | [Predicate](_types_.predicate.md)‹T› | A predicate of `T`. All elements are skipped from the iterable until this evaluates to `false` for the first time. |

**Returns:** *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹T›*

A [FluentAsyncIterable](_types_.fluentasynciterable.md) of the elements after the condition is not met.

___

###  skipWhileAsync

▸ **skipWhileAsync**(`condition`: [AsyncPredicate](_types_.asyncpredicate.md)‹T›): *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹T›*

Bypasses elements in the iterable as long as a specified asynchronous condition is true and then returns the remaining elements.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`condition` | [AsyncPredicate](_types_.asyncpredicate.md)‹T› | An asynchronous predicate of `T`. All elements are skipped from the iterable until this evaluates to `false` for the first time. |

**Returns:** *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹T›*

A [FluentAsyncIterable](_types_.fluentasynciterable.md) of the elements after the condition is not met.

___

###  sort

▸ **sort**(`comparer?`: [Comparer](_types_.comparer.md)‹T›): *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹T›*

Sorts the elements of the iterable based on a specified comparer. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`comparer?` | [Comparer](_types_.comparer.md)‹T› | The comparer operation to use to determine the order of elements. Alphabetical ascending is used for [[string]] elements and numerical ascending is used for [[number]] |

**Returns:** *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹T›*

The sorted [FluentAsyncIterable](_types_.fluentasynciterable.md).

___

###  sum

▸ **sum**(`mapper?`: [Mapper](_types_.mapper.md)‹T, number›): *Promise‹number›*

Calculates the sum of the elements of the iterable projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | [Mapper](_types_.mapper.md)‹T, number› | The function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted. |

**Returns:** *Promise‹number›*

A promise of the sum of the projected elements of the iterable.

___

###  sumAsync

▸ **sumAsync**(`mapper`: [AsyncMapper](_types_.asyncmapper.md)‹T, number›): *Promise‹number›*

Calculates the sum of the elements of the iterable asynchronously projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mapper` | [AsyncMapper](_types_.asyncmapper.md)‹T, number› | The asynchronous function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted. |

**Returns:** *Promise‹number›*

A promise of the sum of the projected elements of the iterable.

___

###  take

▸ **take**(`n`: number): *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹T›*

Returns a specified number of contiguous elements from the start of the iterable.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`n` | number | The number of elements to take. |

**Returns:** *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹T›*

A [FluentAsyncIterable](_types_.fluentasynciterable.md) of the first `n` elements.

___

###  takeWhile

▸ **takeWhile**(`condition`: [Predicate](_types_.predicate.md)‹T›): *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹T›*

Returns elements from the iterable as long as a specified condition is met.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`condition` | [Predicate](_types_.predicate.md)‹T› | A predicate of `T`. All elements are yielded from the iterable until this evaluates to `false` for the first time. |

**Returns:** *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹T›*

A [FluentAsyncIterable](_types_.fluentasynciterable.md) of the elements until the condition is met.

___

###  takeWhileAsync

▸ **takeWhileAsync**(`condition`: [AsyncPredicate](_types_.asyncpredicate.md)‹T›): *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹T›*

Returns elements from the iterable as long as a specified asynchronous condition is met.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`condition` | [AsyncPredicate](_types_.asyncpredicate.md)‹T› | An asynchronous predicate of `T`. All elements are yielded from the iterable until this evaluates to `false` for the first time. |

**Returns:** *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹T›*

A [FluentAsyncIterable](_types_.fluentasynciterable.md) of the elements until the condition is met.

___

###  toArray

▸ **toArray**(): *Promise‹T[]›*

Translates the iterable into an array. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**Returns:** *Promise‹T[]›*

A promise of the array equivalent of the iterable.

___

###  toObject

▸ **toObject**‹**R**›(`keySelector`: [Mapper](_types_.mapper.md)‹T, string›, `valueSelector?`: [Mapper](_types_.mapper.md)‹T, unknown›): *Promise‹R›*

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by a key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**Type parameters:**

▪ **R**

The expected type of the object. Cannot be enforced, this is strictly informal.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`keySelector` | [Mapper](_types_.mapper.md)‹T, string› | Projects an element of the iterable into the key of the corresponding field. |
`valueSelector?` | [Mapper](_types_.mapper.md)‹T, unknown› | Projects an element of the iterable into the value of the corresponding field. The identity function is being used if omitted. |

**Returns:** *Promise‹R›*

A promise of the object composed of the elements of the iterable as fields.

___

###  toObjectAsync

▸ **toObjectAsync**‹**R**›(`keySelector`: [AsyncMapper](_types_.asyncmapper.md)‹T, string›, `valueSelector`: [AsyncMapper](_types_.asyncmapper.md)‹T, unknown›): *Promise‹R›*

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by an asynchronous key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**Type parameters:**

▪ **R**

The expected type of the object. Cannot be enforced, this is strictly informal.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`keySelector` | [AsyncMapper](_types_.asyncmapper.md)‹T, string› | Asynchronously projects an element of the iterable into the key of the corresponding field. |
`valueSelector` | [AsyncMapper](_types_.asyncmapper.md)‹T, unknown› | Asynchronously projects an element of the iterable into the value of the corresponding field. |

**Returns:** *Promise‹R›*

A promise of the object composed of the elements of the iterable as fields.

___

###  top

▸ **top**‹**R**›(`mapper`: [Mapper](_types_.mapper.md)‹T, R›, `comparer`: [Comparer](_types_.comparer.md)‹R›): *Promise‹T | undefined›*

Calculates the top element of the iterable using a projection and a comparer. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**Type parameters:**

▪ **R**

The type of the projected elements used for comparison.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mapper` | [Mapper](_types_.mapper.md)‹T, R› | The function which projects the elements of the iterable into comparable. |
`comparer` | [Comparer](_types_.comparer.md)‹R› | The comparison function. |

**Returns:** *Promise‹T | undefined›*

A promise of the top of the iterable's projected elements.

___

###  topAsync

▸ **topAsync**‹**R**›(`mapper`: [AsyncMapper](_types_.asyncmapper.md)‹T, R›, `comparer`: [Comparer](_types_.comparer.md)‹R›): *Promise‹T | undefined›*

Calculates the top element of the iterable using an asynchronous projection and a comparer. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**Type parameters:**

▪ **R**

The type of the projected elements used for comparison.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mapper` | [AsyncMapper](_types_.asyncmapper.md)‹T, R› | The asynchronous function which projects the elements of the iterable into comparable. |
`comparer` | [Comparer](_types_.comparer.md)‹R› | The comparison function. |

**Returns:** *Promise‹T | undefined›*

A promise of the top of the iterable's projected elements.

___

###  withIndex

▸ **withIndex**(): *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹[Indexed](_types_.indexed.md)‹T››*

Maps all elements of the iterable to an instance of [Indexed](_types_.indexed.md), an index-value pair constructed of the original element in the iterable and it's index (starting from 0 for the first element in the iterable).

**Returns:** *[FluentAsyncIterable](_types_.fluentasynciterable.md)‹[Indexed](_types_.indexed.md)‹T››*

A [FluentAsyncIterable](_types_.fluentasynciterable.md) of [Indexed](_types_.indexed.md).
