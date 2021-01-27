**[fluent-iterable - v1.7.5](../README.md)**

> [Globals](../README.md) / ["types-key"](../modules/_types_key_.md) / ["types"](../modules/_types_key_._types_.md) / FluentIterable

# Interface: FluentIterable\<T>

Represents an iterable extended with common processing and mutating capabilities.<br>
  The capabilities introduced are defined as a [fluent interface](https://en.wikipedia.org/wiki/Fluent_interface) and thus they support *method chaining*.

## Type parameters

Name | Description |
------ | ------ |
`T` | The type of the items in the iterable.  |

## Hierarchy

* **FluentIterable**

## Index

### Methods

* [all](_types_key_._types_.fluentiterable.md#all)
* [allAsync](_types_key_._types_.fluentiterable.md#allasync)
* [any](_types_key_._types_.fluentiterable.md#any)
* [anyAsync](_types_key_._types_.fluentiterable.md#anyasync)
* [avg](_types_key_._types_.fluentiterable.md#avg)
* [avgAsync](_types_key_._types_.fluentiterable.md#avgasync)
* [combine](_types_key_._types_.fluentiterable.md#combine)
* [combineAsync](_types_key_._types_.fluentiterable.md#combineasync)
* [count](_types_key_._types_.fluentiterable.md#count)
* [countAsync](_types_key_._types_.fluentiterable.md#countasync)
* [distinct](_types_key_._types_.fluentiterable.md#distinct)
* [distinctAsync](_types_key_._types_.fluentiterable.md#distinctasync)
* [filter](_types_key_._types_.fluentiterable.md#filter)
* [filterAsync](_types_key_._types_.fluentiterable.md#filterasync)
* [first](_types_key_._types_.fluentiterable.md#first)
* [firstAsync](_types_key_._types_.fluentiterable.md#firstasync)
* [flatten](_types_key_._types_.fluentiterable.md#flatten)
* [flattenAsync](_types_key_._types_.fluentiterable.md#flattenasync)
* [group](_types_key_._types_.fluentiterable.md#group)
* [groupAsync](_types_key_._types_.fluentiterable.md#groupasync)
* [isDistinct](_types_key_._types_.fluentiterable.md#isdistinct)
* [isDistinctAsync](_types_key_._types_.fluentiterable.md#isdistinctasync)
* [join](_types_key_._types_.fluentiterable.md#join)
* [joinAsync](_types_key_._types_.fluentiterable.md#joinasync)
* [last](_types_key_._types_.fluentiterable.md#last)
* [lastAsync](_types_key_._types_.fluentiterable.md#lastasync)
* [map](_types_key_._types_.fluentiterable.md#map)
* [mapAsync](_types_key_._types_.fluentiterable.md#mapasync)
* [max](_types_key_._types_.fluentiterable.md#max)
* [maxAsync](_types_key_._types_.fluentiterable.md#maxasync)
* [min](_types_key_._types_.fluentiterable.md#min)
* [minAsync](_types_key_._types_.fluentiterable.md#minasync)
* [reduceAndMap](_types_key_._types_.fluentiterable.md#reduceandmap)
* [reduceAndMapAsync](_types_key_._types_.fluentiterable.md#reduceandmapasync)
* [skipWhile](_types_key_._types_.fluentiterable.md#skipwhile)
* [skipWhileAsync](_types_key_._types_.fluentiterable.md#skipwhileasync)
* [sum](_types_key_._types_.fluentiterable.md#sum)
* [sumAsync](_types_key_._types_.fluentiterable.md#sumasync)
* [takeWhile](_types_key_._types_.fluentiterable.md#takewhile)
* [takeWhileAsync](_types_key_._types_.fluentiterable.md#takewhileasync)
* [toObject](_types_key_._types_.fluentiterable.md#toobject)
* [toObjectAsync](_types_key_._types_.fluentiterable.md#toobjectasync)
* [top](_types_key_._types_.fluentiterable.md#top)
* [topAsync](_types_key_._types_.fluentiterable.md#topasync)
* [waitAll](_types_key_._types_.fluentiterable.md#waitall)

## Methods

### all

▸ **all**(`predicate`: keyof T): boolean

Determines whether all elements of the iterable satisfy a condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
  Note: This operation stops reading elements from the iterable as soon as the result can be determined.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).all(word => word.length > 3)` yields `true` since all words are longer than 3 characters
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).all(word => word[0] === 'a')` yields `false` since *bound* does not start with the character *a*
    * `fluent([]).all(word => false)` yields `true` as a convention, empty iterables always return `true`

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | keyof T | The condition checked for all elements in the iterable. |

**Returns:** boolean

`true` if all elements in the iterable satisfy the specified condition, `false` otherwise.

___

### allAsync

▸ **allAsync**(`predicate`: keyof T): Promise\<boolean>

Determines whether all elements of the iterable satisfy an asynchronous condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
  Note: This operation stops reading elements from the iterable as soon as the result can be determined.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | keyof T | The asynchronous condition checked for all elements in the iterable. |

**Returns:** Promise\<boolean>

A promise of `true` if all elements in the iterable satisfy the specified condition, `false` otherwise.

___

### any

▸ **any**(`predicate`: keyof T): boolean

Determines whether any element of the iterable exists or satisfies a condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
  Note: This operation stops reading elements from the iterable as soon as the result can be determined.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).any()` yields `true` since the iterable is not empty
    * `fluent([]).any()` yields `false` since the iterable is empty
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).any(word => word[0] === 'b')` yields `true` since *bound* starts with the character *b*
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).any(word => word.length < 5)` yields `false` since none of the words are shorter than 5 characters
    * `fluent([]).any(word => false)` yields `false` as a convention, empty iterables always return `false`

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | keyof T | The condition checked for the elements in the iterable. Defaults to the always true function and thus, returns if the iterable is empty. |

**Returns:** boolean

`true` if any of the elements in the iterable satisfy the specified condition, `false` otherwise.

___

### anyAsync

▸ **anyAsync**(`predicate`: keyof T): Promise\<boolean>

Determines whether any element of the iterable exists or satisfies an asynchronous condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
  Note: This operation stops reading elements from the iterable as soon as the result can be determined.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | keyof T | The asynchronous condition checked for the elements in the iterable. |

**Returns:** Promise\<boolean>

A promise of `true` if any of the elements in the iterable satisfy the specified condition, `false` otherwise.

___

### avg

▸ **avg**(`mapper`: keyof T): number

Calculates the average of the elements of the iterable projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent([5, -2, 9]).avg()` returns *4*
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).avg(word => word.length)` returns *5.75*, the average of the length of all the words in the iterable

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | keyof T | The function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted. |

**Returns:** number

The average of the projected elements of the iterable.

___

### avgAsync

▸ **avgAsync**(`mapper`: keyof T): Promise\<number>

Calculates the average of the elements of the iterable asynchronously projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | keyof T | The asynchronous function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted. |

**Returns:** Promise\<number>

A promise of the average of the projected elements of the iterable.

___

### combine

▸ **combine**\<U, K>(`iterable`: Iterable\<U>, `keyA`: keyof T, `keyB`: Mapper\<U, K>): [FluentIterable](_types_.fluentiterable.md)\<[T, U]>

Join the iterable with another one, returning a new iterable with the inner matching combinations

#### Type parameters:

Name |
------ |
`U` |
`K` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`iterable` | Iterable\<U> | The right iterable to be combined |
`keyA` | keyof T | A mapper that returns the key map value from the left iterable |
`keyB` | Mapper\<U, K> | A mapper that returns the key map value from the right iterable  |

**Returns:** [FluentIterable](_types_.fluentiterable.md)\<[T, U]>

▸ **combine**\<U, K>(`iterable`: Iterable\<U>, `keyA`: Mapper\<T, K>, `keyB`: keyof U): [FluentIterable](_types_.fluentiterable.md)\<[T, U]>

Join the iterable with another one, returning a new iterable with the inner matching combinations

#### Type parameters:

Name |
------ |
`U` |
`K` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`iterable` | Iterable\<U> | The right iterable to be combined |
`keyA` | Mapper\<T, K> | A mapper that returns the key map value from the left iterable |
`keyB` | keyof U | A mapper that returns the key map value from the right iterable  |

**Returns:** [FluentIterable](_types_.fluentiterable.md)\<[T, U]>

▸ **combine**\<U>(`iterable`: Iterable\<U>, `keyA`: keyof T, `keyB`: keyof U): [FluentIterable](_types_.fluentiterable.md)\<[T, U]>

Join the iterable with another one, returning a new iterable with the inner matching combinations

#### Type parameters:

Name |
------ |
`U` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`iterable` | Iterable\<U> | The right iterable to be combined |
`keyA` | keyof T | A mapper that returns the key map value from the left iterable |
`keyB` | keyof U | A mapper that returns the key map value from the right iterable  |

**Returns:** [FluentIterable](_types_.fluentiterable.md)\<[T, U]>

___

### combineAsync

▸ **combineAsync**\<U, K>(`iterable`: AsyncIterable\<U>, `keyA`: keyof T, `keyB`: Mapper\<U, K>): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<[T, U]>

Join the iterable with another one, returning a new async iterable with the inner matching combinations

#### Type parameters:

Name |
------ |
`U` |
`K` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`iterable` | AsyncIterable\<U> | The right iterable to be combined |
`keyA` | keyof T | A mapper that returns the key map value from the left iterable |
`keyB` | Mapper\<U, K> | A mapper that returns the key map value from the right iterable  |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<[T, U]>

▸ **combineAsync**\<U, K>(`iterable`: AsyncIterable\<U>, `keyA`: Mapper\<T, K>, `keyB`: keyof U): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<[T, U]>

Join the iterable with another one, returning a new async iterable with the inner matching combinations

#### Type parameters:

Name |
------ |
`U` |
`K` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`iterable` | AsyncIterable\<U> | The right iterable to be combined |
`keyA` | Mapper\<T, K> | A mapper that returns the key map value from the left iterable |
`keyB` | keyof U | A mapper that returns the key map value from the right iterable  |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<[T, U]>

▸ **combineAsync**\<U>(`iterable`: AsyncIterable\<U>, `keyA`: keyof T, `keyB`: keyof U): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<[T, U]>

Join the iterable with another one, returning a new async iterable with the inner matching combinations

#### Type parameters:

Name |
------ |
`U` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`iterable` | AsyncIterable\<U> | The right iterable to be combined |
`keyA` | keyof T | A mapper that returns the key map value from the left iterable |
`keyB` | keyof U | A mapper that returns the key map value from the right iterable  |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<[T, U]>

___

### count

▸ **count**(`predicate`: keyof T): number

Returns the number of elements that matches a predicate in the iterable. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).count()` returns **4**<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).count(word => word[0] === 'a')` returns **3**

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | keyof T | The count will consider elements which match this predicate. Defaults to the always true function and thus, counts all the elements in the iterable if omitted. |

**Returns:** number

The number of elements matching the specified predicate.

___

### countAsync

▸ **countAsync**(`predicate`: keyof T): Promise\<number>

Returns the number of elements that matches an asynchronous predicate in the iterable. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | keyof T | The count will consider elements which match this asynchronous predicate. |

**Returns:** Promise\<number>

A promise of the number of elements matching the specified predicate.

___

### distinct

▸ **distinct**\<R>(`mapper?`: R, `maxOcurrences?`: undefined \| number): [FluentIterable](_types_.fluentiterable.md)\<T>

Returns distinct elements from the iterable from a certain projections perspective.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'anchor', 'alpine']).distinct()` yields *anchor*, *almond* and *alpine*<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).distinct(word => word[0])` yields *anchor* and *bound*

#### Type parameters:

Name | Type | Description |
------ | ------ | ------ |
`R` | keyof T | The type of the data the element equality is based on. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | R | The projection to use to determine element equality. Identity mapping is used if omitted. |
`maxOcurrences?` | undefined \| number | The number of accepted occurrences for each item. Default: 1 |

**Returns:** [FluentIterable](_types_.fluentiterable.md)\<T>

The [FluentIterable](_types_key_._types_.fluentiterable.md) of the distinct elements.

___

### distinctAsync

▸ **distinctAsync**\<R>(`mapper`: R, `maxOcurrences?`: undefined \| number): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

Returns distinct elements from the iterable from a certain asynchronous projections perspective.

#### Type parameters:

Name | Type | Description |
------ | ------ | ------ |
`R` | keyof T | The type of the data the element equality is based on. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | R | The asynchronous projection to use to determine element equality. Identity mapping is used if omitted. |
`maxOcurrences?` | undefined \| number | The number of accepted occurrences for each item. Default: 1 |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

The [FluentAsyncIterable](_types_key_._types_.fluentasynciterable.md) of the distinct elements.

___

### filter

▸ **filter**(`predicate`: keyof T): [FluentIterable](_types_.fluentiterable.md)\<T>

Filters the iterable of `T` based on a predicate.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).filter(word => word[0] === 'a')` yields *anchor*, *almond*, and *alpine*.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | keyof T | A predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`. |

**Returns:** [FluentIterable](_types_.fluentiterable.md)\<T>

A [FluentIterable](_types_key_._types_.fluentiterable.md) of the elements against which the predicate evaluates to `true`.

___

### filterAsync

▸ **filterAsync**(`predicate`: keyof T): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

Filters the iterable of `T` based on an asynchronous predicate.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | keyof T | An asynchronous predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`. |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

A [FluentAsyncIterable](_types_key_._types_.fluentasynciterable.md) of the elements against which the predicate evaluates to `true`.

___

### first

▸ **first**(`predicate`: keyof T): T \| undefined

Returns the first element of the iterable matching a predicate, or `undefined` value if no such element is found. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).first()` returns *anchor*<br>
    * `fluent([]).first()` returns `undefined`<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).first(word => word[0] === 'b')` returns *bound*<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).first(word => word[0] === 'c')` returns `undefined`

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | keyof T | The first element is to be returned which matches this predicate. Defaults to the always true function and thus, returns the first element in the iterable if omitted. |

**Returns:** T \| undefined

The first element matching the specified predicate, or `undefined` if no such element found.

___

### firstAsync

▸ **firstAsync**(`predicate`: keyof T): Promise\<T \| undefined>

Returns the first element of the iterable matching an asynchronous predicate, or `undefined` value if no such element is found. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | keyof T | The first element is to be returned which matches this asynchronous predicate. |

**Returns:** Promise\<T \| undefined>

A promise of the first element matching the specified predicate, or `undefined` if no such element found.

___

### flatten

▸ **flatten**\<R>(): [FluentIterable](_types_.fluentiterable.md)\<R>

Projects each element of the iterable to an iterable and flattens the resulting iterable into one iterable.<br>
Examples:<br>
  * `fluent([['anchor', 'almond'], ['bound', 'alpine']]).flatten()` yields *anchor*, *almond*, *bound* and *alpine*.<br>

#### Type parameters:

Name | Type | Description |
------ | ------ | ------ |
`R` | [ItemType](../modules/_types_key_._types_.md#itemtype)\<T> | The type of the elements in the inner iterable. |

**Returns:** [FluentIterable](_types_.fluentiterable.md)\<R>

The [FluentIterable](_types_key_._types_.fluentiterable.md) of the flattened iterable.

▸ **flatten**\<K, R>(`mapper`: K): [FluentIterable](_types_.fluentiterable.md)\<R>

Projects each element of the iterable to an iterable and flattens the resulting iterable into one iterable.<br>
Examples:<br>
  * `fluent([ { values: ['anchor', 'almond'] }, { values: ['bound', 'alpine'] }]).flatten(obj => obj.values)` yields *anchor*, *almond*, *bound* and *alpine*.

#### Type parameters:

Name | Type | Description |
------ | ------ | ------ |
`K` | keyof T | - |
`R` | [ItemType](../modules/_types_key_._types_.md#itemtype)\<T[K]> | The type of the elements in the inner iterable. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | K | Specifies the projection from the elements of `T` to iterables of `R`. Identity mapping is applied (taking the elements as iterables) if omitted. |

**Returns:** [FluentIterable](_types_.fluentiterable.md)\<R>

The [FluentIterable](_types_key_._types_.fluentiterable.md) of the flattened iterable.

___

### flattenAsync

▸ **flattenAsync**\<K, R>(`mapper?`: K): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<R>

Asynchronously projects each element of the iterable to an iterable and flattens the resulting iterable into one iterable.

#### Type parameters:

Name | Type | Description |
------ | ------ | ------ |
`K` | keyof T | - |
`R` | [AsyncItemType](../modules/_types_key_._types_.md#asyncitemtype)\<T[K]> | The type of the elements in the inner iterable. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | K | Specifies the asynchronous projection from the elements of `T` to iterables of `R`. |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<R>

The flattened [FluentAsyncIterable](_types_key_._types_.fluentasynciterable.md).

___

### group

▸ **group**\<R>(`mapper`: R): [FluentIterable](_types_.fluentiterable.md)\<[FluentGroup](_types_.fluentgroup.md)\<T, T[R]>>

Groups the elements of the iterable keyed by equality of data at the specified projection.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).group(word => word[0])` yields { key: 'a', values: ['anchor', 'almond', 'alpine'] } and { key: 'b', values: ['bound'] }.

#### Type parameters:

Name | Type | Description |
------ | ------ | ------ |
`R` | keyof T | The type of the groups' key. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | R | Projects the elements of the iterable into the group key they belong to. |

**Returns:** [FluentIterable](_types_.fluentiterable.md)\<[FluentGroup](_types_.fluentgroup.md)\<T, T[R]>>

The [FluentIterable](_types_key_._types_.fluentiterable.md) of the distinct groups.

___

### groupAsync

▸ **groupAsync**\<R>(`mapper`: R): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<[FluentGroup](_types_.fluentgroup.md)\<T, T[R]>>

Groups the elements of the iterable keyed by equality of data at the specified asynchronous projection.

#### Type parameters:

Name | Type | Description |
------ | ------ | ------ |
`R` | keyof T | The type of the groups key. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | R | Asynchronously projects the elements of the iterable into the group key they belong to. |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<[FluentGroup](_types_.fluentgroup.md)\<T, T[R]>>

The [FluentAsyncIterable](_types_key_._types_.fluentasynciterable.md) of the distinct groups.

___

### isDistinct

▸ **isDistinct**\<R>(`mapper?`: R, `maxOcurrences?`: undefined \| number): boolean

Checks if the given projection have only distinct elements. This is a partial resolving operation,
and will return the result after as soon as an item got more occurrences than the specified

  Examples:

    * `fluent(['anchor', 'almond', 'anchor', 'alpine']).isDistinct()` returns true
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinct(word => word[0])` returns false
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinct(word => word[0], 2)` returns true

#### Type parameters:

Name | Type | Description |
------ | ------ | ------ |
`R` | keyof T | The type of the data the element equality is based on. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | R | The projection to use to determine element equality. Identity mapping is used if omitted. |
`maxOcurrences?` | undefined \| number | The number of accepted occurrences for each item. Default: 1  |

**Returns:** boolean

▸ **isDistinct**(`maxOcurrences?`: undefined \| number): boolean

Checks if the given iterable have only distinct elements. This is a partial resolving operation,
and will return the result after as soon as an item got more occurrences than the specified

  Examples:

    * `fluent(['anchor', 'almond', 'anchor', 'alpine']).isDistinct()` returns true
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinct(word => word[0])` returns false
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinct(word => word[0], 2)` returns true

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`maxOcurrences?` | undefined \| number | The number of accepted occurrences for each item. Default: 1  |

**Returns:** boolean

___

### isDistinctAsync

▸ **isDistinctAsync**\<R>(`mapper`: R, `maxOcurrences?`: undefined \| number): Promise\<boolean>

Checks if the given projection have only distinct elements. This is a partial resolving operation,
and will return the result after as soon as an item got more occurrences than the specified

  Examples:

    * `fluent(['anchor', 'almond', 'anchor', 'alpine']).isDistinctAsync()` returns true
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinctAsync(word => word[0])` returns false
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinctAsync(word => word[0], 2)` returns true

#### Type parameters:

Name | Type | Description |
------ | ------ | ------ |
`R` | keyof T | The type of the data the element equality is based on. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | R | The asynchronous projection to use to determine element equality. Identity mapping is used if omitted. |
`maxOcurrences?` | undefined \| number | The number of accepted occurrences for each item. Default: 1  |

**Returns:** Promise\<boolean>

___

### join

▸ **join**(`separator`: string, `mapper?`: keyof T): string

Projects and concatenates the elements of the iterable into a `string` using a separator. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).join(', ')` returns *anchor, almond, bound, alpine*

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`separator` | string | The separator to use in between the elements of the iterable. |
`mapper?` | keyof T | The function which projects the elements of the iterable into `string`s. Falls back to the identity function if omitted. |

**Returns:** string

The concatenated string of the elements in the iterable.

___

### joinAsync

▸ **joinAsync**(`separator`: string, `mapper`: keyof T): Promise\<string>

Asynchronously projects and concatenates the elements of the iterable into a `string` using a separator. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`separator` | string | The separator to use in between the elements of the iterable. |
`mapper` | keyof T | The function which asynchronously projects the elements of the iterable into `string`s. Falls back to the identity function if omitted. |

**Returns:** Promise\<string>

A promise of the concatenated string of the elements in the iterable.

___

### last

▸ **last**(`predicate`: keyof T): T \| undefined

Returns the last element of the iterable matching a predicate, or `undefined` value if no such element is found. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).last()` returns *alpine*<br>
    * `fluent([]).last()` returns `undefined`<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).last(word => word[0] === 'b')` returns *bound*<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).last(word => word[0] === 'c')` returns `undefined`

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | keyof T | The last element is to be returned which matches this predicate. Defaults to the always true function and thus, returns the last element in the iterable if omitted. |

**Returns:** T \| undefined

The last element matching the specified predicate, or `undefined` if no such element found.

___

### lastAsync

▸ **lastAsync**(`predicate`: keyof T): Promise\<T \| undefined>

Returns the last element of the iterable matching an asynchronous predicate, or `undefined` value if no such element is found. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | keyof T | The last element is to be returned which matches this asynchronous predicate. |

**Returns:** Promise\<T \| undefined>

A promise of the last element matching the specified predicate, or `undefined` if no such element found.

___

### map

▸ **map**\<R>(`mapper`: R): [FluentIterable](_types_.fluentiterable.md)\<T[R]>

Transforms the iterable of `T` into an iterable of `R` by mapping all elements to an element of `R`.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).map(word => word.toUpperCase())` yields *ANCHOR*, *ALMOND*, *BOUND* and *ALPINE*.

#### Type parameters:

Name | Type | Description |
------ | ------ | ------ |
`R` | keyof T | The destination type of the mapping. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | R | The operation which maps an instance of `T` into an instance of `R`. |

**Returns:** [FluentIterable](_types_.fluentiterable.md)\<T[R]>

A [FluentIterable](_types_key_._types_.fluentiterable.md) of the mapped elements.

___

### mapAsync

▸ **mapAsync**\<R>(`mapper`: R): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T[R]>

Transforms the iterable of `T` into an iterable of `R` by mapping all elements to an element of `R`.

#### Type parameters:

Name | Type | Description |
------ | ------ | ------ |
`R` | keyof T | The destination type of the mapping. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | R | The asynchronous operation which maps an instance of `T` into an instance of `R`. |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T[R]>

A [FluentAsyncIterable](_types_key_._types_.fluentasynciterable.md) of the mapped elements.

___

### max

▸ **max**\<R>(`mapper?`: R): T \| undefined

Finds the numeric maximum element of the iterable using a projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).max(word => word.charCodeAt(0))` returns *bound*, since it begins with the character 'b' which has a highest character code than character 'a' with which all the other words begins with

#### Type parameters:

Name | Type |
------ | ------ |
`R` | keyof T |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | R | The function which projects the elements of the iterable into comparable values. Falls back to the identity function if omitted. |

**Returns:** T \| undefined

The maximum of the iterable's projected elements.

___

### maxAsync

▸ **maxAsync**\<R>(`mapper?`: R): Promise\<T \| undefined>

Finds the numeric maximum element of the iterable using an asynchronous projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters:

Name | Type |
------ | ------ |
`R` | keyof T |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | R | The function which asynchronously projects the elements of the iterable into the comparable values. Falls back to the identity function if omitted. |

**Returns:** Promise\<T \| undefined>

A promise of the maximum of the iterable's projected elements.

___

### min

▸ **min**\<R>(`mapper`: R): T \| undefined

Finds the numeric minimum element of the iterable using a projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).min(word => word.length)` returns *bound*, the shortest word in the iterable

#### Type parameters:

Name | Type |
------ | ------ |
`R` | keyof T |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | R | The function which projects the elements of the iterable into the comparable value. Falls back to the identity function if omitted. |

**Returns:** T \| undefined

The minimum of the iterable's projected elements.

___

### minAsync

▸ **minAsync**\<R>(`mapper`: R): Promise\<T \| undefined>

Finds the numeric minimum element of the iterable using an asynchronous projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters:

Name | Type |
------ | ------ |
`R` | keyof T |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | R | The asynchronous function which projects the elements of the iterable into the comparable value. Falls back to the identity function if omitted. |

**Returns:** Promise\<T \| undefined>

A promise of the minimum of the iterable's projected elements.

___

### reduceAndMap

▸ **reduceAndMap**\<A, R>(`reducer`: [Reducer](_types_base_.reducer.md)\<T, A>, `initial`: A, `result`: R): A[R]

Aggregates the iterable by applying an accumulator function over the elements of the iterable. The specified seed value is used as the initial accumulator value, and the specified map function is used to project the result value from the accumulator value. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Example:<br>
    ```
    fluent(['anchor', 'almond', 'bound', 'alpine']).reduceAndMap(
      (current, next) => (next.length < current.minValue ? { min: next, minValue: next.length } : current),
      {
        min: undefined as (string | undefined),
        minValue: Number.MAX_VALUE
      },
      acc => acc.min
    )
    ``` returns *bound*, the shortest word in the iterable.

#### Type parameters:

Name | Type | Description |
------ | ------ | ------ |
`A` | - | The type of the accumulator value. |
`R` | keyof A | The type of the aggregation result. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`reducer` | [Reducer](_types_base_.reducer.md)\<T, A> | The accumulator function, provides the next accumulator value out of the last accumulator value and the next element in the iterable. |
`initial` | A | The initial (aka *seed*) value of the accumulator. |
`result` | R | The mapping function, projects the accumulator value of type `A` to the result value of type `R`. |

**Returns:** A[R]

The aggregated value.

___

### reduceAndMapAsync

▸ **reduceAndMapAsync**\<A, R>(`reducer`: [AsyncReducer](_types_base_.asyncreducer.md)\<T, A>, `initial`: A, `result`: R): Promise\<A[R]>

Aggregates the iterable by applying an asynchronous accumulator function over the elements of the iterable. The specified seed value is used as the initial accumulator value, and the specified asynchronous map function is used to project the result value from the accumulator value. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters:

Name | Type | Description |
------ | ------ | ------ |
`A` | - | The type of the accumulator value. |
`R` | keyof A | The type of the aggregation result. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`reducer` | [AsyncReducer](_types_base_.asyncreducer.md)\<T, A> | The asynchronous accumulator function, provides the next accumulator value out of the last accumulator value and the next element in the iterable. |
`initial` | A | The initial (aka *seed*) value of the accumulator. |
`result` | R | The asynchronous mapping function, projects the accumulator value of type `A` to the result value of type `R`. |

**Returns:** Promise\<A[R]>

A promise of the aggregated value.

___

### skipWhile

▸ **skipWhile**(`condition`: keyof T): [FluentIterable](_types_.fluentiterable.md)\<T>

Bypasses elements in the iterable as long as a specified condition is true and then returns the remaining elements.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).skipWhile(word => word[0] === 'a')` yields *bound* and *alpine*.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`condition` | keyof T | A predicate of `T`. All elements are skipped from the iterable until this evaluates to `false` for the first time. |

**Returns:** [FluentIterable](_types_.fluentiterable.md)\<T>

A [FluentIterable](_types_key_._types_.fluentiterable.md) of the elements after the condition is not met.

___

### skipWhileAsync

▸ **skipWhileAsync**(`condition`: keyof T): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

Bypasses elements in the iterable as long as a specified asynchronous condition is true and then returns the remaining elements.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`condition` | keyof T | An asynchronous predicate of `T`. All elements are skipped from the iterable until this evaluates to `false` for the first time. |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

A [FluentAsyncIterable](_types_key_._types_.fluentasynciterable.md) of the elements after the condition is not met.

___

### sum

▸ **sum**(`mapper`: keyof T): number

Calculates the sum of the elements of the iterable projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent([5, -2, 9]).sum()` returns *12*
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).sum(word => word.length)` returns *23*, the sum of length of all the words in the iterable

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | keyof T | The function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted. |

**Returns:** number

The sum of the projected elements of the iterable.

___

### sumAsync

▸ **sumAsync**(`mapper`: keyof T): Promise\<number>

Calculates the sum of the elements of the iterable asynchronously projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | keyof T | The asynchronous function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted. |

**Returns:** Promise\<number>

A promise of the sum of the projected elements of the iterable.

___

### takeWhile

▸ **takeWhile**(`condition`: keyof T): [FluentIterable](_types_.fluentiterable.md)\<T>

Returns elements from the iterable as long as a specified condition is met.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).takeWhile(word => word[0] === 'a')` yields *anchor* and *almond*.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`condition` | keyof T | A predicate of `T`. All elements are yielded from the iterable until this evaluates to `false` for the first time. |

**Returns:** [FluentIterable](_types_.fluentiterable.md)\<T>

A [FluentIterable](_types_key_._types_.fluentiterable.md) of the elements until the condition is met.

___

### takeWhileAsync

▸ **takeWhileAsync**(`condition`: keyof T): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

Returns elements from the iterable as long as a specified asynchronous condition is met.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`condition` | keyof T | An asynchronous predicate of `T`. All elements are yielded from the iterable until this evaluates to `false` for the first time. |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

A [FluentAsyncIterable](_types_key_._types_.fluentasynciterable.md) of the elements until the condition is met.

___

### toObject

▸ **toObject**\<R1, R>(`keySelector`: R1, `valueSelector?`: Mapper\<T, R>): object

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by a key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond']).toObject(word => word)` returns `{ anchor: 'anchor', almond: 'almond' }`
    * `fluent([{ key: 'name', value: 'Peter Parker' }, { key: 'alias', value: 'SpiderMan' }]).toObject(item => item.key, item => item.value)` returns `{ name: 'Peter Parker', alias: 'SpiderMan' }`

#### Type parameters:

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`R1` | keyof T | - | - |
`R` | - | T[R1] | The expected type of the object. Cannot be enforced, this is strictly informal. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`keySelector` | R1 | Projects an element of the iterable into the key of the corresponding field. |
`valueSelector?` | Mapper\<T, R> | Projects an element of the iterable into the value of the corresponding field. The identity function is being used if omitted. |

**Returns:** object

The object composed of the elements of the iterable as fields.

▸ **toObject**\<K, R2>(`keySelector`: Mapper\<T, K>, `valueSelector`: R2): object

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by a key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond']).toObject(word => word)` returns `{ anchor: 'anchor', almond: 'almond' }`
    * `fluent([{ key: 'name', value: 'Peter Parker' }, { key: 'alias', value: 'SpiderMan' }]).toObject(item => item.key, item => item.value)` returns `{ name: 'Peter Parker', alias: 'SpiderMan' }`

**`typeparam`** The expected type of the object. Cannot be enforced, this is strictly informal.

#### Type parameters:

Name | Type |
------ | ------ |
`K` | string \| symbol \| number |
`R2` | keyof T |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`keySelector` | Mapper\<T, K> | Projects an element of the iterable into the key of the corresponding field. |
`valueSelector` | R2 | Projects an element of the iterable into the value of the corresponding field. The identity function is being used if omitted. |

**Returns:** object

The object composed of the elements of the iterable as fields.

▸ **toObject**\<R1, R2>(`keySelector`: R1, `valueSelector`: R2): object

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by a key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond']).toObject(word => word)` returns `{ anchor: 'anchor', almond: 'almond' }`
    * `fluent([{ key: 'name', value: 'Peter Parker' }, { key: 'alias', value: 'SpiderMan' }]).toObject(item => item.key, item => item.value)` returns `{ name: 'Peter Parker', alias: 'SpiderMan' }`

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

**Returns:** object

The object composed of the elements of the iterable as fields.

___

### toObjectAsync

▸ **toObjectAsync**\<R1, R>(`keySelector`: R1, `valueSelector?`: AsyncMapper\<T, R>): Promise\<{}>

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by an asynchronous key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters:

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`R1` | keyof T | - | - |
`R` | - | T[R1] | The expected type of the object. Cannot be enforced, this is strictly informal. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`keySelector` | R1 | Asynchronously projects an element of the iterable into the key of the corresponding field. |
`valueSelector?` | AsyncMapper\<T, R> | Asynchronously projects an element of the iterable into the value of the corresponding field. |

**Returns:** Promise\<{}>

A promise of the object composed of the elements of the iterable as fields.

▸ **toObjectAsync**\<K, R2>(`keySelector`: AsyncMapper\<T, K>, `valueSelector`: R2): Promise\<{}>

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by an asynchronous key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**`typeparam`** The expected type of the object. Cannot be enforced, this is strictly informal.

#### Type parameters:

Name | Type |
------ | ------ |
`K` | string \| symbol \| number |
`R2` | keyof T |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`keySelector` | AsyncMapper\<T, K> | Asynchronously projects an element of the iterable into the key of the corresponding field. |
`valueSelector` | R2 | Asynchronously projects an element of the iterable into the value of the corresponding field. |

**Returns:** Promise\<{}>

A promise of the object composed of the elements of the iterable as fields.

▸ **toObjectAsync**\<R1, R2>(`keySelector`: R1, `valueSelector`: R2): Promise\<{}>

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by an asynchronous key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**`typeparam`** The expected type of the object. Cannot be enforced, this is strictly informal.

#### Type parameters:

Name | Type |
------ | ------ |
`R1` | keyof T |
`R2` | keyof T |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`keySelector` | R1 | Asynchronously projects an element of the iterable into the key of the corresponding field. |
`valueSelector` | R2 | Asynchronously projects an element of the iterable into the value of the corresponding field. |

**Returns:** Promise\<{}>

A promise of the object composed of the elements of the iterable as fields.

___

### top

▸ **top**\<R>(`mapper`: R, `comparer`: [Comparer](_types_base_.comparer.md)\<T[R]>): T \| undefined

Calculates the top element of the iterable using a projection and a comparer. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).top(word => word.length, (a, b) => b - a)` returns *bound*, the shortest word in the iterable
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).top(word => word.charCodeAt(0), (a, b) => a - b)` returns *bound*, latest word in the lexicographical order considering the first character only

#### Type parameters:

Name | Type | Description |
------ | ------ | ------ |
`R` | keyof T | The type of the projected elements used for comparison. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | R | The function which projects the elements of the iterable into comparable. |
`comparer` | [Comparer](_types_base_.comparer.md)\<T[R]> | The comparison function. |

**Returns:** T \| undefined

The top of the iterable's projected elements.

___

### topAsync

▸ **topAsync**\<R>(`mapper`: T, `comparer`: [Comparer](_types_base_.comparer.md)\<T[R]>): Promise\<T \| undefined>

Calculates the top element of the iterable using an asynchronous projection and a comparer. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters:

Name | Type | Description |
------ | ------ | ------ |
`R` | keyof T | The type of the projected elements used for comparison. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | T | The asynchronous function which projects the elements of the iterable into comparable. |
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
