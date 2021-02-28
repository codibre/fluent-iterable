[fluent-iterable - v1.11.0](../README.md) / AsyncAction

# Interface: AsyncAction<T\>

Represents an asynchronous action on an item of type `T`.<br>
  Example: `const createUserAction: AsyncAction<User> = async user => await database.put(user);`

## Type parameters

Name | Description |
:------ | :------ |
`T` | The type of the item the action is defined on.    |

## Callable

▸ **AsyncAction**(`item`: T): *unknown*

Specifies the asynchronous action to perform on `item`.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`item` | T | The item the action is performed against.   |

**Returns:** *unknown*

The promise of any action.
