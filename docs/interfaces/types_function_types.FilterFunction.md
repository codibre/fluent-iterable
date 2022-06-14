[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / FilterFunction

# Interface: FilterFunction<T\>

[types/function-types](../modules/types_function_types.md).FilterFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### FilterFunction

▸ **FilterFunction**(): [`FluentIterable`](index.FluentIterable.md)<`Exclude`<`Exclude`<`Exclude`<`Exclude`<`Exclude`<`T`, ``false``\>, ``0``\>, ``""``\>, ``null``\>, `undefined`\>\>

Filters the falsy values of a iterable of `T`<br>
  Example: `fluent(['anchor', undefined, 'bound', undefined]).filter()` yields *anchor* and *bound*.

#### Returns

[`FluentIterable`](index.FluentIterable.md)<`Exclude`<`Exclude`<`Exclude`<`Exclude`<`Exclude`<`T`, ``false``\>, ``0``\>, ``""``\>, ``null``\>, `undefined`\>\>

A [FluentIterable](index.FluentIterable.md) of the elements against which the predicate evaluates to `true`.

### FilterFunction

▸ **FilterFunction**<`E`\>(`predicate`): [`FluentIterable`](index.FluentIterable.md)<`E`\>

Filters the iterable of `T` based on a predicate.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).filter(word => word[0] === 'a')` yields *anchor*, *almond*, and *alpine*.

#### Type parameters

| Name |
| :------ |
| `E` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | [`PredicateTypeGuard`](../modules/types_function_types.md#predicatetypeguard)<`T`, `E`\> | A predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`. |

#### Returns

[`FluentIterable`](index.FluentIterable.md)<`E`\>

A [FluentIterable](index.FluentIterable.md) of the elements against which the predicate evaluates to `true`.

### FilterFunction

▸ **FilterFunction**(`predicate`): [`FluentIterable`](index.FluentIterable.md)<`T`\>

Filters the iterable of `T` based on a predicate.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).filter(word => word[0] === 'a')` yields *anchor*, *almond*, and *alpine*.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | `Predicate`<`T`\> | A predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`. |

#### Returns

[`FluentIterable`](index.FluentIterable.md)<`T`\>

A [FluentIterable](index.FluentIterable.md) of the elements against which the predicate evaluates to `true`.

### FilterFunction

▸ **FilterFunction**<`Guarantees`\>(`predicate`): [`FluentIterable`](index.FluentIterable.md)<[`RequiresTruthy`](../modules/types_function_types.md#requirestruthy)<`T`, `Guarantees`\>\>

Filters the iterable of `T` based on a predicate.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).filter(word => word[0] === 'a')` yields *anchor*, *almond*, and *alpine*.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Guarantees` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | `Predicate`<`T`\> | A predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`. |

#### Returns

[`FluentIterable`](index.FluentIterable.md)<[`RequiresTruthy`](../modules/types_function_types.md#requirestruthy)<`T`, `Guarantees`\>\>

A [FluentIterable](index.FluentIterable.md) of the elements against which the predicate evaluates to `true`.

### FilterFunction

▸ **FilterFunction**<`K`\>(`predicate`): [`FluentIterable`](index.FluentIterable.md)<[`RequiresTruthy`](../modules/types_function_types.md#requirestruthy)<`T`, `K`\>\>

Filters the iterable of `T` based on a predicate.<br>
  Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).filter(word => word[0] === 'a')` yields *anchor*, *almond*, and *alpine*.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | `K` | A predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`. |

#### Returns

[`FluentIterable`](index.FluentIterable.md)<[`RequiresTruthy`](../modules/types_function_types.md#requirestruthy)<`T`, `K`\>\>

A [FluentIterable](index.FluentIterable.md) of the elements against which the predicate evaluates to `true`.
