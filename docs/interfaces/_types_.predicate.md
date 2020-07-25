[fluent-iterable - v1.2.1](../README.md) › ["types"](../modules/_types_.md) › [Predicate](_types_.predicate.md)

# Interface: Predicate ‹**T**›

Represents a predicate on type `T`.<br>
  Example: `const evenNumber: Predicate<number> = n => (n % 2) === 0;`

## Type parameters

▪ **T**

The type the predicate is defined on.

## Hierarchy

* **Predicate**

## Callable

▸ (`item`: T): *any*

Evaluates an item of type `T`.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`item` | T | The item evaluated. |

**Returns:** *any*

`true` if the predicate passed on `item`; otherwise `false`.
