[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / AsyncForEachFunction

# Interface: AsyncForEachFunction<T\>

[types/function-types](../modules/types_function_types.md).AsyncForEachFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### AsyncForEachFunction

▸ **AsyncForEachFunction**(`mapper`): `Promise`<`void`\>

Iterates through the iterable and executes an asynchronous action against each element. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`AsyncAction`](index.AsyncAction.md)<`T`\> |

#### Returns

`Promise`<`void`\>

A promise of the executions.
