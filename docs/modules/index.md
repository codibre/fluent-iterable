[fluent-iterable - v1.22.0](../README.md) / index

# Module: index

## Table of contents

### References

- [assureOrder](index.md#assureorder)
- [assureOrderDescending](index.md#assureorderdescending)

### Interfaces

- [Action](../interfaces/index.Action.md)
- [AsyncAction](../interfaces/index.AsyncAction.md)
- [AsyncMapper](../interfaces/index.AsyncMapper.md)
- [AsyncReducer](../interfaces/index.AsyncReducer.md)
- [Comparer](../interfaces/index.Comparer.md)
- [FluentAsyncIterable](../interfaces/index.FluentAsyncIterable.md)
- [FluentEmitter](../interfaces/index.FluentEmitter.md)
- [FluentGroup](../interfaces/index.FluentGroup.md)
- [FluentIterable](../interfaces/index.FluentIterable.md)
- [Group](../interfaces/index.Group.md)
- [Mapper](../interfaces/index.Mapper.md)
- [OrderAssurable](../interfaces/index.OrderAssurable.md)
- [Page](../interfaces/index.Page.md)
- [Pager](../interfaces/index.Pager.md)
- [Reducer](../interfaces/index.Reducer.md)

### Type Aliases

- [AsyncIterableOperation](index.md#asynciterableoperation)
- [AsyncIterableResolvingOperation](index.md#asynciterableresolvingoperation)
- [AsyncPredicate](index.md#asyncpredicate)
- [IterableOperation](index.md#iterableoperation)
- [IterableOperationAsync](index.md#iterableoperationasync)
- [IterableResolvingOperation](index.md#iterableresolvingoperation)
- [Predicate](index.md#predicate)

### Variables

- [extend](index.md#extend)
- [extendAsync](index.md#extendasync)
- [head](index.md#head)
- [tail](index.md#tail)

### Functions

- [asc](index.md#asc)
- [asyncNegation](index.md#asyncnegation)
- [constant](index.md#constant)
- [depaginate](index.md#depaginate)
- [desc](index.md#desc)
- [empty](index.md#empty)
- [emptyAsync](index.md#emptyasync)
- [eq](index.md#eq)
- [f](index.md#f)
- [falsity](index.md#falsity)
- [fluent](index.md#fluent)
- [fluentAsync](index.md#fluentasync)
- [fluentEmit](index.md#fluentemit)
- [fluentGroup](index.md#fluentgroup)
- [fluentObject](index.md#fluentobject)
- [ge](index.md#ge)
- [getAverageStepper](index.md#getaveragestepper)
- [getGroupingDistinct](index.md#getgroupingdistinct)
- [getGroupingTopHit](index.md#getgroupingtophit)
- [gt](index.md#gt)
- [identity](index.md#identity)
- [interval](index.md#interval)
- [isAnyFluentIterable](index.md#isanyfluentiterable)
- [isAnyIterable](index.md#isanyiterable)
- [isAsyncIterable](index.md#isasynciterable)
- [isFluentAsyncIterable](index.md#isfluentasynciterable)
- [isFluentIterable](index.md#isfluentiterable)
- [isIterable](index.md#isiterable)
- [isPromise](index.md#ispromise)
- [iterate](index.md#iterate)
- [iterateAll](index.md#iterateall)
- [iterateAllAsync](index.md#iterateallasync)
- [iterateAsync](index.md#iterateasync)
- [iterateObjEntries](index.md#iterateobjentries)
- [iterateObjProps](index.md#iterateobjprops)
- [le](index.md#le)
- [lt](index.md#lt)
- [mergeIterables](index.md#mergeiterables)
- [mergeIterators](index.md#mergeiterators)
- [negation](index.md#negation)
- [o](index.md#o)
- [od](index.md#od)
- [transformObjValues](index.md#transformobjvalues)
- [truth](index.md#truth)

## References

### assureOrder

Renames and re-exports [o](index.md#o)

___

### assureOrderDescending

Renames and re-exports [od](index.md#od)

## Type Aliases

### AsyncIterableOperation

Ƭ **AsyncIterableOperation**: <T\>(`iterable`: `AsyncIterable`<`T`\>, ...`args`: `any`[]) => `AsyncIterable`<`any`\> \| `PromiseLike`<`AnyIterable`<`any`\>\>

#### Type declaration

▸ <`T`\>(`iterable`, ...`args`): `AsyncIterable`<`any`\> \| `PromiseLike`<`AnyIterable`<`any`\>\>

An operation that returns an AsyncIterable

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `iterable` | `AsyncIterable`<`T`\> |
| `...args` | `any`[] |

##### Returns

`AsyncIterable`<`any`\> \| `PromiseLike`<`AnyIterable`<`any`\>\>

___

### AsyncIterableResolvingOperation

Ƭ **AsyncIterableResolvingOperation**: <T\>(`iterable`: `AsyncIterable`<`T`\>, ...`args`: `any`[]) => `PromiseLike`<`any`\>

#### Type declaration

▸ <`T`\>(`iterable`, ...`args`): `PromiseLike`<`any`\>

A resolving operation

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `iterable` | `AsyncIterable`<`T`\> |
| `...args` | `any`[] |

##### Returns

`PromiseLike`<`any`\>

___

### AsyncPredicate

Ƭ **AsyncPredicate**<`T`\>: `AsyncFunctionPredicate`<`T`\> \| keyof `T`

#### Type parameters

| Name |
| :------ |
| `T` |

___

### IterableOperation

Ƭ **IterableOperation**: <T\>(`this`: `Iterable`<`T`\>, ...`args`: `any`[]) => `Iterable`<`any`\>

#### Type declaration

▸ <`T`\>(`this`, ...`args`): `Iterable`<`any`\>

An operation that returns an Iterable

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `Iterable`<`T`\> |
| `...args` | `any`[] |

##### Returns

`Iterable`<`any`\>

___

### IterableOperationAsync

Ƭ **IterableOperationAsync**: <T\>(`this`: `Iterable`<`T`\>, ...`args`: `any`[]) => `AsyncIterable`<`any`\> \| `PromiseLike`<`AnyIterable`<`any`\>\>

#### Type declaration

▸ <`T`\>(`this`, ...`args`): `AsyncIterable`<`any`\> \| `PromiseLike`<`AnyIterable`<`any`\>\>

An operation that returns an AsyncIterable

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `Iterable`<`T`\> |
| `...args` | `any`[] |

##### Returns

`AsyncIterable`<`any`\> \| `PromiseLike`<`AnyIterable`<`any`\>\>

___

### IterableResolvingOperation

Ƭ **IterableResolvingOperation**: <T\>(`this`: `Iterable`<`T`\>, ...`args`: `any`[]) => `any`

#### Type declaration

▸ <`T`\>(`this`, ...`args`): `any`

A resolving operation

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `Iterable`<`T`\> |
| `...args` | `any`[] |

##### Returns

`any`

___

### Predicate

Ƭ **Predicate**<`T`\>: `FunctionPredicate`<`T`\> \| keyof `T`

#### Type parameters

| Name |
| :------ |
| `T` |

## Variables

### extend

• `Const` **extend**: `Object`

Used to add custom methods for the next fluent async iterables created
Is recommendable to also declare the method in the interface so it can be visible to typescript, like this:
```ts
declare module '@codibre/fluent-iterable'{
 interface FluentIterable {
   myCustomMethod<R>(myParams: someType): FluentIterable<R>
 }
}
```

#### Type declaration

| Name | Type |
| :------ | :------ |
| `use` | (`name`: `string`, `operation`: [`IterableOperation`](index.md#iterableoperation)) => `void` |
| `useAsync` | (`name`: `string`, `operation`: [`IterableOperationAsync`](index.md#iterableoperationasync)) => `void` |
| `useResolving` | (`name`: `string`, `operation`: [`IterableResolvingOperation`](index.md#iterableresolvingoperation)) => `void` |

___

### extendAsync

• `Const` **extendAsync**: `Object`

Used to add custom methods for the next fluent async iterables created
Is recommendable to also declare the method in the interface namespace so it can be visible to typescript, like this:
```ts
declare namespace FluentAsyncIterable {
  myCustomMethod<R>(myParams: someType): FluentAsyncIterable<R>
}
```

#### Type declaration

| Name | Type |
| :------ | :------ |
| `use` | (`name`: `string`, `operation`: [`AsyncIterableOperation`](index.md#asynciterableoperation)) => `void` |
| `useResolving` | (`name`: `string`, `operation`: (`iterable`: [`AsyncIterableResolvingOperation`](index.md#asynciterableresolvingoperation)) => `any`) => `void` |

___

### head

• `Const` **head**: typeof [`head`](index.md#head)

___

### tail

• `Const` **tail**: typeof [`tail`](index.md#tail)

## Functions

### asc

▸ **asc**<`F`\>(`f`): `F`

Mark a field name or a mapper as ascending, for use with sortBy

#### Type parameters

| Name |
| :------ |
| `F` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `f` | `F` | the mapper or the field name |

#### Returns

`F`

___

### asyncNegation

▸ **asyncNegation**<`T`\>(`predicate`): `AsyncPredicate`<`T`\>

Provides a function that negates the informed async predicate

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | the item type of the [AsyncPredicate](index.md#asyncpredicate) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | `AsyncPredicate`<`T`\> | The async predicate to be negated |

#### Returns

`AsyncPredicate`<`T`\>

___

### constant

▸ **constant**<`T`\>(`value`): () => `T`

Returns a function that always returns the informed value

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | the constant value |

#### Returns

`fn`

▸ (): `T`

##### Returns

`T`

___

### depaginate

▸ **depaginate**<`T`, `TToken`\>(`pager`): `AsyncIterable`<`T`\>

Translate a paginated resource into a non-paginated iterable of elements.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the elements of the page. |
| `TToken` | The type of the next page token associated to the page. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pager` | [`Pager`](../interfaces/index.Pager.md)<`T`, `TToken`\> | Represents the way of retrieving pages from the paginated resource. |

#### Returns

`AsyncIterable`<`T`\>

The iterable representing a steady flow of elements from the paginated resource.

___

### desc

▸ **desc**<`F`\>(`f`): `F`

Mark a field name or a mapper as descending, for use with sortBy

#### Type parameters

| Name |
| :------ |
| `F` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `f` | `F` | the mapper or the field name |

#### Returns

`F`

___

### empty

▸ **empty**(): `Iterable`<`undefined`\>

Provides an empty iterable

#### Returns

`Iterable`<`undefined`\>

___

### emptyAsync

▸ **emptyAsync**(): `AsyncIterable`<`undefined`\>

Provides an empty async iterable

#### Returns

`AsyncIterable`<`undefined`\>

___

### eq

▸ **eq**<`T`\>(`b`): (`a`: `T`) => `boolean`

Provides a "equals" comparer

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | the type of b |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `b` | `any` | the value for comparison |

#### Returns

`fn`

▸ (`a`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T` |

##### Returns

`boolean`

___

### f

▸ **f**<`T`\>(`iterable`): [`FluentIterable`](../interfaces/index.FluentIterable.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable` | `Iterable`<`T`\> |

#### Returns

[`FluentIterable`](../interfaces/index.FluentIterable.md)<`T`\>

▸ **f**<`T`\>(`iterable`): [`FluentAsyncIterable`](../interfaces/index.FluentAsyncIterable.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable` | `AsyncIterable`<`T`\> |

#### Returns

[`FluentAsyncIterable`](../interfaces/index.FluentAsyncIterable.md)<`T`\>

▸ **f**<`T`, `K`\>(`iterable`): [`FluentAsyncIterable`](../interfaces/index.FluentAsyncIterable.md)<[`K`, `T`[`K`]]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable` | `T` |

#### Returns

[`FluentAsyncIterable`](../interfaces/index.FluentAsyncIterable.md)<[`K`, `T`[`K`]]\>

▸ **f**<`T`\>(`emitter`, `options?`): [`FluentAsyncIterable`](../interfaces/index.FluentAsyncIterable.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` |
| `options?` | [`FluentEmitOptions`](../interfaces/types.FluentEmitOptions.md) |

#### Returns

[`FluentAsyncIterable`](../interfaces/index.FluentAsyncIterable.md)<`T`\>

___

### falsity

▸ **falsity**(): `boolean`

Always returns false

#### Returns

`boolean`

___

### fluent

▸ **fluent**<`T`\>(`iterable`): [`FluentIterable`](../interfaces/index.FluentIterable.md)<`T`\>

Tranforms an iterable into a [FluentIterable](../interfaces/index.FluentIterable.md).

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the items in the iterable. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable` | `Iterable`<`T`\> | The iterable instance. |

#### Returns

[`FluentIterable`](../interfaces/index.FluentIterable.md)<`T`\>

The [FluentIterable](../interfaces/index.FluentIterable.md) instance.

___

### fluentAsync

▸ **fluentAsync**<`T`\>(`iterable`): [`FluentAsyncIterable`](../interfaces/index.FluentAsyncIterable.md)<`T`\>

Tranforms an asynchronous iterable into a [FluentAsyncIterable](../interfaces/index.FluentAsyncIterable.md).

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the items in the async iterable. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable` | `AnyIterable`<`T`\> \| `PromiseLike`<`AnyIterable`<`T`\>\> | The asynchronous iterable instance. |

#### Returns

[`FluentAsyncIterable`](../interfaces/index.FluentAsyncIterable.md)<`T`\>

The [FluentAsyncIterable](../interfaces/index.FluentAsyncIterable.md) instance.

___

### fluentEmit

▸ **fluentEmit**<`T`\>(`emitter`, `options?`): [`FluentAsyncIterable`](../interfaces/index.FluentAsyncIterable.md)<`T`\>

Transforms an EventEmitter into a [FluentAsyncIterable](../interfaces/index.FluentAsyncIterable.md).

**IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
emission generates a new yielded result. The default key event is **'data'**.

Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.

If you need to change the key event or other characteristics, you can do it through the **options** parameter

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | `any` | The type of the items in the created FluentAsyncIterable. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | The EventEmitter |
| `options?` | [`FluentEmitOptions`](../interfaces/types.FluentEmitOptions.md) | The EventEmitter options. Optional |

#### Returns

[`FluentAsyncIterable`](../interfaces/index.FluentAsyncIterable.md)<`T`\>

The [FluentAsyncIterable](../interfaces/index.FluentAsyncIterable.md) instance.

___

### fluentGroup

▸ **fluentGroup**<`Key`, `Value`\>(`grp`): [`FluentGroup`](../interfaces/index.FluentGroup.md)<`Value`, `Key`\>

Convert a simple [Group](../interfaces/index.Group.md) to a [FluentGroup](../interfaces/index.FluentGroup.md)

#### Type parameters

| Name | Description |
| :------ | :------ |
| `Key` | The type of the key |
| `Value` | the type of the items of the value property |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `grp` | [`Group`](../interfaces/index.Group.md)<`Value`, `Key`\> | the [Group](../interfaces/index.Group.md) to be converted |

#### Returns

[`FluentGroup`](../interfaces/index.FluentGroup.md)<`Value`, `Key`\>

___

### fluentObject

▸ **fluentObject**<`T`, `K`\>(`iterable`): [`FluentIterable`](../interfaces/index.FluentIterable.md)<[`K`, `T`[`K`]]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable` | `T` |

#### Returns

[`FluentIterable`](../interfaces/index.FluentIterable.md)<[`K`, `T`[`K`]]\>

___

### ge

▸ **ge**<`T`\>(`b`): (`a`: `T`) => `boolean`

Provides a "greater or equal" comparer

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | the type of b |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `b` | `any` | the value for comparison |

#### Returns

`fn`

▸ (`a`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T` |

##### Returns

`boolean`

___

### getAverageStepper

▸ **getAverageStepper**(): [`AverageStepper`](../interfaces/types.AverageStepper.md)

Returns an object to calculates incremental average/iterative means

#### Returns

[`AverageStepper`](../interfaces/types.AverageStepper.md)

___

### getGroupingDistinct

▸ **getGroupingDistinct**<`K`, `T`\>(`valueDistinctMapper`): [`KVGroupTransform`](../interfaces/types.KVGroupTransform.md)<`K`, `T`\>

Return a transformation function for use in group operation to guarantee distinct elements for each group, following the informed grouping mapper

#### Type parameters

| Name |
| :------ |
| `K` |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `valueDistinctMapper` | keyof `T` | must return the unicity key. The unicity is respected by group |

#### Returns

[`KVGroupTransform`](../interfaces/types.KVGroupTransform.md)<`K`, `T`\>

▸ **getGroupingDistinct**<`K`, `T`, `KT`, `NewT`\>(`valueMapper`, `valueDistinctMapper`): [`KVGroupTransform`](../interfaces/types.KVGroupTransform.md)<`K`, `T`, `NewT`\>

Return a transformation function for use in group operation to guarantee distinct elements for each group, following the informed grouping mapper

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `K` |
| `T` | `T` |
| `KT` | extends `string` \| `number` \| `symbol` |
| `NewT` | extends `unknown` = [`ItemType`](types.md#itemtype)<`T`[`KT`]\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `valueMapper` | `KT` | maps the value for a Iterable of values. Useful if you need to flat map your values per group somehow |
| `valueDistinctMapper` | keyof [`ItemType`](types.md#itemtype)<`T`[`KT`]\> | must return the unicity key. The unicity is respected by group |

#### Returns

[`KVGroupTransform`](../interfaces/types.KVGroupTransform.md)<`K`, `T`, `NewT`\>

▸ **getGroupingDistinct**<`K`, `T`, `NewT`\>(`valueDistinctMapper`): [`KVGroupTransform`](../interfaces/types.KVGroupTransform.md)<`K`, `T`, `NewT`\>

Return a transformation function for use in group operation to guarantee distinct elements for each group, following the informed grouping mapper

#### Type parameters

| Name |
| :------ |
| `K` |
| `T` |
| `NewT` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `valueDistinctMapper` | [`Mapper`](../interfaces/index.Mapper.md)<`T`, `NewT`\> | must return the unicity key. The unicity is respected by group |

#### Returns

[`KVGroupTransform`](../interfaces/types.KVGroupTransform.md)<`K`, `T`, `NewT`\>

▸ **getGroupingDistinct**<`K`, `T`, `NewT`\>(`valueMapper`, `valueDistinctMapper?`): [`KVGroupTransform`](../interfaces/types.KVGroupTransform.md)<`K`, `T`, `NewT`\>

Return a transformation function for use in group operation to guarantee distinct elements for each group, following the informed grouping mapper

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `K` |
| `T` | `T` |
| `NewT` | `T`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `valueMapper` | [`Mapper`](../interfaces/index.Mapper.md)<`T`, `Iterable`<`NewT`\>\> | maps the value for a Iterable of values. Useful if you need to flat map your values per group somehow |
| `valueDistinctMapper?` | [`Mapper`](../interfaces/index.Mapper.md)<`NewT`, `unknown`\> \| keyof `NewT` | must return the unicity key. The unicity is respected by group |

#### Returns

[`KVGroupTransform`](../interfaces/types.KVGroupTransform.md)<`K`, `T`, `NewT`\>

___

### getGroupingTopHit

▸ **getGroupingTopHit**<`K`, `T`\>(`choose`): [`KVGroupTransform`](../interfaces/types.KVGroupTransform.md)<`K`, `T`\>

Returns a functions that make the group operations to get only one item, per group key,
The item kept is the preferred one, according to a given choosing criteria,

#### Type parameters

| Name |
| :------ |
| `K` |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `choose` | [`Choose`](types.md#choose)<`T`\> | must return the preferred value over two provided |

#### Returns

[`KVGroupTransform`](../interfaces/types.KVGroupTransform.md)<`K`, `T`\>

▸ **getGroupingTopHit**<`K`, `T`, `KT`\>(`distinct`, `choose`, `mapper`): [`KVGroupTransform`](../interfaces/types.KVGroupTransform.md)<`K`, `T`, `T`[`KT`][]\>

Returns a functions that make the group operations get distinct items, according to a giving criteria,
keeping the preferred one, according to a given choosing criteria,

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `K` |
| `T` | `T` |
| `KT` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `distinct` | [`AnyMapper`](types.md#anymapper)<`T`\> | must return the distinction key. The distinction is respected by group |
| `choose` | [`Choose`](types.md#choose)<`T`[`KT`]\> | must return the preferred value over two provided |
| `mapper` | `KT` | The property name you want to map for the value |

#### Returns

[`KVGroupTransform`](../interfaces/types.KVGroupTransform.md)<`K`, `T`, `T`[`KT`][]\>

▸ **getGroupingTopHit**<`K`, `T`, `NewT`\>(`distinct`, `choose`, `mapper?`): [`KVGroupTransform`](../interfaces/types.KVGroupTransform.md)<`K`, `T`, `NewT`\>

Returns a functions that make the group operations get distinct items, according to a giving criteria,
keeping the preferred one, according to a given choosing criteria,

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `K` |
| `T` | `T` |
| `NewT` | `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `distinct` | [`AnyMapper`](types.md#anymapper)<`T`\> | must return the distinction key. The distinction is respected by group |
| `choose` | [`Choose`](types.md#choose)<`NewT`\> | must return the preferred value over two provided |
| `mapper?` | [`Mapper`](../interfaces/index.Mapper.md)<`T`, `NewT`\> | If informed, the mapping operation to define the grouping value. If not, the original value is assumed |

#### Returns

[`KVGroupTransform`](../interfaces/types.KVGroupTransform.md)<`K`, `T`, `NewT`\>

___

### gt

▸ **gt**<`T`\>(`b`): (`a`: `T`) => `boolean`

Provides a "greater than" comparer

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | the type of b |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `b` | `any` | the value for comparison |

#### Returns

`fn`

▸ (`a`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T` |

##### Returns

`boolean`

___

### identity

▸ **identity**<`T`\>(`param`): `T`

Returns exactly the informed parameter

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `param` | `T` | The informed parameter to be returned |

#### Returns

`T`

___

### interval

▸ **interval**(`fromInclusive?`, `count?`): [`FluentIterable`](../interfaces/index.FluentIterable.md)<`number`\>

Generates a `count` long sequential integer interval starting from `fromInclusive`.

* The interval starts at zero if `fromInclusive` is not specified.
* The interval ends in infinity if `count` is not specified.

Examples:

1. `interval(5, 3)` generates an interval of `[5, 6, 7]`
2. `interval(5)` generates an interval of `[5, 6, 7, ...]`
3. `interval()` generates an interval of `[0, 1, 2, ...]`
4. `fluent(interval(1)).take(10).forEach(console.log)` prints all numbers between 1 and 10 using [fluent](index.md#fluent).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fromInclusive?` | `number` | Specifies the start of the interval. Defaults to zero. |
| `count?` | `number` | Specifies the length of the interval. The interval provides numbers indefinitely if omitted. |

#### Returns

[`FluentIterable`](../interfaces/index.FluentIterable.md)<`number`\>

The iterable of numbers in the interval.

___

### isAnyFluentIterable

▸ **isAnyFluentIterable**<`T`\>(`value`): value is FluentIterable<T\> \| FluentAsyncIterable<T\>

Return true when the informed value is an fluent iterable, and false otherwise

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | the value to be analyzed |

#### Returns

value is FluentIterable<T\> \| FluentAsyncIterable<T\>

The return is also a type guard, ie, inside an if with that function, the value will be considered an fluent iterable

___

### isAnyIterable

▸ **isAnyIterable**<`T`\>(`value`): value is AnyIterable<T\>

Return true when the informed value is any kind of iterable, and false otherwise

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | the value to be analyzed |

#### Returns

value is AnyIterable<T\>

The return is also a type guard, ie, inside an if with that function, the value will be considered an iterable | async iterable

___

### isAsyncIterable

▸ **isAsyncIterable**<`T`\>(`value`): value is AsyncIterable<T\>

Return true when the informed value is an async iterable, and false otherwise

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | the value to be analyzed |

#### Returns

value is AsyncIterable<T\>

The return is also a type guard, ie, inside an if with that function, the value will be considered an async iterable

___

### isFluentAsyncIterable

▸ **isFluentAsyncIterable**<`T`\>(`value`): value is FluentAsyncIterable<T\>

Return true when the informed value is an fluent async iterable, and false otherwise

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | the value to be analyzed |

#### Returns

value is FluentAsyncIterable<T\>

The return is also a type guard, ie, inside an if with that function, the value will be considered an fluent async iterable

___

### isFluentIterable

▸ **isFluentIterable**<`T`\>(`value`): value is FluentIterable<T\>

Return true when the informed value is an fluent iterable, and false otherwise

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | the value to be analyzed |

#### Returns

value is FluentIterable<T\>

The return is also a type guard, ie, inside an if with that function, the value will be considered an fluent iterable

___

### isIterable

▸ **isIterable**<`T`\>(`value`): value is Iterable<T\>

Return true when the informed value is an iterable, and false otherwise

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | the value to be analyzed |

#### Returns

value is Iterable<T\>

The return is also a type guard, ie, inside an if with that function, the value will be considered an iterable

___

### isPromise

▸ **isPromise**(`t`): t is PromiseLike<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `unknown` |

#### Returns

t is PromiseLike<any\>

___

### iterate

▸ **iterate**<`T`\>(`a`): `Iterable`<`T`\>

Iterates all element of an iterable

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | the item type of the [[Iterable]] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `Iterable`<`T`\> | The iterable |

#### Returns

`Iterable`<`T`\>

___

### iterateAll

▸ **iterateAll**<`T`\>(`a`): `Generator`<`T`, `void`, `undefined`\>

Iterates in all elements of an iterable of iterables

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | the item type of the internal [[Iterable]] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `Iterable`<`Iterable`<`T`\>\> | The iterable |

#### Returns

`Generator`<`T`, `void`, `undefined`\>

___

### iterateAllAsync

▸ **iterateAllAsync**<`T`\>(`a`): `AsyncGenerator`<`T`, `void`, `undefined`\>

Iterates in all elements of an async iterable of iterables or async iterables

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | the item type of the internal [[Iterable/AsyncIterable]] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `AsyncIterable`<`AnyIterable`<`T`\>\> | The async iterable |

#### Returns

`AsyncGenerator`<`T`, `void`, `undefined`\>

___

### iterateAsync

▸ **iterateAsync**<`T`\>(`a`): `AsyncIterable`<`T`\>

Iterates all element of an async iterable

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | the item type of the [[Iterable]] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `AnyIterable`<`T`\> \| `PromiseLike`<`AnyIterable`<`T`\>\> | The async iterable |

#### Returns

`AsyncIterable`<`T`\>

___

### iterateObjEntries

▸ **iterateObjEntries**<`T`, `K`, `V`\>(`obj`): `Iterable`<[`K`, `V`]\>

Iterates over all owned entries of given object

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `K` | extends `string` \| `number` \| `symbol` = keyof `T` |
| `V` | `T`[`K`] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | The object to iterate with |

#### Returns

`Iterable`<[`K`, `V`]\>

___

### iterateObjProps

▸ **iterateObjProps**<`T`\>(`obj`): `Iterable`<keyof `T`\>

Iterates over all owned properties of the given object

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | The object to iterate with |

#### Returns

`Iterable`<keyof `T`\>

___

### le

▸ **le**<`T`\>(`b`): (`a`: `T`) => `boolean`

Provides a "lesser or equal" comparer

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | the type of b |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `b` | `any` | the value for comparison |

#### Returns

`fn`

▸ (`a`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T` |

##### Returns

`boolean`

___

### lt

▸ **lt**<`T`\>(`b`): (`a`: `T`) => `boolean`

Provides a "lesser than" comparer

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | the type of b |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `b` | `any` | the value for comparison |

#### Returns

`fn`

▸ (`a`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T` |

##### Returns

`boolean`

___

### mergeIterables

▸ **mergeIterables**<`T`\>(...`iterables`): `AsyncIterable`<`T`\>

Merge the informed async iterables into one. The item orders will be defined from what is returned first

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...iterables` | `AsyncIterable`<`T`\>[] | the iterables to merge |

#### Returns

`AsyncIterable`<`T`\>

▸ **mergeIterables**<`T`\>(`callback`, ...`iterables`): `AsyncIterable`<`T`\>

Merge the informed async iterables into one. The item orders will be defined from what is returned first

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | [`ErrorCallback`](../interfaces/types.ErrorCallback.md) | A callback to case in case that any iterable throws an error. If informed, an failed iterable will not cause an error in the merging |
| `...iterables` | `AsyncIterable`<`T`\>[] | the iterables to merge |

#### Returns

`AsyncIterable`<`T`\>

___

### mergeIterators

▸ **mergeIterators**<`T`\>(`callback`, ...`iterators`): `AsyncIterable`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `undefined` \| [`ErrorCallback`](../interfaces/types.ErrorCallback.md) |
| `...iterators` | `AsyncIterator`<`T`, `any`, `undefined`\>[] |

#### Returns

`AsyncIterable`<`T`\>

___

### negation

▸ **negation**<`T`\>(`predicate`): `Predicate`<`T`\>

Provides a function that negates the informed predicate

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | the item type of the [Predicate](index.md#predicate) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | `Predicate`<`T`\> | The predicate to be negated |

#### Returns

`Predicate`<`T`\>

___

### o

▸ **o**<`F`\>(`f`): `F`

Returns a new instance of a function with a order assuring mark.
Fluent Iterable will treat order Assuring marked function as if
they're guaranteed to return ordered result in regard some iterable
where they're applied. The actual order, though, is of responsibility
of the code using this package.

This is useful to have access to faster versions of some algorithms, but
the output may not match expectation if the resulting order is not actually right.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends `Function` \| [`FluentIterable`](../interfaces/index.FluentIterable.md)<`any`\> \| [`FluentAsyncIterable`](../interfaces/index.FluentAsyncIterable.md)<`any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `f` | `F` | the function to assure order |

#### Returns

`F`

___

### od

▸ **od**<`F`\>(`f`): `F`

Returns a new instance of a function with a descending order assuring mark.
Fluent Iterable will treat descending order assuring marked functions as if
they're guaranteed to return descending ordered results in regard some iterable
where they're applied. The actual order, though, is of responsibility
of the code using this package.

This is useful to have access to faster versions of some algorithms, but
the output may not match expectation if the resulting order is not actually right.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends `Function` \| [`FluentIterable`](../interfaces/index.FluentIterable.md)<`any`\> \| [`FluentAsyncIterable`](../interfaces/index.FluentAsyncIterable.md)<`any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `f` | `F` | the function to assure order |

#### Returns

`F`

___

### transformObjValues

▸ **transformObjValues**<`T`\>(`obj`, `mapper`): `Object`

Applies a transformation to the value of all pro

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | The object to be iterated with |
| `mapper` | [`Mapper`](../interfaces/index.Mapper.md)<[keyof `T`, `T`[keyof `T`]], `unknown`\> | the mapper to be applied to each value |

#### Returns

`Object`

___

### truth

▸ **truth**(): `boolean`

Always returns true

#### Returns

`boolean`
