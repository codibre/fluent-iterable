[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / AsyncWaitAllFunction

# Interface: AsyncWaitAllFunction<T\>

[types/function-types](../modules/types_function_types.md).AsyncWaitAllFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`WaitAllFunction`](types_function_types.WaitAllFunction.md)<`T`\>

  ↳ **`AsyncWaitAllFunction`**

## Callable

### AsyncWaitAllFunction

▸ **AsyncWaitAllFunction**<`R`\>(`mapper`): `PromiseLike`<`R`[]\>

Applies a async transformation for every element in the array and, then, wait for they conclusion with Promise.all. This is a resolving operation.

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapper` | [`AsyncMapper`](index.AsyncMapper.md)<`T`, `R`\> | The asynchronous function which projects the elements of the iterable into promises. |

#### Returns

`PromiseLike`<`R`[]\>

a promises that resolves into an array with the result of all mappings.

### AsyncWaitAllFunction

▸ **AsyncWaitAllFunction**<`R`\>(`mapper`): `PromiseLike`<`T`[`R`][]\>

Applies a async transformation for every element in the array and, then, wait for they conclusion with Promise.all. This is a resolving operation.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapper` | `R` | The asynchronous function which projects the elements of the iterable into promises. |

#### Returns

`PromiseLike`<`T`[`R`][]\>

a promises that resolves into an array with the result of all mappings.
