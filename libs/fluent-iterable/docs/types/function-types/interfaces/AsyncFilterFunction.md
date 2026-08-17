[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / AsyncFilterFunction

# Interface: AsyncFilterFunction()\<T\>

## Type Parameters

• **T**

> **AsyncFilterFunction**(): [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`Exclude`\<`Exclude`\<`Exclude`\<`Exclude`\<`Exclude`\<`T`, `false`\>, `0`\>, `""`\>, `null`\>, `undefined`\>\>

Filters the falsy values of a iterable of `T`<br>
  Example: `fluentAsync(['anchor', undefined, 'bound', undefined]).filter()` yields *anchor* and *bound*.

## Returns

[`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`Exclude`\<`Exclude`\<`Exclude`\<`Exclude`\<`Exclude`\<`T`, `false`\>, `0`\>, `""`\>, `null`\>, `undefined`\>\>

A [[FluentAsyncIterable]] of the elements against which the predicate evaluates to `true`.

> **AsyncFilterFunction**\<`E`\>(`predicate`): [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`E`\>

Filters the iterable of `T` based on an type guard predicate.

## Type Parameters

• **E**

## Parameters

• **predicate**: [`PredicateTypeGuard`](../type-aliases/PredicateTypeGuard.md)\<`T`, `E`\>

An asynchronous predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`.

## Returns

[`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`E`\>

A [[FluentAsyncIterable]] of the elements against which the predicate evaluates to `true`.

> **AsyncFilterFunction**(`predicate`): [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`T`\>

Filters the iterable of `T` based on an asynchronous predicate.

## Parameters

• **predicate**: `AsyncPredicate`\<`T`\>

An asynchronous predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`.

## Returns

[`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<`T`\>

A [[FluentAsyncIterable]] of the elements against which the predicate evaluates to `true`.

> **AsyncFilterFunction**\<`Guarantees`\>(`predicate`): [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<[`RequiresTruthy`](../type-aliases/RequiresTruthy.md)\<`T`, `Guarantees`\>\>

Filters the iterable of `T` based on an asynchronous predicate.

## Type Parameters

• **Guarantees** *extends* `string` \| `number` \| `symbol` = `any`

## Parameters

• **predicate**: `AsyncPredicate`\<`T`\>

An asynchronous predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`.

## Returns

[`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<[`RequiresTruthy`](../type-aliases/RequiresTruthy.md)\<`T`, `Guarantees`\>\>

A [[FluentAsyncIterable]] of the elements against which the predicate evaluates to `true`.

> **AsyncFilterFunction**\<`R`, `K`\>(`predicate`): [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<[`RequiresTruthy`](../type-aliases/RequiresTruthy.md)\<`T`, `K`\>\>

Filters the iterable of `T` based on an asynchronous predicate.

## Type Parameters

• **R** *extends* `string` \| `number` \| `symbol`

• **K** *extends* `string` \| `number` \| `symbol`

## Parameters

• **predicate**: `R`

An asynchronous predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`.

## Returns

[`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<[`RequiresTruthy`](../type-aliases/RequiresTruthy.md)\<`T`, `K`\>\>

A [[FluentAsyncIterable]] of the elements against which the predicate evaluates to `true`.
