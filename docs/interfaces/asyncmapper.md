[fluent-iterable - v1.14.3](../README.md) / AsyncMapper

# Interface: AsyncMapper<T, R\>

Represents a asynchronous mapping operation from type `T` to type `R`.<br>
  Example: `const idToUser: AsyncMapper<number, User> = async id => await getUser(id)`<br>
  Note: in the example above, `getUser` function is already an [[AsyncMapper]].

## Type parameters

Name | Description |
:------ | :------ |
`T` | The source type.   |
`R` | The destination type.    |

## Callable

▸ **AsyncMapper**(`item`: T): R \| *Promise*<R\>

Asynchronously maps an item of type `T` into an instance of type `R`.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`item` | T | The item to map.   |

**Returns:** R \| *Promise*<R\>

A promise of the map of `item`.
