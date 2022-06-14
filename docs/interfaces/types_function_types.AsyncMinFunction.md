[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / AsyncMinFunction

# Interface: AsyncMinFunction<T\>

[types/function-types](../modules/types_function_types.md).AsyncMinFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### AsyncMinFunction

▸ **AsyncMinFunction**<`R`\>(`mapper?`): `Promise`<`undefined` \| `T`\>

Finds the numeric minimum element of the iterable using an asynchronous projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapper?` | [`AsyncMapper`](index.AsyncMapper.md)<`T`, `R`\> | The asynchronous function which projects the elements of the iterable into the comparable value. Falls back to the identity function if omitted. |

#### Returns

`Promise`<`undefined` \| `T`\>

A promise of the minimum of the iterable's projected elements.

### AsyncMinFunction

▸ **AsyncMinFunction**<`R`\>(`mapper`): `Promise`<`undefined` \| `T`\>

Finds the numeric minimum element of the iterable using an asynchronous projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapper` | `R` | The asynchronous function which projects the elements of the iterable into the comparable value. Falls back to the identity function if omitted. |

#### Returns

`Promise`<`undefined` \| `T`\>

A promise of the minimum of the iterable's projected elements.
