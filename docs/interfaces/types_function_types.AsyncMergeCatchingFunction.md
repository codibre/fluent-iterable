[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / AsyncMergeCatchingFunction

# Interface: AsyncMergeCatchingFunction<T\>

[types/function-types](../modules/types_function_types.md).AsyncMergeCatchingFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### AsyncMergeCatchingFunction

▸ **AsyncMergeCatchingFunction**<`R`\>(`errorCallback`, ...`iterables`): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T` \| `R`\>

Merge the iterable with the informed ones, catching the errors of any of the iterables that fails, so the process can continue until all the successful iterables ends.

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `errorCallback` | [`ErrorCallback`](types.ErrorCallback.md) | A callback to be called if any of the iterables fail |
| `...iterables` | `AsyncIterable`<`R`\>[] | The iterables to be merged |

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T` \| `R`\>

A new iterable that returns the elements of all others in the order of which resolves first
