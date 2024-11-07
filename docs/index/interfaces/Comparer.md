[**fluent-iterable v1.38.1**](../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../README.md) / [index](../README.md) / Comparer

# Interface: Comparer()\<T\>

Compares two instances of type `T`.<br>
  Example: `const levelComparer: Comparer<User> = (userA, userB) => userA.level - userB.level;`

## Typeparam

T The type of the compared instances.

## Type Parameters

• **T**

> **Comparer**(`a`, `b`): `number`

Compares two instances of type `T`.<br>
  Example: `const levelComparer: Comparer<User> = (userA, userB) => userA.level - userB.level;`

## Parameters

• **a**: `T`

The first instance (the left hand side of the comparison).

• **b**: `T`

The second instance (the right hand side of the comparison).

## Returns

`number`

A number which represents the result of the comparison. If **negative**, `a` precedes `b`, if **positive**, `b` precedes `a`, if **zero**, `a` equals to `b` in the comparison.

## Typeparam

T The type of the compared instances.
