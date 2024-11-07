[**fluent-iterable v1.38.1**](../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../README.md) / [index](../README.md) / Reducer

# Interface: Reducer()\<T, A\>

Represents a reducer of type `T` into the accumulator type `A`.<br>
  Example: `const sumReducer: Reducer<number, number> = (sum, next) => sum + next;`

## Typeparam

T The source type.

## Typeparam

A The accumulator type.

## Type Parameters

• **T**

• **A**

> **Reducer**(`current`, `next`): `A`

Represents a reducer of type `T` into the accumulator type `A`.<br>
  Example: `const sumReducer: Reducer<number, number> = (sum, next) => sum + next;`

## Parameters

• **current**: `A`

The previous accumulator value.

• **next**: `T`

The next item.

## Returns

`A`

The new accumulator value.

## Typeparam

T The source type.

## Typeparam

A The accumulator type.
