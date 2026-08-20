[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / JoinFunction

# Interface: JoinFunction()\<T\>

## Type Parameters

• **T**

> **JoinFunction**(`separator`, `mapper`?): `string`

Projects and concatenates the elements of the iterable into a `string` using a separator. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).join(', ')` returns *anchor, almond, bound, alpine*

## Parameters

• **separator**: `string`

The separator to use in between the elements of the iterable.

• **mapper?**: [`Mapper`](../../../index/interfaces/Mapper.md)\<`T`, `string`\>

The function which projects the elements of the iterable into `string`s. Falls back to the identity function if omitted.

## Returns

`string`

The concatenated string of the elements in the iterable.

> **JoinFunction**(`separator`, `mapper`?): `string`

Projects and concatenates the elements of the iterable into a `string` using a separator. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).join(', ')` returns *anchor, almond, bound, alpine*

## Parameters

• **separator**: `string`

The separator to use in between the elements of the iterable.

• **mapper?**: keyof `T`

The function which projects the elements of the iterable into `string`s. Falls back to the identity function if omitted.

## Returns

`string`

The concatenated string of the elements in the iterable.
