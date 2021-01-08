**[fluent-iterable - v1.7.3](../README.md)**

> [Globals](../README.md) / ["types"](../modules/_types_.md) / FluentIterable

# Interface: FluentIterable\<T>

Represents an iterable extended with common processing and mutating capabilities.<br>
  The capabilities introduced are defined as a [fluent interface](https://en.wikipedia.org/wiki/Fluent_interface) and thus they support *method chaining*.

## Type parameters

Name | Description |
------ | ------ |
`T` | The type of the items in the iterable.  |

## Hierarchy

* Iterable\<T>

* [OrderAssurable](_assure_order_types_.orderassurable.md)\<[FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>>

* [FluentIterableEmitter](_types_emitter_.fluentiterableemitter.md)\<T>

  ↳ **FluentIterable**

## Index

### Methods

* [[Symbol.iterator]](_types_.fluentiterable.md#[symbol.iterator])
* [all](_types_.fluentiterable.md#all)
* [allAsync](_types_.fluentiterable.md#allasync)
* [any](_types_.fluentiterable.md#any)
* [anyAsync](_types_.fluentiterable.md#anyasync)
* [append](_types_.fluentiterable.md#append)
* [assureOrder](_types_.fluentiterable.md#assureorder)
* [assureOrderDescending](_types_.fluentiterable.md#assureorderdescending)
* [avg](_types_.fluentiterable.md#avg)
* [avgAsync](_types_.fluentiterable.md#avgasync)
* [combine](_types_.fluentiterable.md#combine)
* [combineAsync](_types_.fluentiterable.md#combineasync)
* [combineEmitter](_types_.fluentiterable.md#combineemitter)
* [concat](_types_.fluentiterable.md#concat)
* [concatAsync](_types_.fluentiterable.md#concatasync)
* [concatEmitter](_types_.fluentiterable.md#concatemitter)
* [contains](_types_.fluentiterable.md#contains)
* [count](_types_.fluentiterable.md#count)
* [countAsync](_types_.fluentiterable.md#countasync)
* [distinct](_types_.fluentiterable.md#distinct)
* [distinctAsync](_types_.fluentiterable.md#distinctasync)
* [emit](_types_.fluentiterable.md#emit)
* [execute](_types_.fluentiterable.md#execute)
* [executeAsync](_types_.fluentiterable.md#executeasync)
* [filter](_types_.fluentiterable.md#filter)
* [filterAsync](_types_.fluentiterable.md#filterasync)
* [first](_types_.fluentiterable.md#first)
* [firstAsync](_types_.fluentiterable.md#firstasync)
* [flatten](_types_.fluentiterable.md#flatten)
* [flattenAsync](_types_.fluentiterable.md#flattenasync)
* [forEach](_types_.fluentiterable.md#foreach)
* [forEachAsync](_types_.fluentiterable.md#foreachasync)
* [group](_types_.fluentiterable.md#group)
* [groupAsync](_types_.fluentiterable.md#groupasync)
* [hasExactly](_types_.fluentiterable.md#hasexactly)
* [hasLessOrExactly](_types_.fluentiterable.md#haslessorexactly)
* [hasLessThan](_types_.fluentiterable.md#haslessthan)
* [hasMoreOrExactly](_types_.fluentiterable.md#hasmoreorexactly)
* [hasMoreThan](_types_.fluentiterable.md#hasmorethan)
* [isDistinct](_types_.fluentiterable.md#isdistinct)
* [isDistinctAsync](_types_.fluentiterable.md#isdistinctasync)
* [join](_types_.fluentiterable.md#join)
* [joinAsync](_types_.fluentiterable.md#joinasync)
* [last](_types_.fluentiterable.md#last)
* [lastAsync](_types_.fluentiterable.md#lastasync)
* [map](_types_.fluentiterable.md#map)
* [mapAsync](_types_.fluentiterable.md#mapasync)
* [max](_types_.fluentiterable.md#max)
* [maxAsync](_types_.fluentiterable.md#maxasync)
* [min](_types_.fluentiterable.md#min)
* [minAsync](_types_.fluentiterable.md#minasync)
* [o](_types_.fluentiterable.md#o)
* [od](_types_.fluentiterable.md#od)
* [partition](_types_.fluentiterable.md#partition)
* [prepend](_types_.fluentiterable.md#prepend)
* [reduce](_types_.fluentiterable.md#reduce)
* [reduceAndMap](_types_.fluentiterable.md#reduceandmap)
* [reduceAndMapAsync](_types_.fluentiterable.md#reduceandmapasync)
* [reduceAsync](_types_.fluentiterable.md#reduceasync)
* [repeat](_types_.fluentiterable.md#repeat)
* [skip](_types_.fluentiterable.md#skip)
* [skipWhile](_types_.fluentiterable.md#skipwhile)
* [skipWhileAsync](_types_.fluentiterable.md#skipwhileasync)
* [sort](_types_.fluentiterable.md#sort)
* [sortBy](_types_.fluentiterable.md#sortby)
* [sum](_types_.fluentiterable.md#sum)
* [sumAsync](_types_.fluentiterable.md#sumasync)
* [take](_types_.fluentiterable.md#take)
* [takeWhile](_types_.fluentiterable.md#takewhile)
* [takeWhileAsync](_types_.fluentiterable.md#takewhileasync)
* [toArray](_types_.fluentiterable.md#toarray)
* [toAsync](_types_.fluentiterable.md#toasync)
* [toObject](_types_.fluentiterable.md#toobject)
* [toObjectAsync](_types_.fluentiterable.md#toobjectasync)
* [top](_types_.fluentiterable.md#top)
* [topAsync](_types_.fluentiterable.md#topasync)
* [waitAll](_types_.fluentiterable.md#waitall)
* [withIndex](_types_.fluentiterable.md#withindex)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): Iterator\<T>

*Inherited from [FluentIterable](_types_.fluentiterable.md).[[Symbol.iterator]](_types_.fluentiterable.md#[symbol.iterator])*

**Returns:** Iterator\<T>

___

### all

▸ **all**(`predicate`: [Predicate](../modules/_types_base_.md#predicate)\<T>): boolean

Determines whether all elements of the iterable satisfy a condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
  Note: This operation stops reading elements from the iterable as soon as the result can be determined.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).all(word => word.length > 3)` yields `true` since all words are longer than 3 characters
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).all(word => word[0] === 'a')` yields `false` since *bound* does not start with the character *a*
    * `fluent([]).all(word => false)` yields `true` as a convention, empty iterables always return `true`

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [Predicate](../modules/_types_base_.md#predicate)\<T> | The condition checked for all elements in the iterable. |

**Returns:** boolean

`true` if all elements in the iterable satisfy the specified condition, `false` otherwise.

___

### allAsync

▸ **allAsync**(`predicate`: AsyncPredicate\<T>): Promise\<boolean>

Determines whether all elements of the iterable satisfy an asynchronous condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
  Note: This operation stops reading elements from the iterable as soon as the result can be determined.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | AsyncPredicate\<T> | The asynchronous condition checked for all elements in the iterable. |

**Returns:** Promise\<boolean>

A promise of `true` if all elements in the iterable satisfy the specified condition, `false` otherwise.

___

### any

▸ **any**(`predicate?`: [Predicate](../modules/_types_base_.md#predicate)\<T>): boolean

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
`predicate?` | [Predicate](../modules/_types_base_.md#predicate)\<T> | The condition checked for the elements in the iterable. Defaults to the always true function and thus, returns if the iterable is empty. |

**Returns:** boolean

`true` if any of the elements in the iterable satisfy the specified condition, `false` otherwise.

___

### anyAsync

▸ **anyAsync**(`predicate?`: [AsyncPredicate](../modules/_types_base_.md#asyncpredicate)\<T>): Promise\<boolean>

Determines whether any element of the iterable exists or satisfies an asynchronous condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
  Note: This operation stops reading elements from the iterable as soon as the result can be determined.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate?` | [AsyncPredicate](../modules/_types_base_.md#asyncpredicate)\<T> | The asynchronous condition checked for the elements in the iterable. |

**Returns:** Promise\<boolean>

A promise of `true` if any of the elements in the iterable satisfy the specified condition, `false` otherwise.

___

### append

▸ **append**(`item`: T): [FluentIterable](_types_.fluentiterable.md)\<T>

Appends a value to the end of the iterable.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).append('book')` yields *anchor*, *almond*, *bound*, *alpine* and *book*.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`item` | T | The item to be appended to the iterable. |

**Returns:** [FluentIterable](_types_.fluentiterable.md)\<T>

The [FluentIterable](_types_.fluentiterable.md) appended with the element.

___

### assureOrder

▸ **assureOrder**(): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

*Inherited from [OrderAssurable](_assure_order_types_.orderassurable.md).[assureOrder](_assure_order_types_.orderassurable.md#assureorder)*

Assures the order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be ascending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

___

### assureOrderDescending

▸ **assureOrderDescending**(): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

*Inherited from [OrderAssurable](_assure_order_types_.orderassurable.md).[assureOrderDescending](_assure_order_types_.orderassurable.md#assureorderdescending)*

Assures the descending order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be descending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

___

### avg

▸ **avg**(`mapper?`: Mapper\<T, number>): number

Calculates the average of the elements of the iterable projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent([5, -2, 9]).avg()` returns *4*
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).avg(word => word.length)` returns *5.75*, the average of the length of all the words in the iterable

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | Mapper\<T, number> | The function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted. |

**Returns:** number

The average of the projected elements of the iterable.

___

### avgAsync

▸ **avgAsync**(`mapper?`: AsyncMapper\<T, number>): Promise\<number>

Calculates the average of the elements of the iterable asynchronously projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | AsyncMapper\<T, number> | The asynchronous function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted. |

**Returns:** Promise\<number>

A promise of the average of the projected elements of the iterable.

___

### combine

▸ **combine**\<U>(`iterable`: Iterable\<U>): [FluentIterable](_types_.fluentiterable.md)\<[T, U]>

Join the iterable with another one, returning a new iterable with a NxN combination

#### Type parameters:

Name |
------ |
`U` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`iterable` | Iterable\<U> | The iterable to be combined  |

**Returns:** [FluentIterable](_types_.fluentiterable.md)\<[T, U]>

▸ **combine**\<U, K>(`iterable`: Iterable\<U>, `keyA`: Mapper\<T, K>, `keyB`: Mapper\<U, K>): [FluentIterable](_types_.fluentiterable.md)\<[T, U]>

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
`keyB` | Mapper\<U, K> | A mapper that returns the key map value from the right iterable  |

**Returns:** [FluentIterable](_types_.fluentiterable.md)\<[T, U]>

___

### combineAsync

▸ **combineAsync**\<U>(`iterable`: AsyncIterable\<U>): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<[T, U]>

Join the iterable with an async one, returning a new async iterable with a NxN combination

#### Type parameters:

Name |
------ |
`U` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`iterable` | AsyncIterable\<U> | The iterable to be combined  |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<[T, U]>

▸ **combineAsync**\<U, K>(`iterable`: AsyncIterable\<U>, `keyA`: Mapper\<T, K>, `keyB`: Mapper\<U, K>): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<[T, U]>

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
`keyB` | Mapper\<U, K> | A mapper that returns the key map value from the right iterable  |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<[T, U]>

___

### combineEmitter

▸ **combineEmitter**\<U>(`emitter`: EventEmitter, `options?`: [FluentEmitOptions](_types_base_.fluentemitoptions.md)): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<[T, U]>

*Inherited from [FluentIterableEmitter](_types_emitter_.fluentiterableemitter.md).[combineEmitter](_types_emitter_.fluentiterableemitter.md#combineemitter)*

Join the iterable with an EventEmitter, returning a new async iterable with a NxN combination

**IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
emission generates a new yielded result. The default key event is **'data'**.

Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.

If you need to change the key event or other characteristics, you can do it through the **options** parameter

#### Type parameters:

Name | Default |
------ | ------ |
`U` | any |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`emitter` | EventEmitter | The EventEmitter |
`options?` | [FluentEmitOptions](_types_base_.fluentemitoptions.md) | The EventEmitter options. Optional  |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<[T, U]>

▸ **combineEmitter**\<U, K>(`emitter`: EventEmitter, `keyA`: Mapper\<T, K>, `keyB`: Mapper\<U, K>, `options?`: [FluentEmitOptions](_types_base_.fluentemitoptions.md)): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<[T, U]>

*Inherited from [FluentIterableEmitter](_types_emitter_.fluentiterableemitter.md).[combineEmitter](_types_emitter_.fluentiterableemitter.md#combineemitter)*

Join the iterable with another the EventEmitter, returning a new async iterable with the inner matching combinations

**IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
emission generates a new yielded result. The default key event is **'data'**.

Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.

If you need to change the key event or other characteristics, you can do it through the **options** parameter

#### Type parameters:

Name |
------ |
`U` |
`K` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`emitter` | EventEmitter | The EventEmitter |
`keyA` | Mapper\<T, K> | A mapper that returns the key map value from the left iterable |
`keyB` | Mapper\<U, K> | A mapper that returns the key map value from the right iterable  |
`options?` | [FluentEmitOptions](_types_base_.fluentemitoptions.md) | The EventEmitter options. Optional |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<[T, U]>

▸ **combineEmitter**\<U, K>(`emitter`: EventEmitter, `keyA`: keyof T, `keyB`: Mapper\<U, K>, `options?`: [FluentEmitOptions](_types_base_.fluentemitoptions.md)): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<[T, U]>

*Inherited from [FluentIterableEmitter](_types_emitter_.fluentiterableemitter.md).[combineEmitter](_types_emitter_.fluentiterableemitter.md#combineemitter)*

Join the iterable with another the EventEmitter, returning a new async iterable with the inner matching combinations

**IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
emission generates a new yielded result. The default key event is **'data'**.

Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.

If you need to change the key event or other characteristics, you can do it through the **options** parameter

#### Type parameters:

Name |
------ |
`U` |
`K` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`emitter` | EventEmitter | The EventEmitter |
`keyA` | keyof T | A mapper that returns the key map value from the left iterable |
`keyB` | Mapper\<U, K> | A mapper that returns the key map value from the right iterable  |
`options?` | [FluentEmitOptions](_types_base_.fluentemitoptions.md) | The EventEmitter options. Optional |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<[T, U]>

___

### concat

▸ **concat**(...`iterables`: Array\<Iterable\<T>>): [FluentIterable](_types_.fluentiterable.md)\<T>

Concatenates specified iterables to the iterable.<br>
  Example: `fluent(['anchor', 'almond']).concat(['bound', 'alpine'], ['book'])` yields *anchor*, *almond*, *bound*, *alpine* and *book*.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`...iterables` | Array\<Iterable\<T>> | The iterables to concatenate. |

**Returns:** [FluentIterable](_types_.fluentiterable.md)\<T>

The [FluentIterable](_types_.fluentiterable.md) of the concatenated iterables.

___

### concatAsync

▸ **concatAsync**(...`iterables`: Array\<Iterable\<T>>): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

Concatenates specified async iterables to the iterable.<br>
  Example: `fluent(['anchor', 'almond']).concat(['bound', 'alpine'], someStream)` yields *anchor*, *almond*, *bound*, *alpine* and the elements of the stream.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`...iterables` | Array\<Iterable\<T>> | The async iterables to concatenate. |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

The [FluentAsyncIterable](_types_.fluentasynciterable.md) of the concatenated async iterables.

___

### concatEmitter

▸ **concatEmitter**(`emitter`: EventEmitter, `options?`: [FluentEmitOptions](_types_base_.fluentemitoptions.md)): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

*Inherited from [FluentIterableEmitter](_types_emitter_.fluentiterableemitter.md).[concatEmitter](_types_emitter_.fluentiterableemitter.md#concatemitter)*

Concatenates the specified Emitter to the async iterable.

**IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
emission generates a new yielded result. The default key event is **'data'**.

Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.

If you need to change the key event or other characteristics, you can do it through the **options** parameter

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`emitter` | EventEmitter | The EventEmitter |
`options?` | [FluentEmitOptions](_types_base_.fluentemitoptions.md) | The EventEmitter options. Optional |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

The [FluentAsyncIterable](_types_.fluentasynciterable.md) of the concatenated async iterables.

___

### contains

▸ **contains**(`item`: T): boolean

Determines whether the iterable contains a specified element. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).contains('bound')` returns `true`

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`item` | T | The element to check. |

**Returns:** boolean

`true` if the specified element exists in the iterable, `false` otherwise.

___

### count

▸ **count**(`predicate?`: [Predicate](../modules/_types_base_.md#predicate)\<T>): number

Returns the number of elements that matches a predicate in the iterable. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).count()` returns **4**<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).count(word => word[0] === 'a')` returns **3**

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate?` | [Predicate](../modules/_types_base_.md#predicate)\<T> | The count will consider elements which match this predicate. Defaults to the always true function and thus, counts all the elements in the iterable if omitted. |

**Returns:** number

The number of elements matching the specified predicate.

___

### countAsync

▸ **countAsync**(`predicate?`: [AsyncPredicate](../modules/_types_base_.md#asyncpredicate)\<T>): Promise\<number>

Returns the number of elements that matches an asynchronous predicate in the iterable. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate?` | [AsyncPredicate](../modules/_types_base_.md#asyncpredicate)\<T> | The count will consider elements which match this asynchronous predicate. |

**Returns:** Promise\<number>

A promise of the number of elements matching the specified predicate.

___

### distinct

▸ **distinct**\<R>(`mapper?`: Mapper\<T, R>, `maxOcurrences?`: undefined \| number): [FluentIterable](_types_.fluentiterable.md)\<T>

Returns distinct elements from the iterable from a certain projections perspective.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'anchor', 'alpine']).distinct()` yields *anchor*, *almond* and *alpine*<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).distinct(word => word[0])` yields *anchor* and *bound*

#### Type parameters:

Name | Description |
------ | ------ |
`R` | The type of the data the element equality is based on. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | Mapper\<T, R> | The projection to use to determine element equality. Identity mapping is used if omitted. |
`maxOcurrences?` | undefined \| number | The number of accepted occurrences for each item. Default: 1 |

**Returns:** [FluentIterable](_types_.fluentiterable.md)\<T>

The [FluentIterable](_types_.fluentiterable.md) of the distinct elements.

▸ **distinct**(`maxOcurrences?`: undefined \| number): [FluentIterable](_types_.fluentiterable.md)\<T>

Returns distinct elements from the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'anchor', 'alpine']).distinct()` yields *anchor*, *almond* and *alpine*<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).distinct(word => word[0])` yields *anchor* and *bound*

**`typeparam`** The type of the data the element equality is based on.

#### Parameters:

Name | Type |
------ | ------ |
`maxOcurrences?` | undefined \| number |

**Returns:** [FluentIterable](_types_.fluentiterable.md)\<T>

The [FluentIterable](_types_.fluentiterable.md) of the distinct elements.

___

### distinctAsync

▸ **distinctAsync**\<R>(`mapper`: AsyncMapper\<T, R>, `maxOcurrences?`: undefined \| number): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

Returns distinct elements from the iterable from a certain asynchronous projections perspective.

#### Type parameters:

Name | Description |
------ | ------ |
`R` | The type of the data the element equality is based on. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | AsyncMapper\<T, R> | The asynchronous projection to use to determine element equality. Identity mapping is used if omitted. |
`maxOcurrences?` | undefined \| number | The number of accepted occurrences for each item. Default: 1 |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

The [FluentAsyncIterable](_types_.fluentasynciterable.md) of the distinct elements.

___

### emit

▸ **emit**(): [FluentEmitter](_types_base_.fluentemitter.md)\<T>

Converts the iterable into an EventEmitter. This is a resolving operation.

This EventEmitter may emit three different events:

* data: for each item of the iterable;
* error: in case an error occurs. Notice that, if this method is not listened, the error will be thrown as unhandled;
* end: when the iterable ends. Notice that, if the iterable is infinite, this event will never be emitted.

**Returns:** [FluentEmitter](_types_base_.fluentemitter.md)\<T>

___

### execute

▸ **execute**(`action`: [Action](_types_base_.action.md)\<T>): [FluentIterable](_types_.fluentiterable.md)\<T>

Translate an iterable into one which executes an action against each element before yield them.<br>
  Examples:<br>
    * `for (const element of fluent(['anchor', 'almond', 'bound', 'alpine']).execute(console.log)) { }` prints *anchor*, *almond*, *bound* and *alpine*
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).execute(console.log).first()` prints *anchor* and returns the string *anchor*

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`action` | [Action](_types_base_.action.md)\<T> | The action to execute against each element. |

**Returns:** [FluentIterable](_types_.fluentiterable.md)\<T>

The [FluentIterable](_types_.fluentiterable.md) with the action injected to it.

___

### executeAsync

▸ **executeAsync**(`action`: [AsyncAction](_types_base_.asyncaction.md)\<T>): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

Translate an iterable into one which executes an asynchronous action against each element before yield them.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`action` | [AsyncAction](_types_base_.asyncaction.md)\<T> | The asynchronous action to execute against each element. |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

The [FluentAsyncIterable](_types_.fluentasynciterable.md) with the action injected to it.

___

### filter

▸ **filter**(`predicate`: [Predicate](../modules/_types_base_.md#predicate)\<T>): [FluentIterable](_types_.fluentiterable.md)\<T>

Filters the iterable of `T` based on a predicate.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).filter(word => word[0] === 'a')` yields *anchor*, *almond*, and *alpine*.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [Predicate](../modules/_types_base_.md#predicate)\<T> | A predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`. |

**Returns:** [FluentIterable](_types_.fluentiterable.md)\<T>

A [FluentIterable](_types_.fluentiterable.md) of the elements against which the predicate evaluates to `true`.

___

### filterAsync

▸ **filterAsync**(`predicate`: AsyncPredicate\<T>): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

Filters the iterable of `T` based on an asynchronous predicate.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | AsyncPredicate\<T> | An asynchronous predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`. |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

A [FluentAsyncIterable](_types_.fluentasynciterable.md) of the elements against which the predicate evaluates to `true`.

___

### first

▸ **first**(`predicate?`: [Predicate](../modules/_types_base_.md#predicate)\<T>): T \| undefined

Returns the first element of the iterable matching a predicate, or `undefined` value if no such element is found. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).first()` returns *anchor*<br>
    * `fluent([]).first()` returns `undefined`<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).first(word => word[0] === 'b')` returns *bound*<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).first(word => word[0] === 'c')` returns `undefined`

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate?` | [Predicate](../modules/_types_base_.md#predicate)\<T> | The first element is to be returned which matches this predicate. Defaults to the always true function and thus, returns the first element in the iterable if omitted. |

**Returns:** T \| undefined

The first element matching the specified predicate, or `undefined` if no such element found.

___

### firstAsync

▸ **firstAsync**(`predicate?`: [AsyncPredicate](../modules/_types_base_.md#asyncpredicate)\<T>): Promise\<T \| undefined>

Returns the first element of the iterable matching an asynchronous predicate, or `undefined` value if no such element is found. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate?` | [AsyncPredicate](../modules/_types_base_.md#asyncpredicate)\<T> | The first element is to be returned which matches this asynchronous predicate. |

**Returns:** Promise\<T \| undefined>

A promise of the first element matching the specified predicate, or `undefined` if no such element found.

___

### flatten

▸ **flatten**\<R>(`mapper?`: Mapper\<T, Iterable\<R>>): [FluentIterable](_types_.fluentiterable.md)\<R>

Projects each element of the iterable to an iterable and flattens the resulting iterable into one iterable.<br>
Examples:<br>
  * `fluent([['anchor', 'almond'], ['bound', 'alpine']]).flatten()` yields *anchor*, *almond*, *bound* and *alpine*.<br>
  * `fluent([ { values: ['anchor', 'almond'] }, { values: ['bound', 'alpine'] }]).flatten(obj => obj.values)` yields *anchor*, *almond*, *bound* and *alpine*.

#### Type parameters:

Name | Description |
------ | ------ |
`R` | The type of the elements in the inner iterable. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | Mapper\<T, Iterable\<R>> | Specifies the projection from the elements of `T` to iterables of `R`. Identity mapping is applied (taking the elements as iterables) if omitted. |

**Returns:** [FluentIterable](_types_.fluentiterable.md)\<R>

The [FluentIterable](_types_.fluentiterable.md) of the flattened iterable.

___

### flattenAsync

▸ **flattenAsync**\<R>(`mapper?`: AsyncMapper\<T, Iterable\<R>>): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<R>

Asynchronously projects each element of the iterable to an iterable and flattens the resulting iterable into one iterable.

#### Type parameters:

Name | Description |
------ | ------ |
`R` | The type of the elements in the inner iterable. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | AsyncMapper\<T, Iterable\<R>> | Specifies the asynchronous projection from the elements of `T` to iterables of `R`. |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<R>

The flattened [FluentAsyncIterable](_types_.fluentasynciterable.md).

___

### forEach

▸ **forEach**(`action`: [Action](_types_base_.action.md)\<T>): void

Iterates through the iterable and executes an action against each element. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).forEach(console.log)` prints *anchor*, *almond*, *bound* and *alpine*

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`action` | [Action](_types_base_.action.md)\<T> | The action to execute against each element.  |

**Returns:** void

___

### forEachAsync

▸ **forEachAsync**\<R>(`mapper`: AsyncMapper\<T, R>): Promise\<void>

Iterates through the iterable and executes an asynchronous action against each element. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters:

Name |
------ |
`R` |

#### Parameters:

Name | Type |
------ | ------ |
`mapper` | AsyncMapper\<T, R> |

**Returns:** Promise\<void>

A promise of the executions.

___

### group

▸ **group**\<R>(`mapper`: Mapper\<T, R>): [FluentIterable](_types_.fluentiterable.md)\<[FluentGroup](_types_.fluentgroup.md)\<T, R>>

Groups the elements of the iterable keyed by equality of data at the specified projection.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).group(word => word[0])` yields { key: 'a', values: ['anchor', 'almond', 'alpine'] } and { key: 'b', values: ['bound'] }.

#### Type parameters:

Name | Description |
------ | ------ |
`R` | The type of the groups' key. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | Mapper\<T, R> | Projects the elements of the iterable into the group key they belong to. |

**Returns:** [FluentIterable](_types_.fluentiterable.md)\<[FluentGroup](_types_.fluentgroup.md)\<T, R>>

The [FluentIterable](_types_.fluentiterable.md) of the distinct groups.

___

### groupAsync

▸ **groupAsync**\<R>(`mapper`: AsyncMapper\<T, R>): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<[FluentGroup](_types_.fluentgroup.md)\<T, R>>

Groups the elements of the iterable keyed by equality of data at the specified asynchronous projection.

#### Type parameters:

Name | Description |
------ | ------ |
`R` | The type of the groups key. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | AsyncMapper\<T, R> | Asynchronously projects the elements of the iterable into the group key they belong to. |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<[FluentGroup](_types_.fluentgroup.md)\<T, R>>

The [FluentAsyncIterable](_types_.fluentasynciterable.md) of the distinct groups.

___

### hasExactly

▸ **hasExactly**(`expectedNumber`: number): boolean

Checks if the number of elements of the iterable is equal to the threshold using a projection. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

#### Parameters:

Name | Type |
------ | ------ |
`expectedNumber` | number |

**Returns:** boolean

True if the number of elements of the iterable is equal to threshold and false if its not;

___

### hasLessOrExactly

▸ **hasLessOrExactly**(`threshold`: number): boolean

Checks if the number of elements of the iterable is less or equal the threshold using a projection. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`threshold` | number | The validation threshold |

**Returns:** boolean

True if the number of elements of the iterable is lesser or equal the threshold and false if it is not.

___

### hasLessThan

▸ **hasLessThan**(`threshold`: number): boolean

Checks if the number of elements of the iterable is less than the threshold using a projection. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`threshold` | number | The validation threshold |

**Returns:** boolean

True if the number of elements of the iterable is lesser than the threshold and false if it is not.

___

### hasMoreOrExactly

▸ **hasMoreOrExactly**(`threshold`: number): boolean

Checks if the number of elements of the iterable is more or equal the threshold using a projection. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`threshold` | number | The validation threshold |

**Returns:** boolean

True if the number of elements of the iterable is greater or equal the threshold and false if it is not.

___

### hasMoreThan

▸ **hasMoreThan**(`threshold`: number): boolean

Checks if the number of elements of the iterable is more than the threshold using a projection. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`threshold` | number | The validation threshold |

**Returns:** boolean

True if the number of elements of the iterable is greater than the threshold and false if it is not.

___

### isDistinct

▸ **isDistinct**\<R>(`mapper?`: Mapper\<T, R>, `maxOcurrences?`: undefined \| number): boolean

Checks if the given projection have only distinct elements. This is a partial resolving operation,
and will return the result after as soon as an item got more occurrences than the specified

  Examples:

    * `fluent(['anchor', 'almond', 'anchor', 'alpine']).isDistinct()` returns true
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinct(word => word[0])` returns false
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinct(word => word[0], 2)` returns true

#### Type parameters:

Name | Description |
------ | ------ |
`R` | The type of the data the element equality is based on. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | Mapper\<T, R> | The projection to use to determine element equality. Identity mapping is used if omitted. |
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

▸ **isDistinctAsync**\<R>(`mapper`: AsyncMapper\<T, R>, `maxOcurrences?`: undefined \| number): Promise\<boolean>

Checks if the given projection have only distinct elements. This is a partial resolving operation,
and will return the result after as soon as an item got more occurrences than the specified

  Examples:

    * `fluent(['anchor', 'almond', 'anchor', 'alpine']).isDistinctAsync()` returns true
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinctAsync(word => word[0])` returns false
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinctAsync(word => word[0], 2)` returns true

#### Type parameters:

Name | Description |
------ | ------ |
`R` | The type of the data the element equality is based on. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | AsyncMapper\<T, R> | The asynchronous projection to use to determine element equality. Identity mapping is used if omitted. |
`maxOcurrences?` | undefined \| number | The number of accepted occurrences for each item. Default: 1  |

**Returns:** Promise\<boolean>

___

### join

▸ **join**(`separator`: string, `mapper?`: Mapper\<T, string>): string

Projects and concatenates the elements of the iterable into a `string` using a separator. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).join(', ')` returns *anchor, almond, bound, alpine*

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`separator` | string | The separator to use in between the elements of the iterable. |
`mapper?` | Mapper\<T, string> | The function which projects the elements of the iterable into `string`s. Falls back to the identity function if omitted. |

**Returns:** string

The concatenated string of the elements in the iterable.

___

### joinAsync

▸ **joinAsync**(`separator`: string, `mapper`: AsyncMapper\<T, string>): Promise\<string>

Asynchronously projects and concatenates the elements of the iterable into a `string` using a separator. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`separator` | string | The separator to use in between the elements of the iterable. |
`mapper` | AsyncMapper\<T, string> | The function which asynchronously projects the elements of the iterable into `string`s. Falls back to the identity function if omitted. |

**Returns:** Promise\<string>

A promise of the concatenated string of the elements in the iterable.

___

### last

▸ **last**(`predicate?`: [Predicate](../modules/_types_base_.md#predicate)\<T>): T \| undefined

Returns the last element of the iterable matching a predicate, or `undefined` value if no such element is found. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).last()` returns *alpine*<br>
    * `fluent([]).last()` returns `undefined`<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).last(word => word[0] === 'b')` returns *bound*<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).last(word => word[0] === 'c')` returns `undefined`

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate?` | [Predicate](../modules/_types_base_.md#predicate)\<T> | The last element is to be returned which matches this predicate. Defaults to the always true function and thus, returns the last element in the iterable if omitted. |

**Returns:** T \| undefined

The last element matching the specified predicate, or `undefined` if no such element found.

___

### lastAsync

▸ **lastAsync**(`predicate?`: [AsyncPredicate](../modules/_types_base_.md#asyncpredicate)\<T>): Promise\<T \| undefined>

Returns the last element of the iterable matching an asynchronous predicate, or `undefined` value if no such element is found. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate?` | [AsyncPredicate](../modules/_types_base_.md#asyncpredicate)\<T> | The last element is to be returned which matches this asynchronous predicate. |

**Returns:** Promise\<T \| undefined>

A promise of the last element matching the specified predicate, or `undefined` if no such element found.

___

### map

▸ **map**\<R>(`mapper`: Mapper\<T, R>): [FluentIterable](_types_.fluentiterable.md)\<R>

Transforms the iterable of `T` into an iterable of `R` by mapping all elements to an element of `R`.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).map(word => word.toUpperCase())` yields *ANCHOR*, *ALMOND*, *BOUND* and *ALPINE*.

#### Type parameters:

Name | Description |
------ | ------ |
`R` | The destination type of the mapping. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | Mapper\<T, R> | The operation which maps an instance of `T` into an instance of `R`. |

**Returns:** [FluentIterable](_types_.fluentiterable.md)\<R>

A [FluentIterable](_types_.fluentiterable.md) of the mapped elements.

___

### mapAsync

▸ **mapAsync**\<R>(`mapper`: AsyncMapper\<T, R>): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<R>

Transforms the iterable of `T` into an iterable of `R` by mapping all elements to an element of `R`.

#### Type parameters:

Name | Description |
------ | ------ |
`R` | The destination type of the mapping. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | AsyncMapper\<T, R> | The asynchronous operation which maps an instance of `T` into an instance of `R`. |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<R>

A [FluentAsyncIterable](_types_.fluentasynciterable.md) of the mapped elements.

___

### max

▸ **max**\<R>(`mapper?`: Mapper\<T, R>): T \| undefined

Finds the numeric maximum element of the iterable using a projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).max(word => word.charCodeAt(0))` returns *bound*, since it begins with the character 'b' which has a highest character code than character 'a' with which all the other words begins with

#### Type parameters:

Name | Default |
------ | ------ |
`R` | T |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | Mapper\<T, R> | The function which projects the elements of the iterable into comparable values. Falls back to the identity function if omitted. |

**Returns:** T \| undefined

The maximum of the iterable's projected elements.

___

### maxAsync

▸ **maxAsync**\<R>(`mapper?`: AsyncMapper\<T, R>): Promise\<T \| undefined>

Finds the numeric maximum element of the iterable using an asynchronous projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters:

Name | Default |
------ | ------ |
`R` | T |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | AsyncMapper\<T, R> | The function which asynchronously projects the elements of the iterable into the comparable values. Falls back to the identity function if omitted. |

**Returns:** Promise\<T \| undefined>

A promise of the maximum of the iterable's projected elements.

___

### min

▸ **min**\<R>(`mapper?`: Mapper\<T, R>): T \| undefined

Finds the numeric minimum element of the iterable using a projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).min(word => word.length)` returns *bound*, the shortest word in the iterable

#### Type parameters:

Name | Default |
------ | ------ |
`R` | T |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | Mapper\<T, R> | The function which projects the elements of the iterable into the comparable value. Falls back to the identity function if omitted. |

**Returns:** T \| undefined

The minimum of the iterable's projected elements.

___

### minAsync

▸ **minAsync**\<R>(`mapper?`: AsyncMapper\<T, R>): Promise\<T \| undefined>

Finds the numeric minimum element of the iterable using an asynchronous projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters:

Name | Default |
------ | ------ |
`R` | T |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | AsyncMapper\<T, R> | The asynchronous function which projects the elements of the iterable into the comparable value. Falls back to the identity function if omitted. |

**Returns:** Promise\<T \| undefined>

A promise of the minimum of the iterable's projected elements.

___

### o

▸ **o**(): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

*Inherited from [OrderAssurable](_assure_order_types_.orderassurable.md).[o](_assure_order_types_.orderassurable.md#o)*

Alias for assureOrder

Assures the order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be ascending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

___

### od

▸ **od**(): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

*Inherited from [OrderAssurable](_assure_order_types_.orderassurable.md).[od](_assure_order_types_.orderassurable.md#od)*

alias for assureOrderDescending

Assures the descending order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be descending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

___

### partition

▸ **partition**(`size`: number \| [Equality](_types_base_.equality.md)\<T>): [FluentIterable](_types_.fluentiterable.md)\<[FluentIterable](_types_.fluentiterable.md)\<T>>

#### Parameters:

Name | Type |
------ | ------ |
`size` | number \| [Equality](_types_base_.equality.md)\<T> |

**Returns:** [FluentIterable](_types_.fluentiterable.md)\<[FluentIterable](_types_.fluentiterable.md)\<T>>

___

### prepend

▸ **prepend**(`item`: T): [FluentIterable](_types_.fluentiterable.md)\<T>

Adds a value to the beginning of the iterable.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).append('book')` yields *book*, *anchor*, *almond*, *bound* and *alpine*.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`item` | T | The item to be prepended to the iterable. |

**Returns:** [FluentIterable](_types_.fluentiterable.md)\<T>

The [FluentIterable](_types_.fluentiterable.md) prepended with the element.

___

### reduce

▸ **reduce**\<R>(`reducer`: [Reducer](_types_base_.reducer.md)\<T, R>, `initial`: R): R

Aggregates the iterable by applying an accumulator function over the elements of the iterable. The specified seed value is used as the initial accumulator value. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Example:<br>
    ```
    fluent(['anchor', 'almond', 'bound', 'alpine']).reduce(
      (current, next) => (next[0] === 'a' ? current + 1 : current),
      0
    )
    ``` returns *3*, the number of words start with 'a' in the iterable.

#### Type parameters:

Name | Description |
------ | ------ |
`R` | The type of the accumulator value. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`reducer` | [Reducer](_types_base_.reducer.md)\<T, R> | The accumulator function, provides the next accumulator value out of the last accumulator value and the next element in the iterable. |
`initial` | R | The initial (aka *seed*) value of the accumulator. |

**Returns:** R

The aggregated value.

___

### reduceAndMap

▸ **reduceAndMap**\<A, R>(`reducer`: [Reducer](_types_base_.reducer.md)\<T, A>, `initial`: A, `result`: Mapper\<A, R>): R

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

Name | Description |
------ | ------ |
`A` | The type of the accumulator value. |
`R` | The type of the aggregation result. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`reducer` | [Reducer](_types_base_.reducer.md)\<T, A> | The accumulator function, provides the next accumulator value out of the last accumulator value and the next element in the iterable. |
`initial` | A | The initial (aka *seed*) value of the accumulator. |
`result` | Mapper\<A, R> | The mapping function, projects the accumulator value of type `A` to the result value of type `R`. |

**Returns:** R

The aggregated value.

___

### reduceAndMapAsync

▸ **reduceAndMapAsync**\<A, R>(`reducer`: [AsyncReducer](_types_base_.asyncreducer.md)\<T, A>, `initial`: A, `result`: AsyncMapper\<A, R>): Promise\<R>

Aggregates the iterable by applying an asynchronous accumulator function over the elements of the iterable. The specified seed value is used as the initial accumulator value, and the specified asynchronous map function is used to project the result value from the accumulator value. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters:

Name | Description |
------ | ------ |
`A` | The type of the accumulator value. |
`R` | The type of the aggregation result. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`reducer` | [AsyncReducer](_types_base_.asyncreducer.md)\<T, A> | The asynchronous accumulator function, provides the next accumulator value out of the last accumulator value and the next element in the iterable. |
`initial` | A | The initial (aka *seed*) value of the accumulator. |
`result` | AsyncMapper\<A, R> | The asynchronous mapping function, projects the accumulator value of type `A` to the result value of type `R`. |

**Returns:** Promise\<R>

A promise of the aggregated value.

___

### reduceAsync

▸ **reduceAsync**\<R>(`reducer`: [AsyncReducer](_types_base_.asyncreducer.md)\<T, R>, `initial`: R): Promise\<R>

Aggregates the iterable by applying an asynchronous accumulator function over the elements of the iterable. The specified seed value is used as the initial accumulator value. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters:

Name | Description |
------ | ------ |
`R` | The type of the accumulator value. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`reducer` | [AsyncReducer](_types_base_.asyncreducer.md)\<T, R> | The asynchronous accumulator function, provides the next accumulator value out of the last accumulator value and the next element in the iterable. |
`initial` | R | The initial (aka *seed*) value of the accumulator. |

**Returns:** Promise\<R>

A promise of the aggregated value.

___

### repeat

▸ **repeat**(`n`: number): [FluentIterable](_types_.fluentiterable.md)\<T>

Repeats the elements of the iterable a specified amount of times.<br>
  Example: `fluent(['anchor', 'almond']).repeat(3)` yields *anchor*, *almond*, *anchor*, *almond*, *anchor* and *almond*.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`n` | number | The amount of times the iterable is to be repeated. |

**Returns:** [FluentIterable](_types_.fluentiterable.md)\<T>

The [FluentIterable](_types_.fluentiterable.md) of the repeated iterable.

___

### skip

▸ **skip**(`n`: number): [FluentIterable](_types_.fluentiterable.md)\<T>

Bypasses a specified number of elements in the iterable and then returns the remaining elements.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).skip(2)` yields *bound* and *alpine*.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`n` | number | The number of elements to skip. |

**Returns:** [FluentIterable](_types_.fluentiterable.md)\<T>

A [FluentIterable](_types_.fluentiterable.md) of all the elements after the first `n` elements.

___

### skipWhile

▸ **skipWhile**(`condition`: [Predicate](../modules/_types_base_.md#predicate)\<T>): [FluentIterable](_types_.fluentiterable.md)\<T>

Bypasses elements in the iterable as long as a specified condition is true and then returns the remaining elements.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).skipWhile(word => word[0] === 'a')` yields *bound* and *alpine*.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`condition` | [Predicate](../modules/_types_base_.md#predicate)\<T> | A predicate of `T`. All elements are skipped from the iterable until this evaluates to `false` for the first time. |

**Returns:** [FluentIterable](_types_.fluentiterable.md)\<T>

A [FluentIterable](_types_.fluentiterable.md) of the elements after the condition is not met.

___

### skipWhileAsync

▸ **skipWhileAsync**(`condition`: AsyncPredicate\<T>): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

Bypasses elements in the iterable as long as a specified asynchronous condition is true and then returns the remaining elements.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`condition` | AsyncPredicate\<T> | An asynchronous predicate of `T`. All elements are skipped from the iterable until this evaluates to `false` for the first time. |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

A [FluentAsyncIterable](_types_.fluentasynciterable.md) of the elements after the condition is not met.

___

### sort

▸ **sort**(`comparer?`: [Comparer](_types_base_.comparer.md)\<T>): [FluentIterable](_types_.fluentiterable.md)\<T>

Sorts the elements of the iterable based on a specified comparer. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * Alphabetical, ascending: `fluent(['anchor', 'almond', 'bound', 'alpine']).sort()` yields *almond*, *alpine*, *anchor* and *bound*.<br>
    * Alphabetical, descending: `fluent(['anchor', 'almond', 'bound', 'alpine']).sort((x, y) => x > y ? -1 : x < y ? 1 : 0)` yields *bound*, *anchor*, *alpine* and *almond*.<br>
    * Numerical, ascending: `fluent([5, 3, 4, 1, 2]).sort()` yields *1*, *2*, *3*, *4* and *5*.<br>
    * Numerical, descending: `fluent([5, 3, 4, 1, 2]).sort((x, y) => y - x)` yields *5*, *4*, *3*, *2* and *1*.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`comparer?` | [Comparer](_types_base_.comparer.md)\<T> | The comparer operation to use to determine the order of elements. Alphabetical ascending is used for [[string]] elements and numerical ascending is used for [[number]] |

**Returns:** [FluentIterable](_types_.fluentiterable.md)\<T>

The sorted [FluentIterable](_types_.fluentiterable.md).

___

### sortBy

▸ **sortBy**(...`mappers`: (Mapper\<T, any> \| keyof T)[]): [FluentIterable](_types_.fluentiterable.md)\<T>

Sorts the elements of the iterable based on a specified fields. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * Alphabetical, ascending: `fluent([{ a: 'anchor' }, { a: 'almond' }, { a: 'bound' }, { a: 'alpine' }]).sortBy((x) => x.a)` yields *almond*, *alpine*, *anchor* and *bound*.<br>
    * Alphabetical, descending: `fluent([{ a: 'anchor' }, { a: 'almond' }, { a: 'bound' }, { a: 'alpine' }]).sortBy(desc((x) => x.a))` yields *bound*, *anchor*, *alpine* and *almond*.<br>

#### Parameters:

Name | Type |
------ | ------ |
`...mappers` | (Mapper\<T, any> \| keyof T)[] |

**Returns:** [FluentIterable](_types_.fluentiterable.md)\<T>

The sorted [FluentIterable](_types_.fluentiterable.md).

___

### sum

▸ **sum**(`mapper?`: Mapper\<T, number>): number

Calculates the sum of the elements of the iterable projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent([5, -2, 9]).sum()` returns *12*
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).sum(word => word.length)` returns *23*, the sum of length of all the words in the iterable

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | Mapper\<T, number> | The function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted. |

**Returns:** number

The sum of the projected elements of the iterable.

___

### sumAsync

▸ **sumAsync**(`mapper?`: AsyncMapper\<T, number>): Promise\<number>

Calculates the sum of the elements of the iterable asynchronously projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | AsyncMapper\<T, number> | The asynchronous function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted. |

**Returns:** Promise\<number>

A promise of the sum of the projected elements of the iterable.

___

### take

▸ **take**(`n`: number): [FluentIterable](_types_.fluentiterable.md)\<T>

Returns a specified number of contiguous elements from the start of the iterable.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).take(2)` yields *anchor* and *almond*.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`n` | number | The number of elements to take. |

**Returns:** [FluentIterable](_types_.fluentiterable.md)\<T>

A [FluentIterable](_types_.fluentiterable.md) of the first `n` elements.

___

### takeWhile

▸ **takeWhile**(`condition`: [Predicate](../modules/_types_base_.md#predicate)\<T>): [FluentIterable](_types_.fluentiterable.md)\<T>

Returns elements from the iterable as long as a specified condition is met.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).takeWhile(word => word[0] === 'a')` yields *anchor* and *almond*.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`condition` | [Predicate](../modules/_types_base_.md#predicate)\<T> | A predicate of `T`. All elements are yielded from the iterable until this evaluates to `false` for the first time. |

**Returns:** [FluentIterable](_types_.fluentiterable.md)\<T>

A [FluentIterable](_types_.fluentiterable.md) of the elements until the condition is met.

___

### takeWhileAsync

▸ **takeWhileAsync**(`condition`: AsyncPredicate\<T>): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

Returns elements from the iterable as long as a specified asynchronous condition is met.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`condition` | AsyncPredicate\<T> | An asynchronous predicate of `T`. All elements are yielded from the iterable until this evaluates to `false` for the first time. |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

A [FluentAsyncIterable](_types_.fluentasynciterable.md) of the elements until the condition is met.

___

### toArray

▸ **toArray**(): T[]

Translates the iterable into an array. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).toArray()` returns `['anchor', 'almond', 'bound', 'alpine']`

**Returns:** T[]

The array equivalent of the iterable.

___

### toAsync

▸ **toAsync**(): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

Translates the iterable into a [FluentAsyncIterable](_types_.fluentasynciterable.md).

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

The [FluentAsyncIterable](_types_.fluentasynciterable.md) instance.

___

### toObject

▸ **toObject**\<R>(`keySelector`: Mapper\<T, keyof R>, `valueSelector?`: Mapper\<T, R[keyof R]>): R

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by a key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond']).toObject(word => word)` returns `{ anchor: 'anchor', almond: 'almond' }`
    * `fluent([{ key: 'name', value: 'Peter Parker' }, { key: 'alias', value: 'SpiderMan' }]).toObject(item => item.key, item => item.value)` returns `{ name: 'Peter Parker', alias: 'SpiderMan' }`

#### Type parameters:

Name | Default | Description |
------ | ------ | ------ |
`R` | any | The expected type of the object. Cannot be enforced, this is strictly informal. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`keySelector` | Mapper\<T, keyof R> | Projects an element of the iterable into the key of the corresponding field. |
`valueSelector?` | Mapper\<T, R[keyof R]> | Projects an element of the iterable into the value of the corresponding field. The identity function is being used if omitted. |

**Returns:** R

The object composed of the elements of the iterable as fields.

___

### toObjectAsync

▸ **toObjectAsync**\<R>(`keySelector`: AsyncMapper\<T, keyof R>, `valueSelector?`: AsyncMapper\<T, R[keyof R]>): Promise\<R>

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by an asynchronous key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters:

Name | Default | Description |
------ | ------ | ------ |
`R` | any | The expected type of the object. Cannot be enforced, this is strictly informal. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`keySelector` | AsyncMapper\<T, keyof R> | Asynchronously projects an element of the iterable into the key of the corresponding field. |
`valueSelector?` | AsyncMapper\<T, R[keyof R]> | Asynchronously projects an element of the iterable into the value of the corresponding field. |

**Returns:** Promise\<R>

A promise of the object composed of the elements of the iterable as fields.

___

### top

▸ **top**\<R>(`mapper`: Mapper\<T, R>, `comparer`: [Comparer](_types_base_.comparer.md)\<R>): T \| undefined

Calculates the top element of the iterable using a projection and a comparer. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).top(word => word.length, (a, b) => b - a)` returns *bound*, the shortest word in the iterable
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).top(word => word.charCodeAt(0), (a, b) => a - b)` returns *bound*, latest word in the lexicographical order considering the first character only

#### Type parameters:

Name | Description |
------ | ------ |
`R` | The type of the projected elements used for comparison. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | Mapper\<T, R> | The function which projects the elements of the iterable into comparable. |
`comparer` | [Comparer](_types_base_.comparer.md)\<R> | The comparison function. |

**Returns:** T \| undefined

The top of the iterable's projected elements.

___

### topAsync

▸ **topAsync**\<R>(`mapper`: AsyncMapper\<T, R>, `comparer`: [Comparer](_types_base_.comparer.md)\<R>): Promise\<T \| undefined>

Calculates the top element of the iterable using an asynchronous projection and a comparer. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters:

Name | Description |
------ | ------ |
`R` | The type of the projected elements used for comparison. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | AsyncMapper\<T, R> | The asynchronous function which projects the elements of the iterable into comparable. |
`comparer` | [Comparer](_types_base_.comparer.md)\<R> | The comparison function. |

**Returns:** Promise\<T \| undefined>

A promise of the top of the iterable's projected elements.

___

### waitAll

▸ **waitAll**\<R>(`mapper`: AsyncMapper\<T, R>): PromiseLike\<R[]>

Applies a async transformation for every element in the array and, then, wait for they conclusion with Promise.all. This is a resolving operation.

#### Type parameters:

Name |
------ |
`R` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | AsyncMapper\<T, R> | The asynchronous function which projects the elements of the iterable into promises. |

**Returns:** PromiseLike\<R[]>

a promises that resolves into an array with the result of all mappings.

___

### withIndex

▸ **withIndex**(): [FluentIterable](_types_.fluentiterable.md)\<[Indexed](_types_base_.indexed.md)\<T>>

Maps all elements of the iterable to an instance of [Indexed](_types_base_.indexed.md), an index-value pair constructed of the original element in the iterable and it's index (starting from 0 for the first element in the iterable).<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).withIndex()` yields `{ idx: 0, value: 'anchor' }`, `{ idx: 1, value: 'almond' }` and so on.

**Returns:** [FluentIterable](_types_.fluentiterable.md)\<[Indexed](_types_base_.indexed.md)\<T>>

A [FluentIterable](_types_.fluentiterable.md) of [Indexed](_types_base_.indexed.md).
