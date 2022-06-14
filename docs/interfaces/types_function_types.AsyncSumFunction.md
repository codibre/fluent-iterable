[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / AsyncSumFunction

# Interface: AsyncSumFunction<T\>

[types/function-types](../modules/types_function_types.md).AsyncSumFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### AsyncSumFunction

▸ **AsyncSumFunction**(`mapper?`): `Promise`<`number`\>

Calculates the sum of the elements of the iterable asynchronously projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapper?` | [`AsyncMapper`](index.AsyncMapper.md)<`T`, `number`\> | The asynchronous function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted. |

#### Returns

`Promise`<`number`\>

A promise of the sum of the projected elements of the iterable.

### AsyncSumFunction

▸ **AsyncSumFunction**(`mapper`): `Promise`<`number`\>

Calculates the sum of the elements of the iterable asynchronously projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapper` | keyof `T` | The asynchronous function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted. |

#### Returns

`Promise`<`number`\>

A promise of the sum of the projected elements of the iterable.
