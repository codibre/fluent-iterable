fluent-iterable - v1.8.6

# fluent-iterable - v1.8.6

## Table of contents

### References

- [assureOrder](README.md#assureorder)
- [assureOrderDescending](README.md#assureorderdescending)

### Interfaces

- [Action](interfaces/action.md)
- [AsyncAction](interfaces/asyncaction.md)
- [AsyncMapper](interfaces/asyncmapper.md)
- [AsyncReducer](interfaces/asyncreducer.md)
- [Comparer](interfaces/comparer.md)
- [FluentAsyncIterable](interfaces/fluentasynciterable.md)
- [FluentEmitter](interfaces/fluentemitter.md)
- [FluentGroup](interfaces/fluentgroup.md)
- [FluentIterable](interfaces/fluentiterable.md)
- [Group](interfaces/group.md)
- [Mapper](interfaces/mapper.md)
- [OrderAssurable](interfaces/orderassurable.md)
- [Page](interfaces/page.md)
- [Pager](interfaces/pager.md)
- [Reducer](interfaces/reducer.md)

### Type aliases

- [AsyncIterableOperation](README.md#asynciterableoperation)
- [AsyncIterableResolvingOperation](README.md#asynciterableresolvingoperation)
- [AsyncPredicate](README.md#asyncpredicate)
- [IterableOperation](README.md#iterableoperation)
- [IterableOperationAsync](README.md#iterableoperationasync)
- [IterableResolvingOperation](README.md#iterableresolvingoperation)
- [Predicate](README.md#predicate)

### Variables

- [extend](README.md#extend)
- [extendAsync](README.md#extendasync)

### Functions

- [asc](README.md#asc)
- [asyncNegation](README.md#asyncnegation)
- [constant](README.md#constant)
- [depaginate](README.md#depaginate)
- [desc](README.md#desc)
- [empty](README.md#empty)
- [emptyAsync](README.md#emptyasync)
- [eq](README.md#eq)
- [falsity](README.md#falsity)
- [fluent](README.md#fluent)
- [fluentAsync](README.md#fluentasync)
- [fluentEmit](README.md#fluentemit)
- [fluentGroup](README.md#fluentgroup)
- [ge](README.md#ge)
- [getAverageStepper](README.md#getaveragestepper)
- [getGroupingDistinct](README.md#getgroupingdistinct)
- [gt](README.md#gt)
- [identity](README.md#identity)
- [interval](README.md#interval)
- [iterate](README.md#iterate)
- [iterateAll](README.md#iterateall)
- [iterateAllAsync](README.md#iterateallasync)
- [iterateAsync](README.md#iterateasync)
- [iterateObjEntries](README.md#iterateobjentries)
- [iterateObjProps](README.md#iterateobjprops)
- [le](README.md#le)
- [lt](README.md#lt)
- [mergeIterables](README.md#mergeiterables)
- [mergeIterators](README.md#mergeiterators)
- [negation](README.md#negation)
- [o](README.md#o)
- [od](README.md#od)
- [transformObjValues](README.md#transformobjvalues)
- [truth](README.md#truth)

## References

### assureOrder

Renames and exports: [o](README.md#o)

___

### assureOrderDescending

Renames and exports: [od](README.md#od)

## Type aliases

### AsyncIterableOperation

Ƭ **AsyncIterableOperation**: <T\>(`iterable`: *AsyncIterable*<T\>, ...`args`: *any*[]) => *AsyncIterable*<*any*\> \| *PromiseLike*<*AnyIterable*<*any*\>\>

An operation that returns an AsyncIterable

___

### AsyncIterableResolvingOperation

Ƭ **AsyncIterableResolvingOperation**: <T\>(`iterable`: *AsyncIterable*<T\>, ...`args`: *any*[]) => *PromiseLike*<*any*\>

A resolving operation

___

### AsyncPredicate

Ƭ **AsyncPredicate**<T\>: *AsyncFunctionPredicate*<T\> \| keyof T

#### Type parameters:

Name |
------ |
`T` |

___

### IterableOperation

Ƭ **IterableOperation**: <T\>(`this`: *Iterable*<T\>, ...`args`: *any*[]) => *Iterable*<*any*\>

An operation that returns an Iterable

___

### IterableOperationAsync

Ƭ **IterableOperationAsync**: <T\>(`this`: *Iterable*<T\>, ...`args`: *any*[]) => *AsyncIterable*<*any*\> \| *PromiseLike*<*AnyIterable*<*any*\>\>

An operation that returns an AsyncIterable

___

### IterableResolvingOperation

Ƭ **IterableResolvingOperation**: <T\>(`this`: *Iterable*<T\>, ...`args`: *any*[]) => *any*

A resolving operation

___

### Predicate

Ƭ **Predicate**<T\>: *FunctionPredicate*<T\> \| keyof T

#### Type parameters:

Name |
------ |
`T` |

## Variables

### extend

• `Const` **extend**: *object*

Used to add custom methods for the next fluent async iterables created
Is recommendable to also declare the method in the interface so it can be visible to typescript, like this:
```ts
declare module '@codibre/fluent-iterable'{
 interface FluentIterable {
   myCustomMethod<R>(myParams: someType): FluentIterable<R>
 }
}
```

#### Type declaration:

Name | Type |
------ | ------ |
`use` | (`name`: *string*, `operation`: [*IterableOperation*](README.md#iterableoperation)) => *void* |
`useAsync` | (`name`: *string*, `operation`: [*IterableOperationAsync*](README.md#iterableoperationasync)) => *void* |
`useResolving` | (`name`: *string*, `operation`: [*IterableResolvingOperation*](README.md#iterableresolvingoperation)) => *void* |

___

### extendAsync

• `Const` **extendAsync**: *object*

Used to add custom methods for the next fluent async iterables created
Is recommendable to also declare the method in the interface namespace so it can be visible to typescript, like this:
```ts
declare namespace FluentAsyncIterable {
  myCustomMethod<R>(myParams: someType): FluentAsyncIterable<R>
}
```

#### Type declaration:

Name | Type |
------ | ------ |
`use` | (`name`: *string*, `operation`: [*AsyncIterableOperation*](README.md#asynciterableoperation)) => *void* |
`useResolving` | (`name`: *string*, `operation`: <T\>(`iterable`: [*AsyncIterableResolvingOperation*](README.md#asynciterableresolvingoperation)) => *any*) => *void* |

## Functions

### asc

▸ **asc**<F\>(`f`: F): F

Mark a field name or a mapper as ascending, for use with sortBy

#### Type parameters:

Name |
------ |
`F` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`f` | F | the mapper or the field name    |

**Returns:** F

___

### asyncNegation

▸ **asyncNegation**<T\>(`predicate`: *AsyncPredicate*<T\>): *AsyncPredicate*<T\>

Provides a function that negates the informed async predicate

#### Type parameters:

Name | Description |
------ | ------ |
`T` | the item type of the [AsyncPredicate](README.md#asyncpredicate)   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | *AsyncPredicate*<T\> | The async predicate to be negated    |

**Returns:** *AsyncPredicate*<T\>

___

### constant

▸ **constant**<T\>(`value`: T): *function*

Returns a function that always returns the informed value

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | T | the constant value    |

**Returns:** *function*

___

### depaginate

▸ **depaginate**<T, TToken\>(`pager`: [*Pager*](interfaces/pager.md)<T, TToken\>): *AsyncIterable*<T\>

Translate a paginated resource into a non-paginated iterable of elements.

#### Type parameters:

Name | Description |
------ | ------ |
`T` | The type of the elements of the page.   |
`TToken` | The type of the next page token associated to the page.   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`pager` | [*Pager*](interfaces/pager.md)<T, TToken\> | Represents the way of retrieving pages from the paginated resource.   |

**Returns:** *AsyncIterable*<T\>

The iterable representing a steady flow of elements from the paginated resource.

___

### desc

▸ **desc**<F\>(`f`: F): F

Mark a field name or a mapper as descending, for use with sortBy

#### Type parameters:

Name |
------ |
`F` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`f` | F | the mapper or the field name    |

**Returns:** F

___

### empty

▸ **empty**(): *Iterable*<*undefined*\>

Provides an empty iterable

**Returns:** *Iterable*<*undefined*\>

___

### emptyAsync

▸ **emptyAsync**(): *AsyncIterable*<*undefined*\>

Provides an empty async iterable

**Returns:** *AsyncIterable*<*undefined*\>

___

### eq

▸ **eq**<T\>(`b`: *any*): *function*

Provides a "equals" comparer

#### Type parameters:

Name | Description |
------ | ------ |
`T` | the type of b   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`b` | *any* | the value for comparison    |

**Returns:** *function*

___

### falsity

▸ **falsity**(): *boolean*

Always returns false

**Returns:** *boolean*

___

### fluent

▸ **fluent**<T\>(`iterable`: *Iterable*<T\>): [*FluentIterable*](interfaces/fluentiterable.md)<T\>

Tranforms an iterable into a [FluentIterable](interfaces/fluentiterable.md).

#### Type parameters:

Name | Description |
------ | ------ |
`T` | The type of the items in the iterable.   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`iterable` | *Iterable*<T\> | The iterable instance.   |

**Returns:** [*FluentIterable*](interfaces/fluentiterable.md)<T\>

The [FluentIterable](interfaces/fluentiterable.md) instance.

___

### fluentAsync

▸ **fluentAsync**<T\>(`iterable`: *AnyIterable*<T\> \| *PromiseLike*<*AnyIterable*<T\>\>): [*FluentAsyncIterable*](interfaces/fluentasynciterable.md)<T\>

Tranforms an asynchronous iterable into a [FluentAsyncIterable](interfaces/fluentasynciterable.md).

#### Type parameters:

Name | Description |
------ | ------ |
`T` | The type of the items in the async iterable.   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`iterable` | *AnyIterable*<T\> \| *PromiseLike*<*AnyIterable*<T\>\> | The asynchronous iterable instance.   |

**Returns:** [*FluentAsyncIterable*](interfaces/fluentasynciterable.md)<T\>

The [FluentAsyncIterable](interfaces/fluentasynciterable.md) instance.

___

### fluentEmit

▸ **fluentEmit**<T\>(`emitter`: EventEmitter, `options?`: FluentEmitOptions): [*FluentAsyncIterable*](interfaces/fluentasynciterable.md)<T\>

Transforms an EventEmitter into a [FluentAsyncIterable](interfaces/fluentasynciterable.md).

**IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
emission generates a new yielded result. The default key event is **'data'**.

Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.

If you need to change the key event or other characteristics, you can do it through the **options** parameter

#### Type parameters:

Name | Default | Description |
------ | ------ | ------ |
`T` | *any* | The type of the items in the created FluentAsyncIterable.   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`emitter` | EventEmitter | The EventEmitter   |
`options?` | FluentEmitOptions | The EventEmitter options. Optional   |

**Returns:** [*FluentAsyncIterable*](interfaces/fluentasynciterable.md)<T\>

The [FluentAsyncIterable](interfaces/fluentasynciterable.md) instance.

___

### fluentGroup

▸ **fluentGroup**<Key, Value\>(`grp`: [*Group*](interfaces/group.md)<Value, Key\>): [*FluentGroup*](interfaces/fluentgroup.md)<Value, Key\>

Convert a simple [Group](interfaces/group.md) to a [FluentGroup](interfaces/fluentgroup.md)

#### Type parameters:

Name | Description |
------ | ------ |
`Key` | The type of the key   |
`Value` | the type of the items of the value property   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`grp` | [*Group*](interfaces/group.md)<Value, Key\> | the [Group](interfaces/group.md) to be converted    |

**Returns:** [*FluentGroup*](interfaces/fluentgroup.md)<Value, Key\>

___

### ge

▸ **ge**<T\>(`b`: *any*): *function*

Provides a "greater or equal" comparer

#### Type parameters:

Name | Description |
------ | ------ |
`T` | the type of b   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`b` | *any* | the value for comparison    |

**Returns:** *function*

___

### getAverageStepper

▸ **getAverageStepper**(): AverageStepper

Returns an object to calculates incremental average/iterative means

**Returns:** AverageStepper

___

### getGroupingDistinct

▸ **getGroupingDistinct**<K, T\>(`valueDistinctMapper`: keyof T): *KVGroupTransform*<K, T\>

Return a transformation function for use in group operation to guarantee distinct elements for each group, following the informed grouping mapper

#### Type parameters:

Name |
------ |
`K` |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`valueDistinctMapper` | keyof T | must return the unicity key. The unicity is respected by group    |

**Returns:** *KVGroupTransform*<K, T\>

▸ **getGroupingDistinct**<K, T, KT, NewT\>(`valueMapper`: KT, `valueDistinctMapper`: keyof *ItemType*<T[KT]\>): *KVGroupTransform*<K, T, NewT\>

Return a transformation function for use in group operation to guarantee distinct elements for each group, following the informed grouping mapper

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`K` | - | - |
`T` | - | - |
`KT` | *string* \| *number* \| *symbol* | - |
`NewT` | *unknown* | *ItemType*<T[KT]\> |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`valueMapper` | KT | maps the value for a Iterable of values. Useful if you need to flat map your values per group somehow   |
`valueDistinctMapper` | keyof *ItemType*<T[KT]\> | must return the unicity key. The unicity is respected by group    |

**Returns:** *KVGroupTransform*<K, T, NewT\>

▸ **getGroupingDistinct**<K, T, NewT\>(`valueDistinctMapper`: [*Mapper*](interfaces/mapper.md)<T, NewT\>): *KVGroupTransform*<K, T, NewT\>

Return a transformation function for use in group operation to guarantee distinct elements for each group, following the informed grouping mapper

#### Type parameters:

Name |
------ |
`K` |
`T` |
`NewT` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`valueDistinctMapper` | [*Mapper*](interfaces/mapper.md)<T, NewT\> | must return the unicity key. The unicity is respected by group    |

**Returns:** *KVGroupTransform*<K, T, NewT\>

▸ **getGroupingDistinct**<K, T, NewT\>(`valueMapper`: [*Mapper*](interfaces/mapper.md)<T, *Iterable*<NewT\>\>, `valueDistinctMapper?`: [*Mapper*](interfaces/mapper.md)<NewT, *unknown*\> \| keyof NewT): *KVGroupTransform*<K, T, NewT\>

Return a transformation function for use in group operation to guarantee distinct elements for each group, following the informed grouping mapper

#### Type parameters:

Name | Default |
------ | ------ |
`K` | - |
`T` | - |
`NewT` | T[] |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`valueMapper` | [*Mapper*](interfaces/mapper.md)<T, *Iterable*<NewT\>\> | maps the value for a Iterable of values. Useful if you need to flat map your values per group somehow   |
`valueDistinctMapper?` | [*Mapper*](interfaces/mapper.md)<NewT, *unknown*\> \| keyof NewT | must return the unicity key. The unicity is respected by group    |

**Returns:** *KVGroupTransform*<K, T, NewT\>

___

### gt

▸ **gt**<T\>(`b`: *any*): *function*

Provides a "greater than" comparer

#### Type parameters:

Name | Description |
------ | ------ |
`T` | the type of b   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`b` | *any* | the value for comparison    |

**Returns:** *function*

___

### identity

▸ **identity**<T\>(`param`: T): T

Returns exactly the informed parameter

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`param` | T | The informed parameter to be returned    |

**Returns:** T

___

### interval

▸ **interval**(`fromInclusive?`: *number*, `count?`: *number*): [*FluentIterable*](interfaces/fluentiterable.md)<*number*\>

Generates a `count` long sequential integer interval starting from `fromInclusive`.

* The interval starts at zero if `fromInclusive` is not specified.
* The interval ends in infinity if `count` is not specified.

Examples:

1. `interval(5, 3)` generates an interval of `[5, 6, 7]`
2. `interval(5)` generates an interval of `[5, 6, 7, ...]`
3. `interval()` generates an interval of `[0, 1, 2, ...]`
4. `fluent(interval(1)).take(10).forEach(console.log)` prints all numbers between 1 and 10 using [fluent](README.md#fluent).

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`fromInclusive?` | *number* | Specifies the start of the interval. Defaults to zero.   |
`count?` | *number* | Specifies the length of the interval. The interval provides numbers indefinitely if omitted.   |

**Returns:** [*FluentIterable*](interfaces/fluentiterable.md)<*number*\>

The iterable of numbers in the interval.

___

### iterate

▸ `Const`**iterate**<T\>(`a`: *Iterable*<T\>): *Iterable*<T\>

Iterates all element of an iterable

#### Type parameters:

Name | Description |
------ | ------ |
`T` | the item type of the [[Iterable]]   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`a` | *Iterable*<T\> | The iterable    |

**Returns:** *Iterable*<T\>

___

### iterateAll

▸ **iterateAll**<T\>(`a`: *Iterable*<*Iterable*<T\>\>): *Generator*<T, *void*, *undefined*\>

Iterates in all elements of an iterable of iterables

#### Type parameters:

Name | Description |
------ | ------ |
`T` | the item type of the internal [[Iterable]]   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`a` | *Iterable*<*Iterable*<T\>\> | The iterable    |

**Returns:** *Generator*<T, *void*, *undefined*\>

___

### iterateAllAsync

▸ **iterateAllAsync**<T\>(`a`: *AsyncIterable*<*AnyIterable*<T\>\>): *AsyncGenerator*<T, *void*, *undefined*\>

Iterates in all elements of an async iterable of iterables or async iterables

#### Type parameters:

Name | Description |
------ | ------ |
`T` | the item type of the internal [[Iterable/AsyncIterable]]   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`a` | *AsyncIterable*<*AnyIterable*<T\>\> | The async iterable    |

**Returns:** *AsyncGenerator*<T, *void*, *undefined*\>

___

### iterateAsync

▸ **iterateAsync**<T\>(`a`: *AnyIterable*<T\> \| *PromiseLike*<*AnyIterable*<T\>\>): *AsyncIterable*<T\>

Iterates all element of an async iterable

#### Type parameters:

Name | Description |
------ | ------ |
`T` | the item type of the [[Iterable]]   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`a` | *AnyIterable*<T\> \| *PromiseLike*<*AnyIterable*<T\>\> | The async iterable    |

**Returns:** *AsyncIterable*<T\>

___

### iterateObjEntries

▸ **iterateObjEntries**<T\>(`obj`: T): *Iterable*<[keyof T, *unknown*]\>

Iterates over all owned entries of given object

#### Type parameters:

Name | Type |
------ | ------ |
`T` | *object* |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`obj` | T | The object to iterate with    |

**Returns:** *Iterable*<[keyof T, *unknown*]\>

___

### iterateObjProps

▸ **iterateObjProps**<T\>(`obj`: T): *Iterable*<keyof T\>

Iterates over all owned properties of the given object

#### Type parameters:

Name | Type |
------ | ------ |
`T` | *object* |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`obj` | T | The object to iterate with    |

**Returns:** *Iterable*<keyof T\>

___

### le

▸ **le**<T\>(`b`: *any*): *function*

Provides a "lesser or equal" comparer

#### Type parameters:

Name | Description |
------ | ------ |
`T` | the type of b   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`b` | *any* | the value for comparison    |

**Returns:** *function*

___

### lt

▸ **lt**<T\>(`b`: *any*): *function*

Provides a "lesser than" comparer

#### Type parameters:

Name | Description |
------ | ------ |
`T` | the type of b   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`b` | *any* | the value for comparison    |

**Returns:** *function*

___

### mergeIterables

▸ **mergeIterables**<T\>(...`iterables`: *AsyncIterable*<T\>[]): *AsyncIterable*<T\>

Merge the informed async iterables into one. The item orders will be defined from what is returned first

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`...iterables` | *AsyncIterable*<T\>[] | the iterables to merge    |

**Returns:** *AsyncIterable*<T\>

▸ **mergeIterables**<T\>(`callback`: ErrorCallback, ...`iterables`: *AsyncIterable*<T\>[]): *AsyncIterable*<T\>

Merge the informed async iterables into one. The item orders will be defined from what is returned first

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`callback` | ErrorCallback | A callback to case in case that any iterable throws an error. If informed, an failed iterable will not cause an error in the merging   |
`...iterables` | *AsyncIterable*<T\>[] | the iterables to merge    |

**Returns:** *AsyncIterable*<T\>

___

### mergeIterators

▸ **mergeIterators**<T\>(`callback`: ErrorCallback \| *undefined*, ...`iterators`: *AsyncIterator*<T\>[]): *AsyncIterable*<T\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`callback` | ErrorCallback \| *undefined* |
`...iterators` | *AsyncIterator*<T\>[] |

**Returns:** *AsyncIterable*<T\>

___

### negation

▸ **negation**<T\>(`predicate`: *Predicate*<T\>): *Predicate*<T\>

Provides a function that negates the informed predicate

#### Type parameters:

Name | Description |
------ | ------ |
`T` | the item type of the [Predicate](README.md#predicate)   |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`predicate` | *Predicate*<T\> | The predicate to be negated    |

**Returns:** *Predicate*<T\>

___

### o

▸ **o**<F\>(`f`: F): F

Returns a new instance of a function with a order assuring mark.
Fluent Iterable will treat order Assuring marked function as if
they're guaranteed to return ordered result in regard some iterable
where they're applied. The actual order, though, is of responsibility
of the code using this package.

This is useful to have access to faster versions of some algorithms, but
the output may not match expectation if the resulting order is not actually right.

#### Type parameters:

Name | Type |
------ | ------ |
`F` | Function \| [*FluentIterable*](interfaces/fluentiterable.md)<*any*\> \| [*FluentAsyncIterable*](interfaces/fluentasynciterable.md)<*any*\> |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`f` | F | the function to assure order    |

**Returns:** F

___

### od

▸ **od**<F\>(`f`: F): F

Returns a new instance of a function with a descending order assuring mark.
Fluent Iterable will treat descending order assuring marked functions as if
they're guaranteed to return descending ordered results in regard some iterable
where they're applied. The actual order, though, is of responsibility
of the code using this package.

This is useful to have access to faster versions of some algorithms, but
the output may not match expectation if the resulting order is not actually right.

#### Type parameters:

Name | Type |
------ | ------ |
`F` | Function \| [*FluentIterable*](interfaces/fluentiterable.md)<*any*\> \| [*FluentAsyncIterable*](interfaces/fluentasynciterable.md)<*any*\> |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`f` | F | the function to assure order    |

**Returns:** F

___

### transformObjValues

▸ **transformObjValues**<T\>(`obj`: T, `mapper`: [*Mapper*](interfaces/mapper.md)<[keyof T, T[keyof T]], *unknown*\>): *object*

Applies a transformation to the value of all pro

#### Type parameters:

Name | Type |
------ | ------ |
`T` | *object* |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`obj` | T | The object to be iterated with   |
`mapper` | [*Mapper*](interfaces/mapper.md)<[keyof T, T[keyof T]], *unknown*\> | the mapper to be applied to each value    |

**Returns:** *object*

___

### truth

▸ **truth**(): *boolean*

Always returns true

**Returns:** *boolean*
