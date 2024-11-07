[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / ConcatFunction

# Interface: ConcatFunction()\<T\>

## Type Parameters

• **T**

> **ConcatFunction**(...`iterables`): `FluentIterable`\<`T`\>

Concatenates specified iterables to the iterable.<br>
  Example: `fluent(['anchor', 'almond']).concat(['bound', 'alpine'], ['book'])` yields *anchor*, *almond*, *bound*, *alpine* and *book*.

## Parameters

• ...**iterables**: `Iterable`\<`T`, `any`, `any`\>[]

The iterables to concatenate.

## Returns

`FluentIterable`\<`T`\>

The [[FluentIterable]] of the concatenated iterables.
