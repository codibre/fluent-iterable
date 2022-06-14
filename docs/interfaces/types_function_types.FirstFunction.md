[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / FirstFunction

# Interface: FirstFunction<T\>

[types/function-types](../modules/types_function_types.md).FirstFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### FirstFunction

▸ **FirstFunction**(`predicate?`): `undefined` \| `T`

Returns the first element of the iterable matching a predicate, or `undefined` value if no such element is found. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).first()` returns *anchor*<br>
    * `fluent([]).first()` returns `undefined`<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).first(word => word[0] === 'b')` returns *bound*<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).first(word => word[0] === 'c')` returns `undefined`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate?` | `Predicate`<`T`\> | The first element is to be returned which matches this predicate. Defaults to the always true function and thus, returns the first element in the iterable if omitted. |

#### Returns

`undefined` \| `T`

The first element matching the specified predicate, or `undefined` if no such element found.

### FirstFunction

▸ **FirstFunction**(`predicate`): `undefined` \| `T`

Returns the first element of the iterable matching a predicate, or `undefined` value if no such element is found. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).first()` returns *anchor*<br>
    * `fluent([]).first()` returns `undefined`<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).first(word => word[0] === 'b')` returns *bound*<br>
    * `fluent(['anchor', 'almond', 'bound', 'alpine']).first(word => word[0] === 'c')` returns `undefined`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | keyof `T` | The first element is to be returned which matches this predicate. Defaults to the always true function and thus, returns the first element in the iterable if omitted. |

#### Returns

`undefined` \| `T`

The first element matching the specified predicate, or `undefined` if no such element found.
