[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / AsyncCombineFunction

# Interface: AsyncCombineFunction()\<T\>

## Type Parameters

• **T**

> **AsyncCombineFunction**\<`U`\>(`iterable`): [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<[`T`, `U`]\>

Join the iterable with an async one, returning a new async iterable with a NxN combination

## Type Parameters

• **U**

## Parameters

• **iterable**: `AnyIterable`\<`U`\>

The iterable to be combined

## Returns

[`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<[`T`, `U`]\>

> **AsyncCombineFunction**\<`U`, `K`\>(`iterable`, `keyA`, `keyB`): [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<[`T`, `U`]\>

Join the iterable with another one, returning a new async iterable with the inner matching combinations

## Type Parameters

• **U**

• **K**

## Parameters

• **iterable**: `AnyIterable`\<`U`\>

The right iterable to be combined

• **keyA**: [`Mapper`](../../../index/interfaces/Mapper.md)\<`T`, `K`\>

A mapper that returns the key map value from the left iterable

• **keyB**: [`Mapper`](../../../index/interfaces/Mapper.md)\<`U`, `K`\>

A mapper that returns the key map value from the right iterable

## Returns

[`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<[`T`, `U`]\>

> **AsyncCombineFunction**\<`U`, `K`\>(`iterable`, `keyA`, `keyB`): [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<[`T`, `U`]\>

Join the iterable with another one, returning a new async iterable with the inner matching combinations

## Type Parameters

• **U**

• **K**

## Parameters

• **iterable**: `AnyIterable`\<`U`\>

The right iterable to be combined

• **keyA**: keyof `T`

A property name with value will be used as for comparison with the key of the second iterable

• **keyB**: [`Mapper`](../../../index/interfaces/Mapper.md)\<`U`, `K`\>

A mapper that returns the key map value from the right iterable

## Returns

[`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<[`T`, `U`]\>

> **AsyncCombineFunction**\<`U`, `K`\>(`iterable`, `keyA`, `keyB`): [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<[`T`, `U`]\>

Join the iterable with another one, returning a new async iterable with the inner matching combinations

## Type Parameters

• **U**

• **K**

## Parameters

• **iterable**: `AnyIterable`\<`U`\>

The right iterable to be combined

• **keyA**: [`Mapper`](../../../index/interfaces/Mapper.md)\<`T`, `K`\>

A mapper that returns the key map value from the left iterable

• **keyB**: keyof `U`

A property name with value will be used as for comparison with the key of the first iterable

## Returns

[`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<[`T`, `U`]\>

> **AsyncCombineFunction**\<`U`\>(`iterable`, `keyA`, `keyB`): [`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<[`T`, `U`]\>

Join the iterable with another one, returning a new async iterable with the inner matching combinations

## Type Parameters

• **U**

## Parameters

• **iterable**: `AnyIterable`\<`U`\>

The right iterable to be combined

• **keyA**: keyof `T`

A property name with value will be used as for comparison with the key of the second iterable

• **keyB**: keyof `U`

A property name with value will be used as for comparison with the key of the first iterable

## Returns

[`FluentAsyncIterable`](../../../index/interfaces/FluentAsyncIterable.md)\<[`T`, `U`]\>
