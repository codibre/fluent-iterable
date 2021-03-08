[fluent-iterable - v1.14.2](../README.md) / Mapper

# Interface: Mapper<T, R\>

Represents a mapping operation from type `T` to type `R`.<br>
  Example: ``const userToPrintable: Mapper<User, string> = user => `${user.name} (id: ${user.id})` ``

## Type parameters

Name | Description |
:------ | :------ |
`T` | The source type.   |
`R` | The destination type.    |

## Callable

▸ **Mapper**(`item`: T): R

Maps an item of type `T` into an instance of type `R`.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`item` | T | The item to map.   |

**Returns:** R

The map of `item`.
