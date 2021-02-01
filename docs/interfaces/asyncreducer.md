[fluent-iterable - v1.8.6](../README.md) / AsyncReducer

# Interface: AsyncReducer<T, A\>

Represents an asynchronous reducer of type `T` into the accumulator type `A`.<br>
  Example: `const sumReducer: AsyncReducer<Channel, number> = async (sum, next) => sum + await getNumberOfMessages(next)`

## Type parameters

Name | Description |
------ | ------ |
`T` | The source type.   |
`A` | The accumulator type.    |

## Hierarchy

* **AsyncReducer**

## Callable

▸ **AsyncReducer**(`current`: A, `next`: T): A \| *Promise*<A\>

Asynchronously generates the next accumulator item based on the previous one and the next item under reduce.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`current` | A | The previous accumulator value.   |
`next` | T | The next item.   |

**Returns:** A \| *Promise*<A\>

A promise of the new accumulator value.
