[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / AsyncContainsFunction

# Interface: AsyncContainsFunction<T\>

[types/function-types](../modules/types_function_types.md).AsyncContainsFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### AsyncContainsFunction

▸ **AsyncContainsFunction**(`item`): `Promise`<`boolean`\>

Determines whether the iterable contains a specified element. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).contains('bound')` returns `true`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `T` | The element to check. |

#### Returns

`Promise`<`boolean`\>

`true` if the specified element exists in the iterable, `false` otherwise.
