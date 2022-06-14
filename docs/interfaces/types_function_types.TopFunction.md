[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / TopFunction

# Interface: TopFunction<T\>

[types/function-types](../modules/types_function_types.md).TopFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### TopFunction

▸ **TopFunction**<`R`\>(`mapper`, `comparer`): `undefined` \| `T`

Calculates the top element of the iterable using a projection and a comparer. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).top(word => word.length, (a, b) => b - a)` returns *bound*, the shortest word in the iterable
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).top(word => word.charCodeAt(0), (a, b) => a - b)` returns *bound*, latest word in the lexicographical order considering the first character only

#### Type parameters

| Name | Description |
| :------ | :------ |
| `R` | The type of the projected elements used for comparison. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapper` | [`Mapper`](index.Mapper.md)<`T`, `R`\> | The function which projects the elements of the iterable into comparable. |
| `comparer` | [`Comparer`](index.Comparer.md)<`R`\> | The comparison function. |

#### Returns

`undefined` \| `T`

The top of the iterable's projected elements.

### TopFunction

▸ **TopFunction**<`R`\>(`mapper`, `comparer`): `undefined` \| `T`

Calculates the top element of the iterable using a projection and a comparer. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).top(word => word.length, (a, b) => b - a)` returns *bound*, the shortest word in the iterable
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).top(word => word.charCodeAt(0), (a, b) => a - b)` returns *bound*, latest word in the lexicographical order considering the first character only

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | extends `string` \| `number` \| `symbol` | The type of the projected elements used for comparison. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapper` | `R` | The function which projects the elements of the iterable into comparable. |
| `comparer` | [`Comparer`](index.Comparer.md)<`T`[`R`]\> | The comparison function. |

#### Returns

`undefined` \| `T`

The top of the iterable's projected elements.
