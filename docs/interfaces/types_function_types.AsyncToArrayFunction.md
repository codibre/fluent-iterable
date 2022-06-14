[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / AsyncToArrayFunction

# Interface: AsyncToArrayFunction<T\>

[types/function-types](../modules/types_function_types.md).AsyncToArrayFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### AsyncToArrayFunction

▸ **AsyncToArrayFunction**(): `Promise`<`T`[]\>

Translates the iterable into an array. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).toArray()` returns `['anchor', 'almond', 'bound', 'alpine']`

#### Returns

`Promise`<`T`[]\>

A promise that resolves to the array equivalent of the async iterable.
