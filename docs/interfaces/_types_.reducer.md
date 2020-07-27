[fluent-iterable - v1.2.4](../README.md) › ["types"](../modules/_types_.md) › [Reducer](_types_.reducer.md)

# Interface: Reducer ‹**T, A**›

Represents a reducer of type `T` into the accumulator type `A`.<br>
  Example: `const sumReducer: Reducer<number, number> = (sum, next) => sum + next;`

## Type parameters

▪ **T**

The source type.

▪ **A**

The accumulator type.

## Hierarchy

* **Reducer**

## Callable

▸ (`current`: A, `next`: T): *A*

Generates the next accumulator item based on the previous one and the next item under reduce.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`current` | A | The previous accumulator value. |
`next` | T | The next item. |

**Returns:** *A*

The new accumulator value.
