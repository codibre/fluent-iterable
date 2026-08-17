[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / AsyncFlatJoinFunction

# Interface: AsyncFlatJoinFunction()\<T\>

## Type Parameters

• **T**

> **AsyncFlatJoinFunction**\<`R0`, `K0`, `R1`\>(`field`): [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<[`FlatJoinResult`](../type-aliases/FlatJoinResult.md)\<`R1`, `T`, `R1`, `K0`\>\>

This operation flattens the whole informed path into a flat object.
Each informed param must be the name of a field in the path, the field being an iterable or not
If the name of a property appears twice in the path, the resulting object will have only the value of the first one
in the path.

## Type Parameters

• **R0** *extends* `unknown`

• **K0** *extends* `string` \| `number` \| `symbol`

• **R1** *extends* `unknown`

## Parameters

• **field**: `K0`

Specifies the name of the first field

## Returns

[`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<[`FlatJoinResult`](../type-aliases/FlatJoinResult.md)\<`R1`, `T`, `R1`, `K0`\>\>

The [[FluentIterable]] of the flattened iterable.

> **AsyncFlatJoinFunction**\<`R0`, `K0`, `R1`, `K1`, `R2`\>(`field0`, `field1`): `FluentIterable`\<`object` & `Record`\<`K0`, `R1`\> & [`Exclusive1`](../type-aliases/Exclusive1.md)\<`R1`, `K1`, `K0`\>\>

## Type Parameters

• **R0** *extends* `unknown`

• **K0** *extends* `string` \| `number` \| `symbol`

• **R1** *extends* `unknown`

• **K1** *extends* `string` \| `number` \| `symbol`

• **R2**

## Parameters

• **field0**: `K0`

• **field1**: `K1`

## Returns

`FluentIterable`\<`object` & `Record`\<`K0`, `R1`\> & [`Exclusive1`](../type-aliases/Exclusive1.md)\<`R1`, `K1`, `K0`\>\>

> **AsyncFlatJoinFunction**\<`R0`, `K0`, `R1`, `K1`, `R2`, `K2`, `R3`\>(`field0`, `field1`, `field2`): [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`object` & `Record`\<`K0`, `R1`\> & [`Exclusive1`](../type-aliases/Exclusive1.md)\<`R1`, `K1`, `K0`\> & [`Exclusive1`](../type-aliases/Exclusive1.md)\<`R2`, `K2`, `K0` \| `K1`\>\>

## Type Parameters

• **R0** *extends* `unknown`

• **K0** *extends* `string` \| `number` \| `symbol`

• **R1** *extends* `unknown`

• **K1** *extends* `string` \| `number` \| `symbol`

• **R2**

• **K2** *extends* `string` \| `number` \| `symbol`

• **R3**

## Parameters

• **field0**: `K0`

• **field1**: `K1`

• **field2**: `K2`

## Returns

[`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`object` & `Record`\<`K0`, `R1`\> & [`Exclusive1`](../type-aliases/Exclusive1.md)\<`R1`, `K1`, `K0`\> & [`Exclusive1`](../type-aliases/Exclusive1.md)\<`R2`, `K2`, `K0` \| `K1`\>\>

> **AsyncFlatJoinFunction**\<`R0`, `K0`, `R1`, `K1`, `R2`, `K2`, `R3`, `K3`, `R4`\>(`field0`, `field1`, `field2`, `field3`): [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`object` & `Record`\<`K0`, `R1`\> & [`Exclusive1`](../type-aliases/Exclusive1.md)\<`R1`, `K1`, `K0`\> & [`Exclusive1`](../type-aliases/Exclusive1.md)\<`R2`, `K2`, `K0` \| `K1`\> & [`Exclusive1`](../type-aliases/Exclusive1.md)\<`R3`, `K3`, `K0` \| `K1` \| `K2`\>\>

## Type Parameters

• **R0** *extends* `unknown`

• **K0** *extends* `string` \| `number` \| `symbol`

• **R1** *extends* `unknown`

• **K1** *extends* `string` \| `number` \| `symbol`

• **R2**

• **K2** *extends* `string` \| `number` \| `symbol`

• **R3**

• **K3** *extends* `string` \| `number` \| `symbol`

• **R4**

## Parameters

• **field0**: `K0`

• **field1**: `K1`

• **field2**: `K2`

• **field3**: `K3`

## Returns

[`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`object` & `Record`\<`K0`, `R1`\> & [`Exclusive1`](../type-aliases/Exclusive1.md)\<`R1`, `K1`, `K0`\> & [`Exclusive1`](../type-aliases/Exclusive1.md)\<`R2`, `K2`, `K0` \| `K1`\> & [`Exclusive1`](../type-aliases/Exclusive1.md)\<`R3`, `K3`, `K0` \| `K1` \| `K2`\>\>

> **AsyncFlatJoinFunction**\<`R0`, `K0`, `R1`, `K1`, `R2`, `K2`, `R3`, `K3`, `R4`, `K4`, `R5`\>(`field0`, `field1`, `field2`, `field3`, `field4`): [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`object` & `Record`\<`K0`, `R1`\> & [`Exclusive1`](../type-aliases/Exclusive1.md)\<`R1`, `K1`, `K0`\> & [`Exclusive1`](../type-aliases/Exclusive1.md)\<`R2`, `K2`, `K0` \| `K1`\> & [`Exclusive1`](../type-aliases/Exclusive1.md)\<`R3`, `K3`, `K0` \| `K1` \| `K2`\> & [`Exclusive1`](../type-aliases/Exclusive1.md)\<`R4`, `K4`, `K0` \| `K1` \| `K2` \| `K3`\>\>

## Type Parameters

• **R0** *extends* `unknown`

• **K0** *extends* `string` \| `number` \| `symbol`

• **R1** *extends* `unknown`

• **K1** *extends* `string` \| `number` \| `symbol`

• **R2**

• **K2** *extends* `string` \| `number` \| `symbol`

• **R3**

• **K3** *extends* `string` \| `number` \| `symbol`

• **R4**

• **K4** *extends* `string` \| `number` \| `symbol`

• **R5**

## Parameters

• **field0**: `K0`

• **field1**: `K1`

• **field2**: `K2`

• **field3**: `K3`

• **field4**: `K4`

## Returns

[`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`object` & `Record`\<`K0`, `R1`\> & [`Exclusive1`](../type-aliases/Exclusive1.md)\<`R1`, `K1`, `K0`\> & [`Exclusive1`](../type-aliases/Exclusive1.md)\<`R2`, `K2`, `K0` \| `K1`\> & [`Exclusive1`](../type-aliases/Exclusive1.md)\<`R3`, `K3`, `K0` \| `K1` \| `K2`\> & [`Exclusive1`](../type-aliases/Exclusive1.md)\<`R4`, `K4`, `K0` \| `K1` \| `K2` \| `K3`\>\>

> **AsyncFlatJoinFunction**\<`R0`, `K0`, `R1`, `K1`, `R2`, `K2`, `R3`, `K3`, `R4`, `K4`, `R5`, `K5`, `KN`\>(`field0`, `field1`, `field2`, `field3`, `field4`, `field5`, ...`fields`): [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`object` & `Record`\<`K0`, `R1`\> & [`Exclusive1`](../type-aliases/Exclusive1.md)\<`R1`, `K1`, `K0`\> & [`Exclusive1`](../type-aliases/Exclusive1.md)\<`R2`, `K2`, `K0` \| `K1`\> & [`Exclusive1`](../type-aliases/Exclusive1.md)\<`R3`, `K3`, `K0` \| `K1` \| `K2`\> & [`Exclusive1`](../type-aliases/Exclusive1.md)\<`R4`, `K4`, `K0` \| `K1` \| `K2` \| `K3`\> & [`Exclusive1`](../type-aliases/Exclusive1.md)\<`R5`, `K5`, `K0` \| `K1` \| `K2` \| `K3` \| `K4`\> & `Record`\<`KN`, `any`\>\>

## Type Parameters

• **R0** *extends* `unknown`

• **K0** *extends* `string` \| `number` \| `symbol`

• **R1** *extends* `unknown`

• **K1** *extends* `string` \| `number` \| `symbol`

• **R2**

• **K2** *extends* `string` \| `number` \| `symbol`

• **R3**

• **K3** *extends* `string` \| `number` \| `symbol`

• **R4**

• **K4** *extends* `string` \| `number` \| `symbol`

• **R5**

• **K5** *extends* `string` \| `number` \| `symbol`

• **KN** *extends* `string` \| `number` \| `symbol`

## Parameters

• **field0**: `K0`

• **field1**: `K1`

• **field2**: `K2`

• **field3**: `K3`

• **field4**: `K4`

• **field5**: `K5`

• ...**fields**: `KN`[]

## Returns

[`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`object` & `Record`\<`K0`, `R1`\> & [`Exclusive1`](../type-aliases/Exclusive1.md)\<`R1`, `K1`, `K0`\> & [`Exclusive1`](../type-aliases/Exclusive1.md)\<`R2`, `K2`, `K0` \| `K1`\> & [`Exclusive1`](../type-aliases/Exclusive1.md)\<`R3`, `K3`, `K0` \| `K1` \| `K2`\> & [`Exclusive1`](../type-aliases/Exclusive1.md)\<`R4`, `K4`, `K0` \| `K1` \| `K2` \| `K3`\> & [`Exclusive1`](../type-aliases/Exclusive1.md)\<`R5`, `K5`, `K0` \| `K1` \| `K2` \| `K3` \| `K4`\> & `Record`\<`KN`, `any`\>\>
