[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / AsyncTopFunction

# Interface: AsyncTopFunction<T\>

[types/function-types](../modules/types_function_types.md).AsyncTopFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### AsyncTopFunction

▸ **AsyncTopFunction**<`R`\>(`mapper`, `comparer`): `Promise`<`undefined` \| `T`\>

Calculates the top element of the iterable using an asynchronous projection and a comparer. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `R` | The type of the projected elements used for comparison. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapper` | [`AsyncMapper`](index.AsyncMapper.md)<`T`, `R`\> | The asynchronous function which projects the elements of the iterable into comparable. |
| `comparer` | [`Comparer`](index.Comparer.md)<`R`\> | The comparison function. |

#### Returns

`Promise`<`undefined` \| `T`\>

A promise of the top of the iterable's projected elements.

### AsyncTopFunction

▸ **AsyncTopFunction**<`R`\>(`mapper`, `comparer`): `Promise`<`undefined` \| `T`\>

Calculates the top element of the iterable using an asynchronous projection and a comparer. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | extends `string` \| `number` \| `symbol` | The type of the projected elements used for comparison. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapper` | `T` | The asynchronous function which projects the elements of the iterable into comparable. |
| `comparer` | [`Comparer`](index.Comparer.md)<`T`[`R`]\> | The comparison function. |

#### Returns

`Promise`<`undefined` \| `T`\>

A promise of the top of the iterable's projected elements.
