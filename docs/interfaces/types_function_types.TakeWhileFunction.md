[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / TakeWhileFunction

# Interface: TakeWhileFunction<T\>

[types/function-types](../modules/types_function_types.md).TakeWhileFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### TakeWhileFunction

▸ **TakeWhileFunction**(`condition`): [`FluentIterable`](index.FluentIterable.md)<`T`\>

Returns elements from the iterable as long as a specified condition is met.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).takeWhile(word => word[0] === 'a')` yields *anchor* and *almond*.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `condition` | `Predicate`<`T`\> | A predicate of `T`. All elements are yielded from the iterable until this evaluates to `false` for the first time. |

#### Returns

[`FluentIterable`](index.FluentIterable.md)<`T`\>

A [FluentIterable](index.FluentIterable.md) of the elements until the condition is met.

### TakeWhileFunction

▸ **TakeWhileFunction**(`condition`): [`FluentIterable`](index.FluentIterable.md)<`T`\>

Returns elements from the iterable as long as a specified condition is met.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).takeWhile(word => word[0] === 'a')` yields *anchor* and *almond*.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `condition` | keyof `T` | A predicate of `T`. All elements are yielded from the iterable until this evaluates to `false` for the first time. |

#### Returns

[`FluentIterable`](index.FluentIterable.md)<`T`\>

A [FluentIterable](index.FluentIterable.md) of the elements until the condition is met.
