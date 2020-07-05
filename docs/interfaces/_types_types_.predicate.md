[fluent-iterable - v0.2.1](../README.md) › ["types/types"](../modules/_types_types_.md) › [Predicate](_types_types_.predicate.md)

# Interface: Predicate ‹**T**›

Represents a predicate on type `T`.<br>
  Example: `const evenNumber: Predicate<number> = n => (n % 2) === 0;`

## Type parameters

▪ **T**

The type the predicate is defined on.

## Hierarchy

* **Predicate**

## Callable

▸ (`item`: T): *boolean*

Evaluates an item of type `T`.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`item` | T | The item evaluated. |

**Returns:** *boolean*

`true` if the predicate passed on `item`; otherwise `false`.