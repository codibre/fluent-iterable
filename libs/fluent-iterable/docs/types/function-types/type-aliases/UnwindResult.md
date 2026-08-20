[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / UnwindResult

# Type Alias: UnwindResult\<Arr, V, Type\>

> **UnwindResult**\<`Arr`, `V`, `Type`\>: `object`

## Type Parameters

• **Arr** *extends* keyof `V`[]

• **V**

• **Type** *extends* `"sync"` \| `"async"`

## Type declaration

### unwinded

> **unwinded**: `{ [k in Arr[number]]: V[k] extends (Type extends "sync" ? Iterable<any> : AnyIterable<any>) ? AsyncItemType<V[k]> : V[k] }`

### value

> **value**: `V`
