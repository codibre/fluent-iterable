[**fluent-iterable v1.38.1**](../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../README.md) / [index](../README.md) / AsyncAction

# Interface: AsyncAction()\<T\>

Represents an asynchronous action on an item of type `T`.<br>
  Example: `const createUserAction: AsyncAction<User> = async user => await database.put(user);`

## Typeparam

T The type of the item the action is defined on.

## Type Parameters

• **T**

> **AsyncAction**(`item`): `unknown`

Represents an asynchronous action on an item of type `T`.<br>
  Example: `const createUserAction: AsyncAction<User> = async user => await database.put(user);`

## Parameters

• **item**: `T`

The item the action is performed against.

## Returns

`unknown`

The promise of any action.

## Typeparam

T The type of the item the action is defined on.
