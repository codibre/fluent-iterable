[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / AsyncLastFunction

# Interface: AsyncLastFunction<T\>

[types/function-types](../modules/types_function_types.md).AsyncLastFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### AsyncLastFunction

▸ **AsyncLastFunction**(`predicate?`): `Promise`<`undefined` \| `T`\>

Returns the last element of the iterable matching an asynchronous predicate, or `undefined` value if no such element is found. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate?` | `AsyncPredicate`<`T`\> | The last element is to be returned which matches this asynchronous predicate. |

#### Returns

`Promise`<`undefined` \| `T`\>

A promise of the last element matching the specified predicate, or `undefined` if no such element found.

### AsyncLastFunction

▸ **AsyncLastFunction**(`predicate`): `Promise`<`undefined` \| `T`\>

Returns the last element of the iterable matching an asynchronous predicate, or `undefined` value if no such element is found. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | keyof `T` | The last element is to be returned which matches this asynchronous predicate. |

#### Returns

`Promise`<`undefined` \| `T`\>

A promise of the last element matching the specified predicate, or `undefined` if no such element found.
