[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / AsyncMaxFunction

# Interface: AsyncMaxFunction<T\>

[types/function-types](../modules/types_function_types.md).AsyncMaxFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### AsyncMaxFunction

▸ **AsyncMaxFunction**<`R`\>(`mapper?`): `Promise`<`undefined` \| `T`\>

Finds the numeric maximum element of the iterable using an asynchronous projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapper?` | [`AsyncMapper`](index.AsyncMapper.md)<`T`, `R`\> | The function which asynchronously projects the elements of the iterable into the comparable values. Falls back to the identity function if omitted. |

#### Returns

`Promise`<`undefined` \| `T`\>

A promise of the maximum of the iterable's projected elements.

### AsyncMaxFunction

▸ **AsyncMaxFunction**<`R`\>(`mapper?`): `Promise`<`undefined` \| `T`\>

Finds the numeric maximum element of the iterable using an asynchronous projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapper?` | `R` | The function which asynchronously projects the elements of the iterable into the comparable values. Falls back to the identity function if omitted. |

#### Returns

`Promise`<`undefined` \| `T`\>

A promise of the maximum of the iterable's projected elements.
