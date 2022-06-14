[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / AsyncWhenEmptyFunction

# Interface: AsyncWhenEmptyFunction

[types/function-types](../modules/types_function_types.md).AsyncWhenEmptyFunction

## Callable

### AsyncWhenEmptyFunction

▸ **AsyncWhenEmptyFunction**<`R`\>(`fallback`): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`R`\>

Iterates over a fallback iterable when the original is empty

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fallback` | `AnyIterable`<`R`\> | the fallback iterable |

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`R`\>
