[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / FlatJoinFunction

# Interface: FlatJoinFunction<T\>

[types/function-types](../modules/types_function_types.md).FlatJoinFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### FlatJoinFunction

▸ **FlatJoinFunction**<`R0`, `K0`, `R1`\>(`field`): [`FluentIterable`](index.FluentIterable.md)<[`FlatJoinResult`](../modules/types_function_types.md#flatjoinresult)<`R1`, `T`, `R1`, `K0`\>\>

This operation flattens the whole informed path into a flat object.
Each informed param must be the name of a field in the path, the field being an iterable or not
If the name of a property appears twice in the path, the resulting object will have only the value of the first one
in the path.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R0` | extends `unknown` |
| `K0` | extends `string` \| `number` \| `symbol` |
| `R1` | extends `unknown` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `field` | `K0` | Specifies the name of the first field |

#### Returns

[`FluentIterable`](index.FluentIterable.md)<[`FlatJoinResult`](../modules/types_function_types.md#flatjoinresult)<`R1`, `T`, `R1`, `K0`\>\>

The [FluentIterable](index.FluentIterable.md) of the flattened iterable.

### FlatJoinFunction

▸ **FlatJoinFunction**<`R0`, `K0`, `R1`, `K1`, `R2`\>(`field0`, `field1`): [`FluentIterable`](index.FluentIterable.md)<{ `[head]`: `R2` ; `[tail]`: `T`  } & `Record`<`K0`, `R1`\> & [`Exclusive1`](../modules/types_function_types.md#exclusive1)<`R1`, `K1`, `K0`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R0` | extends `unknown` |
| `K0` | extends `string` \| `number` \| `symbol` |
| `R1` | extends `unknown` |
| `K1` | extends `string` \| `number` \| `symbol` |
| `R2` | `R2` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `field0` | `K0` |
| `field1` | `K1` |

#### Returns

[`FluentIterable`](index.FluentIterable.md)<{ `[head]`: `R2` ; `[tail]`: `T`  } & `Record`<`K0`, `R1`\> & [`Exclusive1`](../modules/types_function_types.md#exclusive1)<`R1`, `K1`, `K0`\>\>

### FlatJoinFunction

▸ **FlatJoinFunction**<`R0`, `K0`, `R1`, `K1`, `R2`, `K2`, `R3`\>(`field0`, `field1`, `field2`): [`FluentIterable`](index.FluentIterable.md)<{ `[head]`: `R3` ; `[tail]`: `T`  } & `Record`<`K0`, `R1`\> & [`Exclusive1`](../modules/types_function_types.md#exclusive1)<`R1`, `K1`, `K0`\> & [`Exclusive1`](../modules/types_function_types.md#exclusive1)<`R2`, `K2`, `K0` \| `K1`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R0` | extends `unknown` |
| `K0` | extends `string` \| `number` \| `symbol` |
| `R1` | extends `unknown` |
| `K1` | extends `string` \| `number` \| `symbol` |
| `R2` | `R2` |
| `K2` | extends `string` \| `number` \| `symbol` |
| `R3` | `R3` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `field0` | `K0` |
| `field1` | `K1` |
| `field2` | `K2` |

#### Returns

[`FluentIterable`](index.FluentIterable.md)<{ `[head]`: `R3` ; `[tail]`: `T`  } & `Record`<`K0`, `R1`\> & [`Exclusive1`](../modules/types_function_types.md#exclusive1)<`R1`, `K1`, `K0`\> & [`Exclusive1`](../modules/types_function_types.md#exclusive1)<`R2`, `K2`, `K0` \| `K1`\>\>

### FlatJoinFunction

▸ **FlatJoinFunction**<`R0`, `K0`, `R1`, `K1`, `R2`, `K2`, `R3`, `K3`, `R4`\>(`field0`, `field1`, `field2`, `field3`): [`FluentIterable`](index.FluentIterable.md)<{ `[head]`: `R4` ; `[tail]`: `T`  } & `Record`<`K0`, `R1`\> & [`Exclusive1`](../modules/types_function_types.md#exclusive1)<`R1`, `K1`, `K0`\> & [`Exclusive1`](../modules/types_function_types.md#exclusive1)<`R2`, `K2`, `K0` \| `K1`\> & [`Exclusive1`](../modules/types_function_types.md#exclusive1)<`R3`, `K3`, `K0` \| `K1` \| `K2`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R0` | extends `unknown` |
| `K0` | extends `string` \| `number` \| `symbol` |
| `R1` | extends `unknown` |
| `K1` | extends `string` \| `number` \| `symbol` |
| `R2` | `R2` |
| `K2` | extends `string` \| `number` \| `symbol` |
| `R3` | `R3` |
| `K3` | extends `string` \| `number` \| `symbol` |
| `R4` | `R4` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `field0` | `K0` |
| `field1` | `K1` |
| `field2` | `K2` |
| `field3` | `K3` |

#### Returns

[`FluentIterable`](index.FluentIterable.md)<{ `[head]`: `R4` ; `[tail]`: `T`  } & `Record`<`K0`, `R1`\> & [`Exclusive1`](../modules/types_function_types.md#exclusive1)<`R1`, `K1`, `K0`\> & [`Exclusive1`](../modules/types_function_types.md#exclusive1)<`R2`, `K2`, `K0` \| `K1`\> & [`Exclusive1`](../modules/types_function_types.md#exclusive1)<`R3`, `K3`, `K0` \| `K1` \| `K2`\>\>

### FlatJoinFunction

▸ **FlatJoinFunction**<`R0`, `K0`, `R1`, `K1`, `R2`, `K2`, `R3`, `K3`, `R4`, `K4`, `R5`\>(`field0`, `field1`, `field2`, `field3`, `field4`): [`FluentIterable`](index.FluentIterable.md)<{ `[head]`: `R5` ; `[tail]`: `T`  } & `Record`<`K0`, `R1`\> & [`Exclusive1`](../modules/types_function_types.md#exclusive1)<`R1`, `K1`, `K0`\> & [`Exclusive1`](../modules/types_function_types.md#exclusive1)<`R2`, `K2`, `K0` \| `K1`\> & [`Exclusive1`](../modules/types_function_types.md#exclusive1)<`R3`, `K3`, `K0` \| `K1` \| `K2`\> & [`Exclusive1`](../modules/types_function_types.md#exclusive1)<`R4`, `K4`, `K0` \| `K1` \| `K2` \| `K3`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R0` | extends `unknown` |
| `K0` | extends `string` \| `number` \| `symbol` |
| `R1` | extends `unknown` |
| `K1` | extends `string` \| `number` \| `symbol` |
| `R2` | `R2` |
| `K2` | extends `string` \| `number` \| `symbol` |
| `R3` | `R3` |
| `K3` | extends `string` \| `number` \| `symbol` |
| `R4` | `R4` |
| `K4` | extends `string` \| `number` \| `symbol` |
| `R5` | `R5` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `field0` | `K0` |
| `field1` | `K1` |
| `field2` | `K2` |
| `field3` | `K3` |
| `field4` | `K4` |

#### Returns

[`FluentIterable`](index.FluentIterable.md)<{ `[head]`: `R5` ; `[tail]`: `T`  } & `Record`<`K0`, `R1`\> & [`Exclusive1`](../modules/types_function_types.md#exclusive1)<`R1`, `K1`, `K0`\> & [`Exclusive1`](../modules/types_function_types.md#exclusive1)<`R2`, `K2`, `K0` \| `K1`\> & [`Exclusive1`](../modules/types_function_types.md#exclusive1)<`R3`, `K3`, `K0` \| `K1` \| `K2`\> & [`Exclusive1`](../modules/types_function_types.md#exclusive1)<`R4`, `K4`, `K0` \| `K1` \| `K2` \| `K3`\>\>

### FlatJoinFunction

▸ **FlatJoinFunction**<`R0`, `K0`, `R1`, `K1`, `R2`, `K2`, `R3`, `K3`, `R4`, `K4`, `R5`, `K5`, `KN`\>(`field0`, `field1`, `field2`, `field3`, `field4`, `field5`, ...`fields`): [`FluentIterable`](index.FluentIterable.md)<{ `[head]`: `any` ; `[tail]`: `T`  } & `Record`<`K0`, `R1`\> & [`Exclusive1`](../modules/types_function_types.md#exclusive1)<`R1`, `K1`, `K0`\> & [`Exclusive1`](../modules/types_function_types.md#exclusive1)<`R2`, `K2`, `K0` \| `K1`\> & [`Exclusive1`](../modules/types_function_types.md#exclusive1)<`R3`, `K3`, `K0` \| `K1` \| `K2`\> & [`Exclusive1`](../modules/types_function_types.md#exclusive1)<`R4`, `K4`, `K0` \| `K1` \| `K2` \| `K3`\> & [`Exclusive1`](../modules/types_function_types.md#exclusive1)<`R5`, `K5`, `K0` \| `K1` \| `K2` \| `K3` \| `K4`\> & `Record`<`KN`, `any`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R0` | extends `unknown` |
| `K0` | extends `string` \| `number` \| `symbol` |
| `R1` | extends `unknown` |
| `K1` | extends `string` \| `number` \| `symbol` |
| `R2` | `R2` |
| `K2` | extends `string` \| `number` \| `symbol` |
| `R3` | `R3` |
| `K3` | extends `string` \| `number` \| `symbol` |
| `R4` | `R4` |
| `K4` | extends `string` \| `number` \| `symbol` |
| `R5` | `R5` |
| `K5` | extends `string` \| `number` \| `symbol` |
| `KN` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `field0` | `K0` |
| `field1` | `K1` |
| `field2` | `K2` |
| `field3` | `K3` |
| `field4` | `K4` |
| `field5` | `K5` |
| `...fields` | `KN`[] |

#### Returns

[`FluentIterable`](index.FluentIterable.md)<{ `[head]`: `any` ; `[tail]`: `T`  } & `Record`<`K0`, `R1`\> & [`Exclusive1`](../modules/types_function_types.md#exclusive1)<`R1`, `K1`, `K0`\> & [`Exclusive1`](../modules/types_function_types.md#exclusive1)<`R2`, `K2`, `K0` \| `K1`\> & [`Exclusive1`](../modules/types_function_types.md#exclusive1)<`R3`, `K3`, `K0` \| `K1` \| `K2`\> & [`Exclusive1`](../modules/types_function_types.md#exclusive1)<`R4`, `K4`, `K0` \| `K1` \| `K2` \| `K3`\> & [`Exclusive1`](../modules/types_function_types.md#exclusive1)<`R5`, `K5`, `K0` \| `K1` \| `K2` \| `K3` \| `K4`\> & `Record`<`KN`, `any`\>\>
