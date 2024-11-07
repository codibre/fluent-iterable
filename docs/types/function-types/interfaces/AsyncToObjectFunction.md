[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / AsyncToObjectFunction

# Interface: AsyncToObjectFunction()\<T\>

## Type Parameters

• **T**

> **AsyncToObjectFunction**\<`R`\>(`keySelector`): `Promise`\<`Record`\<`R`, `T`\>\>

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by an asynchronous key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.

## Type Parameters

• **R** *extends* [`KeyType`](../type-aliases/KeyType.md)

## Parameters

• **keySelector**: [`AsyncMapper`](../../../index/interfaces/AsyncMapper.md)\<`T`, `R`\>

Asynchronously projects an element of the iterable into the key of the corresponding field.

## Returns

`Promise`\<`Record`\<`R`, `T`\>\>

A promise of the object composed of the elements of the iterable as fields.

## Typeparam

R The expected type of the object. Cannot be enforced, this is strictly informal.

> **AsyncToObjectFunction**\<`K`, `V`\>(`keySelector`, `valueSelector`, `reduceValue`?): `Promise`\<`Record`\<`K`, `V`\>\>

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by an asynchronous key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.

## Type Parameters

• **K** *extends* [`KeyType`](../type-aliases/KeyType.md)

• **V**

## Parameters

• **keySelector**: [`AsyncMapper`](../../../index/interfaces/AsyncMapper.md)\<`T`, `K`\>

Asynchronously projects an element of the iterable into the key of the corresponding field.

• **valueSelector**: [`AsyncMapper`](../../../index/interfaces/AsyncMapper.md)\<`T`, `V`\>

Asynchronously projects an element of the iterable into the value of the corresponding field.

• **reduceValue?**: [`Choose`](../../type-aliases/Choose.md)\<`V`\>

reduce the following items to the map value type. If not informed, assumes only the first value

## Returns

`Promise`\<`Record`\<`K`, `V`\>\>

A promise of the object composed of the elements of the iterable as fields.

## Typeparam

R The expected type of the object. Cannot be enforced, this is strictly informal.

> **AsyncToObjectFunction**\<`R1`\>(`keySelector`): `Promise`\<`Record`\<[`ToObjectKeyType`](../../type-aliases/ToObjectKeyType.md)\<`T`, `R1`\>, `T`\>\>

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by an asynchronous key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.

## Type Parameters

• **R1** *extends* `string` \| `number` \| `symbol`

## Parameters

• **keySelector**: `R1`

Asynchronously projects an element of the iterable into the key of the corresponding field.

## Returns

`Promise`\<`Record`\<[`ToObjectKeyType`](../../type-aliases/ToObjectKeyType.md)\<`T`, `R1`\>, `T`\>\>

A promise of the object composed of the elements of the iterable as fields.

## Typeparam

R The expected type of the object. Cannot be enforced, this is strictly informal.

> **AsyncToObjectFunction**\<`R1`, `R`\>(`keySelector`, `valueSelector`, `reduceValue`?): `Promise`\<`Record`\<[`ToObjectKeyType`](../../type-aliases/ToObjectKeyType.md)\<`T`, `R1`\>, `R`\>\>

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by an asynchronous key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.

## Type Parameters

• **R1** *extends* `string` \| `number` \| `symbol`

• **R**

## Parameters

• **keySelector**: `R1`

Asynchronously projects an element of the iterable into the key of the corresponding field.

• **valueSelector**: [`AsyncMapper`](../../../index/interfaces/AsyncMapper.md)\<`T`, `R`\>

Asynchronously projects an element of the iterable into the value of the corresponding field.

• **reduceValue?**: [`Choose`](../../type-aliases/Choose.md)\<`R`\>

reduce the following items to the map value type. If not informed, assumes only the first value

## Returns

`Promise`\<`Record`\<[`ToObjectKeyType`](../../type-aliases/ToObjectKeyType.md)\<`T`, `R1`\>, `R`\>\>

A promise of the object composed of the elements of the iterable as fields.

## Typeparam

R The expected type of the object. Cannot be enforced, this is strictly informal.

> **AsyncToObjectFunction**\<`K`, `R2`\>(`keySelector`, `valueSelector`, `reduceValue`?): `Promise`\<`Record`\<`K`, `T`\[`R2`\]\>\>

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by an asynchronous key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.

## Type Parameters

• **K** *extends* `string` \| `number` \| `symbol`

• **R2** *extends* `string` \| `number` \| `symbol`

## Parameters

• **keySelector**: [`AsyncMapper`](../../../index/interfaces/AsyncMapper.md)\<`T`, `K`\>

Asynchronously projects an element of the iterable into the key of the corresponding field.

• **valueSelector**: `R2`

Asynchronously projects an element of the iterable into the value of the corresponding field.

• **reduceValue?**: [`Choose`](../../type-aliases/Choose.md)\<`T`\[`R2`\]\>

reduce the following items to the map value type. If not informed, assumes only the first value

## Returns

`Promise`\<`Record`\<`K`, `T`\[`R2`\]\>\>

A promise of the object composed of the elements of the iterable as fields.

## Typeparam

R The expected type of the object. Cannot be enforced, this is strictly informal.

> **AsyncToObjectFunction**\<`R1`, `R2`\>(`keySelector`, `valueSelector`, `reduceValue`?): `Promise`\<`Record`\<[`ToObjectKeyType`](../../type-aliases/ToObjectKeyType.md)\<`T`, `R1`\>, `T`\[`R2`\]\>\>

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by an asynchronous key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.

## Type Parameters

• **R1** *extends* `string` \| `number` \| `symbol`

• **R2** *extends* `string` \| `number` \| `symbol`

## Parameters

• **keySelector**: `R1`

Asynchronously projects an element of the iterable into the key of the corresponding field.

• **valueSelector**: `R2`

Asynchronously projects an element of the iterable into the value of the corresponding field.

• **reduceValue?**: [`Choose`](../../type-aliases/Choose.md)\<`T`\[`R2`\]\>

reduce the following items to the map value type. If not informed, assumes only the first value

## Returns

`Promise`\<`Record`\<[`ToObjectKeyType`](../../type-aliases/ToObjectKeyType.md)\<`T`, `R1`\>, `T`\[`R2`\]\>\>

A promise of the object composed of the elements of the iterable as fields.

## Typeparam

R The expected type of the object. Cannot be enforced, this is strictly informal.
