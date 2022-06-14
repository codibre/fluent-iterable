[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / AsyncSortByFunction

# Interface: AsyncSortByFunction<T\>

[types/function-types](../modules/types_function_types.md).AsyncSortByFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### AsyncSortByFunction

▸ **AsyncSortByFunction**(...`mappers`): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

Sorts the elements of the iterable based on a specified fields. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * Alphabetical, ascending: `fluentAsync([{ a: 'anchor' }, { a: 'almond' }, { a: 'bound' }, { a: 'alpine' }]).sortBy((x) => x.a)` yields *almond*, *alpine*, *anchor* and *bound*.<br>
    * Alphabetical, descending: `fluentAsync([{ a: 'anchor' }, { a: 'almond' }, { a: 'bound' }, { a: 'alpine' }]).sortBy(desc((x) => x.a))` yields *bound*, *anchor*, *alpine* and *almond*.<br>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...mappers` | ([`Mapper`](index.Mapper.md)<`T`, `any`\> \| keyof `T`)[] |

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

The sorted [FluentIterable](index.FluentIterable.md).
