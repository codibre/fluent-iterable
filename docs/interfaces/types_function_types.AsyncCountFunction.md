[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / AsyncCountFunction

# Interface: AsyncCountFunction<T\>

[types/function-types](../modules/types_function_types.md).AsyncCountFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### AsyncCountFunction

▸ **AsyncCountFunction**(`predicate?`): `Promise`<`number`\>

Returns the number of elements that matches an asynchronous predicate in the iterable. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate?` | `AsyncPredicate`<`T`\> | The count will consider elements which match this asynchronous predicate. |

#### Returns

`Promise`<`number`\>

A promise of the number of elements matching the specified predicate.

### AsyncCountFunction

▸ **AsyncCountFunction**<`R`\>(`predicate`): `Promise`<`number`\>

Returns the number of elements that matches a predicate in the iterable. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | `R` | The count will consider elements which match this predicate. Defaults to the always true function and thus, counts all the elements in the iterable if omitted. |

#### Returns

`Promise`<`number`\>

A promise of the number of elements matching the specified predicate.
