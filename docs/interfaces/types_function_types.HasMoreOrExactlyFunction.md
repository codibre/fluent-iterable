[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / HasMoreOrExactlyFunction

# Interface: HasMoreOrExactlyFunction

[types/function-types](../modules/types_function_types.md).HasMoreOrExactlyFunction

## Callable

### HasMoreOrExactlyFunction

▸ **HasMoreOrExactlyFunction**(`threshold`): `boolean`

Checks if the number of elements of the iterable is more or equal the threshold using a projection. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `threshold` | `number` | The validation threshold |

#### Returns

`boolean`

True if the number of elements of the iterable is greater or equal the threshold and false if it is not.
