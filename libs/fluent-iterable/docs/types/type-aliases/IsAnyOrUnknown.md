[**fluent-iterable v1.38.1**](../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../README.md) / [types](../README.md) / IsAnyOrUnknown

# Type Alias: IsAnyOrUnknown\<T\>

> **IsAnyOrUnknown**\<`T`\>: `unknown` *extends* `T` ? `true` : [`AnyHack`](AnyHack.md)\<`T`\> *extends* `"A"` ? `false` : [`AnyHack`](AnyHack.md)\<`T`\> *extends* `"B"` ? `false` : `true`

Returns true wether T is any or unknown

## Type Parameters

• **T**
