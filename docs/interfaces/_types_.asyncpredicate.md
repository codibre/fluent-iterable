[fluent-iterable - v0.7.0](../README.md) › ["types"](../modules/_types_.md) › [AsyncPredicate](_types_.asyncpredicate.md)

# Interface: AsyncPredicate ‹**T**›

Represents an asynchronous predicate on type `T`.<br>
  Example: `const userExists: AsyncPredicate<User> = async user => !!(await getUser(user.id))`

## Type parameters

▪ **T**

The type the predicate is defined on.

## Hierarchy

* **AsyncPredicate**

## Callable

▸ (`item`: T): *Promise‹any› | any*

Asynchronously evaluates an item of type `T`.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`item` | T | The item evaluated. |

**Returns:** *Promise‹any› | any*

A promise of `true` if the predicate passed on `item`; otherwise a promise of `false`.
