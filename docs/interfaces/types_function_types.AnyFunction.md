[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / AnyFunction

# Interface: AnyFunction<T\>

[types/function-types](../modules/types_function_types.md).AnyFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### AnyFunction

▸ **AnyFunction**(`predicate?`): `boolean`

Determines whether any element of the iterable exists or satisfies a condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
  Note: This operation stops reading elements from the iterable as soon as the result can be determined.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).any()` yields `true` since the iterable is not empty
    * `fluent([]).any()` yields `false` since the iterable is empty
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).any(word => word[0] === 'b')` yields `true` since *bound* starts with the character *b*
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).any(word => word.length < 5)` yields `false` since none of the words are shorter than 5 characters
    * `fluent([]).any(word => false)` yields `false` as a convention, empty iterables always return `false`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate?` | `Predicate`<`T`\> | The condition checked for the elements in the iterable. Defaults to the always true function and thus, returns if the iterable is empty. |

#### Returns

`boolean`

`true` if any of the elements in the iterable satisfy the specified condition, `false` otherwise.

### AnyFunction

▸ **AnyFunction**(`predicate`): `boolean`

Determines whether any element of the iterable exists or satisfies a condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
  Note: This operation stops reading elements from the iterable as soon as the result can be determined.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).any()` yields `true` since the iterable is not empty
    * `fluent([]).any()` yields `false` since the iterable is empty
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).any(word => word[0] === 'b')` yields `true` since *bound* starts with the character *b*
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).any(word => word.length < 5)` yields `false` since none of the words are shorter than 5 characters
    * `fluent([]).any(word => false)` yields `false` as a convention, empty iterables always return `false`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | keyof `T` | The condition checked for the elements in the iterable. Defaults to the always true function and thus, returns if the iterable is empty. |

#### Returns

`boolean`

`true` if any of the elements in the iterable satisfy the specified condition, `false` otherwise.
