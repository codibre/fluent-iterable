[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / AsyncHasExactlyFunction

# Interface: AsyncHasExactlyFunction

[types/function-types](../modules/types_function_types.md).AsyncHasExactlyFunction

## Callable

### AsyncHasExactlyFunction

▸ **AsyncHasExactlyFunction**(`expectedNumber`): `Promise`<`boolean`\>

Checks if the number of elements of the iterable is equal to the threshold using a projection. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `expectedNumber` | `number` |

#### Returns

`Promise`<`boolean`\>

True if the number of elements of the iterable is equal to threshold and false if its not;
