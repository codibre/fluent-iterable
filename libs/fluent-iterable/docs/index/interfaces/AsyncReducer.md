[**fluent-iterable v1.38.1**](../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../README.md) / [index](../README.md) / AsyncReducer

# Interface: AsyncReducer()\<T, A\>

Represents an asynchronous reducer of type `T` into the accumulator type `A`.<br>
  Example: `const sumReducer: AsyncReducer<Channel, number> = async (sum, next) => sum + await getNumberOfMessages(next)`

## Typeparam

T The source type.

## Typeparam

A The accumulator type.

## Type Parameters

• **T**

• **A**

> **AsyncReducer**(`current`, `next`): `A` \| `Promise`\<`A`\>

Represents an asynchronous reducer of type `T` into the accumulator type `A`.<br>
  Example: `const sumReducer: AsyncReducer<Channel, number> = async (sum, next) => sum + await getNumberOfMessages(next)`

## Parameters

• **current**: `A`

The previous accumulator value.

• **next**: `T`

The next item.

## Returns

`A` \| `Promise`\<`A`\>

A promise of the new accumulator value.

## Typeparam

T The source type.

## Typeparam

A The accumulator type.
