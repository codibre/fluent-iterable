[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / ToObjectChainValueOf

# Type Alias: ToObjectChainValueOf\<V, K\>

> **ToObjectChainValueOf**\<`V`, `K`\>: `K` *extends* [`ToObjectChainFuncMap`](ToObjectChainFuncMap.md)\<`V`\> ? `ReturnType`\<`K`\> : `K` *extends* keyof `V` ? `V`\[`K`\] : `never`

## Type Parameters

• **V**

• **K** *extends* [`ToObjectChainKey`](ToObjectChainKey.md)\<`V`\>
