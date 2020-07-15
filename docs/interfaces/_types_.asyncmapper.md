[fluent-iterable - v1.0.0](../README.md) › ["types"](../modules/_types_.md) › [AsyncMapper](_types_.asyncmapper.md)

# Interface: AsyncMapper ‹**T, R**›

Represents a asynchronous mapping operation from type `T` to type `R`.<br>
  Example: `const idToUser: AsyncMapper<number, User> = async id => await getUser(id)`<br>
  Note: in the example above, `getUser` function is already an [AsyncMapper](_types_.asyncmapper.md).

## Type parameters

▪ **T**

The source type.

▪ **R**

The destination type.

## Hierarchy

* **AsyncMapper**

## Callable

▸ (`item`: T): *Promise‹R› | R*

Asynchronously maps an item of type `T` into an instance of type `R`.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`item` | T | The item to map. |

**Returns:** *Promise‹R› | R*

A promise of the map of `item`.
