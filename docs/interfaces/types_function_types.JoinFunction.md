[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / JoinFunction

# Interface: JoinFunction<T\>

[types/function-types](../modules/types_function_types.md).JoinFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### JoinFunction

▸ **JoinFunction**(`separator`, `mapper?`): `string`

Projects and concatenates the elements of the iterable into a `string` using a separator. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).join(', ')` returns *anchor, almond, bound, alpine*

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `separator` | `string` | The separator to use in between the elements of the iterable. |
| `mapper?` | [`Mapper`](index.Mapper.md)<`T`, `string`\> | The function which projects the elements of the iterable into `string`s. Falls back to the identity function if omitted. |

#### Returns

`string`

The concatenated string of the elements in the iterable.

### JoinFunction

▸ **JoinFunction**(`separator`, `mapper?`): `string`

Projects and concatenates the elements of the iterable into a `string` using a separator. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).join(', ')` returns *anchor, almond, bound, alpine*

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `separator` | `string` | The separator to use in between the elements of the iterable. |
| `mapper?` | keyof `T` | The function which projects the elements of the iterable into `string`s. Falls back to the identity function if omitted. |

#### Returns

`string`

The concatenated string of the elements in the iterable.
