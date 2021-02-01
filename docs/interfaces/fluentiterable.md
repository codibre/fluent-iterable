[fluent-iterable - v1.8.5](../README.md) / FluentIterable

# Interface: FluentIterable<T\>

Represents an iterable extended with common processing and mutating capabilities.<br>
  The capabilities introduced are defined as a [fluent interface](https://en.wikipedia.org/wiki/Fluent_interface) and thus they support *method chaining*.

## Type parameters

Name | Description |
------ | ------ |
`T` | The type of the items in the iterable.    |

## Hierarchy

* *Iterable*<T\>

* [*OrderAssurable*](orderassurable.md)<[*FluentIterable*](fluentiterable.md)<T\>\>

* *FluentIterableEmitter*<T\>

  ↳ **FluentIterable**

## Table of contents

### Methods

- [[Symbol.iterator]](fluentiterable.md#[symbol.iterator])
- [all](fluentiterable.md#all)
- [allAsync](fluentiterable.md#allasync)
- [any](fluentiterable.md#any)
- [anyAsync](fluentiterable.md#anyasync)
- [append](fluentiterable.md#append)
- [assureOrder](fluentiterable.md#assureorder)
- [assureOrderDescending](fluentiterable.md#assureorderdescending)
- [avg](fluentiterable.md#avg)
- [avgAsync](fluentiterable.md#avgasync)
- [combine](fluentiterable.md#combine)
- [combineAsync](fluentiterable.md#combineasync)
- [combineEmitter](fluentiterable.md#combineemitter)
- [concat](fluentiterable.md#concat)
- [concatAsync](fluentiterable.md#concatasync)
- [concatEmitter](fluentiterable.md#concatemitter)
- [contains](fluentiterable.md#contains)
- [count](fluentiterable.md#count)
- [countAsync](fluentiterable.md#countasync)
- [distinct](fluentiterable.md#distinct)
- [distinctAsync](fluentiterable.md#distinctasync)
- [emit](fluentiterable.md#emit)
- [execute](fluentiterable.md#execute)
- [executeAsync](fluentiterable.md#executeasync)
- [filter](fluentiterable.md#filter)
- [filterAsync](fluentiterable.md#filterasync)
- [first](fluentiterable.md#first)
- [firstAsync](fluentiterable.md#firstasync)
- [flatten](fluentiterable.md#flatten)
- [flattenAsync](fluentiterable.md#flattenasync)
- [forEach](fluentiterable.md#foreach)
- [forEachAsync](fluentiterable.md#foreachasync)
- [group](fluentiterable.md#group)
- [groupAsync](fluentiterable.md#groupasync)
- [hasExactly](fluentiterable.md#hasexactly)
- [hasLessOrExactly](fluentiterable.md#haslessorexactly)
- [hasLessThan](fluentiterable.md#haslessthan)
- [hasMoreOrExactly](fluentiterable.md#hasmoreorexactly)
- [hasMoreThan](fluentiterable.md#hasmorethan)
- [isDistinct](fluentiterable.md#isdistinct)
- [isDistinctAsync](fluentiterable.md#isdistinctasync)
- [join](fluentiterable.md#join)
- [joinAsync](fluentiterable.md#joinasync)
- [last](fluentiterable.md#last)
- [lastAsync](fluentiterable.md#lastasync)
- [map](fluentiterable.md#map)
- [mapAsync](fluentiterable.md#mapasync)
- [max](fluentiterable.md#max)
- [maxAsync](fluentiterable.md#maxasync)
- [min](fluentiterable.md#min)
- [minAsync](fluentiterable.md#minasync)
- [o](fluentiterable.md#o)
- [od](fluentiterable.md#od)
- [partition](fluentiterable.md#partition)
- [prepend](fluentiterable.md#prepend)
- [reduce](fluentiterable.md#reduce)
- [reduceAndMap](fluentiterable.md#reduceandmap)
- [reduceAndMapAsync](fluentiterable.md#reduceandmapasync)
- [reduceAsync](fluentiterable.md#reduceasync)
- [repeat](fluentiterable.md#repeat)
- [skip](fluentiterable.md#skip)
- [skipWhile](fluentiterable.md#skipwhile)
- [skipWhileAsync](fluentiterable.md#skipwhileasync)
- [sort](fluentiterable.md#sort)
- [sortBy](fluentiterable.md#sortby)
- [sum](fluentiterable.md#sum)
- [sumAsync](fluentiterable.md#sumasync)
- [take](fluentiterable.md#take)
- [takeWhile](fluentiterable.md#takewhile)
- [takeWhileAsync](fluentiterable.md#takewhileasync)
- [toArray](fluentiterable.md#toarray)
- [toAsync](fluentiterable.md#toasync)
- [toObject](fluentiterable.md#toobject)
- [toObjectAsync](fluentiterable.md#toobjectasync)
- [top](fluentiterable.md#top)
- [topAsync](fluentiterable.md#topasync)
- [waitAll](fluentiterable.md#waitall)
- [withIndex](fluentiterable.md#withindex)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Iterator*<T, *any*, *undefined*\>

**Returns:** *Iterator*<T, *any*, *undefined*\>

___

### all

▸ **all**(`predicate`: [*Predicate*](../README.md#predicate)<T\>): *boolean*

Determines whether all elements of the iterable satisfy a condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
  Note: This operation stops reading elements from the iterable as soon as the result can be determined.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).all(word => word.length > 3)` yields `true` since all words are longer than 3 characters
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).all(word => word[0] === 'a')` yields `false` since *bound* does not start with the character *a*
    * `fluent([]).all(word => false)` yields `true` as a convention, empty iterables always return `true`

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [*Predicate*](../README.md#predicate)<T\> | The condition checked for all elements in the iterable.   |

**Returns:** *boolean*

`true` if all elements in the iterable satisfy the specified condition, `false` otherwise.

▸ **all**(`predicate`: keyof T): *boolean*

Determines whether all elements of the iterable satisfy a condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
  Note: This operation stops reading elements from the iterable as soon as the result can be determined.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).all(word => word.length > 3)` yields `true` since all words are longer than 3 characters
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).all(word => word[0] === 'a')` yields `false` since *bound* does not start with the character *a*
    * `fluent([]).all(word => false)` yields `true` as a convention, empty iterables always return `true`

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | keyof T | The condition checked for all elements in the iterable.   |

**Returns:** *boolean*

`true` if all elements in the iterable satisfy the specified condition, `false` otherwise.

___

### allAsync

▸ **allAsync**(`predicate`: *AsyncPredicate*<T\>): *Promise*<*boolean*\>

Determines whether all elements of the iterable satisfy an asynchronous condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
  Note: This operation stops reading elements from the iterable as soon as the result can be determined.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | *AsyncPredicate*<T\> | The asynchronous condition checked for all elements in the iterable.   |

**Returns:** *Promise*<*boolean*\>

A promise of `true` if all elements in the iterable satisfy the specified condition, `false` otherwise.

▸ **allAsync**(`predicate`: keyof T): *Promise*<*boolean*\>

Determines whether all elements of the iterable satisfy an asynchronous condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
  Note: This operation stops reading elements from the iterable as soon as the result can be determined.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | keyof T | The asynchronous condition checked for all elements in the iterable.   |

**Returns:** *Promise*<*boolean*\>

A promise of `true` if all elements in the iterable satisfy the specified condition, `false` otherwise.

___

### any

▸ **any**(`predicate?`: *Predicate*<T\> \| keyof T): *boolean*

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
`predicate?` | *Predicate*<T\> \| keyof T | The condition checked for the elements in the iterable. Defaults to the always true function and thus, returns if the iterable is empty.   |

**Returns:** *boolean*

`true` if any of the elements in the iterable satisfy the specified condition, `false` otherwise.

▸ **any**(`predicate`: keyof T): *boolean*

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
`predicate` | keyof T | The condition checked for the elements in the iterable. Defaults to the always true function and thus, returns if the iterable is empty.   |

**Returns:** *boolean*

`true` if any of the elements in the iterable satisfy the specified condition, `false` otherwise.

___

### anyAsync

▸ **anyAsync**(`predicate?`: *AsyncPredicate*<T\>): *Promise*<*boolean*\>

Determines whether any element of the iterable exists or satisfies an asynchronous condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
  Note: This operation stops reading elements from the iterable as soon as the result can be determined.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate?` | *AsyncPredicate*<T\> | The asynchronous condition checked for the elements in the iterable.   |

**Returns:** *Promise*<*boolean*\>

A promise of `true` if any of the elements in the iterable satisfy the specified condition, `false` otherwise.

▸ **anyAsync**(`predicate`: keyof T): *Promise*<*boolean*\>

Determines whether any element of the iterable exists or satisfies an asynchronous condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
  Note: This operation stops reading elements from the iterable as soon as the result can be determined.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | keyof T | The asynchronous condition checked for the elements in the iterable.   |

**Returns:** *Promise*<*boolean*\>

A promise of `true` if any of the elements in the iterable satisfy the specified condition, `false` otherwise.

___

### append

▸ **append**(`item`: T): [*FluentIterable*](fluentiterable.md)<T\>

Appends a value to the end of the iterable.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).append('book')` yields *anchor*, *almond*, *bound*, *alpine* and *book*.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`item` | T | The item to be appended to the iterable.   |

**Returns:** [*FluentIterable*](fluentiterable.md)<T\>

The [FluentIterable](fluentiterable.md) appended with the element.

___

### assureOrder

▸ **assureOrder**(): [*FluentIterable*](fluentiterable.md)<T\>

Assures the order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be ascending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

**Returns:** [*FluentIterable*](fluentiterable.md)<T\>

Inherited from: [OrderAssurable](orderassurable.md)

___

### assureOrderDescending

▸ **assureOrderDescending**(): [*FluentIterable*](fluentiterable.md)<T\>

Assures the descending order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be descending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

**Returns:** [*FluentIterable*](fluentiterable.md)<T\>

Inherited from: [OrderAssurable](orderassurable.md)

___

### avg

▸ **avg**(`mapper?`: [*Mapper*](mapper.md)<T, *number*\>): *number*

Calculates the average of the elements of the iterable projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent([5, -2, 9]).avg()` returns *4*
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).avg(word => word.length)` returns *5.75*, the average of the length of all the words in the iterable

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | [*Mapper*](mapper.md)<T, *number*\> | The function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted.   |

**Returns:** *number*

The average of the projected elements of the iterable.

▸ **avg**(`mapper`: keyof T): *number*

Calculates the average of the elements of the iterable projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent([5, -2, 9]).avg()` returns *4*
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).avg(word => word.length)` returns *5.75*, the average of the length of all the words in the iterable

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | keyof T | The function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted.   |

**Returns:** *number*

The average of the projected elements of the iterable.

___

### avgAsync

▸ **avgAsync**(`mapper?`: [*AsyncMapper*](asyncmapper.md)<T, *number*\>): *Promise*<*number*\>

Calculates the average of the elements of the iterable asynchronously projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | [*AsyncMapper*](asyncmapper.md)<T, *number*\> | The asynchronous function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted.   |

**Returns:** *Promise*<*number*\>

A promise of the average of the projected elements of the iterable.

▸ **avgAsync**(`mapper`: keyof T): *Promise*<*number*\>

Calculates the average of the elements of the iterable asynchronously projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | keyof T | The asynchronous function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted.   |

**Returns:** *Promise*<*number*\>

A promise of the average of the projected elements of the iterable.

___

### combine

▸ **combine**<U\>(`iterable`: *Iterable*<U\>): [*FluentIterable*](fluentiterable.md)<[T, U]\>

Join the iterable with another one, returning a new iterable with a NxN combination

#### Type parameters:

Name |
------ |
`U` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`iterable` | *Iterable*<U\> | The iterable to be combined    |

**Returns:** [*FluentIterable*](fluentiterable.md)<[T, U]\>

▸ **combine**<U, K\>(`iterable`: *Iterable*<U\>, `keyA`: [*Mapper*](mapper.md)<T, K\>, `keyB`: [*Mapper*](mapper.md)<U, K\>): [*FluentIterable*](fluentiterable.md)<[T, U]\>

Join the iterable with another one, returning a new iterable with the inner matching combinations

#### Type parameters:

Name |
------ |
`U` |
`K` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`iterable` | *Iterable*<U\> | The right iterable to be combined   |
`keyA` | [*Mapper*](mapper.md)<T, K\> | A mapper that returns the key map value from the left iterable   |
`keyB` | [*Mapper*](mapper.md)<U, K\> | A mapper that returns the key map value from the right iterable    |

**Returns:** [*FluentIterable*](fluentiterable.md)<[T, U]\>

▸ **combine**<U, K\>(`iterable`: *Iterable*<U\>, `keyA`: keyof T, `keyB`: [*Mapper*](mapper.md)<U, K\>): [*FluentIterable*](fluentiterable.md)<[T, U]\>

Join the iterable with another one, returning a new iterable with the inner matching combinations

#### Type parameters:

Name |
------ |
`U` |
`K` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`iterable` | *Iterable*<U\> | The right iterable to be combined   |
`keyA` | keyof T | A mapper that returns the key map value from the left iterable   |
`keyB` | [*Mapper*](mapper.md)<U, K\> | A mapper that returns the key map value from the right iterable    |

**Returns:** [*FluentIterable*](fluentiterable.md)<[T, U]\>

▸ **combine**<U, K\>(`iterable`: *Iterable*<U\>, `keyA`: [*Mapper*](mapper.md)<T, K\>, `keyB`: keyof U): [*FluentIterable*](fluentiterable.md)<[T, U]\>

Join the iterable with another one, returning a new iterable with the inner matching combinations

#### Type parameters:

Name |
------ |
`U` |
`K` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`iterable` | *Iterable*<U\> | The right iterable to be combined   |
`keyA` | [*Mapper*](mapper.md)<T, K\> | A mapper that returns the key map value from the left iterable   |
`keyB` | keyof U | A mapper that returns the key map value from the right iterable    |

**Returns:** [*FluentIterable*](fluentiterable.md)<[T, U]\>

▸ **combine**<U\>(`iterable`: *Iterable*<U\>, `keyA`: keyof T, `keyB`: keyof U): [*FluentIterable*](fluentiterable.md)<[T, U]\>

Join the iterable with another one, returning a new iterable with the inner matching combinations

#### Type parameters:

Name |
------ |
`U` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`iterable` | *Iterable*<U\> | The right iterable to be combined   |
`keyA` | keyof T | A mapper that returns the key map value from the left iterable   |
`keyB` | keyof U | A mapper that returns the key map value from the right iterable    |

**Returns:** [*FluentIterable*](fluentiterable.md)<[T, U]\>

___

### combineAsync

▸ **combineAsync**<U\>(`iterable`: *AsyncIterable*<U\>): [*FluentAsyncIterable*](fluentasynciterable.md)<[T, U]\>

Join the iterable with an async one, returning a new async iterable with a NxN combination

#### Type parameters:

Name |
------ |
`U` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`iterable` | *AsyncIterable*<U\> | The iterable to be combined    |

**Returns:** [*FluentAsyncIterable*](fluentasynciterable.md)<[T, U]\>

▸ **combineAsync**<U, K\>(`iterable`: *AsyncIterable*<U\>, `keyA`: [*Mapper*](mapper.md)<T, K\>, `keyB`: [*Mapper*](mapper.md)<U, K\>): [*FluentAsyncIterable*](fluentasynciterable.md)<[T, U]\>

Join the iterable with another one, returning a new async iterable with the inner matching combinations

#### Type parameters:

Name |
------ |
`U` |
`K` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`iterable` | *AsyncIterable*<U\> | The right iterable to be combined   |
`keyA` | [*Mapper*](mapper.md)<T, K\> | A mapper that returns the key map value from the left iterable   |
`keyB` | [*Mapper*](mapper.md)<U, K\> | A mapper that returns the key map value from the right iterable    |

**Returns:** [*FluentAsyncIterable*](fluentasynciterable.md)<[T, U]\>

▸ **combineAsync**<U, K\>(`iterable`: *AsyncIterable*<U\>, `keyA`: keyof T, `keyB`: [*Mapper*](mapper.md)<U, K\>): [*FluentAsyncIterable*](fluentasynciterable.md)<[T, U]\>

Join the iterable with another one, returning a new async iterable with the inner matching combinations

#### Type parameters:

Name |
------ |
`U` |
`K` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`iterable` | *AsyncIterable*<U\> | The right iterable to be combined   |
`keyA` | keyof T | A mapper that returns the key map value from the left iterable   |
`keyB` | [*Mapper*](mapper.md)<U, K\> | A mapper that returns the key map value from the right iterable    |

**Returns:** [*FluentAsyncIterable*](fluentasynciterable.md)<[T, U]\>

▸ **combineAsync**<U, K\>(`iterable`: *AsyncIterable*<U\>, `keyA`: [*Mapper*](mapper.md)<T, K\>, `keyB`: keyof U): [*FluentAsyncIterable*](fluentasynciterable.md)<[T, U]\>

Join the iterable with another one, returning a new async iterable with the inner matching combinations

#### Type parameters:

Name |
------ |
`U` |
`K` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`iterable` | *AsyncIterable*<U\> | The right iterable to be combined   |
`keyA` | [*Mapper*](mapper.md)<T, K\> | A mapper that returns the key map value from the left iterable   |
`keyB` | keyof U | A mapper that returns the key map value from the right iterable    |

**Returns:** [*FluentAsyncIterable*](fluentasynciterable.md)<[T, U]\>

▸ **combineAsync**<U\>(`iterable`: *AsyncIterable*<U\>, `keyA`: keyof T, `keyB`: keyof U): [*FluentAsyncIterable*](fluentasynciterable.md)<[T, U]\>

Join the iterable with another one, returning a new async iterable with the inner matching combinations

#### Type parameters:

Name |
------ |
`U` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`iterable` | *AsyncIterable*<U\> | The right iterable to be combined   |
`keyA` | keyof T | A mapper that returns the key map value from the left iterable   |
`keyB` | keyof U | A mapper that returns the key map value from the right iterable    |

**Returns:** [*FluentAsyncIterable*](fluentasynciterable.md)<[T, U]\>

___

### combineEmitter

▸ **combineEmitter**<U\>(`emitter`: *EventEmitter*, `options?`: FluentEmitOptions): [*FluentAsyncIterable*](fluentasynciterable.md)<[T, U]\>

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
`U` | *any* |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`emitter` | *EventEmitter* | The EventEmitter   |
`options?` | FluentEmitOptions | The EventEmitter options. Optional    |

**Returns:** [*FluentAsyncIterable*](fluentasynciterable.md)<[T, U]\>

▸ **combineEmitter**<U, K\>(`emitter`: *EventEmitter*, `keyA`: [*Mapper*](mapper.md)<T, K\>, `keyB`: [*Mapper*](mapper.md)<U, K\>, `options?`: FluentEmitOptions): [*FluentAsyncIterable*](fluentasynciterable.md)<[T, U]\>

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
`emitter` | *EventEmitter* | The EventEmitter   |
`keyA` | [*Mapper*](mapper.md)<T, K\> | A mapper that returns the key map value from the left iterable   |
`keyB` | [*Mapper*](mapper.md)<U, K\> | A mapper that returns the key map value from the right iterable    |
`options?` | FluentEmitOptions | The EventEmitter options. Optional   |

**Returns:** [*FluentAsyncIterable*](fluentasynciterable.md)<[T, U]\>

▸ **combineEmitter**<U, K\>(`emitter`: *EventEmitter*, `keyA`: keyof T, `keyB`: [*Mapper*](mapper.md)<U, K\>, `options?`: FluentEmitOptions): [*FluentAsyncIterable*](fluentasynciterable.md)<[T, U]\>

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
`emitter` | *EventEmitter* | The EventEmitter   |
`keyA` | keyof T | A mapper that returns the key map value from the left iterable   |
`keyB` | [*Mapper*](mapper.md)<U, K\> | A mapper that returns the key map value from the right iterable    |
`options?` | FluentEmitOptions | The EventEmitter options. Optional   |

**Returns:** [*FluentAsyncIterable*](fluentasynciterable.md)<[T, U]\>

___

### concat

▸ **concat**(...`iterables`: *Iterable*<T\>[]): [*FluentIterable*](fluentiterable.md)<T\>

Concatenates specified iterables to the iterable.<br>
  Example: `fluent(['anchor', 'almond']).concat(['bound', 'alpine'], ['book'])` yields *anchor*, *almond*, *bound*, *alpine* and *book*.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`...iterables` | *Iterable*<T\>[] | The iterables to concatenate.   |

**Returns:** [*FluentIterable*](fluentiterable.md)<T\>

The [FluentIterable](fluentiterable.md) of the concatenated iterables.

___

### concatAsync

▸ **concatAsync**(...`iterables`: *Iterable*<T\>[]): [*FluentAsyncIterable*](fluentasynciterable.md)<T\>

Concatenates specified async iterables to the iterable.<br>
  Example: `fluent(['anchor', 'almond']).concat(['bound', 'alpine'], someStream)` yields *anchor*, *almond*, *bound*, *alpine* and the elements of the stream.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`...iterables` | *Iterable*<T\>[] | The async iterables to concatenate.   |

**Returns:** [*FluentAsyncIterable*](fluentasynciterable.md)<T\>

The [FluentAsyncIterable](fluentasynciterable.md) of the concatenated async iterables.

___

### concatEmitter

▸ **concatEmitter**(`emitter`: *EventEmitter*, `options?`: FluentEmitOptions): [*FluentAsyncIterable*](fluentasynciterable.md)<T\>

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
`emitter` | *EventEmitter* | The EventEmitter   |
`options?` | FluentEmitOptions | The EventEmitter options. Optional   |

**Returns:** [*FluentAsyncIterable*](fluentasynciterable.md)<T\>

The [FluentAsyncIterable](fluentasynciterable.md) of the concatenated async iterables.

___

### contains

▸ **contains**(`item`: T): *boolean*

Determines whether the iterable contains a specified element. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).contains('bound')` returns `true`

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`item` | T | The element to check.   |

**Returns:** *boolean*

`true` if the specified element exists in the iterable, `false` otherwise.

___

### count

▸ **count**(`predicate?`: *Predicate*<T\> \| keyof T): *number*

Returns the number of elements that matches a predicate in the iterable. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).count()` returns **4**<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).count(word => word[0] === 'a')` returns **3**

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate?` | *Predicate*<T\> \| keyof T | The count will consider elements which match this predicate. Defaults to the always true function and thus, counts all the elements in the iterable if omitted.   |

**Returns:** *number*

The number of elements matching the specified predicate.

▸ **count**(`predicate`: keyof T): *number*

Returns the number of elements that matches a predicate in the iterable. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).count()` returns **4**<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).count(word => word[0] === 'a')` returns **3**

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | keyof T | The count will consider elements which match this predicate. Defaults to the always true function and thus, counts all the elements in the iterable if omitted.   |

**Returns:** *number*

The number of elements matching the specified predicate.

___

### countAsync

▸ **countAsync**(`predicate?`: *AsyncPredicate*<T\>): *Promise*<*number*\>

Returns the number of elements that matches an asynchronous predicate in the iterable. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate?` | *AsyncPredicate*<T\> | The count will consider elements which match this asynchronous predicate.   |

**Returns:** *Promise*<*number*\>

A promise of the number of elements matching the specified predicate.

▸ **countAsync**(`predicate`: keyof T): *Promise*<*number*\>

Returns the number of elements that matches an asynchronous predicate in the iterable. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | keyof T | The count will consider elements which match this asynchronous predicate.   |

**Returns:** *Promise*<*number*\>

A promise of the number of elements matching the specified predicate.

___

### distinct

▸ **distinct**<R\>(`mapper?`: [*Mapper*](mapper.md)<T, R\>, `maxOcurrences?`: *number*): [*FluentIterable*](fluentiterable.md)<T\>

Returns distinct elements from the iterable from a certain projections perspective.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'anchor', 'alpine']).distinct()` yields *anchor*, *almond* and *alpine*<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).distinct(word => word[0])` yields *anchor* and *bound*

#### Type parameters:

Name | Description |
------ | ------ |
`R` | The type of the data the element equality is based on.   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | [*Mapper*](mapper.md)<T, R\> | The projection to use to determine element equality. Identity mapping is used if omitted.   |
`maxOcurrences?` | *number* | The number of accepted occurrences for each item. Default: 1   |

**Returns:** [*FluentIterable*](fluentiterable.md)<T\>

The [FluentIterable](fluentiterable.md) of the distinct elements.

▸ **distinct**(`maxOcurrences?`: *number*): [*FluentIterable*](fluentiterable.md)<T\>

Returns distinct elements from the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'anchor', 'alpine']).distinct()` yields *anchor*, *almond* and *alpine*<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).distinct(word => word[0])` yields *anchor* and *bound*

**`typeparam`** The type of the data the element equality is based on.

#### Parameters:

Name | Type |
------ | ------ |
`maxOcurrences?` | *number* |

**Returns:** [*FluentIterable*](fluentiterable.md)<T\>

The [FluentIterable](fluentiterable.md) of the distinct elements.

▸ **distinct**<R\>(`mapper?`: R, `maxOcurrences?`: *number*): [*FluentIterable*](fluentiterable.md)<T\>

Returns distinct elements from the iterable from a certain projections perspective.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'anchor', 'alpine']).distinct()` yields *anchor*, *almond* and *alpine*<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).distinct(word => word[0])` yields *anchor* and *bound*

#### Type parameters:

Name | Type | Description |
------ | ------ | ------ |
`R` | *string* \| *number* \| *symbol* | The type of the data the element equality is based on.   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | R | The projection to use to determine element equality. Identity mapping is used if omitted.   |
`maxOcurrences?` | *number* | The number of accepted occurrences for each item. Default: 1   |

**Returns:** [*FluentIterable*](fluentiterable.md)<T\>

The [FluentIterable](fluentiterable.md) of the distinct elements.

___

### distinctAsync

▸ **distinctAsync**<R\>(`mapper`: [*AsyncMapper*](asyncmapper.md)<T, R\>, `maxOcurrences?`: *number*): [*FluentAsyncIterable*](fluentasynciterable.md)<T\>

Returns distinct elements from the iterable from a certain asynchronous projections perspective.

#### Type parameters:

Name | Description |
------ | ------ |
`R` | The type of the data the element equality is based on.   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | [*AsyncMapper*](asyncmapper.md)<T, R\> | The asynchronous projection to use to determine element equality. Identity mapping is used if omitted.   |
`maxOcurrences?` | *number* | The number of accepted occurrences for each item. Default: 1   |

**Returns:** [*FluentAsyncIterable*](fluentasynciterable.md)<T\>

The [FluentAsyncIterable](fluentasynciterable.md) of the distinct elements.

▸ **distinctAsync**<R\>(`mapper`: R, `maxOcurrences?`: *number*): [*FluentAsyncIterable*](fluentasynciterable.md)<T\>

Returns distinct elements from the iterable from a certain asynchronous projections perspective.

#### Type parameters:

Name | Type | Description |
------ | ------ | ------ |
`R` | *string* \| *number* \| *symbol* | The type of the data the element equality is based on.   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | R | The asynchronous projection to use to determine element equality. Identity mapping is used if omitted.   |
`maxOcurrences?` | *number* | The number of accepted occurrences for each item. Default: 1   |

**Returns:** [*FluentAsyncIterable*](fluentasynciterable.md)<T\>

The [FluentAsyncIterable](fluentasynciterable.md) of the distinct elements.

___

### emit

▸ **emit**(): [*FluentEmitter*](fluentemitter.md)<T\>

Converts the iterable into an EventEmitter. This is a resolving operation.

This EventEmitter may emit three different events:

* data: for each item of the iterable;
* error: in case an error occurs. Notice that, if this method is not listened, the error will be thrown as unhandled;
* end: when the iterable ends. Notice that, if the iterable is infinite, this event will never be emitted.

**Returns:** [*FluentEmitter*](fluentemitter.md)<T\>

___

### execute

▸ **execute**(`action`: [*Action*](action.md)<T\>): [*FluentIterable*](fluentiterable.md)<T\>

Translate an iterable into one which executes an action against each element before yield them.<br>
  Examples:<br>
    * `for (const element of fluent(['anchor', 'almond', 'bound', 'alpine']).execute(console.log)) { }` prints *anchor*, *almond*, *bound* and *alpine*
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).execute(console.log).first()` prints *anchor* and returns the string *anchor*

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`action` | [*Action*](action.md)<T\> | The action to execute against each element.   |

**Returns:** [*FluentIterable*](fluentiterable.md)<T\>

The [FluentIterable](fluentiterable.md) with the action injected to it.

___

### executeAsync

▸ **executeAsync**(`action`: [*AsyncAction*](asyncaction.md)<T\>): [*FluentAsyncIterable*](fluentasynciterable.md)<T\>

Translate an iterable into one which executes an asynchronous action against each element before yield them.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`action` | [*AsyncAction*](asyncaction.md)<T\> | The asynchronous action to execute against each element.   |

**Returns:** [*FluentAsyncIterable*](fluentasynciterable.md)<T\>

The [FluentAsyncIterable](fluentasynciterable.md) with the action injected to it.

___

### filter

▸ **filter**(`predicate`: [*Predicate*](../README.md#predicate)<T\>): [*FluentIterable*](fluentiterable.md)<T\>

Filters the iterable of `T` based on a predicate.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).filter(word => word[0] === 'a')` yields *anchor*, *almond*, and *alpine*.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | [*Predicate*](../README.md#predicate)<T\> | A predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`.   |

**Returns:** [*FluentIterable*](fluentiterable.md)<T\>

A [FluentIterable](fluentiterable.md) of the elements against which the predicate evaluates to `true`.

▸ **filter**(`predicate`: keyof T): [*FluentIterable*](fluentiterable.md)<T\>

Filters the iterable of `T` based on a predicate.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).filter(word => word[0] === 'a')` yields *anchor*, *almond*, and *alpine*.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | keyof T | A predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`.   |

**Returns:** [*FluentIterable*](fluentiterable.md)<T\>

A [FluentIterable](fluentiterable.md) of the elements against which the predicate evaluates to `true`.

___

### filterAsync

▸ **filterAsync**(`predicate`: *AsyncPredicate*<T\>): [*FluentAsyncIterable*](fluentasynciterable.md)<T\>

Filters the iterable of `T` based on an asynchronous predicate.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | *AsyncPredicate*<T\> | An asynchronous predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`.   |

**Returns:** [*FluentAsyncIterable*](fluentasynciterable.md)<T\>

A [FluentAsyncIterable](fluentasynciterable.md) of the elements against which the predicate evaluates to `true`.

▸ **filterAsync**(`predicate`: keyof T): [*FluentAsyncIterable*](fluentasynciterable.md)<T\>

Filters the iterable of `T` based on an asynchronous predicate.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | keyof T | An asynchronous predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`.   |

**Returns:** [*FluentAsyncIterable*](fluentasynciterable.md)<T\>

A [FluentAsyncIterable](fluentasynciterable.md) of the elements against which the predicate evaluates to `true`.

___

### first

▸ **first**(`predicate?`: *Predicate*<T\> \| keyof T): *undefined* \| T

Returns the first element of the iterable matching a predicate, or `undefined` value if no such element is found. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).first()` returns *anchor*<br>
    * `fluent([]).first()` returns `undefined`<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).first(word => word[0] === 'b')` returns *bound*<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).first(word => word[0] === 'c')` returns `undefined`

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate?` | *Predicate*<T\> \| keyof T | The first element is to be returned which matches this predicate. Defaults to the always true function and thus, returns the first element in the iterable if omitted.   |

**Returns:** *undefined* \| T

The first element matching the specified predicate, or `undefined` if no such element found.

▸ **first**(`predicate`: keyof T): *undefined* \| T

Returns the first element of the iterable matching a predicate, or `undefined` value if no such element is found. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).first()` returns *anchor*<br>
    * `fluent([]).first()` returns `undefined`<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).first(word => word[0] === 'b')` returns *bound*<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).first(word => word[0] === 'c')` returns `undefined`

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | keyof T | The first element is to be returned which matches this predicate. Defaults to the always true function and thus, returns the first element in the iterable if omitted.   |

**Returns:** *undefined* \| T

The first element matching the specified predicate, or `undefined` if no such element found.

___

### firstAsync

▸ **firstAsync**(`predicate?`: *AsyncPredicate*<T\>): *Promise*<*undefined* \| T\>

Returns the first element of the iterable matching an asynchronous predicate, or `undefined` value if no such element is found. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate?` | *AsyncPredicate*<T\> | The first element is to be returned which matches this asynchronous predicate.   |

**Returns:** *Promise*<*undefined* \| T\>

A promise of the first element matching the specified predicate, or `undefined` if no such element found.

▸ **firstAsync**(`predicate`: keyof T): *Promise*<*undefined* \| T\>

Returns the first element of the iterable matching an asynchronous predicate, or `undefined` value if no such element is found. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | keyof T | The first element is to be returned which matches this asynchronous predicate.   |

**Returns:** *Promise*<*undefined* \| T\>

A promise of the first element matching the specified predicate, or `undefined` if no such element found.

___

### flatten

▸ **flatten**<R\>(`mapper?`: [*Mapper*](mapper.md)<T, *Iterable*<R\>\>): [*FluentIterable*](fluentiterable.md)<R\>

Projects each element of the iterable to an iterable and flattens the resulting iterable into one iterable.<br>
Examples:<br>
  * `fluent([['anchor', 'almond'], ['bound', 'alpine']]).flatten()` yields *anchor*, *almond*, *bound* and *alpine*.<br>
  * `fluent([ { values: ['anchor', 'almond'] }, { values: ['bound', 'alpine'] }]).flatten(obj => obj.values)` yields *anchor*, *almond*, *bound* and *alpine*.

#### Type parameters:

Name | Description |
------ | ------ |
`R` | The type of the elements in the inner iterable.   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | [*Mapper*](mapper.md)<T, *Iterable*<R\>\> | Specifies the projection from the elements of `T` to iterables of `R`. Identity mapping is applied (taking the elements as iterables) if omitted.   |

**Returns:** [*FluentIterable*](fluentiterable.md)<R\>

The [FluentIterable](fluentiterable.md) of the flattened iterable.

▸ **flatten**<R\>(): [*FluentIterable*](fluentiterable.md)<R\>

Projects each element of the iterable to an iterable and flattens the resulting iterable into one iterable.<br>
Examples:<br>
  * `fluent([['anchor', 'almond'], ['bound', 'alpine']]).flatten()` yields *anchor*, *almond*, *bound* and *alpine*.<br>

#### Type parameters:

Name | Type | Description |
------ | ------ | ------ |
`R` | *unknown* | The type of the elements in the inner iterable.   |

**Returns:** [*FluentIterable*](fluentiterable.md)<R\>

The [FluentIterable](fluentiterable.md) of the flattened iterable.

▸ **flatten**<K, R\>(`mapper`: K): [*FluentIterable*](fluentiterable.md)<R\>

Projects each element of the iterable to an iterable and flattens the resulting iterable into one iterable.<br>
Examples:<br>
  * `fluent([ { values: ['anchor', 'almond'] }, { values: ['bound', 'alpine'] }]).flatten(obj => obj.values)` yields *anchor*, *almond*, *bound* and *alpine*.

#### Type parameters:

Name | Type | Description |
------ | ------ | ------ |
`K` | *string* \| *number* \| *symbol* | - |
`R` | *unknown* | The type of the elements in the inner iterable.   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | K | Specifies the projection from the elements of `T` to iterables of `R`. Identity mapping is applied (taking the elements as iterables) if omitted.   |

**Returns:** [*FluentIterable*](fluentiterable.md)<R\>

The [FluentIterable](fluentiterable.md) of the flattened iterable.

___

### flattenAsync

▸ **flattenAsync**<R\>(`mapper?`: [*AsyncMapper*](asyncmapper.md)<T, *Iterable*<R\>\>): [*FluentAsyncIterable*](fluentasynciterable.md)<R\>

Asynchronously projects each element of the iterable to an iterable and flattens the resulting iterable into one iterable.

#### Type parameters:

Name | Description |
------ | ------ |
`R` | The type of the elements in the inner iterable.   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | [*AsyncMapper*](asyncmapper.md)<T, *Iterable*<R\>\> | Specifies the asynchronous projection from the elements of `T` to iterables of `R`.   |

**Returns:** [*FluentAsyncIterable*](fluentasynciterable.md)<R\>

The flattened [FluentAsyncIterable](fluentasynciterable.md).

▸ **flattenAsync**<K, R\>(`mapper?`: K): [*FluentAsyncIterable*](fluentasynciterable.md)<R\>

Asynchronously projects each element of the iterable to an iterable and flattens the resulting iterable into one iterable.

#### Type parameters:

Name | Type | Description |
------ | ------ | ------ |
`K` | *string* \| *number* \| *symbol* | - |
`R` | *unknown* | The type of the elements in the inner iterable.   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | K | Specifies the asynchronous projection from the elements of `T` to iterables of `R`.   |

**Returns:** [*FluentAsyncIterable*](fluentasynciterable.md)<R\>

The flattened [FluentAsyncIterable](fluentasynciterable.md).

___

### forEach

▸ **forEach**(`action`: [*Action*](action.md)<T\>): *void*

Iterates through the iterable and executes an action against each element. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).forEach(console.log)` prints *anchor*, *almond*, *bound* and *alpine*

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`action` | [*Action*](action.md)<T\> | The action to execute against each element.    |

**Returns:** *void*

___

### forEachAsync

▸ **forEachAsync**<R\>(`mapper`: [*AsyncMapper*](asyncmapper.md)<T, R\>): *Promise*<*void*\>

Iterates through the iterable and executes an asynchronous action against each element. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters:

Name |
------ |
`R` |

#### Parameters:

Name | Type |
------ | ------ |
`mapper` | [*AsyncMapper*](asyncmapper.md)<T, R\> |

**Returns:** *Promise*<*void*\>

A promise of the executions.

___

### group

▸ **group**<R, V\>(`mapper`: [*Mapper*](mapper.md)<T, R\>, `transformValue?`: *KVGroupTransform*<R, T, V\>): [*FluentIterable*](fluentiterable.md)<[*FluentGroup*](fluentgroup.md)<V, R\>\>

Groups the elements of the iterable keyed by equality of data at the specified projection.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).group(word => word[0])` yields { key: 'a', values: ['anchor', 'almond', 'alpine'] } and { key: 'b', values: ['bound'] }.

#### Type parameters:

Name | Default | Description |
------ | ------ | ------ |
`R` | - | The type of the groups' key.   |
`V` | T | - |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | [*Mapper*](mapper.md)<T, R\> | Projects the elements of the iterable into the group key they belong to.   |
`transformValue?` | *KVGroupTransform*<R, T, V\> | Optional. Allows a transformation before adding the value to the group. The return must be an iterable   |

**Returns:** [*FluentIterable*](fluentiterable.md)<[*FluentGroup*](fluentgroup.md)<V, R\>\>

The [FluentIterable](fluentiterable.md) of the distinct groups.

▸ **group**<R, V\>(`mapper`: R, `transformValue?`: *KVGroupTransform*<R, T, V\>): [*FluentIterable*](fluentiterable.md)<[*FluentGroup*](fluentgroup.md)<V, T[R]\>\>

Groups the elements of the iterable keyed by equality of data at the specified projection.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).group(word => word[0])` yields { key: 'a', values: ['anchor', 'almond', 'alpine'] } and { key: 'b', values: ['bound'] }.

#### Type parameters:

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`R` | *string* \| *number* \| *symbol* | - | The type of the groups' key.   |
`V` | - | T | - |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | R | Projects the elements of the iterable into the group key they belong to.   |
`transformValue?` | *KVGroupTransform*<R, T, V\> | Optional. Allows a transformation before adding the value to the group. The return must be an iterable   |

**Returns:** [*FluentIterable*](fluentiterable.md)<[*FluentGroup*](fluentgroup.md)<V, T[R]\>\>

The [FluentIterable](fluentiterable.md) of the distinct groups.

___

### groupAsync

▸ **groupAsync**<R, V\>(`mapper`: [*AsyncMapper*](asyncmapper.md)<T, R\>, `transformValue?`: *KVGroupTransform*<R, T, V\>): [*FluentAsyncIterable*](fluentasynciterable.md)<[*FluentGroup*](fluentgroup.md)<V, R\>\>

Groups the elements of the iterable keyed by equality of data at the specified asynchronous projection.

#### Type parameters:

Name | Default | Description |
------ | ------ | ------ |
`R` | - | The type of the groups key.   |
`V` | T | - |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | [*AsyncMapper*](asyncmapper.md)<T, R\> | Asynchronously projects the elements of the iterable into the group key they belong to.   |
`transformValue?` | *KVGroupTransform*<R, T, V\> | Optional. Allows a transformation before adding the value to the group. The return must be an iterable   |

**Returns:** [*FluentAsyncIterable*](fluentasynciterable.md)<[*FluentGroup*](fluentgroup.md)<V, R\>\>

The [FluentAsyncIterable](fluentasynciterable.md) of the distinct groups.

▸ **groupAsync**<R, V\>(`mapper`: R, `transformValue?`: *KVGroupTransform*<R, T, V\>): [*FluentAsyncIterable*](fluentasynciterable.md)<[*FluentGroup*](fluentgroup.md)<V, T[R]\>\>

Groups the elements of the iterable keyed by equality of data at the specified asynchronous projection.

#### Type parameters:

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`R` | *string* \| *number* \| *symbol* | - | The type of the groups key.   |
`V` | - | T | - |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | R | Asynchronously projects the elements of the iterable into the group key they belong to.   |
`transformValue?` | *KVGroupTransform*<R, T, V\> | Optional. Allows a transformation before adding the value to the group. The return must be an iterable   |

**Returns:** [*FluentAsyncIterable*](fluentasynciterable.md)<[*FluentGroup*](fluentgroup.md)<V, T[R]\>\>

The [FluentAsyncIterable](fluentasynciterable.md) of the distinct groups.

___

### hasExactly

▸ **hasExactly**(`expectedNumber`: *number*): *boolean*

Checks if the number of elements of the iterable is equal to the threshold using a projection. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

#### Parameters:

Name | Type |
------ | ------ |
`expectedNumber` | *number* |

**Returns:** *boolean*

True if the number of elements of the iterable is equal to threshold and false if its not;

___

### hasLessOrExactly

▸ **hasLessOrExactly**(`threshold`: *number*): *boolean*

Checks if the number of elements of the iterable is less or equal the threshold using a projection. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`threshold` | *number* | The validation threshold   |

**Returns:** *boolean*

True if the number of elements of the iterable is lesser or equal the threshold and false if it is not.

___

### hasLessThan

▸ **hasLessThan**(`threshold`: *number*): *boolean*

Checks if the number of elements of the iterable is less than the threshold using a projection. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`threshold` | *number* | The validation threshold   |

**Returns:** *boolean*

True if the number of elements of the iterable is lesser than the threshold and false if it is not.

___

### hasMoreOrExactly

▸ **hasMoreOrExactly**(`threshold`: *number*): *boolean*

Checks if the number of elements of the iterable is more or equal the threshold using a projection. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`threshold` | *number* | The validation threshold   |

**Returns:** *boolean*

True if the number of elements of the iterable is greater or equal the threshold and false if it is not.

___

### hasMoreThan

▸ **hasMoreThan**(`threshold`: *number*): *boolean*

Checks if the number of elements of the iterable is more than the threshold using a projection. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`threshold` | *number* | The validation threshold   |

**Returns:** *boolean*

True if the number of elements of the iterable is greater than the threshold and false if it is not.

___

### isDistinct

▸ **isDistinct**<R\>(`mapper?`: [*Mapper*](mapper.md)<T, R\>, `maxOcurrences?`: *number*): *boolean*

Checks if the given projection have only distinct elements. This is a partial resolving operation,
and will return the result after as soon as an item got more occurrences than the specified

  Examples:

    * `fluent(['anchor', 'almond', 'anchor', 'alpine']).isDistinct()` returns true
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinct(word => word[0])` returns false
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinct(word => word[0], 2)` returns true

#### Type parameters:

Name | Description |
------ | ------ |
`R` | The type of the data the element equality is based on.   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | [*Mapper*](mapper.md)<T, R\> | The projection to use to determine element equality. Identity mapping is used if omitted.   |
`maxOcurrences?` | *number* | The number of accepted occurrences for each item. Default: 1    |

**Returns:** *boolean*

▸ **isDistinct**(`maxOcurrences?`: *number*): *boolean*

Checks if the given iterable have only distinct elements. This is a partial resolving operation,
and will return the result after as soon as an item got more occurrences than the specified

  Examples:

    * `fluent(['anchor', 'almond', 'anchor', 'alpine']).isDistinct()` returns true
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinct(word => word[0])` returns false
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinct(word => word[0], 2)` returns true

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`maxOcurrences?` | *number* | The number of accepted occurrences for each item. Default: 1    |

**Returns:** *boolean*

▸ **isDistinct**<R\>(`mapper?`: R, `maxOcurrences?`: *number*): *boolean*

Checks if the given projection have only distinct elements. This is a partial resolving operation,
and will return the result after as soon as an item got more occurrences than the specified

  Examples:

    * `fluent(['anchor', 'almond', 'anchor', 'alpine']).isDistinct()` returns true
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinct(word => word[0])` returns false
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinct(word => word[0], 2)` returns true

#### Type parameters:

Name | Type | Description |
------ | ------ | ------ |
`R` | *string* \| *number* \| *symbol* | The type of the data the element equality is based on.   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | R | The projection to use to determine element equality. Identity mapping is used if omitted.   |
`maxOcurrences?` | *number* | The number of accepted occurrences for each item. Default: 1    |

**Returns:** *boolean*

▸ **isDistinct**(`maxOcurrences?`: *number*): *boolean*

Checks if the given iterable have only distinct elements. This is a partial resolving operation,
and will return the result after as soon as an item got more occurrences than the specified

  Examples:

    * `fluent(['anchor', 'almond', 'anchor', 'alpine']).isDistinct()` returns true
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinct(word => word[0])` returns false
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinct(word => word[0], 2)` returns true

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`maxOcurrences?` | *number* | The number of accepted occurrences for each item. Default: 1    |

**Returns:** *boolean*

___

### isDistinctAsync

▸ **isDistinctAsync**<R\>(`mapper`: [*AsyncMapper*](asyncmapper.md)<T, R\>, `maxOcurrences?`: *number*): *Promise*<*boolean*\>

Checks if the given projection have only distinct elements. This is a partial resolving operation,
and will return the result after as soon as an item got more occurrences than the specified

  Examples:

    * `fluent(['anchor', 'almond', 'anchor', 'alpine']).isDistinctAsync()` returns true
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinctAsync(word => word[0])` returns false
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinctAsync(word => word[0], 2)` returns true

#### Type parameters:

Name | Description |
------ | ------ |
`R` | The type of the data the element equality is based on.   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | [*AsyncMapper*](asyncmapper.md)<T, R\> | The asynchronous projection to use to determine element equality. Identity mapping is used if omitted.   |
`maxOcurrences?` | *number* | The number of accepted occurrences for each item. Default: 1    |

**Returns:** *Promise*<*boolean*\>

▸ **isDistinctAsync**<R\>(`mapper`: R, `maxOcurrences?`: *number*): *Promise*<*boolean*\>

Checks if the given projection have only distinct elements. This is a partial resolving operation,
and will return the result after as soon as an item got more occurrences than the specified

  Examples:

    * `fluent(['anchor', 'almond', 'anchor', 'alpine']).isDistinctAsync()` returns true
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinctAsync(word => word[0])` returns false
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinctAsync(word => word[0], 2)` returns true

#### Type parameters:

Name | Type | Description |
------ | ------ | ------ |
`R` | *string* \| *number* \| *symbol* | The type of the data the element equality is based on.   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | R | The asynchronous projection to use to determine element equality. Identity mapping is used if omitted.   |
`maxOcurrences?` | *number* | The number of accepted occurrences for each item. Default: 1    |

**Returns:** *Promise*<*boolean*\>

___

### join

▸ **join**(`separator`: *string*, `mapper?`: [*Mapper*](mapper.md)<T, *string*\>): *string*

Projects and concatenates the elements of the iterable into a `string` using a separator. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).join(', ')` returns *anchor, almond, bound, alpine*

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`separator` | *string* | The separator to use in between the elements of the iterable.   |
`mapper?` | [*Mapper*](mapper.md)<T, *string*\> | The function which projects the elements of the iterable into `string`s. Falls back to the identity function if omitted.   |

**Returns:** *string*

The concatenated string of the elements in the iterable.

▸ **join**(`separator`: *string*, `mapper?`: keyof T): *string*

Projects and concatenates the elements of the iterable into a `string` using a separator. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).join(', ')` returns *anchor, almond, bound, alpine*

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`separator` | *string* | The separator to use in between the elements of the iterable.   |
`mapper?` | keyof T | The function which projects the elements of the iterable into `string`s. Falls back to the identity function if omitted.   |

**Returns:** *string*

The concatenated string of the elements in the iterable.

___

### joinAsync

▸ **joinAsync**(`separator`: *string*, `mapper`: [*AsyncMapper*](asyncmapper.md)<T, *string*\>): *Promise*<*string*\>

Asynchronously projects and concatenates the elements of the iterable into a `string` using a separator. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`separator` | *string* | The separator to use in between the elements of the iterable.   |
`mapper` | [*AsyncMapper*](asyncmapper.md)<T, *string*\> | The function which asynchronously projects the elements of the iterable into `string`s. Falls back to the identity function if omitted.   |

**Returns:** *Promise*<*string*\>

A promise of the concatenated string of the elements in the iterable.

▸ **joinAsync**(`separator`: *string*, `mapper`: keyof T): *Promise*<*string*\>

Asynchronously projects and concatenates the elements of the iterable into a `string` using a separator. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`separator` | *string* | The separator to use in between the elements of the iterable.   |
`mapper` | keyof T | The function which asynchronously projects the elements of the iterable into `string`s. Falls back to the identity function if omitted.   |

**Returns:** *Promise*<*string*\>

A promise of the concatenated string of the elements in the iterable.

___

### last

▸ **last**(`predicate?`: *Predicate*<T\> \| keyof T): *undefined* \| T

Returns the last element of the iterable matching a predicate, or `undefined` value if no such element is found. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).last()` returns *alpine*<br>
    * `fluent([]).last()` returns `undefined`<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).last(word => word[0] === 'b')` returns *bound*<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).last(word => word[0] === 'c')` returns `undefined`

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate?` | *Predicate*<T\> \| keyof T | The last element is to be returned which matches this predicate. Defaults to the always true function and thus, returns the last element in the iterable if omitted.   |

**Returns:** *undefined* \| T

The last element matching the specified predicate, or `undefined` if no such element found.

▸ **last**(`predicate`: keyof T): *undefined* \| T

Returns the last element of the iterable matching a predicate, or `undefined` value if no such element is found. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).last()` returns *alpine*<br>
    * `fluent([]).last()` returns `undefined`<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).last(word => word[0] === 'b')` returns *bound*<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).last(word => word[0] === 'c')` returns `undefined`

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | keyof T | The last element is to be returned which matches this predicate. Defaults to the always true function and thus, returns the last element in the iterable if omitted.   |

**Returns:** *undefined* \| T

The last element matching the specified predicate, or `undefined` if no such element found.

___

### lastAsync

▸ **lastAsync**(`predicate?`: *AsyncPredicate*<T\>): *Promise*<*undefined* \| T\>

Returns the last element of the iterable matching an asynchronous predicate, or `undefined` value if no such element is found. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate?` | *AsyncPredicate*<T\> | The last element is to be returned which matches this asynchronous predicate.   |

**Returns:** *Promise*<*undefined* \| T\>

A promise of the last element matching the specified predicate, or `undefined` if no such element found.

▸ **lastAsync**(`predicate`: keyof T): *Promise*<*undefined* \| T\>

Returns the last element of the iterable matching an asynchronous predicate, or `undefined` value if no such element is found. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | keyof T | The last element is to be returned which matches this asynchronous predicate.   |

**Returns:** *Promise*<*undefined* \| T\>

A promise of the last element matching the specified predicate, or `undefined` if no such element found.

___

### map

▸ **map**<R\>(`mapper`: [*Mapper*](mapper.md)<T, R\>): [*FluentIterable*](fluentiterable.md)<R\>

Transforms the iterable of `T` into an iterable of `R` by mapping all elements to an element of `R`.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).map(word => word.toUpperCase())` yields *ANCHOR*, *ALMOND*, *BOUND* and *ALPINE*.

#### Type parameters:

Name | Description |
------ | ------ |
`R` | The destination type of the mapping.   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | [*Mapper*](mapper.md)<T, R\> | The operation which maps an instance of `T` into an instance of `R`.   |

**Returns:** [*FluentIterable*](fluentiterable.md)<R\>

A [FluentIterable](fluentiterable.md) of the mapped elements.

▸ **map**<R\>(`mapper`: R): [*FluentIterable*](fluentiterable.md)<T[R]\>

Transforms the iterable of `T` into an iterable of `R` by mapping all elements to an element of `R`.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).map(word => word.toUpperCase())` yields *ANCHOR*, *ALMOND*, *BOUND* and *ALPINE*.

#### Type parameters:

Name | Type | Description |
------ | ------ | ------ |
`R` | *string* \| *number* \| *symbol* | The destination type of the mapping.   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | R | The operation which maps an instance of `T` into an instance of `R`.   |

**Returns:** [*FluentIterable*](fluentiterable.md)<T[R]\>

A [FluentIterable](fluentiterable.md) of the mapped elements.

___

### mapAsync

▸ **mapAsync**<R\>(`mapper`: [*AsyncMapper*](asyncmapper.md)<T, R\>): [*FluentAsyncIterable*](fluentasynciterable.md)<R\>

Transforms the iterable of `T` into an iterable of `R` by mapping all elements to an element of `R`.

#### Type parameters:

Name | Description |
------ | ------ |
`R` | The destination type of the mapping.   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | [*AsyncMapper*](asyncmapper.md)<T, R\> | The asynchronous operation which maps an instance of `T` into an instance of `R`.   |

**Returns:** [*FluentAsyncIterable*](fluentasynciterable.md)<R\>

A [FluentAsyncIterable](fluentasynciterable.md) of the mapped elements.

▸ **mapAsync**<R\>(`mapper`: R): [*FluentAsyncIterable*](fluentasynciterable.md)<T[R]\>

Transforms the iterable of `T` into an iterable of `R` by mapping all elements to an element of `R`.

#### Type parameters:

Name | Type | Description |
------ | ------ | ------ |
`R` | *string* \| *number* \| *symbol* | The destination type of the mapping.   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | R | The asynchronous operation which maps an instance of `T` into an instance of `R`.   |

**Returns:** [*FluentAsyncIterable*](fluentasynciterable.md)<T[R]\>

A [FluentAsyncIterable](fluentasynciterable.md) of the mapped elements.

___

### max

▸ **max**<R\>(`mapper?`: [*Mapper*](mapper.md)<T, R\>): *undefined* \| T

Finds the numeric maximum element of the iterable using a projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).max(word => word.charCodeAt(0))` returns *bound*, since it begins with the character 'b' which has a highest character code than character 'a' with which all the other words begins with

#### Type parameters:

Name | Default |
------ | ------ |
`R` | T |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | [*Mapper*](mapper.md)<T, R\> | The function which projects the elements of the iterable into comparable values. Falls back to the identity function if omitted.   |

**Returns:** *undefined* \| T

The maximum of the iterable's projected elements.

▸ **max**<R\>(`mapper?`: R): *undefined* \| T

Finds the numeric maximum element of the iterable using a projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).max(word => word.charCodeAt(0))` returns *bound*, since it begins with the character 'b' which has a highest character code than character 'a' with which all the other words begins with

#### Type parameters:

Name | Type |
------ | ------ |
`R` | *string* \| *number* \| *symbol* |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | R | The function which projects the elements of the iterable into comparable values. Falls back to the identity function if omitted.   |

**Returns:** *undefined* \| T

The maximum of the iterable's projected elements.

___

### maxAsync

▸ **maxAsync**<R\>(`mapper?`: [*AsyncMapper*](asyncmapper.md)<T, R\>): *Promise*<*undefined* \| T\>

Finds the numeric maximum element of the iterable using an asynchronous projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters:

Name | Default |
------ | ------ |
`R` | T |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | [*AsyncMapper*](asyncmapper.md)<T, R\> | The function which asynchronously projects the elements of the iterable into the comparable values. Falls back to the identity function if omitted.   |

**Returns:** *Promise*<*undefined* \| T\>

A promise of the maximum of the iterable's projected elements.

▸ **maxAsync**<R\>(`mapper?`: R): *Promise*<*undefined* \| T\>

Finds the numeric maximum element of the iterable using an asynchronous projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters:

Name | Type |
------ | ------ |
`R` | *string* \| *number* \| *symbol* |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | R | The function which asynchronously projects the elements of the iterable into the comparable values. Falls back to the identity function if omitted.   |

**Returns:** *Promise*<*undefined* \| T\>

A promise of the maximum of the iterable's projected elements.

___

### min

▸ **min**<R\>(`mapper?`: [*Mapper*](mapper.md)<T, R\>): *undefined* \| T

Finds the numeric minimum element of the iterable using a projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).min(word => word.length)` returns *bound*, the shortest word in the iterable

#### Type parameters:

Name | Default |
------ | ------ |
`R` | T |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | [*Mapper*](mapper.md)<T, R\> | The function which projects the elements of the iterable into the comparable value. Falls back to the identity function if omitted.   |

**Returns:** *undefined* \| T

The minimum of the iterable's projected elements.

▸ **min**<R\>(`mapper`: R): *undefined* \| T

Finds the numeric minimum element of the iterable using a projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).min(word => word.length)` returns *bound*, the shortest word in the iterable

#### Type parameters:

Name | Type |
------ | ------ |
`R` | *string* \| *number* \| *symbol* |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | R | The function which projects the elements of the iterable into the comparable value. Falls back to the identity function if omitted.   |

**Returns:** *undefined* \| T

The minimum of the iterable's projected elements.

___

### minAsync

▸ **minAsync**<R\>(`mapper?`: [*AsyncMapper*](asyncmapper.md)<T, R\>): *Promise*<*undefined* \| T\>

Finds the numeric minimum element of the iterable using an asynchronous projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters:

Name | Default |
------ | ------ |
`R` | T |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | [*AsyncMapper*](asyncmapper.md)<T, R\> | The asynchronous function which projects the elements of the iterable into the comparable value. Falls back to the identity function if omitted.   |

**Returns:** *Promise*<*undefined* \| T\>

A promise of the minimum of the iterable's projected elements.

▸ **minAsync**<R\>(`mapper`: R): *Promise*<*undefined* \| T\>

Finds the numeric minimum element of the iterable using an asynchronous projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters:

Name | Type |
------ | ------ |
`R` | *string* \| *number* \| *symbol* |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | R | The asynchronous function which projects the elements of the iterable into the comparable value. Falls back to the identity function if omitted.   |

**Returns:** *Promise*<*undefined* \| T\>

A promise of the minimum of the iterable's projected elements.

___

### o

▸ **o**(): [*FluentIterable*](fluentiterable.md)<T\>

Alias for assureOrder

Assures the order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be ascending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

**Returns:** [*FluentIterable*](fluentiterable.md)<T\>

Inherited from: [OrderAssurable](orderassurable.md)

___

### od

▸ **od**(): [*FluentIterable*](fluentiterable.md)<T\>

alias for assureOrderDescending

Assures the descending order of the object. For the next operations to be used,
it will be assumed that the order, no matter the predicate used, will
be descending, and this will affect the way some operations works.

Be sure to use this method only if you know the order will be right

**Returns:** [*FluentIterable*](fluentiterable.md)<T\>

Inherited from: [OrderAssurable](orderassurable.md)

___

### partition

▸ **partition**(`size`: *number* \| *Equality*<T\>): [*FluentIterable*](fluentiterable.md)<[*FluentIterable*](fluentiterable.md)<T\>\>

#### Parameters:

Name | Type |
------ | ------ |
`size` | *number* \| *Equality*<T\> |

**Returns:** [*FluentIterable*](fluentiterable.md)<[*FluentIterable*](fluentiterable.md)<T\>\>

___

### prepend

▸ **prepend**(`item`: T): [*FluentIterable*](fluentiterable.md)<T\>

Adds a value to the beginning of the iterable.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).append('book')` yields *book*, *anchor*, *almond*, *bound* and *alpine*.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`item` | T | The item to be prepended to the iterable.   |

**Returns:** [*FluentIterable*](fluentiterable.md)<T\>

The [FluentIterable](fluentiterable.md) prepended with the element.

___

### reduce

▸ **reduce**<R\>(`reducer`: [*Reducer*](reducer.md)<T, R\>, `initial`: R): R

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
`R` | The type of the accumulator value.   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`reducer` | [*Reducer*](reducer.md)<T, R\> | The accumulator function, provides the next accumulator value out of the last accumulator value and the next element in the iterable.   |
`initial` | R | The initial (aka *seed*) value of the accumulator.   |

**Returns:** R

The aggregated value.

___

### reduceAndMap

▸ **reduceAndMap**<A, R\>(`reducer`: [*Reducer*](reducer.md)<T, A\>, `initial`: A, `result`: [*Mapper*](mapper.md)<A, R\>): R

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
`A` | The type of the accumulator value.   |
`R` | The type of the aggregation result.   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`reducer` | [*Reducer*](reducer.md)<T, A\> | The accumulator function, provides the next accumulator value out of the last accumulator value and the next element in the iterable.   |
`initial` | A | The initial (aka *seed*) value of the accumulator.   |
`result` | [*Mapper*](mapper.md)<A, R\> | The mapping function, projects the accumulator value of type `A` to the result value of type `R`.   |

**Returns:** R

The aggregated value.

▸ **reduceAndMap**<A, R\>(`reducer`: [*Reducer*](reducer.md)<T, A\>, `initial`: A, `result`: R): A[R]

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
`A` | - | The type of the accumulator value.   |
`R` | *string* \| *number* \| *symbol* | The type of the aggregation result.   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`reducer` | [*Reducer*](reducer.md)<T, A\> | The accumulator function, provides the next accumulator value out of the last accumulator value and the next element in the iterable.   |
`initial` | A | The initial (aka *seed*) value of the accumulator.   |
`result` | R | The mapping function, projects the accumulator value of type `A` to the result value of type `R`.   |

**Returns:** A[R]

The aggregated value.

___

### reduceAndMapAsync

▸ **reduceAndMapAsync**<A, R\>(`reducer`: [*AsyncReducer*](asyncreducer.md)<T, A\>, `initial`: A, `result`: [*AsyncMapper*](asyncmapper.md)<A, R\>): *Promise*<R\>

Aggregates the iterable by applying an asynchronous accumulator function over the elements of the iterable. The specified seed value is used as the initial accumulator value, and the specified asynchronous map function is used to project the result value from the accumulator value. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters:

Name | Description |
------ | ------ |
`A` | The type of the accumulator value.   |
`R` | The type of the aggregation result.   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`reducer` | [*AsyncReducer*](asyncreducer.md)<T, A\> | The asynchronous accumulator function, provides the next accumulator value out of the last accumulator value and the next element in the iterable.   |
`initial` | A | The initial (aka *seed*) value of the accumulator.   |
`result` | [*AsyncMapper*](asyncmapper.md)<A, R\> | The asynchronous mapping function, projects the accumulator value of type `A` to the result value of type `R`.   |

**Returns:** *Promise*<R\>

A promise of the aggregated value.

▸ **reduceAndMapAsync**<A, R\>(`reducer`: [*AsyncReducer*](asyncreducer.md)<T, A\>, `initial`: A, `result`: R): *Promise*<A[R]\>

Aggregates the iterable by applying an asynchronous accumulator function over the elements of the iterable. The specified seed value is used as the initial accumulator value, and the specified asynchronous map function is used to project the result value from the accumulator value. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters:

Name | Type | Description |
------ | ------ | ------ |
`A` | - | The type of the accumulator value.   |
`R` | *string* \| *number* \| *symbol* | The type of the aggregation result.   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`reducer` | [*AsyncReducer*](asyncreducer.md)<T, A\> | The asynchronous accumulator function, provides the next accumulator value out of the last accumulator value and the next element in the iterable.   |
`initial` | A | The initial (aka *seed*) value of the accumulator.   |
`result` | R | The asynchronous mapping function, projects the accumulator value of type `A` to the result value of type `R`.   |

**Returns:** *Promise*<A[R]\>

A promise of the aggregated value.

___

### reduceAsync

▸ **reduceAsync**<R\>(`reducer`: [*AsyncReducer*](asyncreducer.md)<T, R\>, `initial`: R): *Promise*<R\>

Aggregates the iterable by applying an asynchronous accumulator function over the elements of the iterable. The specified seed value is used as the initial accumulator value. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters:

Name | Description |
------ | ------ |
`R` | The type of the accumulator value.   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`reducer` | [*AsyncReducer*](asyncreducer.md)<T, R\> | The asynchronous accumulator function, provides the next accumulator value out of the last accumulator value and the next element in the iterable.   |
`initial` | R | The initial (aka *seed*) value of the accumulator.   |

**Returns:** *Promise*<R\>

A promise of the aggregated value.

___

### repeat

▸ **repeat**(`n`: *number*): [*FluentIterable*](fluentiterable.md)<T\>

Repeats the elements of the iterable a specified amount of times.<br>
  Example: `fluent(['anchor', 'almond']).repeat(3)` yields *anchor*, *almond*, *anchor*, *almond*, *anchor* and *almond*.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`n` | *number* | The amount of times the iterable is to be repeated.   |

**Returns:** [*FluentIterable*](fluentiterable.md)<T\>

The [FluentIterable](fluentiterable.md) of the repeated iterable.

___

### skip

▸ **skip**(`n`: *number*): [*FluentIterable*](fluentiterable.md)<T\>

Bypasses a specified number of elements in the iterable and then returns the remaining elements.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).skip(2)` yields *bound* and *alpine*.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`n` | *number* | The number of elements to skip.   |

**Returns:** [*FluentIterable*](fluentiterable.md)<T\>

A [FluentIterable](fluentiterable.md) of all the elements after the first `n` elements.

___

### skipWhile

▸ **skipWhile**(`condition`: [*Predicate*](../README.md#predicate)<T\>): [*FluentIterable*](fluentiterable.md)<T\>

Bypasses elements in the iterable as long as a specified condition is true and then returns the remaining elements.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).skipWhile(word => word[0] === 'a')` yields *bound* and *alpine*.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`condition` | [*Predicate*](../README.md#predicate)<T\> | A predicate of `T`. All elements are skipped from the iterable until this evaluates to `false` for the first time.   |

**Returns:** [*FluentIterable*](fluentiterable.md)<T\>

A [FluentIterable](fluentiterable.md) of the elements after the condition is not met.

▸ **skipWhile**(`condition`: keyof T): [*FluentIterable*](fluentiterable.md)<T\>

Bypasses elements in the iterable as long as a specified condition is true and then returns the remaining elements.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).skipWhile(word => word[0] === 'a')` yields *bound* and *alpine*.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`condition` | keyof T | A predicate of `T`. All elements are skipped from the iterable until this evaluates to `false` for the first time.   |

**Returns:** [*FluentIterable*](fluentiterable.md)<T\>

A [FluentIterable](fluentiterable.md) of the elements after the condition is not met.

___

### skipWhileAsync

▸ **skipWhileAsync**(`condition`: *AsyncPredicate*<T\>): [*FluentAsyncIterable*](fluentasynciterable.md)<T\>

Bypasses elements in the iterable as long as a specified asynchronous condition is true and then returns the remaining elements.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`condition` | *AsyncPredicate*<T\> | An asynchronous predicate of `T`. All elements are skipped from the iterable until this evaluates to `false` for the first time.   |

**Returns:** [*FluentAsyncIterable*](fluentasynciterable.md)<T\>

A [FluentAsyncIterable](fluentasynciterable.md) of the elements after the condition is not met.

▸ **skipWhileAsync**(`condition`: keyof T): [*FluentAsyncIterable*](fluentasynciterable.md)<T\>

Bypasses elements in the iterable as long as a specified asynchronous condition is true and then returns the remaining elements.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`condition` | keyof T | An asynchronous predicate of `T`. All elements are skipped from the iterable until this evaluates to `false` for the first time.   |

**Returns:** [*FluentAsyncIterable*](fluentasynciterable.md)<T\>

A [FluentAsyncIterable](fluentasynciterable.md) of the elements after the condition is not met.

___

### sort

▸ **sort**(`comparer?`: [*Comparer*](comparer.md)<T\>): [*FluentIterable*](fluentiterable.md)<T\>

Sorts the elements of the iterable based on a specified comparer. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * Alphabetical, ascending: `fluent(['anchor', 'almond', 'bound', 'alpine']).sort()` yields *almond*, *alpine*, *anchor* and *bound*.<br>
    * Alphabetical, descending: `fluent(['anchor', 'almond', 'bound', 'alpine']).sort((x, y) => x > y ? -1 : x < y ? 1 : 0)` yields *bound*, *anchor*, *alpine* and *almond*.<br>
    * Numerical, ascending: `fluent([5, 3, 4, 1, 2]).sort()` yields *1*, *2*, *3*, *4* and *5*.<br>
    * Numerical, descending: `fluent([5, 3, 4, 1, 2]).sort((x, y) => y - x)` yields *5*, *4*, *3*, *2* and *1*.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`comparer?` | [*Comparer*](comparer.md)<T\> | The comparer operation to use to determine the order of elements. Alphabetical ascending is used for [[string]] elements and numerical ascending is used for [[number]]   |

**Returns:** [*FluentIterable*](fluentiterable.md)<T\>

The sorted [FluentIterable](fluentiterable.md).

___

### sortBy

▸ **sortBy**(...`mappers`: (keyof T \| [*Mapper*](mapper.md)<T, *any*\>)[]): [*FluentIterable*](fluentiterable.md)<T\>

Sorts the elements of the iterable based on a specified fields. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * Alphabetical, ascending: `fluent([{ a: 'anchor' }, { a: 'almond' }, { a: 'bound' }, { a: 'alpine' }]).sortBy((x) => x.a)` yields *almond*, *alpine*, *anchor* and *bound*.<br>
    * Alphabetical, descending: `fluent([{ a: 'anchor' }, { a: 'almond' }, { a: 'bound' }, { a: 'alpine' }]).sortBy(desc((x) => x.a))` yields *bound*, *anchor*, *alpine* and *almond*.<br>

#### Parameters:

Name | Type |
------ | ------ |
`...mappers` | (keyof T \| [*Mapper*](mapper.md)<T, *any*\>)[] |

**Returns:** [*FluentIterable*](fluentiterable.md)<T\>

The sorted [FluentIterable](fluentiterable.md).

___

### sum

▸ **sum**(`mapper?`: [*Mapper*](mapper.md)<T, *number*\>): *number*

Calculates the sum of the elements of the iterable projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent([5, -2, 9]).sum()` returns *12*
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).sum(word => word.length)` returns *23*, the sum of length of all the words in the iterable

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | [*Mapper*](mapper.md)<T, *number*\> | The function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted.   |

**Returns:** *number*

The sum of the projected elements of the iterable.

▸ **sum**(`mapper`: keyof T): *number*

Calculates the sum of the elements of the iterable projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent([5, -2, 9]).sum()` returns *12*
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).sum(word => word.length)` returns *23*, the sum of length of all the words in the iterable

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | keyof T | The function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted.   |

**Returns:** *number*

The sum of the projected elements of the iterable.

___

### sumAsync

▸ **sumAsync**(`mapper?`: [*AsyncMapper*](asyncmapper.md)<T, *number*\>): *Promise*<*number*\>

Calculates the sum of the elements of the iterable asynchronously projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | [*AsyncMapper*](asyncmapper.md)<T, *number*\> | The asynchronous function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted.   |

**Returns:** *Promise*<*number*\>

A promise of the sum of the projected elements of the iterable.

▸ **sumAsync**(`mapper`: keyof T): *Promise*<*number*\>

Calculates the sum of the elements of the iterable asynchronously projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | keyof T | The asynchronous function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted.   |

**Returns:** *Promise*<*number*\>

A promise of the sum of the projected elements of the iterable.

___

### take

▸ **take**(`n`: *number*): [*FluentIterable*](fluentiterable.md)<T\>

Returns a specified number of contiguous elements from the start of the iterable.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).take(2)` yields *anchor* and *almond*.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`n` | *number* | The number of elements to take.   |

**Returns:** [*FluentIterable*](fluentiterable.md)<T\>

A [FluentIterable](fluentiterable.md) of the first `n` elements.

___

### takeWhile

▸ **takeWhile**(`condition`: [*Predicate*](../README.md#predicate)<T\>): [*FluentIterable*](fluentiterable.md)<T\>

Returns elements from the iterable as long as a specified condition is met.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).takeWhile(word => word[0] === 'a')` yields *anchor* and *almond*.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`condition` | [*Predicate*](../README.md#predicate)<T\> | A predicate of `T`. All elements are yielded from the iterable until this evaluates to `false` for the first time.   |

**Returns:** [*FluentIterable*](fluentiterable.md)<T\>

A [FluentIterable](fluentiterable.md) of the elements until the condition is met.

▸ **takeWhile**(`condition`: keyof T): [*FluentIterable*](fluentiterable.md)<T\>

Returns elements from the iterable as long as a specified condition is met.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).takeWhile(word => word[0] === 'a')` yields *anchor* and *almond*.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`condition` | keyof T | A predicate of `T`. All elements are yielded from the iterable until this evaluates to `false` for the first time.   |

**Returns:** [*FluentIterable*](fluentiterable.md)<T\>

A [FluentIterable](fluentiterable.md) of the elements until the condition is met.

___

### takeWhileAsync

▸ **takeWhileAsync**(`condition`: *AsyncPredicate*<T\>): [*FluentAsyncIterable*](fluentasynciterable.md)<T\>

Returns elements from the iterable as long as a specified asynchronous condition is met.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`condition` | *AsyncPredicate*<T\> | An asynchronous predicate of `T`. All elements are yielded from the iterable until this evaluates to `false` for the first time.   |

**Returns:** [*FluentAsyncIterable*](fluentasynciterable.md)<T\>

A [FluentAsyncIterable](fluentasynciterable.md) of the elements until the condition is met.

▸ **takeWhileAsync**(`condition`: keyof T): [*FluentAsyncIterable*](fluentasynciterable.md)<T\>

Returns elements from the iterable as long as a specified asynchronous condition is met.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`condition` | keyof T | An asynchronous predicate of `T`. All elements are yielded from the iterable until this evaluates to `false` for the first time.   |

**Returns:** [*FluentAsyncIterable*](fluentasynciterable.md)<T\>

A [FluentAsyncIterable](fluentasynciterable.md) of the elements until the condition is met.

___

### toArray

▸ **toArray**(): T[]

Translates the iterable into an array. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).toArray()` returns `['anchor', 'almond', 'bound', 'alpine']`

**Returns:** T[]

The array equivalent of the iterable.

___

### toAsync

▸ **toAsync**(): [*FluentAsyncIterable*](fluentasynciterable.md)<T\>

Translates the iterable into a [FluentAsyncIterable](fluentasynciterable.md).

**Returns:** [*FluentAsyncIterable*](fluentasynciterable.md)<T\>

The [FluentAsyncIterable](fluentasynciterable.md) instance.

___

### toObject

▸ **toObject**<R\>(`keySelector`: [*Mapper*](mapper.md)<T, keyof R\>, `valueSelector?`: [*Mapper*](mapper.md)<T, R[keyof R]\>): R

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by a key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond']).toObject(word => word)` returns `{ anchor: 'anchor', almond: 'almond' }`
    * `fluent([{ key: 'name', value: 'Peter Parker' }, { key: 'alias', value: 'SpiderMan' }]).toObject(item => item.key, item => item.value)` returns `{ name: 'Peter Parker', alias: 'SpiderMan' }`

#### Type parameters:

Name | Default | Description |
------ | ------ | ------ |
`R` | *any* | The expected type of the object. Cannot be enforced, this is strictly informal.   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`keySelector` | [*Mapper*](mapper.md)<T, keyof R\> | Projects an element of the iterable into the key of the corresponding field.   |
`valueSelector?` | [*Mapper*](mapper.md)<T, R[keyof R]\> | Projects an element of the iterable into the value of the corresponding field. The identity function is being used if omitted.   |

**Returns:** R

The object composed of the elements of the iterable as fields.

▸ **toObject**<R1, R\>(`keySelector`: R1, `valueSelector?`: [*Mapper*](mapper.md)<T, R\>): { [key in string \| number \| symbol]: R}

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by a key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond']).toObject(word => word)` returns `{ anchor: 'anchor', almond: 'almond' }`
    * `fluent([{ key: 'name', value: 'Peter Parker' }, { key: 'alias', value: 'SpiderMan' }]).toObject(item => item.key, item => item.value)` returns `{ name: 'Peter Parker', alias: 'SpiderMan' }`

#### Type parameters:

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`R1` | *string* \| *number* \| *symbol* | - | - |
`R` | - | T[R1] | The expected type of the object. Cannot be enforced, this is strictly informal.   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`keySelector` | R1 | Projects an element of the iterable into the key of the corresponding field.   |
`valueSelector?` | [*Mapper*](mapper.md)<T, R\> | Projects an element of the iterable into the value of the corresponding field. The identity function is being used if omitted.   |

**Returns:** { [key in string \| number \| symbol]: R}

The object composed of the elements of the iterable as fields.

▸ **toObject**<K, R2\>(`keySelector`: [*Mapper*](mapper.md)<T, K\>, `valueSelector`: R2): { [key in string \| number \| symbol]: T[R2]}

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by a key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond']).toObject(word => word)` returns `{ anchor: 'anchor', almond: 'almond' }`
    * `fluent([{ key: 'name', value: 'Peter Parker' }, { key: 'alias', value: 'SpiderMan' }]).toObject(item => item.key, item => item.value)` returns `{ name: 'Peter Parker', alias: 'SpiderMan' }`

**`typeparam`** The expected type of the object. Cannot be enforced, this is strictly informal.

#### Type parameters:

Name | Type |
------ | ------ |
`K` | *string* \| *number* \| *symbol* |
`R2` | *string* \| *number* \| *symbol* |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`keySelector` | [*Mapper*](mapper.md)<T, K\> | Projects an element of the iterable into the key of the corresponding field.   |
`valueSelector` | R2 | Projects an element of the iterable into the value of the corresponding field. The identity function is being used if omitted.   |

**Returns:** { [key in string \| number \| symbol]: T[R2]}

The object composed of the elements of the iterable as fields.

▸ **toObject**<R1, R2\>(`keySelector`: R1, `valueSelector`: R2): { [key in string \| number \| symbol]: T[R2]}

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by a key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond']).toObject(word => word)` returns `{ anchor: 'anchor', almond: 'almond' }`
    * `fluent([{ key: 'name', value: 'Peter Parker' }, { key: 'alias', value: 'SpiderMan' }]).toObject(item => item.key, item => item.value)` returns `{ name: 'Peter Parker', alias: 'SpiderMan' }`

**`typeparam`** The expected type of the object. Cannot be enforced, this is strictly informal.

#### Type parameters:

Name | Type |
------ | ------ |
`R1` | *string* \| *number* \| *symbol* |
`R2` | *string* \| *number* \| *symbol* |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`keySelector` | R1 | Projects an element of the iterable into the key of the corresponding field.   |
`valueSelector` | R2 | Projects an element of the iterable into the value of the corresponding field. The identity function is being used if omitted.   |

**Returns:** { [key in string \| number \| symbol]: T[R2]}

The object composed of the elements of the iterable as fields.

___

### toObjectAsync

▸ **toObjectAsync**<R\>(`keySelector`: [*AsyncMapper*](asyncmapper.md)<T, keyof R\>, `valueSelector?`: [*AsyncMapper*](asyncmapper.md)<T, R[keyof R]\>): *Promise*<R\>

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by an asynchronous key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters:

Name | Default | Description |
------ | ------ | ------ |
`R` | *any* | The expected type of the object. Cannot be enforced, this is strictly informal.   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`keySelector` | [*AsyncMapper*](asyncmapper.md)<T, keyof R\> | Asynchronously projects an element of the iterable into the key of the corresponding field.   |
`valueSelector?` | [*AsyncMapper*](asyncmapper.md)<T, R[keyof R]\> | Asynchronously projects an element of the iterable into the value of the corresponding field.   |

**Returns:** *Promise*<R\>

A promise of the object composed of the elements of the iterable as fields.

▸ **toObjectAsync**<R1, R\>(`keySelector`: R1, `valueSelector?`: [*AsyncMapper*](asyncmapper.md)<T, R\>): *Promise*<{ [key in string \| number \| symbol]: R}\>

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by an asynchronous key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters:

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`R1` | *string* \| *number* \| *symbol* | - | - |
`R` | - | T[R1] | The expected type of the object. Cannot be enforced, this is strictly informal.   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`keySelector` | R1 | Asynchronously projects an element of the iterable into the key of the corresponding field.   |
`valueSelector?` | [*AsyncMapper*](asyncmapper.md)<T, R\> | Asynchronously projects an element of the iterable into the value of the corresponding field.   |

**Returns:** *Promise*<{ [key in string \| number \| symbol]: R}\>

A promise of the object composed of the elements of the iterable as fields.

▸ **toObjectAsync**<K, R2\>(`keySelector`: [*AsyncMapper*](asyncmapper.md)<T, K\>, `valueSelector`: R2): *Promise*<{ [key in string \| number \| symbol]: T[R2]}\>

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by an asynchronous key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**`typeparam`** The expected type of the object. Cannot be enforced, this is strictly informal.

#### Type parameters:

Name | Type |
------ | ------ |
`K` | *string* \| *number* \| *symbol* |
`R2` | *string* \| *number* \| *symbol* |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`keySelector` | [*AsyncMapper*](asyncmapper.md)<T, K\> | Asynchronously projects an element of the iterable into the key of the corresponding field.   |
`valueSelector` | R2 | Asynchronously projects an element of the iterable into the value of the corresponding field.   |

**Returns:** *Promise*<{ [key in string \| number \| symbol]: T[R2]}\>

A promise of the object composed of the elements of the iterable as fields.

▸ **toObjectAsync**<R1, R2\>(`keySelector`: R1, `valueSelector`: R2): *Promise*<{ [key in string \| number \| symbol]: T[R2]}\>

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by an asynchronous key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**`typeparam`** The expected type of the object. Cannot be enforced, this is strictly informal.

#### Type parameters:

Name | Type |
------ | ------ |
`R1` | *string* \| *number* \| *symbol* |
`R2` | *string* \| *number* \| *symbol* |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`keySelector` | R1 | Asynchronously projects an element of the iterable into the key of the corresponding field.   |
`valueSelector` | R2 | Asynchronously projects an element of the iterable into the value of the corresponding field.   |

**Returns:** *Promise*<{ [key in string \| number \| symbol]: T[R2]}\>

A promise of the object composed of the elements of the iterable as fields.

___

### top

▸ **top**<R\>(`mapper`: [*Mapper*](mapper.md)<T, R\>, `comparer`: [*Comparer*](comparer.md)<R\>): *undefined* \| T

Calculates the top element of the iterable using a projection and a comparer. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).top(word => word.length, (a, b) => b - a)` returns *bound*, the shortest word in the iterable
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).top(word => word.charCodeAt(0), (a, b) => a - b)` returns *bound*, latest word in the lexicographical order considering the first character only

#### Type parameters:

Name | Description |
------ | ------ |
`R` | The type of the projected elements used for comparison.   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | [*Mapper*](mapper.md)<T, R\> | The function which projects the elements of the iterable into comparable.   |
`comparer` | [*Comparer*](comparer.md)<R\> | The comparison function.   |

**Returns:** *undefined* \| T

The top of the iterable's projected elements.

▸ **top**<R\>(`mapper`: R, `comparer`: [*Comparer*](comparer.md)<T[R]\>): *undefined* \| T

Calculates the top element of the iterable using a projection and a comparer. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).top(word => word.length, (a, b) => b - a)` returns *bound*, the shortest word in the iterable
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).top(word => word.charCodeAt(0), (a, b) => a - b)` returns *bound*, latest word in the lexicographical order considering the first character only

#### Type parameters:

Name | Type | Description |
------ | ------ | ------ |
`R` | *string* \| *number* \| *symbol* | The type of the projected elements used for comparison.   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | R | The function which projects the elements of the iterable into comparable.   |
`comparer` | [*Comparer*](comparer.md)<T[R]\> | The comparison function.   |

**Returns:** *undefined* \| T

The top of the iterable's projected elements.

___

### topAsync

▸ **topAsync**<R\>(`mapper`: [*AsyncMapper*](asyncmapper.md)<T, R\>, `comparer`: [*Comparer*](comparer.md)<R\>): *Promise*<*undefined* \| T\>

Calculates the top element of the iterable using an asynchronous projection and a comparer. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters:

Name | Description |
------ | ------ |
`R` | The type of the projected elements used for comparison.   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | [*AsyncMapper*](asyncmapper.md)<T, R\> | The asynchronous function which projects the elements of the iterable into comparable.   |
`comparer` | [*Comparer*](comparer.md)<R\> | The comparison function.   |

**Returns:** *Promise*<*undefined* \| T\>

A promise of the top of the iterable's projected elements.

▸ **topAsync**<R\>(`mapper`: T, `comparer`: [*Comparer*](comparer.md)<T[R]\>): *Promise*<*undefined* \| T\>

Calculates the top element of the iterable using an asynchronous projection and a comparer. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters:

Name | Type | Description |
------ | ------ | ------ |
`R` | *string* \| *number* \| *symbol* | The type of the projected elements used for comparison.   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | T | The asynchronous function which projects the elements of the iterable into comparable.   |
`comparer` | [*Comparer*](comparer.md)<T[R]\> | The comparison function.   |

**Returns:** *Promise*<*undefined* \| T\>

A promise of the top of the iterable's projected elements.

___

### waitAll

▸ **waitAll**<R\>(`mapper`: [*AsyncMapper*](asyncmapper.md)<T, R\>): *PromiseLike*<R[]\>

Applies a async transformation for every element in the array and, then, wait for they conclusion with Promise.all. This is a resolving operation.

#### Type parameters:

Name |
------ |
`R` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | [*AsyncMapper*](asyncmapper.md)<T, R\> | The asynchronous function which projects the elements of the iterable into promises.   |

**Returns:** *PromiseLike*<R[]\>

a promises that resolves into an array with the result of all mappings.

▸ **waitAll**<R\>(`mapper`: R): *PromiseLike*<T[R][]\>

Applies a async transformation for every element in the array and, then, wait for they conclusion with Promise.all. This is a resolving operation.

#### Type parameters:

Name | Type |
------ | ------ |
`R` | *string* \| *number* \| *symbol* |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | R | The asynchronous function which projects the elements of the iterable into promises.   |

**Returns:** *PromiseLike*<T[R][]\>

a promises that resolves into an array with the result of all mappings.

___

### withIndex

▸ **withIndex**(): [*FluentIterable*](fluentiterable.md)<*Indexed*<T\>\>

Maps all elements of the iterable to an instance of [[Indexed]], an index-value pair constructed of the original element in the iterable and it's index (starting from 0 for the first element in the iterable).<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).withIndex()` yields `{ idx: 0, value: 'anchor' }`, `{ idx: 1, value: 'almond' }` and so on.

**Returns:** [*FluentIterable*](fluentiterable.md)<*Indexed*<T\>\>

A [FluentIterable](fluentiterable.md) of [[Indexed]].
