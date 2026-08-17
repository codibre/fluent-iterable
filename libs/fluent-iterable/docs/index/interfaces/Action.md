[**fluent-iterable v1.38.1**](../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../README.md) / [index](../README.md) / Action

# Interface: Action()\<T\>

Represents an action on an item of type `T`.<br>
  Example: ``const logUserAction: Action<User> = user => console.log(`User ${user.name} (id: ${user.id})`);``

## Typeparam

T The type of the item the action is defined on.

## Type Parameters

• **T**

> **Action**(`item`): `void`

Represents an action on an item of type `T`.<br>
  Example: ``const logUserAction: Action<User> = user => console.log(`User ${user.name} (id: ${user.id})`);``

## Parameters

• **item**: `T`

The item the action is performed against.

## Returns

`void`

## Typeparam

T The type of the item the action is defined on.
