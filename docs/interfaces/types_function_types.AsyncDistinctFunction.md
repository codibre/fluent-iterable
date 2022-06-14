[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / AsyncDistinctFunction

# Interface: AsyncDistinctFunction<T\>

[types/function-types](../modules/types_function_types.md).AsyncDistinctFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### AsyncDistinctFunction

▸ **AsyncDistinctFunction**<`R`\>(`mapper?`, `maxOcurrences?`): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

Returns distinct elements from the iterable from a certain asynchronous projections perspective.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `R` | The type of the data the element equality is based on. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapper?` | [`AsyncMapper`](index.AsyncMapper.md)<`T`, `R`\> | The asynchronous projection to use to determine element equality. Identity mapping is used if omitted. |
| `maxOcurrences?` | `number` | The number of accepted occurrences for each item. Default: 1 |

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

The [FluentAsyncIterable](index.FluentAsyncIterable.md) of the distinct elements.

### AsyncDistinctFunction

▸ **AsyncDistinctFunction**<`R`\>(`mapper`, `choose`): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

Returns distinct elements from the iterable from a certain asynchronous projections perspective.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `R` | The type of the data the element equality is based on. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapper` | [`AsyncMapper`](index.AsyncMapper.md)<`T`, `R`\> | The asynchronous projection to use to determine element equality. Identity mapping is used if omitted. |
| `choose` | [`Choose`](../modules/types.md#choose)<`T`\> | receives two T elements and return the one that must be chosen |

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

The [FluentAsyncIterable](index.FluentAsyncIterable.md) of the distinct elements.

### AsyncDistinctFunction

▸ **AsyncDistinctFunction**<`R`\>(`mapper`, `maxOcurrences?`): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

Returns distinct elements from the iterable from a certain asynchronous projections perspective.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | extends `string` \| `number` \| `symbol` | The type of the data the element equality is based on. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapper` | `R` | The asynchronous projection to use to determine element equality. Identity mapping is used if omitted. |
| `maxOcurrences?` | `number` | The number of accepted occurrences for each item. Default: 1 |

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

The [FluentAsyncIterable](index.FluentAsyncIterable.md) of the distinct elements.

### AsyncDistinctFunction

▸ **AsyncDistinctFunction**<`R`\>(`mapper`, `choose`): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

Returns distinct elements from the iterable from a certain asynchronous projections perspective.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | extends `string` \| `number` \| `symbol` | The type of the data the element equality is based on. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapper` | `R` | The asynchronous projection to use to determine element equality. Identity mapping is used if omitted. |
| `choose` | [`Choose`](../modules/types.md#choose)<`T`\> | receives two T elements and return the one that must be chosen |

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

The [FluentAsyncIterable](index.FluentAsyncIterable.md) of the distinct elements.
