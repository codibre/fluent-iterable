[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / RequiresTruthy

# Type Alias: RequiresTruthy\<T, Guarantees\>

> **RequiresTruthy**\<`T`, `Guarantees`\>: `T` & `{ [P in Guarantees]-?: Truthy<T[P]> }`

## Type Parameters

• **T**

• **Guarantees** *extends* keyof `T`
