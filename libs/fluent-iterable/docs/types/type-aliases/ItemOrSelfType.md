[**fluent-iterable v1.38.1**](../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../README.md) / [types](../README.md) / ItemOrSelfType

# Type Alias: ItemOrSelfType\<T\>

> **ItemOrSelfType**\<`T`\>: `T` *extends* `string` ? `T` : `T` *extends* `Iterable`\<infer R\> ? [`ItemOrSelfType`](ItemOrSelfType.md)\<`R`\> : `T`

Represents the first string or non iterable item from chained iterables

## Type Parameters

• **T**
