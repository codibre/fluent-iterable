[**fluent-iterable v1.38.1**](../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../README.md) / [types](../README.md) / AnyReducer

# Interface: AnyReducer()\<T, A\>

Represents a reducer of type `T` into the accumulator type `A`.<br>
  Example: `const sumReducer: Reducer<number, number> = (sum, next) => sum + next;`

## Typeparam

T The source type.

## Typeparam

A The accumulator type.

## Type Parameters

• **T**

• **A**

> **AnyReducer**(`current`, `next`): `A` \| `Promise`\<`A`\>

Represents a reducer of type `T` into the accumulator type `A`.<br>
  Example: `const sumReducer: Reducer<number, number> = (sum, next) => sum + next;`

## Parameters

• **current**: `A`

The previous accumulator value.

• **next**: `T`

The next item.

## Returns

`A` \| `Promise`\<`A`\>

The new accumulator value.

## Typeparam

T The source type.

## Typeparam

A The accumulator type.
