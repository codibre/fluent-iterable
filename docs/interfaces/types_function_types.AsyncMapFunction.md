[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / AsyncMapFunction

# Interface: AsyncMapFunction<T\>

[types/function-types](../modules/types_function_types.md).AsyncMapFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### AsyncMapFunction

▸ **AsyncMapFunction**<`R`\>(`mapper`): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`R`\>

Transforms the iterable of `T` into an iterable of `R` by mapping all elements to an element of `R`.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `R` | The destination type of the mapping. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapper` | [`AsyncMapper`](index.AsyncMapper.md)<`T`, `R`\> | The asynchronous operation which maps an instance of `T` into an instance of `R`. |

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`R`\>

A [FluentAsyncIterable](index.FluentAsyncIterable.md) of the mapped elements.

### AsyncMapFunction

▸ **AsyncMapFunction**<`R`\>(`mapper`): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`[`R`]\>

Transforms the iterable of `T` into an iterable of `R` by mapping all elements to an element of `R`.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | extends `string` \| `number` \| `symbol` | The destination type of the mapping. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapper` | `R` | The asynchronous operation which maps an instance of `T` into an instance of `R`. |

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`[`R`]\>

A [FluentAsyncIterable](index.FluentAsyncIterable.md) of the mapped elements.
