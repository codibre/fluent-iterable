[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / SkipWhileFunction

# Interface: SkipWhileFunction<T\>

[types/function-types](../modules/types_function_types.md).SkipWhileFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### SkipWhileFunction

▸ **SkipWhileFunction**(`condition`): [`FluentIterable`](index.FluentIterable.md)<`T`\>

Bypasses elements in the iterable as long as a specified condition is true and then returns the remaining elements.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).skipWhile(word => word[0] === 'a')` yields *bound* and *alpine*.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `condition` | `Predicate`<`T`\> | A predicate of `T`. All elements are skipped from the iterable until this evaluates to `false` for the first time. |

#### Returns

[`FluentIterable`](index.FluentIterable.md)<`T`\>

A [FluentIterable](index.FluentIterable.md) of the elements after the condition is not met.

### SkipWhileFunction

▸ **SkipWhileFunction**(`condition`): [`FluentIterable`](index.FluentIterable.md)<`T`\>

Bypasses elements in the iterable as long as a specified condition is true and then returns the remaining elements.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).skipWhile(word => word[0] === 'a')` yields *bound* and *alpine*.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `condition` | keyof `T` | A predicate of `T`. All elements are skipped from the iterable until this evaluates to `false` for the first time. |

#### Returns

[`FluentIterable`](index.FluentIterable.md)<`T`\>

A [FluentIterable](index.FluentIterable.md) of the elements after the condition is not met.
