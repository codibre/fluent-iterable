[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / ForEachFunction

# Interface: ForEachFunction<T\>

[types/function-types](../modules/types_function_types.md).ForEachFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### ForEachFunction

▸ **ForEachFunction**(`action`): `void`

Iterates through the iterable and executes an action against each element. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).forEach(console.log)` prints *anchor*, *almond*, *bound* and *alpine*

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `action` | [`Action`](index.Action.md)<`T`\> | The action to execute against each element. |

#### Returns

`void`
