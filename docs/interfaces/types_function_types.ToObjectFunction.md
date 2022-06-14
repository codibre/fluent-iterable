[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / ToObjectFunction

# Interface: ToObjectFunction<T\>

[types/function-types](../modules/types_function_types.md).ToObjectFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### ToObjectFunction

▸ **ToObjectFunction**<`R`\>(`keySelector`): `Record`<`R`, `T`\>

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by a key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond']).toObject(word => word)` returns `{ anchor: 'anchor', almond: 'almond' }`
    * `fluent([{ key: 'name', value: 'Peter Parker' }, { key: 'alias', value: 'SpiderMan' }]).toObject(item => item.key, item => item.value)` returns `{ name: 'Peter Parker', alias: 'SpiderMan' }`

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | extends [`KeyType`](../modules/types_function_types.md#keytype) | The expected type of the object. Cannot be enforced, this is strictly informal. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keySelector` | [`Mapper`](index.Mapper.md)<`T`, `R`\> | Projects an element of the iterable into the key of the corresponding field. |

#### Returns

`Record`<`R`, `T`\>

The object composed of the elements of the iterable as fields.

### ToObjectFunction

▸ **ToObjectFunction**<`R`, `O`\>(`keySelector`, `valueSelector`, `reduceValue?`): [`ObjectResult`](../modules/types_function_types.md#objectresult)<`R`, `O`\>

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by a key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond']).toObject(word => word)` returns `{ anchor: 'anchor', almond: 'almond' }`
    * `fluent([{ key: 'name', value: 'Peter Parker' }, { key: 'alias', value: 'SpiderMan' }]).toObject(item => item.key, item => item.value)` returns `{ name: 'Peter Parker', alias: 'SpiderMan' }`

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | extends [`KeyType`](../modules/types_function_types.md#keytype) | The expected type of the object. Cannot be enforced, this is strictly informal. |
| `O` | extends [`ObjectType`](../modules/types_function_types.md#objecttype)<`R`\> | - |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keySelector` | [`Mapper`](index.Mapper.md)<`T`, `R`\> | Projects an element of the iterable into the key of the corresponding field. |
| `valueSelector` | [`Mapper`](index.Mapper.md)<`T`, `O`[`R`]\> | Projects an element of the iterable into the value of the corresponding field. The identity function is being used if omitted. |
| `reduceValue?` | [`Choose`](../modules/types.md#choose)<`O`\> | - |

#### Returns

[`ObjectResult`](../modules/types_function_types.md#objectresult)<`R`, `O`\>

The object composed of the elements of the iterable as fields.

### ToObjectFunction

▸ **ToObjectFunction**<`R1`\>(`keySelector`): `Record`<[`ToObjectKeyType`](../modules/types.md#toobjectkeytype)<`T`, `R1`\>, `T`\>

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by a key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R1` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keySelector` | `R1` | Projects an element of the iterable into the key of the corresponding field. |

#### Returns

`Record`<[`ToObjectKeyType`](../modules/types.md#toobjectkeytype)<`T`, `R1`\>, `T`\>

The object composed of the elements of the iterable as fields.

### ToObjectFunction

▸ **ToObjectFunction**<`R1`, `R`\>(`keySelector`, `valueSelector`, `reduceValue?`): `Record`<[`ToObjectKeyType`](../modules/types.md#toobjectkeytype)<`T`, `R1`\>, `R`\>

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by a key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond']).toObject(word => word)` returns `{ anchor: 'anchor', almond: 'almond' }`
    * `fluent([{ key: 'name', value: 'Peter Parker' }, { key: 'alias', value: 'SpiderMan' }]).toObject(item => item.key, item => item.value)` returns `{ name: 'Peter Parker', alias: 'SpiderMan' }`

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R1` | extends `string` \| `number` \| `symbol` | - |
| `R` | `R` | The expected type of the object. Cannot be enforced, this is strictly informal. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keySelector` | `R1` | Projects an element of the iterable into the key of the corresponding field. |
| `valueSelector` | [`Mapper`](index.Mapper.md)<`T`, `R`\> | Projects an element of the iterable into the value of the corresponding field. The identity function is being used if omitted. |
| `reduceValue?` | [`Choose`](../modules/types.md#choose)<`R`\> | - |

#### Returns

`Record`<[`ToObjectKeyType`](../modules/types.md#toobjectkeytype)<`T`, `R1`\>, `R`\>

The object composed of the elements of the iterable as fields.

### ToObjectFunction

▸ **ToObjectFunction**<`K`, `R2`\>(`keySelector`, `valueSelector`, `reduceValue?`): `Record`<`K`, `T`[`R2`]\>

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by a key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond']).toObject(word => word)` returns `{ anchor: 'anchor', almond: 'almond' }`
    * `fluent([{ key: 'name', value: 'Peter Parker' }, { key: 'alias', value: 'SpiderMan' }]).toObject(item => item.key, item => item.value)` returns `{ name: 'Peter Parker', alias: 'SpiderMan' }`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |
| `R2` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keySelector` | [`Mapper`](index.Mapper.md)<`T`, `K`\> | Projects an element of the iterable into the key of the corresponding field. |
| `valueSelector` | `R2` | Projects an element of the iterable into the value of the corresponding field. The identity function is being used if omitted. |
| `reduceValue?` | [`Choose`](../modules/types.md#choose)<`T`[`R2`]\> | - |

#### Returns

`Record`<`K`, `T`[`R2`]\>

The object composed of the elements of the iterable as fields.

### ToObjectFunction

▸ **ToObjectFunction**<`R1`, `R2`\>(`keySelector`, `valueSelector`, `reduceValue?`): `Record`<[`ToObjectKeyType`](../modules/types.md#toobjectkeytype)<`T`, `R1`\>, `T`[`R2`]\>

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by a key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond']).toObject(word => word)` returns `{ anchor: 'anchor', almond: 'almond' }`
    * `fluent([{ key: 'name', value: 'Peter Parker' }, { key: 'alias', value: 'SpiderMan' }]).toObject(item => item.key, item => item.value)` returns `{ name: 'Peter Parker', alias: 'SpiderMan' }`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R1` | extends `string` \| `number` \| `symbol` |
| `R2` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keySelector` | `R1` | Projects an element of the iterable into the key of the corresponding field. |
| `valueSelector` | `R2` | Projects an element of the iterable into the value of the corresponding field. The identity function is being used if omitted. |
| `reduceValue?` | [`Choose`](../modules/types.md#choose)<`T`[`R2`]\> | - |

#### Returns

`Record`<[`ToObjectKeyType`](../modules/types.md#toobjectkeytype)<`T`, `R1`\>, `T`[`R2`]\>

The object composed of the elements of the iterable as fields.
