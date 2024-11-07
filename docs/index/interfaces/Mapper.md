[**fluent-iterable v1.38.1**](../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../README.md) / [index](../README.md) / Mapper

# Interface: Mapper()\<T, R\>

Represents a mapping operation from type `T` to type `R`.<br>
  Example: ``const userToPrintable: Mapper<User, string> = user => `${user.name} (id: ${user.id})` ``

## Typeparam

T The source type.

## Typeparam

R The destination type.

## Type Parameters

• **T**

• **R**

> **Mapper**(`item`): `R`

Represents a mapping operation from type `T` to type `R`.<br>
  Example: ``const userToPrintable: Mapper<User, string> = user => `${user.name} (id: ${user.id})` ``

## Parameters

• **item**: `T`

The item to map.

## Returns

`R`

The map of `item`.

## Typeparam

T The source type.

## Typeparam

R The destination type.
