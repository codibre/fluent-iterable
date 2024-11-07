[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / SortByFunction

# Interface: SortByFunction()\<T\>

## Type Parameters

• **T**

> **SortByFunction**(...`mappers`): `FluentIterable`\<`T`\>

Sorts the elements of the iterable based on a specified fields. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * Alphabetical, ascending: `fluent([{ a: 'anchor' }, { a: 'almond' }, { a: 'bound' }, { a: 'alpine' }]).sortBy((x) => x.a)` yields *almond*, *alpine*, *anchor* and *bound*.<br>
    * Alphabetical, descending: `fluent([{ a: 'anchor' }, { a: 'almond' }, { a: 'bound' }, { a: 'alpine' }]).sortBy(desc((x) => x.a))` yields *bound*, *anchor*, *alpine* and *almond*.<br>

## Parameters

• ...**mappers**: ([`Mapper`](../../../index/interfaces/Mapper.md)\<`T`, `any`\> \| keyof `T`)[]

## Returns

`FluentIterable`\<`T`\>

The sorted [[FluentIterable]].
