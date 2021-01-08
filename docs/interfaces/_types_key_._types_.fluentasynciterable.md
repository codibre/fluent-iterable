**[fluent-iterable - v1.7.2](../README.md)**

> [Globals](../README.md) / ["types-key"](../modules/_types_key_.md) / ["types"](../modules/_types_key_._types_.md) / FluentAsyncIterable

# Interface: FluentAsyncIterable\<T>

Represents an asynchronous iterable extended with common processing and mutating capabilities.<br>
  The capabilities introduced are defined as a [fluent interface](https://en.wikipedia.org/wiki/Fluent_interface) and thus they support *method chaining*.

## Type parameters

Name | Description |
------ | ------ |
`T` | The type of the items in the asynchronous iterable.  |

## Hierarchy

* **FluentAsyncIterable**

## Index

### Methods

* [all](_types_key_._types_.fluentasynciterable.md#all)
* [any](_types_key_._types_.fluentasynciterable.md#any)
* [avg](_types_key_._types_.fluentasynciterable.md#avg)
* [combine](_types_key_._types_.fluentasynciterable.md#combine)
* [count](_types_key_._types_.fluentasynciterable.md#count)
* [distinct](_types_key_._types_.fluentasynciterable.md#distinct)
* [execute](_types_key_._types_.fluentasynciterable.md#execute)
* [filter](_types_key_._types_.fluentasynciterable.md#filter)
* [first](_types_key_._types_.fluentasynciterable.md#first)
* [flatten](_types_key_._types_.fluentasynciterable.md#flatten)
* [forEach](_types_key_._types_.fluentasynciterable.md#foreach)
* [group](_types_key_._types_.fluentasynciterable.md#group)
* [isDistinct](_types_key_._types_.fluentasynciterable.md#isdistinct)
* [join](_types_key_._types_.fluentasynciterable.md#join)
* [last](_types_key_._types_.fluentasynciterable.md#last)
* [map](_types_key_._types_.fluentasynciterable.md#map)
* [max](_types_key_._types_.fluentasynciterable.md#max)
* [min](_types_key_._types_.fluentasynciterable.md#min)
* [reduceAndMap](_types_key_._types_.fluentasynciterable.md#reduceandmap)
* [skipWhile](_types_key_._types_.fluentasynciterable.md#skipwhile)
* [sum](_types_key_._types_.fluentasynciterable.md#sum)
* [takeWhile](_types_key_._types_.fluentasynciterable.md#takewhile)
* [toObject](_types_key_._types_.fluentasynciterable.md#toobject)
* [top](_types_key_._types_.fluentasynciterable.md#top)
* [waitAll](_types_key_._types_.fluentasynciterable.md#waitall)

## Methods

### all

▸ **all**(`predicate`: keyof T): Promise\<boolean>

Determines whether all elements of the iterable satisfy a condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | keyof T | The condition checked for all elements in the iterable. |

**Returns:** Promise\<boolean>

A promise of `true` if all elements in the iterable satisfy the specified condition, `false` otherwise.

___

### any

▸ **any**(`predicate`: keyof T): Promise\<boolean>

Determines whether any element of the iterable exists or satisfies a condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | keyof T | The condition checked for the elements in the iterable. Defaults to the always true function and thus, returns if the iterable is empty. |

**Returns:** Promise\<boolean>

A promise of `true` if any of the elements in the iterable satisfy the specified condition, `false` otherwise.

___

### avg

▸ **avg**(`mapper`: keyof T): Promise\<number>

Calculates the average of the elements of the iterable projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | keyof T | The function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted. |

**Returns:** Promise\<number>

A promise of the average of the projected elements of the iterable.

___

### combine

▸ **combine**\<U, K>(`iterable`: Iterable\<U> \| AsyncIterable\<U>, `keyA`: keyof T, `keyB`: Mapper\<U, K>): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<[T, U]>

Join the async iterable with another one, returning a new async iterable with the inner matching combinations

#### Type parameters:

Name |
------ |
`U` |
`K` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`iterable` | Iterable\<U> \| AsyncIterable\<U> | The right iterable to be combined |
`keyA` | keyof T | A mapper that returns the key map value from the left iterable |
`keyB` | Mapper\<U, K> | A mapper that returns the key map value from the right iterable  |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<[T, U]>

▸ **combine**\<U, K>(`iterable`: Iterable\<U> \| AsyncIterable\<U>, `keyA`: Mapper\<T, K>, `keyB`: keyof U): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<[T, U]>

Join the async iterable with another one, returning a new async iterable with the inner matching combinations

#### Type parameters:

Name |
------ |
`U` |
`K` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`iterable` | Iterable\<U> \| AsyncIterable\<U> | The right iterable to be combined |
`keyA` | Mapper\<T, K> | A mapper that returns the key map value from the left iterable |
`keyB` | keyof U | A mapper that returns the key map value from the right iterable  |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<[T, U]>

▸ **combine**\<U>(`iterable`: Iterable\<U> \| AsyncIterable\<U>, `keyA`: keyof T, `keyB`: keyof U): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<[T, U]>

Join the async iterable with another one, returning a new async iterable with the inner matching combinations

#### Type parameters:

Name |
------ |
`U` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`iterable` | Iterable\<U> \| AsyncIterable\<U> | The right iterable to be combined |
`keyA` | keyof T | A mapper that returns the key map value from the left iterable |
`keyB` | keyof U | A mapper that returns the key map value from the right iterable  |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<[T, U]>

___

### count

▸ **count**(`predicate`: keyof T): Promise\<number>

Returns the number of elements that matches a predicate in the iterable. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | keyof T | The count will consider elements which match this predicate. Defaults to the always true function and thus, counts all the elements in the iterable if omitted. |

**Returns:** Promise\<number>

A promise of the number of elements matching the specified predicate.

___

### distinct

▸ **distinct**(`mapper`: keyof T, `maxOcurrences?`: undefined \| number): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

Returns distinct elements from the iterable from a certain projections perspective.

**`typeparam`** The type of the data the element equality is based on.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | keyof T | The projection to use to determine element equality. Identity mapping is used if omitted. |
`maxOcurrences?` | undefined \| number | The number of accepted occurrences for each item. Default: 1 |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

The [FluentAsyncIterable](_types_key_._types_.fluentasynciterable.md) of the distinct elements.

___

### execute

▸ **execute**(`action`: keyof T): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

Translate an iterable into one which executes an action against each element before yield them.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`action` | keyof T | The action to execute against each element. |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

The [FluentAsyncIterable](_types_key_._types_.fluentasynciterable.md) with the action injected to it.

___

### filter

▸ **filter**(`predicate`: keyof T): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

Filters the iterable of `T` based on a predicate.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | keyof T | A predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`. |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

A [FluentAsyncIterable](_types_key_._types_.fluentasynciterable.md) of the elements against which the predicate evaluates to `true`.

___

### first

▸ **first**(`predicate`: keyof T): Promise\<T \| undefined>

Returns the first element of the iterable matching a predicate, or `undefined` value if no such element is found. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | keyof T | The first element is to be returned which matches this predicate. Defaults to the always true function and thus, returns the first element in the iterable if omitted. |

**Returns:** Promise\<T \| undefined>

A promise of the first element matching the specified predicate, or `undefined` if no such element found.

___

### flatten

▸ **flatten**\<K, R>(`mapper?`: K): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<R>

Projects each element of the iterable to an iterable and flattens the resulting iterable into one iterable.

#### Type parameters:

Name | Type | Description |
------ | ------ | ------ |
`K` | keyof T | - |
`R` | [AsyncItemType](../modules/_types_key_._types_.md#asyncitemtype)\<T[K]> | The type of the elements in the inner iterable. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | K | Specifies the projection from the elements of `T` to iterables of `R`. Identity mapping is applied (taking the elements as iterables) if omitted. |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<R>

The [FluentAsyncIterable](_types_key_._types_.fluentasynciterable.md) of the flattened iterable.

___

### forEach

▸ **forEach**(`mapper`: keyof T): Promise\<void>

Iterates through the iterable and executes an action against each element. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters:

Name | Type |
------ | ------ |
`mapper` | keyof T |

**Returns:** Promise\<void>

___

### group

▸ **group**\<R>(`mapper`: R): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<[FluentGroup](_types_.fluentgroup.md)\<T, T[R]>>

Groups the elements of the iterable keyed by equality of data at the specified projection.

#### Type parameters:

Name | Type | Description |
------ | ------ | ------ |
`R` | keyof T | The type of the groups' key. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | R | Projects the elements of the iterable into the group key they belong to. |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<[FluentGroup](_types_.fluentgroup.md)\<T, T[R]>>

The [FluentAsyncIterable](_types_key_._types_.fluentasynciterable.md) of the distinct groups.

___

### isDistinct

▸ **isDistinct**(`mapper`: keyof T, `maxOcurrences?`: undefined \| number): Promise\<boolean>

Checks if the given projection have only distinct elements. This is a partial resolving operation,
and will return the result after as soon as an item got more occurrences than the specified

  Examples:

    * `fluent(['anchor', 'almond', 'anchor', 'alpine']).isDistinctAsync()` returns true
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinctAsync(word => word[0])` returns false
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinctAsync(word => word[0], 2)` returns true

**`typeparam`** The type of the data the element equality is based on.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | keyof T | The asynchronous projection to use to determine element equality. Identity mapping is used if omitted. |
`maxOcurrences?` | undefined \| number | The number of accepted occurrences for each item. Default: 1  |

**Returns:** Promise\<boolean>

___

### join

▸ **join**(`separator`: string, `mapper`: keyof T): Promise\<string>

Projects and concatenates the elements of the iterable into a `string` using a separator. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`separator` | string | The separator to use in between the elements of the iterable. |
`mapper` | keyof T | The function which projects the elements of the iterable into `string`s. Falls back to the identity function if omitted. |

**Returns:** Promise\<string>

A promise of the concatenated string of the elements in the iterable.

___

### last

▸ **last**(`predicate`: keyof T): Promise\<T \| undefined>

Returns the last element of the iterable matching a predicate, or `undefined` value if no such element is found. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | keyof T | The last element is to be returned which matches this predicate. Defaults to the always true function and thus, returns the last element in the iterable if omitted. |

**Returns:** Promise\<T \| undefined>

A promise of the last element matching the specified predicate, or `undefined` if no such element found.

___

### map

▸ **map**\<R>(`mapper`: R): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T[R]>

Transforms the iterable of `T` into an iterable of `R` by mapping all elements to an element of `R`.

#### Type parameters:

Name | Type | Description |
------ | ------ | ------ |
`R` | keyof T | The destination type of the mapping. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | R | The operation which maps an instance of `T` into an instance of `R`. |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T[R]>

A [FluentAsyncIterable](_types_key_._types_.fluentasynciterable.md) of the mapped elements.

___

### max

▸ **max**(`mapper`: keyof T): Promise\<T \| undefined>

Finds the numeric maximum element of the iterable using a projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | keyof T | The function which projects the elements of the iterable into the comparable values. Falls back to the identity function if omitted. |

**Returns:** Promise\<T \| undefined>

A promise of the maximum of the iterable's projected elements.

___

### min

▸ **min**(`mapper`: keyof T): Promise\<T \| undefined>

Finds the numeric minimum element of the iterable using a projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | keyof T | The function which projects the elements of the iterable into the comparable values. Falls back to the identity function if omitted. |

**Returns:** Promise\<T \| undefined>

A promise of the minimum of the iterable's projected elements.

___

### reduceAndMap

▸ **reduceAndMap**\<A, R>(`reducer`: [AsyncReducer](_types_base_.asyncreducer.md)\<T, A>, `initial`: A, `result`: R): Promise\<A[R]>

Aggregates the iterable by applying an accumulator function over the elements of the iterable. The specified seed value is used as the initial accumulator value, and the specified map function is used to project the result value from the accumulator value. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters:

Name | Type | Description |
------ | ------ | ------ |
`A` | - | The type of the accumulator value. |
`R` | keyof A | The type of the aggregation result. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`reducer` | [AsyncReducer](_types_base_.asyncreducer.md)\<T, A> | The accumulator function, provides the next accumulator value out of the last accumulator value and the next element in the iterable. |
`initial` | A | The initial (aka *seed*) value of the accumulator. |
`result` | R | The mapping function, projects the accumulator value of type `A` to the result value of type `R`. |

**Returns:** Promise\<A[R]>

A promise of the aggregated value.

___

### skipWhile

▸ **skipWhile**(`condition`: keyof T): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

Bypasses elements in the iterable as long as a specified condition is true and then returns the remaining elements.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`condition` | keyof T | A predicate of `T`. All elements are skipped from the iterable until this evaluates to `false` for the first time. |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

A [FluentAsyncIterable](_types_key_._types_.fluentasynciterable.md) of the elements after the condition is not met.

___

### sum

▸ **sum**(`mapper`: keyof T): Promise\<number>

Calculates the sum of the elements of the iterable projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | keyof T | The function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted. |

**Returns:** Promise\<number>

A promise of the sum of the projected elements of the iterable.

___

### takeWhile

▸ **takeWhile**(`condition`: keyof T): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

Returns elements from the iterable as long as a specified condition is met.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`condition` | keyof T | A predicate of `T`. All elements are yielded from the iterable until this evaluates to `false` for the first time. |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

A [FluentAsyncIterable](_types_key_._types_.fluentasynciterable.md) of the elements until the condition is met.

___

### toObject

▸ **toObject**\<R1, R>(`keySelector`: R1, `valueSelector?`: AsyncMapper\<T, R>): Promise\<any>

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by a key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters:

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`R1` | keyof T | - | - |
`R` | - | T[R1] | The expected type of the object. Cannot be enforced, this is strictly informal. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`keySelector` | R1 | Projects an element of the iterable into the key of the corresponding field. |
`valueSelector?` | AsyncMapper\<T, R> | Projects an element of the iterable into the value of the corresponding field. The identity function is being used if omitted. |

**Returns:** Promise\<any>

A promise of the object composed of the elements of the iterable as fields.

▸ **toObject**\<R2>(`keySelector`: AsyncMapper\<T, any>, `valueSelector`: R2): Promise\<any>

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by a key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**`typeparam`** The expected type of the object. Cannot be enforced, this is strictly informal.

#### Type parameters:

Name | Type |
------ | ------ |
`R2` | keyof T |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`keySelector` | AsyncMapper\<T, any> | Projects an element of the iterable into the key of the corresponding field. |
`valueSelector` | R2 | Projects an element of the iterable into the value of the corresponding field. The identity function is being used if omitted. |

**Returns:** Promise\<any>

A promise of the object composed of the elements of the iterable as fields.

▸ **toObject**\<R1, R2>(`keySelector`: R1, `valueSelector`: R2): Promise\<any>

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by a key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**`typeparam`** The expected type of the object. Cannot be enforced, this is strictly informal.

#### Type parameters:

Name | Type |
------ | ------ |
`R1` | keyof T |
`R2` | keyof T |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`keySelector` | R1 | Projects an element of the iterable into the key of the corresponding field. |
`valueSelector` | R2 | Projects an element of the iterable into the value of the corresponding field. The identity function is being used if omitted. |

**Returns:** Promise\<any>

A promise of the object composed of the elements of the iterable as fields.

___

### top

▸ **top**\<R>(`mapper`: R, `comparer`: [Comparer](_types_base_.comparer.md)\<T[R]>): Promise\<T \| undefined>

Calculates the top element of the iterable using a projection and a comparer. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters:

Name | Type | Description |
------ | ------ | ------ |
`R` | keyof T | The type of the projected elements used for comparison. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | R | The function which projects the elements of the iterable into comparable. |
`comparer` | [Comparer](_types_base_.comparer.md)\<T[R]> | The comparison function. |

**Returns:** Promise\<T \| undefined>

A promise of the top of the iterable's projected elements.

___

### waitAll

▸ **waitAll**\<R>(`mapper`: R): PromiseLike\<T[R][]>

Applies a async transformation for every element in the array and, then, wait for they conclusion with Promise.all. This is a resolving operation.

#### Type parameters:

Name | Type |
------ | ------ |
`R` | keyof T |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | R | The asynchronous function which projects the elements of the iterable into promises. |

**Returns:** PromiseLike\<T[R][]>

a promises that resolves into an array with the result of all mappings.
