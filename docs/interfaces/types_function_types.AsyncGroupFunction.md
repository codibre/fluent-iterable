[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / AsyncGroupFunction

# Interface: AsyncGroupFunction<T\>

[types/function-types](../modules/types_function_types.md).AsyncGroupFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### AsyncGroupFunction

▸ **AsyncGroupFunction**<`R`, `V`\>(`mapper`, `transformValue?`): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<[`FluentGroup`](index.FluentGroup.md)<`V`, `R`\>\>

Groups the elements of the iterable keyed by equality of data at the specified asynchronous projection.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | `R` | The type of the groups key. |
| `V` | `T` | - |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapper` | [`AsyncMapper`](index.AsyncMapper.md)<`T`, `R`\> | Asynchronously projects the elements of the iterable into the group key they belong to. |
| `transformValue?` | [`AsyncKVGroupTransform`](types.AsyncKVGroupTransform.md)<`R`, `T`, `V`\> | Optional. Allows a transformation before adding the value to the group. The return must be an iterable or AsyncIterable |

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<[`FluentGroup`](index.FluentGroup.md)<`V`, `R`\>\>

The [FluentAsyncIterable](index.FluentAsyncIterable.md) of the distinct groups.

### AsyncGroupFunction

▸ **AsyncGroupFunction**<`R`, `V`\>(`mapper`, `transformValue?`): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<[`FluentGroup`](index.FluentGroup.md)<`V`, `T`[`R`]\>\>

Groups the elements of the iterable keyed by equality of data at the specified asynchronous projection.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | extends `string` \| `number` \| `symbol` | The type of the groups key. |
| `V` | `T` | - |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapper` | `R` | A property name with value will be used as for comparison with the grouping key |
| `transformValue?` | [`AsyncKVGroupTransform`](types.AsyncKVGroupTransform.md)<`T`[`R`], `T`, `V`\> | Optional. Allows a transformation before adding the value to the group. The return must be an iterable or AsyncIterable |

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<[`FluentGroup`](index.FluentGroup.md)<`V`, `T`[`R`]\>\>

The [FluentAsyncIterable](index.FluentAsyncIterable.md) of the distinct groups.
