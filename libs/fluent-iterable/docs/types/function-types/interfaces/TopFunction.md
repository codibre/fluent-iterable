[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / TopFunction

# Interface: TopFunction()\<T\>

## Type Parameters

• **T**

> **TopFunction**\<`R`\>(`mapper`, `comparer`): `undefined` \| `T`

Calculates the top element of the iterable using a projection and a comparer. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).top(word => word.length, (a, b) => b - a)` returns *bound*, the shortest word in the iterable
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).top(word => word.charCodeAt(0), (a, b) => a - b)` returns *bound*, latest word in the lexicographical order considering the first character only

## Type Parameters

• **R**

## Parameters

• **mapper**: [`Mapper`](../../../index/interfaces/Mapper.md)\<`T`, `R`\>

The function which projects the elements of the iterable into comparable.

• **comparer**: [`Comparer`](../../../index/interfaces/Comparer.md)\<`R`\>

The comparison function.

## Returns

`undefined` \| `T`

The top of the iterable's projected elements.

## Typeparam

R The type of the projected elements used for comparison.

> **TopFunction**\<`R`\>(`mapper`, `comparer`): `undefined` \| `T`

Calculates the top element of the iterable using a projection and a comparer. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).top(word => word.length, (a, b) => b - a)` returns *bound*, the shortest word in the iterable
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).top(word => word.charCodeAt(0), (a, b) => a - b)` returns *bound*, latest word in the lexicographical order considering the first character only

## Type Parameters

• **R** *extends* `string` \| `number` \| `symbol`

## Parameters

• **mapper**: `R`

The function which projects the elements of the iterable into comparable.

• **comparer**: [`Comparer`](../../../index/interfaces/Comparer.md)\<`T`\[`R`\]\>

The comparison function.

## Returns

`undefined` \| `T`

The top of the iterable's projected elements.

## Typeparam

R The type of the projected elements used for comparison.
