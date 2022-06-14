[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / AsyncToObjectFunction

# Interface: AsyncToObjectFunction<T\>

[types/function-types](../modules/types_function_types.md).AsyncToObjectFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### AsyncToObjectFunction

▸ **AsyncToObjectFunction**<`R`\>(`keySelector`): `Promise`<`Record`<`R`, `T`\>\>

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by an asynchronous key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | extends [`KeyType`](../modules/types_function_types.md#keytype) | The expected type of the object. Cannot be enforced, this is strictly informal. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keySelector` | [`AsyncMapper`](index.AsyncMapper.md)<`T`, `R`\> | Asynchronously projects an element of the iterable into the key of the corresponding field. |

#### Returns

`Promise`<`Record`<`R`, `T`\>\>

A promise of the object composed of the elements of the iterable as fields.

### AsyncToObjectFunction

▸ **AsyncToObjectFunction**<`R`, `O`\>(`keySelector`, `valueSelector`, `reduceValue?`): `Promise`<[`ObjectResult`](../modules/types_function_types.md#objectresult)<`R`, `O`\>\>

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by an asynchronous key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | extends [`KeyType`](../modules/types_function_types.md#keytype) | The expected type of the object. Cannot be enforced, this is strictly informal. |
| `O` | extends [`ObjectType`](../modules/types_function_types.md#objecttype)<`R`\> | - |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keySelector` | [`AsyncMapper`](index.AsyncMapper.md)<`T`, `R`\> | Asynchronously projects an element of the iterable into the key of the corresponding field. |
| `valueSelector` | [`AsyncMapper`](index.AsyncMapper.md)<`T`, `O`[`R`]\> | Asynchronously projects an element of the iterable into the value of the corresponding field. |
| `reduceValue?` | [`Choose`](../modules/types.md#choose)<`R`\> | reduce the following items to the map value type. If not informed, assumes only the first value |

#### Returns

`Promise`<[`ObjectResult`](../modules/types_function_types.md#objectresult)<`R`, `O`\>\>

A promise of the object composed of the elements of the iterable as fields.

### AsyncToObjectFunction

▸ **AsyncToObjectFunction**<`R1`\>(`keySelector`): `Promise`<`Record`<[`ToObjectKeyType`](../modules/types.md#toobjectkeytype)<`T`, `R1`\>, `T`\>\>

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by an asynchronous key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R1` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keySelector` | `R1` | Asynchronously projects an element of the iterable into the key of the corresponding field. |

#### Returns

`Promise`<`Record`<[`ToObjectKeyType`](../modules/types.md#toobjectkeytype)<`T`, `R1`\>, `T`\>\>

A promise of the object composed of the elements of the iterable as fields.

### AsyncToObjectFunction

▸ **AsyncToObjectFunction**<`R1`, `R`\>(`keySelector`, `valueSelector`, `reduceValue?`): `Promise`<`Record`<[`ToObjectKeyType`](../modules/types.md#toobjectkeytype)<`T`, `R1`\>, `R`\>\>

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by an asynchronous key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R1` | extends `string` \| `number` \| `symbol` | - |
| `R` | `R` | The expected type of the object. Cannot be enforced, this is strictly informal. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keySelector` | `R1` | Asynchronously projects an element of the iterable into the key of the corresponding field. |
| `valueSelector` | [`AsyncMapper`](index.AsyncMapper.md)<`T`, `R`\> | Asynchronously projects an element of the iterable into the value of the corresponding field. |
| `reduceValue?` | [`Choose`](../modules/types.md#choose)<`R`\> | reduce the following items to the map value type. If not informed, assumes only the first value |

#### Returns

`Promise`<`Record`<[`ToObjectKeyType`](../modules/types.md#toobjectkeytype)<`T`, `R1`\>, `R`\>\>

A promise of the object composed of the elements of the iterable as fields.

### AsyncToObjectFunction

▸ **AsyncToObjectFunction**<`K`, `R2`\>(`keySelector`, `valueSelector`, `reduceValue?`): `Promise`<`Record`<`K`, `T`[`R2`]\>\>

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by an asynchronous key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |
| `R2` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keySelector` | [`AsyncMapper`](index.AsyncMapper.md)<`T`, `K`\> | Asynchronously projects an element of the iterable into the key of the corresponding field. |
| `valueSelector` | `R2` | Asynchronously projects an element of the iterable into the value of the corresponding field. |
| `reduceValue?` | [`Choose`](../modules/types.md#choose)<`T`[`R2`]\> | reduce the following items to the map value type. If not informed, assumes only the first value |

#### Returns

`Promise`<`Record`<`K`, `T`[`R2`]\>\>

A promise of the object composed of the elements of the iterable as fields.

### AsyncToObjectFunction

▸ **AsyncToObjectFunction**<`R1`, `R2`\>(`keySelector`, `valueSelector`, `reduceValue?`): `Promise`<`Record`<[`ToObjectKeyType`](../modules/types.md#toobjectkeytype)<`T`, `R1`\>, `T`[`R2`]\>\>

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by an asynchronous key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R1` | extends `string` \| `number` \| `symbol` |
| `R2` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keySelector` | `R1` | Asynchronously projects an element of the iterable into the key of the corresponding field. |
| `valueSelector` | `R2` | Asynchronously projects an element of the iterable into the value of the corresponding field. |
| `reduceValue?` | [`Choose`](../modules/types.md#choose)<`T`[`R2`]\> | reduce the following items to the map value type. If not informed, assumes only the first value |

#### Returns

`Promise`<`Record`<[`ToObjectKeyType`](../modules/types.md#toobjectkeytype)<`T`, `R1`\>, `T`[`R2`]\>\>

A promise of the object composed of the elements of the iterable as fields.
