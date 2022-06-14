[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / FlatMergeFunction

# Interface: FlatMergeFunction<T\>

[types/function-types](../modules/types_function_types.md).FlatMergeFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### FlatMergeFunction

▸ **FlatMergeFunction**<`R`\>(`errorCallback?`): `T` extends `AsyncIterable`<`any`\> ? [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`R`\> : `never`

When you have an iterable of async iterable, you can use this functions to merge all results into one iterable
where the first items will be the ones yielded first.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | extends `unknown` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `errorCallback?` | [`ErrorCallback`](types.ErrorCallback.md) | if informed, this function will catch any error that occurs in some async iterable, preventing the code from throw it |

#### Returns

`T` extends `AsyncIterable`<`any`\> ? [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`R`\> : `never`
