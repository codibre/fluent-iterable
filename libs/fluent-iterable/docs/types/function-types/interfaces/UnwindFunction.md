[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / UnwindFunction

# Interface: UnwindFunction()\<T, Type\>

## Type Parameters

• **T**

• **Type** *extends* `"sync"` \| `"async"`

> **UnwindFunction**\<`A`\>(...`keys`): `Type` *extends* `"sync"` ? `FluentIterable`\<[`UnwindResult`](../type-aliases/UnwindResult.md)\<`A`, `T`, `Type`\<`Type`\>\>\> : [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<[`UnwindResult`](../type-aliases/UnwindResult.md)\<`A`, `T`, `Type`\>\>

Unwinds the specified properties creating a new iterable with multiple items
for each combination of unwinded values for each original item

## Type Parameters

• **A** *extends* keyof `T`[]

## Parameters

• ...**keys**: `A`

The keys to be unwinded

## Returns

`Type` *extends* `"sync"` ? `FluentIterable`\<[`UnwindResult`](../type-aliases/UnwindResult.md)\<`A`, `T`, `Type`\<`Type`\>\>\> : [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<[`UnwindResult`](../type-aliases/UnwindResult.md)\<`A`, `T`, `Type`\>\>

The object chain
