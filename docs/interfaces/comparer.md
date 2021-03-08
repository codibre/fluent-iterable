[fluent-iterable - v1.14.0](../README.md) / Comparer

# Interface: Comparer<T\>

Compares two instances of type `T`.<br>
  Example: `const levelComparer: Comparer<User> = (userA, userB) => userA.level - userB.level;`

## Type parameters

Name | Description |
:------ | :------ |
`T` | The type of the compared instances.    |

## Callable

▸ **Comparer**(`a`: T, `b`: T): *number*

Compares `a` and `b`.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`a` | T | The first instance (the left hand side of the comparison).   |
`b` | T | The second instance (the right hand side of the comparison).   |

**Returns:** *number*

A number which represents the result of the comparison. If **negative**, `a` precedes `b`, if **positive**, `b` precedes `a`, if **zero**, `a` equals to `b` in the comparison.
