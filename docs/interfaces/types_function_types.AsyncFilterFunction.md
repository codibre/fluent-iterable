[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / AsyncFilterFunction

# Interface: AsyncFilterFunction<T\>

[types/function-types](../modules/types_function_types.md).AsyncFilterFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### AsyncFilterFunction

▸ **AsyncFilterFunction**(): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`Exclude`<`Exclude`<`Exclude`<`Exclude`<`Exclude`<`T`, ``false``\>, ``0``\>, ``""``\>, ``null``\>, `undefined`\>\>

Filters the falsy values of a iterable of `T`<br>
  Example: `fluentAsync(['anchor', undefined, 'bound', undefined]).filter()` yields *anchor* and *bound*.

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`Exclude`<`Exclude`<`Exclude`<`Exclude`<`Exclude`<`T`, ``false``\>, ``0``\>, ``""``\>, ``null``\>, `undefined`\>\>

A [FluentAsyncIterable](index.FluentAsyncIterable.md) of the elements against which the predicate evaluates to `true`.

### AsyncFilterFunction

▸ **AsyncFilterFunction**<`E`\>(`predicate`): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`E`\>

Filters the iterable of `T` based on an type guard predicate.

#### Type parameters

| Name |
| :------ |
| `E` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | [`PredicateTypeGuard`](../modules/types_function_types.md#predicatetypeguard)<`T`, `E`\> | An asynchronous predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`. |

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`E`\>

A [FluentAsyncIterable](index.FluentAsyncIterable.md) of the elements against which the predicate evaluates to `true`.

### AsyncFilterFunction

▸ **AsyncFilterFunction**(`predicate`): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

Filters the iterable of `T` based on an asynchronous predicate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | `AsyncPredicate`<`T`\> | An asynchronous predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`. |

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

A [FluentAsyncIterable](index.FluentAsyncIterable.md) of the elements against which the predicate evaluates to `true`.

### AsyncFilterFunction

▸ **AsyncFilterFunction**<`Guarantees`\>(`predicate`): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<[`RequiresTruthy`](../modules/types_function_types.md#requirestruthy)<`T`, `Guarantees`\>\>

Filters the iterable of `T` based on an asynchronous predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Guarantees` | extends `string` \| `number` \| `symbol` = `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | `AsyncPredicate`<`T`\> | An asynchronous predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`. |

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<[`RequiresTruthy`](../modules/types_function_types.md#requirestruthy)<`T`, `Guarantees`\>\>

A [FluentAsyncIterable](index.FluentAsyncIterable.md) of the elements against which the predicate evaluates to `true`.

### AsyncFilterFunction

▸ **AsyncFilterFunction**<`R`, `K`\>(`predicate`): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<[`RequiresTruthy`](../modules/types_function_types.md#requirestruthy)<`T`, `K`\>\>

Filters the iterable of `T` based on an asynchronous predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | extends `string` \| `number` \| `symbol` |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | `R` | An asynchronous predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`. |

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<[`RequiresTruthy`](../modules/types_function_types.md#requirestruthy)<`T`, `K`\>\>

A [FluentAsyncIterable](index.FluentAsyncIterable.md) of the elements against which the predicate evaluates to `true`.
