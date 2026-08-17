[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / CombineFunction

# Interface: CombineFunction()\<T\>

## Type Parameters

• **T**

> **CombineFunction**\<`U`\>(`iterable`): `FluentIterable`\<[`T`, `U`]\>

Join the iterable with another one, returning a new iterable with a NxN combination

## Type Parameters

• **U**

## Parameters

• **iterable**: `Iterable`\<`U`, `any`, `any`\>

The iterable to be combined

## Returns

`FluentIterable`\<[`T`, `U`]\>

> **CombineFunction**\<`U`, `K`\>(`iterable`, `keyA`, `keyB`): `FluentIterable`\<[`T`, `U`]\>

Join the iterable with another one, returning a new iterable with the inner matching combinations

## Type Parameters

• **U**

• **K**

## Parameters

• **iterable**: `Iterable`\<`U`, `any`, `any`\>

The right iterable to be combined

• **keyA**: [`Mapper`](../../../index/interfaces/Mapper.md)\<`T`, `K`\>

A mapper that returns the key map value from the left iterable

• **keyB**: [`Mapper`](../../../index/interfaces/Mapper.md)\<`U`, `K`\>

A mapper that returns the key map value from the right iterable

## Returns

`FluentIterable`\<[`T`, `U`]\>

> **CombineFunction**\<`U`, `K`\>(`iterable`, `keyA`, `keyB`): `FluentIterable`\<[`T`, `U`]\>

Join the iterable with another one, returning a new iterable with the inner matching combinations

## Type Parameters

• **U**

• **K**

## Parameters

• **iterable**: `Iterable`\<`U`, `any`, `any`\>

The right iterable to be combined

• **keyA**: keyof `T`

A property name with value will be used as for comparison with the key of the second iterable

• **keyB**: [`Mapper`](../../../index/interfaces/Mapper.md)\<`U`, `K`\>

A mapper that returns the key map value from the right iterable

## Returns

`FluentIterable`\<[`T`, `U`]\>

> **CombineFunction**\<`U`, `K`\>(`iterable`, `keyA`, `keyB`): `FluentIterable`\<[`T`, `U`]\>

Join the iterable with another one, returning a new iterable with the inner matching combinations

## Type Parameters

• **U**

• **K**

## Parameters

• **iterable**: `Iterable`\<`U`, `any`, `any`\>

The right iterable to be combined

• **keyA**: [`Mapper`](../../../index/interfaces/Mapper.md)\<`T`, `K`\>

A mapper that returns the key map value from the left iterable

• **keyB**: keyof `U`

A property name with value will be used as for comparison with the key of the first iterable

## Returns

`FluentIterable`\<[`T`, `U`]\>

> **CombineFunction**\<`U`\>(`iterable`, `keyA`, `keyB`): `FluentIterable`\<[`T`, `U`]\>

Join the iterable with another one, returning a new iterable with the inner matching combinations

## Type Parameters

• **U**

## Parameters

• **iterable**: `Iterable`\<`U`, `any`, `any`\>

The right iterable to be combined

• **keyA**: keyof `T`

A property name with value will be used as for comparison with the key of the second iterable

• **keyB**: keyof `U`

A property name with value will be used as for comparison with the key of the first iterable

## Returns

`FluentIterable`\<[`T`, `U`]\>
