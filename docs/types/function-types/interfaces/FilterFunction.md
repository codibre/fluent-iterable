[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / FilterFunction

# Interface: FilterFunction()\<T\>

## Type Parameters

• **T**

> **FilterFunction**(): `FluentIterable`\<`Exclude`\<`Exclude`\<`Exclude`\<`Exclude`\<`Exclude`\<`T`, `false`\>, `0`\>, `""`\>, `null`\>, `undefined`\>\>

Filters the falsy values of a iterable of `T`<br>
  Example: `fluent(['anchor', undefined, 'bound', undefined]).filter()` yields *anchor* and *bound*.

## Returns

`FluentIterable`\<`Exclude`\<`Exclude`\<`Exclude`\<`Exclude`\<`Exclude`\<`T`, `false`\>, `0`\>, `""`\>, `null`\>, `undefined`\>\>

A [[FluentIterable]] of the elements against which the predicate evaluates to `true`.

> **FilterFunction**\<`E`\>(`predicate`): `FluentIterable`\<`E`\>

Filters the iterable of `T` based on a predicate.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).filter(word => word[0] === 'a')` yields *anchor*, *almond*, and *alpine*.

## Type Parameters

• **E**

## Parameters

• **predicate**: [`PredicateTypeGuard`](../type-aliases/PredicateTypeGuard.md)\<`T`, `E`\>

A predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`.

## Returns

`FluentIterable`\<`E`\>

A [[FluentIterable]] of the elements against which the predicate evaluates to `true`.

> **FilterFunction**(`predicate`): `FluentIterable`\<`T`\>

Filters the iterable of `T` based on a predicate.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).filter(word => word[0] === 'a')` yields *anchor*, *almond*, and *alpine*.

## Parameters

• **predicate**: `Predicate`\<`T`\>

A predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`.

## Returns

`FluentIterable`\<`T`\>

A [[FluentIterable]] of the elements against which the predicate evaluates to `true`.

> **FilterFunction**\<`Guarantees`\>(`predicate`): `FluentIterable`\<[`RequiresTruthy`](../type-aliases/RequiresTruthy.md)\<`T`, `Guarantees`\>\>

Filters the iterable of `T` based on a predicate.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).filter(word => word[0] === 'a')` yields *anchor*, *almond*, and *alpine*.

## Type Parameters

• **Guarantees** *extends* `string` \| `number` \| `symbol`

## Parameters

• **predicate**: `Predicate`\<`T`\>

A predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`.

## Returns

`FluentIterable`\<[`RequiresTruthy`](../type-aliases/RequiresTruthy.md)\<`T`, `Guarantees`\>\>

A [[FluentIterable]] of the elements against which the predicate evaluates to `true`.

> **FilterFunction**\<`K`\>(`predicate`): `FluentIterable`\<[`RequiresTruthy`](../type-aliases/RequiresTruthy.md)\<`T`, `K`\>\>

Filters the iterable of `T` based on a predicate.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).filter(word => word[0] === 'a')` yields *anchor*, *almond*, and *alpine*.

## Type Parameters

• **K** *extends* `string` \| `number` \| `symbol`

## Parameters

• **predicate**: `K`

A predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`.

## Returns

`FluentIterable`\<[`RequiresTruthy`](../type-aliases/RequiresTruthy.md)\<`T`, `K`\>\>

A [[FluentIterable]] of the elements against which the predicate evaluates to `true`.
