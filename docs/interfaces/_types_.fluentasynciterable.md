**[fluent-iterable - v1.7.6](../README.md)**

> [Globals](../README.md) / ["types"](../modules/_types_.md) / FluentAsyncIterable

# Interface: FluentAsyncIterable\<T>

Represents an asynchronous iterable extended with common processing and mutating capabilities.<br>
  The capabilities introduced are defined as a [fluent interface](https://en.wikipedia.org/wiki/Fluent_interface) and thus they support *method chaining*.

## Type parameters

Name | Description |
------ | ------ |
`T` | The type of the items in the asynchronous iterable.  |

## Hierarchy

* AsyncIterable\<T>

* [OrderAssurable](_assure_order_types_.orderassurable.md)\<[FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>>

* [FluentIterableEmitter](_types_emitter_.fluentiterableemitter.md)\<T>

  ↳ **FluentAsyncIterable**

## Index

### Methods

* [[Symbol.asyncIterator]](_types_.fluentasynciterable.md#[symbol.asynciterator])
* [all](_types_.fluentasynciterable.md#all)
* [any](_types_.fluentasynciterable.md#any)
* [append](_types_.fluentasynciterable.md#append)
* [assureOrder](_types_.fluentasynciterable.md#assureorder)
* [assureOrderDescending](_types_.fluentasynciterable.md#assureorderdescending)
* [avg](_types_.fluentasynciterable.md#avg)
* [combine](_types_.fluentasynciterable.md#combine)
* [combineEmitter](_types_.fluentasynciterable.md#combineemitter)
* [concat](_types_.fluentasynciterable.md#concat)
* [concatEmitter](_types_.fluentasynciterable.md#concatemitter)
* [contains](_types_.fluentasynciterable.md#contains)
* [count](_types_.fluentasynciterable.md#count)
* [distinct](_types_.fluentasynciterable.md#distinct)
* [emit](_types_.fluentasynciterable.md#emit)
* [execute](_types_.fluentasynciterable.md#execute)
* [filter](_types_.fluentasynciterable.md#filter)
* [first](_types_.fluentasynciterable.md#first)
* [flatten](_types_.fluentasynciterable.md#flatten)
* [forEach](_types_.fluentasynciterable.md#foreach)
* [group](_types_.fluentasynciterable.md#group)
* [hasExactly](_types_.fluentasynciterable.md#hasexactly)
* [hasLessOrExactly](_types_.fluentasynciterable.md#haslessorexactly)
* [hasLessThan](_types_.fluentasynciterable.md#haslessthan)
* [hasMoreOrExactly](_types_.fluentasynciterable.md#hasmoreorexactly)
* [hasMoreThan](_types_.fluentasynciterable.md#hasmorethan)
* [isDistinct](_types_.fluentasynciterable.md#isdistinct)
* [join](_types_.fluentasynciterable.md#join)
* [last](_types_.fluentasynciterable.md#last)
* [map](_types_.fluentasynciterable.md#map)
* [max](_types_.fluentasynciterable.md#max)
* [merge](_types_.fluentasynciterable.md#merge)
* [mergeCatching](_types_.fluentasynciterable.md#mergecatching)
* [mergeEmitter](_types_.fluentasynciterable.md#mergeemitter)
* [mergeEmitterCatching](_types_.fluentasynciterable.md#mergeemittercatching)
* [min](_types_.fluentasynciterable.md#min)
* [o](_types_.fluentasynciterable.md#o)
* [od](_types_.fluentasynciterable.md#od)
* [partition](_types_.fluentasynciterable.md#partition)
* [prepend](_types_.fluentasynciterable.md#prepend)
* [reduce](_types_.fluentasynciterable.md#reduce)
* [reduceAndMap](_types_.fluentasynciterable.md#reduceandmap)
* [repeat](_types_.fluentasynciterable.md#repeat)
* [skip](_types_.fluentasynciterable.md#skip)
* [skipWhile](_types_.fluentasynciterable.md#skipwhile)
* [sort](_types_.fluentasynciterable.md#sort)
* [sortBy](_types_.fluentasynciterable.md#sortby)
* [sum](_types_.fluentasynciterable.md#sum)
* [take](_types_.fluentasynciterable.md#take)
* [takeWhile](_types_.fluentasynciterable.md#takewhile)
* [toArray](_types_.fluentasynciterable.md#toarray)
* [toObject](_types_.fluentasynciterable.md#toobject)
* [top](_types_.fluentasynciterable.md#top)
* [waitAll](_types_.fluentasynciterable.md#waitall)
* [withIndex](_types_.fluentasynciterable.md#withindex)

## Methods

### [Symbol.asyncIterator]

▸ **[Symbol.asyncIterator]**(): AsyncIterator\<T>

*Inherited from [FluentAsyncIterable](_types_.fluentasynciterable.md).[[Symbol.asyncIterator]](_types_.fluentasynciterable.md#[symbol.asynciterator])*

**Returns:** AsyncIterator\<T>

___

### all

▸ **all**(`predicate`: AsyncPredicate\<T>): Promise\<boolean>

Determines whether all elements of the iterable satisfy a condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | AsyncPredicate\<T> | The condition checked for all elements in the iterable. |

**Returns:** Promise\<boolean>

A promise of `true` if all elements in the iterable satisfy the specified condition, `false` otherwise.

___

### any

▸ **any**(`predicate?`: [AsyncPredicate](../modules/_types_base_.md#asyncpredicate)\<T>): Promise\<boolean>

Determines whether any element of the iterable exists or satisfies a condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate?` | [AsyncPredicate](../modules/_types_base_.md#asyncpredicate)\<T> | The condition checked for the elements in the iterable. Defaults to the always true function and thus, returns if the iterable is empty. |

**Returns:** Promise\<boolean>

A promise of `true` if any of the elements in the iterable satisfy the specified condition, `false` otherwise.

___

### append

▸ **append**(`item`: T): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

Appends a value to the end of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`item` | T | The item to be appended to the iterable. |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

The [FluentAsyncIterable](_types_.fluentasynciterable.md) appended with the element.

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

▸ **avg**(`mapper?`: AsyncMapper\<T, number>): Promise\<number>

Calculates the average of the elements of the iterable projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | AsyncMapper\<T, number> | The function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted. |

**Returns:** Promise\<number>

A promise of the average of the projected elements of the iterable.

___

### combine

▸ **combine**\<U>(`iterable`: Iterable\<U> \| AsyncIterable\<U>): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<[T, U]>

Join the async iterable with another one, returning a new async iterable with a NxN combination

#### Type parameters:

Name |
------ |
`U` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`iterable` | Iterable\<U> \| AsyncIterable\<U> | The iterable to be combined  |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<[T, U]>

▸ **combine**\<U, K>(`iterable`: Iterable\<U> \| AsyncIterable\<U>, `keyA`: Mapper\<T, K>, `keyB`: Mapper\<U, K>): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<[T, U]>

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

▸ **concat**(...`iterables`: Array\<AnyIterable\<T>>): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

Concatenates specified iterables to the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`...iterables` | Array\<AnyIterable\<T>> | The iterables to concatenate. |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

The [FluentAsyncIterable](_types_.fluentasynciterable.md) of the concatenated iterables.

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

▸ **contains**(`item`: T): Promise\<boolean>

Determines whether the iterable contains a specified element. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`item` | T | The element to check. |

**Returns:** Promise\<boolean>

A promise of `true` if the specified element exists in the iterable, `false` otherwise.

___

### count

▸ **count**(`predicate?`: [AsyncPredicate](../modules/_types_base_.md#asyncpredicate)\<T>): Promise\<number>

Returns the number of elements that matches a predicate in the iterable. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate?` | [AsyncPredicate](../modules/_types_base_.md#asyncpredicate)\<T> | The count will consider elements which match this predicate. Defaults to the always true function and thus, counts all the elements in the iterable if omitted. |

**Returns:** Promise\<number>

A promise of the number of elements matching the specified predicate.

___

### distinct

▸ **distinct**\<R>(`mapper?`: AsyncMapper\<T, R>, `maxOcurrences?`: undefined \| number): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

Returns distinct elements from the iterable from a certain projections perspective.

#### Type parameters:

Name | Description |
------ | ------ |
`R` | The type of the data the element equality is based on. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | AsyncMapper\<T, R> | The projection to use to determine element equality. Identity mapping is used if omitted. |
`maxOcurrences?` | undefined \| number | The number of accepted occurrences for each item. Default: 1 |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

The [FluentAsyncIterable](_types_.fluentasynciterable.md) of the distinct elements.

▸ **distinct**(`maxOcurrences?`: undefined \| number): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

Returns distinct elements from the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
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

▸ **execute**(`action`: [AsyncAction](_types_base_.asyncaction.md)\<T>): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

Translate an iterable into one which executes an action against each element before yield them.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`action` | [AsyncAction](_types_base_.asyncaction.md)\<T> | The action to execute against each element. |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

The [FluentAsyncIterable](_types_.fluentasynciterable.md) with the action injected to it.

___

### filter

▸ **filter**(`predicate`: AsyncPredicate\<T>): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

Filters the iterable of `T` based on a predicate.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | AsyncPredicate\<T> | A predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`. |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

A [FluentAsyncIterable](_types_.fluentasynciterable.md) of the elements against which the predicate evaluates to `true`.

___

### first

▸ **first**(`predicate?`: [AsyncPredicate](../modules/_types_base_.md#asyncpredicate)\<T>): Promise\<T \| undefined>

Returns the first element of the iterable matching a predicate, or `undefined` value if no such element is found. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate?` | [AsyncPredicate](../modules/_types_base_.md#asyncpredicate)\<T> | The first element is to be returned which matches this predicate. Defaults to the always true function and thus, returns the first element in the iterable if omitted. |

**Returns:** Promise\<T \| undefined>

A promise of the first element matching the specified predicate, or `undefined` if no such element found.

___

### flatten

▸ **flatten**\<R>(`mapper?`: AsyncMapper\<T, Iterable\<R>>): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<R>

Projects each element of the iterable to an iterable and flattens the resulting iterable into one iterable.

#### Type parameters:

Name | Description |
------ | ------ |
`R` | The type of the elements in the inner iterable. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | AsyncMapper\<T, Iterable\<R>> | Specifies the projection from the elements of `T` to iterables of `R`. Identity mapping is applied (taking the elements as iterables) if omitted. |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<R>

The [FluentAsyncIterable](_types_.fluentasynciterable.md) of the flattened iterable.

___

### forEach

▸ **forEach**\<R>(`mapper`: AsyncMapper\<T, R>): Promise\<void>

Iterates through the iterable and executes an action against each element. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters:

Name |
------ |
`R` |

#### Parameters:

Name | Type |
------ | ------ |
`mapper` | AsyncMapper\<T, R> |

**Returns:** Promise\<void>

___

### group

▸ **group**\<R>(`mapper`: AsyncMapper\<T, R>): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<[FluentGroup](_types_.fluentgroup.md)\<T, R>>

Groups the elements of the iterable keyed by equality of data at the specified projection.

#### Type parameters:

Name | Description |
------ | ------ |
`R` | The type of the groups' key. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | AsyncMapper\<T, R> | Projects the elements of the iterable into the group key they belong to. |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<[FluentGroup](_types_.fluentgroup.md)\<T, R>>

The [FluentAsyncIterable](_types_.fluentasynciterable.md) of the distinct groups.

___

### hasExactly

▸ **hasExactly**(`expectedNumber`: number): Promise\<boolean>

Checks if the number of elements of the iterable is equal to the threshold using a projection. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

#### Parameters:

Name | Type |
------ | ------ |
`expectedNumber` | number |

**Returns:** Promise\<boolean>

A promise that resolves to true if the number of elements of the iterable is equal to threshold and false if its not;

___

### hasLessOrExactly

▸ **hasLessOrExactly**(`threshold`: number): Promise\<boolean>

Checks if the number of elements of the iterable is less or equal the threshold using a projection. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`threshold` | number | The validation threshold |

**Returns:** Promise\<boolean>

True if the number of elements of the iterable is lesser or equal the threshold and false if it is not.

___

### hasLessThan

▸ **hasLessThan**(`threshold`: number): Promise\<boolean>

Checks if the number of elements of the iterable is less than the threshold using a projection. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`threshold` | number | The validation threshold |

**Returns:** Promise\<boolean>

A promise that resolves to true if the number of elements of the iterable is lesser than the threshold and false if it is not.

___

### hasMoreOrExactly

▸ **hasMoreOrExactly**(`threshold`: number): Promise\<boolean>

Checks if the number of elements of the iterable is more or equal the threshold using a projection. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`threshold` | number | The validation threshold |

**Returns:** Promise\<boolean>

True if the number of elements of the iterable is greater or equal the threshold and false if it is not.

___

### hasMoreThan

▸ **hasMoreThan**(`threshold`: number): Promise\<boolean>

Checks if the number of elements of the iterable is more than the threshold using a projection. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`threshold` | number | The validation threshold |

**Returns:** Promise\<boolean>

A promise that resolves to true if the number of elements of the iterable is greater than the threshold and false if it is not.

___

### isDistinct

▸ **isDistinct**\<R>(`mapper`: AsyncMapper\<T, R>, `maxOcurrences?`: undefined \| number): Promise\<boolean>

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

▸ **isDistinct**(`maxOcurrences?`: undefined \| number): Promise\<boolean>

Checks if the given async iterable have only distinct elements. This is a partial resolving operation,
and will return the result after as soon as an item got more occurrences than the specified

  Examples:

    * `fluent(['anchor', 'almond', 'anchor', 'alpine']).isDistinct()` returns true
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinct(word => word[0])` returns false
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinct(word => word[0], 2)` returns true

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`maxOcurrences?` | undefined \| number | The number of accepted occurrences for each item. Default: 1  |

**Returns:** Promise\<boolean>

___

### join

▸ **join**(`separator`: string, `mapper`: AsyncMapper\<T, string>): Promise\<string>

Projects and concatenates the elements of the iterable into a `string` using a separator. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`separator` | string | The separator to use in between the elements of the iterable. |
`mapper` | AsyncMapper\<T, string> | The function which projects the elements of the iterable into `string`s. Falls back to the identity function if omitted. |

**Returns:** Promise\<string>

A promise of the concatenated string of the elements in the iterable.

___

### last

▸ **last**(`predicate?`: [AsyncPredicate](../modules/_types_base_.md#asyncpredicate)\<T>): Promise\<T \| undefined>

Returns the last element of the iterable matching a predicate, or `undefined` value if no such element is found. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate?` | [AsyncPredicate](../modules/_types_base_.md#asyncpredicate)\<T> | The last element is to be returned which matches this predicate. Defaults to the always true function and thus, returns the last element in the iterable if omitted. |

**Returns:** Promise\<T \| undefined>

A promise of the last element matching the specified predicate, or `undefined` if no such element found.

___

### map

▸ **map**\<R>(`mapper`: AsyncMapper\<T, R>): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<R>

Transforms the iterable of `T` into an iterable of `R` by mapping all elements to an element of `R`.

#### Type parameters:

Name | Description |
------ | ------ |
`R` | The destination type of the mapping. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | AsyncMapper\<T, R> | The operation which maps an instance of `T` into an instance of `R`. |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<R>

A [FluentAsyncIterable](_types_.fluentasynciterable.md) of the mapped elements.

___

### max

▸ **max**\<R>(`mapper?`: AsyncMapper\<T, R>): Promise\<T \| undefined>

Finds the numeric maximum element of the iterable using a projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters:

Name | Default |
------ | ------ |
`R` | T |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | AsyncMapper\<T, R> | The function which projects the elements of the iterable into the comparable values. Falls back to the identity function if omitted. |

**Returns:** Promise\<T \| undefined>

A promise of the maximum of the iterable's projected elements.

___

### merge

▸ **merge**\<R>(...`iterables`: AsyncIterable\<R>[]): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T \| R>

Merge the iterable with the informed ones.

#### Type parameters:

Name |
------ |
`R` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`...iterables` | AsyncIterable\<R>[] | The iterables to be merged |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T \| R>

A new iterable that returns the elements of all others in the order of which resolves first

___

### mergeCatching

▸ **mergeCatching**\<R>(`errorCallback`: [ErrorCallback](_types_base_.errorcallback.md), ...`iterables`: AsyncIterable\<R>[]): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T \| R>

Merge the iterable with the informed ones, catching the errors of any of the iterables that fails, so the process can continue until all the successful iterables ends.

#### Type parameters:

Name |
------ |
`R` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`errorCallback` | [ErrorCallback](_types_base_.errorcallback.md) | A callback to be called if any of the iterables fail |
`...iterables` | AsyncIterable\<R>[] | The iterables to be merged |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T \| R>

A new iterable that returns the elements of all others in the order of which resolves first

___

### mergeEmitter

▸ **mergeEmitter**\<R>(`emitter`: EventEmitter, `options?`: [FluentEmitOptions](_types_base_.fluentemitoptions.md)): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T \| R>

Merge the iterable with the informed EventEmitter.

**IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
emission generates a new yielded result. The default key event is **'data'**.

Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.

If you need to change the key event or other characteristics, you can do it through the **options** parameter

#### Type parameters:

Name |
------ |
`R` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`emitter` | EventEmitter | The EventEmitter |
`options?` | [FluentEmitOptions](_types_base_.fluentemitoptions.md) | The EventEmitter options. Optional |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T \| R>

A new iterable that returns the elements of all others in the order of which resolves first

___

### mergeEmitterCatching

▸ **mergeEmitterCatching**\<R>(`errorCallback`: [ErrorCallback](_types_base_.errorcallback.md), `emitter`: EventEmitter, `options?`: [FluentEmitOptions](_types_base_.fluentemitoptions.md)): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T \| R>

Merge the iterable with the informed EventEmitter, catching the errors of any of the iterables that fails, so the process can continue until all the successful iterables ends.

**IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
emission generates a new yielded result. The default key event is **'data'**.

Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.

If you need to change the key event or other characteristics, you can do it through the **options** parameter

#### Type parameters:

Name |
------ |
`R` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`errorCallback` | [ErrorCallback](_types_base_.errorcallback.md) | A callback to be called if any of the iterables fail |
`emitter` | EventEmitter | The EventEmitter |
`options?` | [FluentEmitOptions](_types_base_.fluentemitoptions.md) | The EventEmitter options. Optional |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T \| R>

A new iterable that returns the elements of all others in the order of which resolves first

___

### min

▸ **min**\<R>(`mapper?`: AsyncMapper\<T, R>): Promise\<T \| undefined>

Finds the numeric minimum element of the iterable using a projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters:

Name | Default |
------ | ------ |
`R` | T |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | AsyncMapper\<T, R> | The function which projects the elements of the iterable into the comparable values. Falls back to the identity function if omitted. |

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

▸ **partition**(`criteria`: number \| [Equality](_types_base_.equality.md)\<T>): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<[FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>>

Groups the elements of the iterable into partitions of a specified size.<br>
  Note: the last partition size can be smaller than the specified size.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`criteria` | number \| [Equality](_types_base_.equality.md)\<T> | The expected size of the partitions or a equality to determine of two consecutive items must be in the same partition. |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<[FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>>

The [FluentAsyncIterable](_types_.fluentasynciterable.md) of partitions.

___

### prepend

▸ **prepend**(`item`: T): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

Adds a value to the beginning of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`item` | T | The item to be prepended to the iterable. |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

The [FluentAsyncIterable](_types_.fluentasynciterable.md) prepended with the element.

___

### reduce

▸ **reduce**\<R>(`reducer`: [AsyncReducer](_types_base_.asyncreducer.md)\<T, R>, `initial`: R): Promise\<R>

Aggregates the iterable by applying an accumulator function over the elements of the iterable. The specified seed value is used as the initial accumulator value. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters:

Name | Description |
------ | ------ |
`R` | The type of the accumulator value. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`reducer` | [AsyncReducer](_types_base_.asyncreducer.md)\<T, R> | The accumulator function, provides the next accumulator value out of the last accumulator value and the next element in the iterable. |
`initial` | R | The initial (aka *seed*) value of the accumulator. |

**Returns:** Promise\<R>

A promise of the aggregated value.

___

### reduceAndMap

▸ **reduceAndMap**\<A, R>(`reducer`: [AsyncReducer](_types_base_.asyncreducer.md)\<T, A>, `initial`: A, `result`: AsyncMapper\<A, R>): Promise\<R>

Aggregates the iterable by applying an accumulator function over the elements of the iterable. The specified seed value is used as the initial accumulator value, and the specified map function is used to project the result value from the accumulator value. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters:

Name | Description |
------ | ------ |
`A` | The type of the accumulator value. |
`R` | The type of the aggregation result. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`reducer` | [AsyncReducer](_types_base_.asyncreducer.md)\<T, A> | The accumulator function, provides the next accumulator value out of the last accumulator value and the next element in the iterable. |
`initial` | A | The initial (aka *seed*) value of the accumulator. |
`result` | AsyncMapper\<A, R> | The mapping function, projects the accumulator value of type `A` to the result value of type `R`. |

**Returns:** Promise\<R>

A promise of the aggregated value.

___

### repeat

▸ **repeat**(`n`: number): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

Repeats the elements of the iterable a specified amount of times.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`n` | number | The amount of times the iterable is to be repeated. |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

The [FluentAsyncIterable](_types_.fluentasynciterable.md) of the repeated iterable.

___

### skip

▸ **skip**(`n`: number): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

Bypasses a specified number of elements in the iterable and then returns the remaining elements.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`n` | number | The number of elements to skip. |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

A [FluentAsyncIterable](_types_.fluentasynciterable.md) of all the elements after the first `n` elements.

___

### skipWhile

▸ **skipWhile**(`condition`: AsyncPredicate\<T>): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

Bypasses elements in the iterable as long as a specified condition is true and then returns the remaining elements.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`condition` | AsyncPredicate\<T> | A predicate of `T`. All elements are skipped from the iterable until this evaluates to `false` for the first time. |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

A [FluentAsyncIterable](_types_.fluentasynciterable.md) of the elements after the condition is not met.

___

### sort

▸ **sort**(`comparer?`: [Comparer](_types_base_.comparer.md)\<T>): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

Sorts the elements of the iterable based on a specified comparer. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`comparer?` | [Comparer](_types_base_.comparer.md)\<T> | The comparer operation to use to determine the order of elements. Alphabetical ascending is used for [[string]] elements and numerical ascending is used for [[number]] |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

The sorted [FluentAsyncIterable](_types_.fluentasynciterable.md).

___

### sortBy

▸ **sortBy**(...`mappers`: (Mapper\<T, any> \| keyof T)[]): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

Sorts the elements of the iterable based on a specified fields. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * Alphabetical, ascending: `fluentAsync([{ a: 'anchor' }, { a: 'almond' }, { a: 'bound' }, { a: 'alpine' }]).sortBy((x) => x.a)` yields *almond*, *alpine*, *anchor* and *bound*.<br>
    * Alphabetical, descending: `fluentAsync([{ a: 'anchor' }, { a: 'almond' }, { a: 'bound' }, { a: 'alpine' }]).sortBy(desc((x) => x.a))` yields *bound*, *anchor*, *alpine* and *almond*.<br>

#### Parameters:

Name | Type |
------ | ------ |
`...mappers` | (Mapper\<T, any> \| keyof T)[] |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

The sorted [FluentIterable](_types_.fluentiterable.md).

___

### sum

▸ **sum**(`mapper?`: AsyncMapper\<T, number>): Promise\<number>

Calculates the sum of the elements of the iterable projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper?` | AsyncMapper\<T, number> | The function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted. |

**Returns:** Promise\<number>

A promise of the sum of the projected elements of the iterable.

___

### take

▸ **take**(`n`: number): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

Returns a specified number of contiguous elements from the start of the iterable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`n` | number | The number of elements to take. |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

A [FluentAsyncIterable](_types_.fluentasynciterable.md) of the first `n` elements.

___

### takeWhile

▸ **takeWhile**(`condition`: AsyncPredicate\<T>): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

Returns elements from the iterable as long as a specified condition is met.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`condition` | AsyncPredicate\<T> | A predicate of `T`. All elements are yielded from the iterable until this evaluates to `false` for the first time. |

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<T>

A [FluentAsyncIterable](_types_.fluentasynciterable.md) of the elements until the condition is met.

___

### toArray

▸ **toArray**(): Promise\<T[]>

Translates the iterable into an array. This is a resolving operation, will cause a full loop through all the elements of the iterable.

**Returns:** Promise\<T[]>

A promise of the array equivalent of the iterable.

___

### toObject

▸ **toObject**\<R>(`keySelector`: AsyncMapper\<T, keyof R>, `valueSelector?`: AsyncMapper\<T, R[keyof R]>): Promise\<R>

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by a key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters:

Name | Default | Description |
------ | ------ | ------ |
`R` | T | The expected type of the object. Cannot be enforced, this is strictly informal. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`keySelector` | AsyncMapper\<T, keyof R> | Projects an element of the iterable into the key of the corresponding field. |
`valueSelector?` | AsyncMapper\<T, R[keyof R]> | Projects an element of the iterable into the value of the corresponding field. The identity function is being used if omitted. |

**Returns:** Promise\<R>

A promise of the object composed of the elements of the iterable as fields.

___

### top

▸ **top**\<R>(`mapper`: AsyncMapper\<T, R>, `comparer`: [Comparer](_types_base_.comparer.md)\<R>): Promise\<T \| undefined>

Calculates the top element of the iterable using a projection and a comparer. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters:

Name | Description |
------ | ------ |
`R` | The type of the projected elements used for comparison. |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapper` | AsyncMapper\<T, R> | The function which projects the elements of the iterable into comparable. |
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

▸ **withIndex**(): [FluentAsyncIterable](_types_.fluentasynciterable.md)\<[Indexed](_types_base_.indexed.md)\<T>>

Maps all elements of the iterable to an instance of [Indexed](_types_base_.indexed.md), an index-value pair constructed of the original element in the iterable and it's index (starting from 0 for the first element in the iterable).

**Returns:** [FluentAsyncIterable](_types_.fluentasynciterable.md)\<[Indexed](_types_base_.indexed.md)\<T>>

A [FluentAsyncIterable](_types_.fluentasynciterable.md) of [Indexed](_types_base_.indexed.md).
