[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / ExecuteFunction

# Interface: ExecuteFunction<T\>

[types/function-types](../modules/types_function_types.md).ExecuteFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### ExecuteFunction

▸ **ExecuteFunction**(`action`): [`FluentIterable`](index.FluentIterable.md)<`T`\>

Translate an iterable into one which executes an action against each element before yield them.<br>
  Examples:<br>
    * `for (const element of fluent(['anchor', 'almond', 'bound', 'alpine']).execute(console.log)) { }` prints *anchor*, *almond*, *bound* and *alpine*
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).execute(console.log).first()` prints *anchor* and returns the string *anchor*

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `action` | [`Action`](index.Action.md)<`T`\> | The action to execute against each element. |

#### Returns

[`FluentIterable`](index.FluentIterable.md)<`T`\>

The [FluentIterable](index.FluentIterable.md) with the action injected to it.
