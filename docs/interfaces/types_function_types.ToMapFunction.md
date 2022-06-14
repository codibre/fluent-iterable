[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / ToMapFunction

# Interface: ToMapFunction<T\>

[types/function-types](../modules/types_function_types.md).ToMapFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### ToMapFunction

▸ **ToMapFunction**<`K`, `V`\>(`getKey`, `mapper`, `reduceValue?`): `Map`<`K`, `V`\>

Create a Map from the iterable. This is a resolving operation

#### Type parameters

| Name | Description |
| :------ | :------ |
| `K` | The type of the data the element equality is based on. |
| `V` | - |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `getKey` | [`Mapper`](index.Mapper.md)<`T`, `K`\> | The projection to use to determine element equality. It serves as key of the resulting Map. |
| `mapper` | [`Mapper`](index.Mapper.md)<`T`, `V`\> | - |
| `reduceValue?` | [`Reducer`](index.Reducer.md)<`V`, `T`\> | reduce the following items to the map value type. If not informed, assumes only the first value |

#### Returns

`Map`<`K`, `V`\>

The [FluentIterable](index.FluentIterable.md) of the distinct elements.

### ToMapFunction

▸ **ToMapFunction**<`K`, `V`\>(`getKey`, `mapper`, `reduceValue?`): `Map`<`T`[`K`], `V`\>

Create a Map from the iterable. This is a resolving operation

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` | The type of the data the element equality is based on. |
| `V` | `V` | - |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `getKey` | `K` | The key of T for element equality. It serves as key of the resulting Map. |
| `mapper` | [`Mapper`](index.Mapper.md)<`T`, `V`\> | - |
| `reduceValue?` | [`Reducer`](index.Reducer.md)<`V`, `T`\> | reduce the following items to the map value type. If not informed, assumes only the first value |

#### Returns

`Map`<`T`[`K`], `V`\>

The [FluentIterable](index.FluentIterable.md) of the distinct elements.

### ToMapFunction

▸ **ToMapFunction**<`K`, `V`\>(`getKey`, `mapper`, `reduceValue?`): `Map`<`T`[`K`], `T`[`V`]\>

Create a Map from the iterable. This is a resolving operation

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` | The type of the data the element equality is based on. |
| `V` | extends `string` \| `number` \| `symbol` | - |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `getKey` | `K` | The key of T for element equality. It serves as key of the resulting Map. |
| `mapper` | `V` | - |
| `reduceValue?` | [`Reducer`](index.Reducer.md)<`T`[`V`], `T`\> | reduce the following items to the map value type. If not informed, assumes only the first value |

#### Returns

`Map`<`T`[`K`], `T`[`V`]\>

The [FluentIterable](index.FluentIterable.md) of the distinct elements.
