[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / SortFunction

# Interface: SortFunction<T\>

[types/function-types](../modules/types_function_types.md).SortFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### SortFunction

▸ **SortFunction**(`comparer?`): [`FluentIterable`](index.FluentIterable.md)<`T`\>

Sorts the elements of the iterable based on a specified comparer. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * Alphabetical, ascending: `fluent(['anchor', 'almond', 'bound', 'alpine']).sort()` yields *almond*, *alpine*, *anchor* and *bound*.<br>
    * Alphabetical, descending: `fluent(['anchor', 'almond', 'bound', 'alpine']).sort((x, y) => x > y ? -1 : x < y ? 1 : 0)` yields *bound*, *anchor*, *alpine* and *almond*.<br>
    * Numerical, ascending: `fluent([5, 3, 4, 1, 2]).sort()` yields *1*, *2*, *3*, *4* and *5*.<br>
    * Numerical, descending: `fluent([5, 3, 4, 1, 2]).sort((x, y) => y - x)` yields *5*, *4*, *3*, *2* and *1*.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `comparer?` | [`Comparer`](index.Comparer.md)<`T`\> | The comparer operation to use to determine the order of elements. Alphabetical ascending is used for [[string]] elements and numerical ascending is used for [[number]] |

#### Returns

[`FluentIterable`](index.FluentIterable.md)<`T`\>

The sorted [FluentIterable](index.FluentIterable.md).
