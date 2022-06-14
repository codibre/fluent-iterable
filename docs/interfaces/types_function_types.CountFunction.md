[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / CountFunction

# Interface: CountFunction<T\>

[types/function-types](../modules/types_function_types.md).CountFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### CountFunction

▸ **CountFunction**(`predicate?`): `number`

Returns the number of elements that matches a predicate in the iterable. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).count()` returns **4**<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).count(word => word[0] === 'a')` returns **3**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate?` | `Predicate`<`T`\> | The count will consider elements which match this predicate. Defaults to the always true function and thus, counts all the elements in the iterable if omitted. |

#### Returns

`number`

The number of elements matching the specified predicate.

### CountFunction

▸ **CountFunction**<`R`\>(`predicate`): `number`

Returns the number of elements that matches a predicate in the iterable. This is a resolving operation, will cause a full loop through all the elements of the iterable.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | `R` | The count will consider elements which match this predicate. Defaults to the always true function and thus, counts all the elements in the iterable if omitted. |

#### Returns

`number`

The number of elements matching the specified predicate.
