[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / AsyncNextFunction

# Interface: AsyncNextFunction<T\>

[types/function-types](../modules/types_function_types.md).AsyncNextFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### AsyncNextFunction

▸ **AsyncNextFunction**<`R`\>(`callback`): `R`

Chain the async iterable with a next transformation, of total control of the callback function

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | [`Mapper`](index.Mapper.md)<[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>, `R`\> | the callback function |

#### Returns

`R`
