[fluent-iterable - v0.3.2](../README.md) › ["types/types"](../modules/_types_types_.md) › [Action](_types_types_.action.md)

# Interface: Action ‹**T**›

Represents an action on an item of type `T`.<br>
  Example: ``const logUserAction: Action<User> = user => console.log(`User ${user.name} (id: ${user.id})`);``

## Type parameters

▪ **T**

The type of the item the action is defined on.

## Hierarchy

* **Action**

## Callable

▸ (`item`: T): *void*

Specifies the action to perform on `item`.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`item` | T | The item the action is performed against.  |

**Returns:** *void*
