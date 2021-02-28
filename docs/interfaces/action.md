[fluent-iterable - v1.13.0](../README.md) / Action

# Interface: Action<T\>

Represents an action on an item of type `T`.<br>
  Example: ``const logUserAction: Action<User> = user => console.log(`User ${user.name} (id: ${user.id})`);``

## Type parameters

Name | Description |
:------ | :------ |
`T` | The type of the item the action is defined on.    |

## Callable

▸ **Action**(`item`: T): *void*

Specifies the action to perform on `item`.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`item` | T | The item the action is performed against.    |

**Returns:** *void*
