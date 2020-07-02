[fluent-iterable - v0.2.0](../README.md) › ["types"](../modules/_types_.md) › [Mapper](_types_.mapper.md)

# Interface: Mapper ‹**T, R**›

Represents a mapping operation from type `T` to type `R`.<br>
  Example: ``const userToPrintable: Mapper<User, string> = user => `${user.name} (id: ${user.id})` ``

## Type parameters

▪ **T**

The source type.

▪ **R**

The destination type.

## Hierarchy

* **Mapper**

## Callable

▸ (`item`: T): *R*

Maps an item of type `T` into an instance of type `R`.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`item` | T | The item to map. |

**Returns:** *R*

The map of `item`.
