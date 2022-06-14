[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / HasMoreThanFunction

# Interface: HasMoreThanFunction

[types/function-types](../modules/types_function_types.md).HasMoreThanFunction

## Callable

### HasMoreThanFunction

▸ **HasMoreThanFunction**(`threshold`): `boolean`

Checks if the number of elements of the iterable is more than the threshold using a projection. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `threshold` | `number` | The validation threshold |

#### Returns

`boolean`

True if the number of elements of the iterable is greater than the threshold and false if it is not.
