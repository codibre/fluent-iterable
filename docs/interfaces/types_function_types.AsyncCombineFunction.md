[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / AsyncCombineFunction

# Interface: AsyncCombineFunction<T\>

[types/function-types](../modules/types_function_types.md).AsyncCombineFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### AsyncCombineFunction

▸ **AsyncCombineFunction**<`U`\>(`iterable`): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<[`T`, `U`]\>

Join the iterable with an async one, returning a new async iterable with a NxN combination

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable` | `AnyIterable`<`U`\> | The iterable to be combined |

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<[`T`, `U`]\>

### AsyncCombineFunction

▸ **AsyncCombineFunction**<`U`, `K`\>(`iterable`, `keyA`, `keyB`): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<[`T`, `U`]\>

Join the iterable with another one, returning a new async iterable with the inner matching combinations

#### Type parameters

| Name |
| :------ |
| `U` |
| `K` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable` | `AnyIterable`<`U`\> | The right iterable to be combined |
| `keyA` | [`Mapper`](index.Mapper.md)<`T`, `K`\> | A mapper that returns the key map value from the left iterable |
| `keyB` | [`Mapper`](index.Mapper.md)<`U`, `K`\> | A mapper that returns the key map value from the right iterable |

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<[`T`, `U`]\>

### AsyncCombineFunction

▸ **AsyncCombineFunction**<`U`, `K`\>(`iterable`, `keyA`, `keyB`): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<[`T`, `U`]\>

Join the iterable with another one, returning a new async iterable with the inner matching combinations

#### Type parameters

| Name |
| :------ |
| `U` |
| `K` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable` | `AnyIterable`<`U`\> | The right iterable to be combined |
| `keyA` | keyof `T` | A property name with value will be used as for comparison with the key of the second iterable |
| `keyB` | [`Mapper`](index.Mapper.md)<`U`, `K`\> | A mapper that returns the key map value from the right iterable |

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<[`T`, `U`]\>

### AsyncCombineFunction

▸ **AsyncCombineFunction**<`U`, `K`\>(`iterable`, `keyA`, `keyB`): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<[`T`, `U`]\>

Join the iterable with another one, returning a new async iterable with the inner matching combinations

#### Type parameters

| Name |
| :------ |
| `U` |
| `K` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable` | `AnyIterable`<`U`\> | The right iterable to be combined |
| `keyA` | [`Mapper`](index.Mapper.md)<`T`, `K`\> | A mapper that returns the key map value from the left iterable |
| `keyB` | keyof `U` | A property name with value will be used as for comparison with the key of the first iterable |

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<[`T`, `U`]\>

### AsyncCombineFunction

▸ **AsyncCombineFunction**<`U`\>(`iterable`, `keyA`, `keyB`): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<[`T`, `U`]\>

Join the iterable with another one, returning a new async iterable with the inner matching combinations

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable` | `AnyIterable`<`U`\> | The right iterable to be combined |
| `keyA` | keyof `T` | A property name with value will be used as for comparison with the key of the second iterable |
| `keyB` | keyof `U` | A property name with value will be used as for comparison with the key of the first iterable |

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<[`T`, `U`]\>
