[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / AvgFunction

# Interface: AvgFunction<T\>

[types/function-types](../modules/types_function_types.md).AvgFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### AvgFunction

▸ **AvgFunction**(`mapper?`): `number`

Calculates the average of the elements of the iterable projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent([5, -2, 9]).avg()` returns *4*
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).avg(word => word.length)` returns *5.75*, the average of the length of all the words in the iterable

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapper?` | [`Mapper`](index.Mapper.md)<`T`, `number`\> | The function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted. |

#### Returns

`number`

The average of the projected elements of the iterable.

### AvgFunction

▸ **AvgFunction**(`mapper`): `number`

Calculates the average of the elements of the iterable projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent([5, -2, 9]).avg()` returns *4*
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).avg(word => word.length)` returns *5.75*, the average of the length of all the words in the iterable

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapper` | keyof `T` | The function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted. |

#### Returns

`number`

The average of the projected elements of the iterable.
