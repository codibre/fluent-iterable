[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / ToArrayFunction

# Interface: ToArrayFunction<T\>

[types/function-types](../modules/types_function_types.md).ToArrayFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### ToArrayFunction

▸ **ToArrayFunction**(): `T`[]

Translates the iterable into an array. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).toArray()` returns `['anchor', 'almond', 'bound', 'alpine']`

#### Returns

`T`[]

The array equivalent of the iterable.
