[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / ToMapChainValueOf

# Type Alias: ToMapChainValueOf\<V, K\>

> **ToMapChainValueOf**\<`V`, `K`\>: `K` *extends* [`Mapper`](../../../index/interfaces/Mapper.md)\<`V`, `unknown`\> ? `ReturnType`\<`K`\> : `K` *extends* keyof `V` ? `V`\[`K`\] : `never`

## Type Parameters

• **V**

• **K** *extends* [`ToMapChainKey`](ToMapChainKey.md)\<`V`\>
