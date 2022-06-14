[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / NextFunction

# Interface: NextFunction<T\>

[types/function-types](../modules/types_function_types.md).NextFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### NextFunction

▸ **NextFunction**<`R`\>(`callback`): `R`

Chain the iterable with a next transformation, of total control of the callback function

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | [`Mapper`](index.Mapper.md)<[`FluentIterable`](index.FluentIterable.md)<`T`\>, `R`\> | the callback function |

#### Returns

`R`
