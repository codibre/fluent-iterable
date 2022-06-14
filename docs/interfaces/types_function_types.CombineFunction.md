[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / CombineFunction

# Interface: CombineFunction<T\>

[types/function-types](../modules/types_function_types.md).CombineFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### CombineFunction

▸ **CombineFunction**<`U`\>(`iterable`): [`FluentIterable`](index.FluentIterable.md)<[`T`, `U`]\>

Join the iterable with another one, returning a new iterable with a NxN combination

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable` | `Iterable`<`U`\> | The iterable to be combined |

#### Returns

[`FluentIterable`](index.FluentIterable.md)<[`T`, `U`]\>

### CombineFunction

▸ **CombineFunction**<`U`, `K`\>(`iterable`, `keyA`, `keyB`): [`FluentIterable`](index.FluentIterable.md)<[`T`, `U`]\>

Join the iterable with another one, returning a new iterable with the inner matching combinations

#### Type parameters

| Name |
| :------ |
| `U` |
| `K` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable` | `Iterable`<`U`\> | The right iterable to be combined |
| `keyA` | [`Mapper`](index.Mapper.md)<`T`, `K`\> | A mapper that returns the key map value from the left iterable |
| `keyB` | [`Mapper`](index.Mapper.md)<`U`, `K`\> | A mapper that returns the key map value from the right iterable |

#### Returns

[`FluentIterable`](index.FluentIterable.md)<[`T`, `U`]\>

### CombineFunction

▸ **CombineFunction**<`U`, `K`\>(`iterable`, `keyA`, `keyB`): [`FluentIterable`](index.FluentIterable.md)<[`T`, `U`]\>

Join the iterable with another one, returning a new iterable with the inner matching combinations

#### Type parameters

| Name |
| :------ |
| `U` |
| `K` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable` | `Iterable`<`U`\> | The right iterable to be combined |
| `keyA` | keyof `T` | A property name with value will be used as for comparison with the key of the second iterable |
| `keyB` | [`Mapper`](index.Mapper.md)<`U`, `K`\> | A mapper that returns the key map value from the right iterable |

#### Returns

[`FluentIterable`](index.FluentIterable.md)<[`T`, `U`]\>

### CombineFunction

▸ **CombineFunction**<`U`, `K`\>(`iterable`, `keyA`, `keyB`): [`FluentIterable`](index.FluentIterable.md)<[`T`, `U`]\>

Join the iterable with another one, returning a new iterable with the inner matching combinations

#### Type parameters

| Name |
| :------ |
| `U` |
| `K` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable` | `Iterable`<`U`\> | The right iterable to be combined |
| `keyA` | [`Mapper`](index.Mapper.md)<`T`, `K`\> | A mapper that returns the key map value from the left iterable |
| `keyB` | keyof `U` | A property name with value will be used as for comparison with the key of the first iterable |

#### Returns

[`FluentIterable`](index.FluentIterable.md)<[`T`, `U`]\>

### CombineFunction

▸ **CombineFunction**<`U`\>(`iterable`, `keyA`, `keyB`): [`FluentIterable`](index.FluentIterable.md)<[`T`, `U`]\>

Join the iterable with another one, returning a new iterable with the inner matching combinations

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable` | `Iterable`<`U`\> | The right iterable to be combined |
| `keyA` | keyof `T` | A property name with value will be used as for comparison with the key of the second iterable |
| `keyB` | keyof `U` | A property name with value will be used as for comparison with the key of the first iterable |

#### Returns

[`FluentIterable`](index.FluentIterable.md)<[`T`, `U`]\>
