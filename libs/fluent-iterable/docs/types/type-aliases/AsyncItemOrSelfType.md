[**fluent-iterable v1.38.1**](../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../README.md) / [types](../README.md) / AsyncItemOrSelfType

# Type Alias: AsyncItemOrSelfType\<T\>

> **AsyncItemOrSelfType**\<`T`\>: `T` *extends* `string` ? `T` : `T` *extends* `AnyIterable`\<infer R\> ? [`AsyncItemOrSelfType`](AsyncItemOrSelfType.md)\<`R`\> : `T`

Represents the first string or non iterable item from chained iterables

## Type Parameters

• **T**
