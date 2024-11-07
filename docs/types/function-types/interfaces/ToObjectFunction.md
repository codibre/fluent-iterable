[**fluent-iterable v1.38.1**](../../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../../README.md) / [types/function-types](../README.md) / ToObjectFunction

# Interface: ToObjectFunction()\<T\>

## Type Parameters

• **T**

> **ToObjectFunction**\<`R`\>(`keySelector`): `Record`\<`R`, `T`\>

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by a key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond']).toObject(word => word)` returns `{ anchor: 'anchor', almond: 'almond' }`
    * `fluent([{ key: 'name', value: 'Peter Parker' }, { key: 'alias', value: 'SpiderMan' }]).toObject(item => item.key, item => item.value)` returns `{ name: 'Peter Parker', alias: 'SpiderMan' }`

## Type Parameters

• **R** *extends* [`KeyType`](../type-aliases/KeyType.md)

## Parameters

• **keySelector**: [`Mapper`](../../../index/interfaces/Mapper.md)\<`T`, `R`\>

Projects an element of the iterable into the key of the corresponding field.

## Returns

`Record`\<`R`, `T`\>

The object composed of the elements of the iterable as fields.

## Typeparam

R The expected type of the object. Cannot be enforced, this is strictly informal.

> **ToObjectFunction**\<`R`, `O`\>(`keySelector`, `valueSelector`, `reduceValue`?): `Record`\<`R`, `O`\>

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by a key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond']).toObject(word => word)` returns `{ anchor: 'anchor', almond: 'almond' }`
    * `fluent([{ key: 'name', value: 'Peter Parker' }, { key: 'alias', value: 'SpiderMan' }]).toObject(item => item.key, item => item.value)` returns `{ name: 'Peter Parker', alias: 'SpiderMan' }`

## Type Parameters

• **R** *extends* [`KeyType`](../type-aliases/KeyType.md)

• **O**

## Parameters

• **keySelector**: [`Mapper`](../../../index/interfaces/Mapper.md)\<`T`, `R`\>

Projects an element of the iterable into the key of the corresponding field.

• **valueSelector**: [`Mapper`](../../../index/interfaces/Mapper.md)\<`T`, `O`\>

Projects an element of the iterable into the value of the corresponding field. The identity function is being used if omitted.

• **reduceValue?**: [`Choose`](../../type-aliases/Choose.md)\<`O`\>

## Returns

`Record`\<`R`, `O`\>

The object composed of the elements of the iterable as fields.

## Typeparam

R The expected type of the object. Cannot be enforced, this is strictly informal.

> **ToObjectFunction**\<`R1`\>(`keySelector`): `Record`\<[`ToObjectKeyType`](../../type-aliases/ToObjectKeyType.md)\<`T`, `R1`\>, `T`\>

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by a key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>

## Type Parameters

• **R1** *extends* `string` \| `number` \| `symbol`

## Parameters

• **keySelector**: `R1`

Projects an element of the iterable into the key of the corresponding field.

## Returns

`Record`\<[`ToObjectKeyType`](../../type-aliases/ToObjectKeyType.md)\<`T`, `R1`\>, `T`\>

The object composed of the elements of the iterable as fields.

## Typeparam

R The expected type of the object. Cannot be enforced, this is strictly informal.

> **ToObjectFunction**\<`R1`, `R`\>(`keySelector`, `valueSelector`, `reduceValue`?): `Record`\<[`ToObjectKeyType`](../../type-aliases/ToObjectKeyType.md)\<`T`, `R1`\>, `R`\>

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by a key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond']).toObject(word => word)` returns `{ anchor: 'anchor', almond: 'almond' }`
    * `fluent([{ key: 'name', value: 'Peter Parker' }, { key: 'alias', value: 'SpiderMan' }]).toObject(item => item.key, item => item.value)` returns `{ name: 'Peter Parker', alias: 'SpiderMan' }`

## Type Parameters

• **R1** *extends* `string` \| `number` \| `symbol`

• **R**

## Parameters

• **keySelector**: `R1`

Projects an element of the iterable into the key of the corresponding field.

• **valueSelector**: [`Mapper`](../../../index/interfaces/Mapper.md)\<`T`, `R`\>

Projects an element of the iterable into the value of the corresponding field. The identity function is being used if omitted.

• **reduceValue?**: [`Choose`](../../type-aliases/Choose.md)\<`R`\>

## Returns

`Record`\<[`ToObjectKeyType`](../../type-aliases/ToObjectKeyType.md)\<`T`, `R1`\>, `R`\>

The object composed of the elements of the iterable as fields.

## Typeparam

R The expected type of the object. Cannot be enforced, this is strictly informal.

> **ToObjectFunction**\<`K`, `R2`\>(`keySelector`, `valueSelector`, `reduceValue`?): `Record`\<`K`, `T`\[`R2`\]\>

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by a key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond']).toObject(word => word)` returns `{ anchor: 'anchor', almond: 'almond' }`
    * `fluent([{ key: 'name', value: 'Peter Parker' }, { key: 'alias', value: 'SpiderMan' }]).toObject(item => item.key, item => item.value)` returns `{ name: 'Peter Parker', alias: 'SpiderMan' }`

## Type Parameters

• **K** *extends* `string` \| `number` \| `symbol`

• **R2** *extends* `string` \| `number` \| `symbol`

## Parameters

• **keySelector**: [`Mapper`](../../../index/interfaces/Mapper.md)\<`T`, `K`\>

Projects an element of the iterable into the key of the corresponding field.

• **valueSelector**: `R2`

Projects an element of the iterable into the value of the corresponding field. The identity function is being used if omitted.

• **reduceValue?**: [`Choose`](../../type-aliases/Choose.md)\<`T`\[`R2`\]\>

## Returns

`Record`\<`K`, `T`\[`R2`\]\>

The object composed of the elements of the iterable as fields.

## Typeparam

R The expected type of the object. Cannot be enforced, this is strictly informal.

> **ToObjectFunction**\<`R1`, `R2`\>(`keySelector`, `valueSelector`, `reduceValue`?): `Record`\<[`ToObjectKeyType`](../../type-aliases/ToObjectKeyType.md)\<`T`, `R1`\>, `T`\[`R2`\]\>

Translates the iterable into an object using the elements of the iterable as representations of fields as specified by a key- and value selector. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
  Examples:<br>
    * `fluent(['anchor', 'almond']).toObject(word => word)` returns `{ anchor: 'anchor', almond: 'almond' }`
    * `fluent([{ key: 'name', value: 'Peter Parker' }, { key: 'alias', value: 'SpiderMan' }]).toObject(item => item.key, item => item.value)` returns `{ name: 'Peter Parker', alias: 'SpiderMan' }`

## Type Parameters

• **R1** *extends* `string` \| `number` \| `symbol`

• **R2** *extends* `string` \| `number` \| `symbol`

## Parameters

• **keySelector**: `R1`

Projects an element of the iterable into the key of the corresponding field.

• **valueSelector**: `R2`

Projects an element of the iterable into the value of the corresponding field. The identity function is being used if omitted.

• **reduceValue?**: [`Choose`](../../type-aliases/Choose.md)\<`T`\[`R2`\]\>

## Returns

`Record`\<[`ToObjectKeyType`](../../type-aliases/ToObjectKeyType.md)\<`T`, `R1`\>, `T`\[`R2`\]\>

The object composed of the elements of the iterable as fields.

## Typeparam

R The expected type of the object. Cannot be enforced, this is strictly informal.
