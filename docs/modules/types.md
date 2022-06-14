[fluent-iterable - v1.22.0](../README.md) / types

# Module: types

## Table of contents

### References

- [Action](types.md#action)
- [AsyncAction](types.md#asyncaction)
- [AsyncPredicate](types.md#asyncpredicate)
- [AsyncReducer](types.md#asyncreducer)
- [Comparer](types.md#comparer)
- [FluentAsyncIterable](types.md#fluentasynciterable)
- [FluentEmitter](types.md#fluentemitter)
- [FluentGroup](types.md#fluentgroup)
- [FluentIterable](types.md#fluentiterable)
- [Group](types.md#group)
- [OrderAssurable](types.md#orderassurable)
- [Page](types.md#page)
- [Pager](types.md#pager)
- [Predicate](types.md#predicate)
- [Reducer](types.md#reducer)
- [head](types.md#head)
- [tail](types.md#tail)

### Interfaces

- [AsyncKVGroupTransform](../interfaces/types.AsyncKVGroupTransform.md)
- [AverageStepper](../interfaces/types.AverageStepper.md)
- [Equality](../interfaces/types.Equality.md)
- [ErrorCallback](../interfaces/types.ErrorCallback.md)
- [FluentEmitOptions](../interfaces/types.FluentEmitOptions.md)
- [FluentEvents](../interfaces/types.FluentEvents.md)
- [FluentIterableEmitter](../interfaces/types.FluentIterableEmitter.md)
- [Indexed](../interfaces/types.Indexed.md)
- [IteratorCatchResult](../interfaces/types.IteratorCatchResult.md)
- [KVGroupTransform](../interfaces/types.KVGroupTransform.md)

### Type Aliases

- [AnyHack](types.md#anyhack)
- [AnyMapper](types.md#anymapper)
- [AsyncCatchCallback](types.md#asynccatchcallback)
- [AsyncItemType](types.md#asyncitemtype)
- [CatchCallback](types.md#catchcallback)
- [Choose](types.md#choose)
- [FunctionAnyMapper](types.md#functionanymapper)
- [IsAnyOrUnknown](types.md#isanyorunknown)
- [ItemOrSelfType](types.md#itemorselftype)
- [ItemType](types.md#itemtype)
- [ToObjectKeyType](types.md#toobjectkeytype)
- [Truthy](types.md#truthy)

## References

### Action

Re-exports [Action](../interfaces/index.Action.md)

___

### AsyncAction

Re-exports [AsyncAction](../interfaces/index.AsyncAction.md)

___

### AsyncPredicate

Re-exports [AsyncPredicate](index.md#asyncpredicate)

___

### AsyncReducer

Re-exports [AsyncReducer](../interfaces/index.AsyncReducer.md)

___

### Comparer

Re-exports [Comparer](../interfaces/index.Comparer.md)

___

### FluentAsyncIterable

Re-exports [FluentAsyncIterable](../interfaces/index.FluentAsyncIterable.md)

___

### FluentEmitter

Re-exports [FluentEmitter](../interfaces/index.FluentEmitter.md)

___

### FluentGroup

Re-exports [FluentGroup](../interfaces/index.FluentGroup.md)

___

### FluentIterable

Re-exports [FluentIterable](../interfaces/index.FluentIterable.md)

___

### Group

Re-exports [Group](../interfaces/index.Group.md)

___

### OrderAssurable

Re-exports [OrderAssurable](../interfaces/index.OrderAssurable.md)

___

### Page

Re-exports [Page](../interfaces/index.Page.md)

___

### Pager

Re-exports [Pager](../interfaces/index.Pager.md)

___

### Predicate

Re-exports [Predicate](index.md#predicate)

___

### Reducer

Re-exports [Reducer](../interfaces/index.Reducer.md)

___

### head

Re-exports [head](index.md#head)

___

### tail

Re-exports [tail](index.md#tail)

## Type Aliases

### AnyHack

Ƭ **AnyHack**<`T`\>: `T` extends `never` ? ``"A"`` : ``"B"``

#### Type parameters

| Name |
| :------ |
| `T` |

___

### AnyMapper

Ƭ **AnyMapper**<`T`\>: [`FunctionAnyMapper`](types.md#functionanymapper)<`T`\> \| keyof `T`

#### Type parameters

| Name |
| :------ |
| `T` |

___

### AsyncCatchCallback

Ƭ **AsyncCatchCallback**: [`Mapper`](../interfaces/index.Mapper.md)<`any`, `void` \| `Promise`<`void`\>\>

___

### AsyncItemType

Ƭ **AsyncItemType**<`T`\>: `T` extends `AnyIterable`<infer R\> ? `R` : `never`

Represents the type of the item of an iterable or an async iterable

#### Type parameters

| Name |
| :------ |
| `T` |

___

### CatchCallback

Ƭ **CatchCallback**: [`Mapper`](../interfaces/index.Mapper.md)<`any`, `void`\>

___

### Choose

Ƭ **Choose**<`T`\>: (`a`: `T`, `b`: `T`) => `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`a`, `b`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T` |
| `b` | `T` |

##### Returns

`T`

___

### FunctionAnyMapper

Ƭ **FunctionAnyMapper**<`T`\>: (`value`: `T`) => `any`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`value`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

##### Returns

`any`

___

### IsAnyOrUnknown

Ƭ **IsAnyOrUnknown**<`T`\>: `T` extends `unknown` ? ``true`` : [`AnyHack`](types.md#anyhack)<`T`\> extends ``"A"`` ? ``false`` : [`AnyHack`](types.md#anyhack)<`T`\> extends ``"B"`` ? ``false`` : ``true``

Returns true wether T is any or unknown

#### Type parameters

| Name |
| :------ |
| `T` |

___

### ItemOrSelfType

Ƭ **ItemOrSelfType**<`T`\>: `T` extends `string` ? `T` : `T` extends `Iterable`<infer R\> ? [`ItemOrSelfType`](types.md#itemorselftype)<`R`\> : `T`

Represents the first string or non iterable item from chained iterables

#### Type parameters

| Name |
| :------ |
| `T` |

___

### ItemType

Ƭ **ItemType**<`T`\>: `T` extends `Iterable`<infer R\> ? `R` : `never`

Represents the type of the item of an iterable

#### Type parameters

| Name |
| :------ |
| `T` |

___

### ToObjectKeyType

Ƭ **ToObjectKeyType**<`T`, `R1`\>: `T`[`R1`] extends `string` \| `number` \| `symbol` ? `T`[`R1`] : `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `R1` | extends keyof `T` |

___

### Truthy

Ƭ **Truthy**<`T`\>: `Exclude`<`Exclude`<`Exclude`<`Exclude`<`Exclude`<`T`, ``false``\>, ``0``\>, ``""``\>, ``null``\>, `undefined`\>

#### Type parameters

| Name |
| :------ |
| `T` |
