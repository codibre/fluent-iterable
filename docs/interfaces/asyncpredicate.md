[fluent-iterable - v1.8.3](../README.md) / AsyncPredicate

# Interface: AsyncPredicate<T\>

Represents an asynchronous predicate on type `T`.<br>
  Example: `const userExists: AsyncPredicate<User> = async user => !!(await getUser(user.id))`

## Type parameters

Name | Description |
------ | ------ |
`T` | The type the predicate is defined on.    |

## Hierarchy

* **AsyncPredicate**

## Callable

▸ **AsyncPredicate**(`item`: T): *any*

Asynchronously evaluates an item of type `T`.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`item` | T | The item evaluated.   |

**Returns:** *any*

A promise of `true` if the predicate passed on `item`; otherwise a promise of `false`.
