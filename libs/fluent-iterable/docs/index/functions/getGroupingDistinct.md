[**fluent-iterable v1.38.1**](../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../README.md) / [index](../README.md) / getGroupingDistinct

# Function: getGroupingDistinct()

## getGroupingDistinct(valueDistinctMapper)

> **getGroupingDistinct**\<`K`, `T`\>(`valueDistinctMapper`): [`KVGroupTransform`](../../types/interfaces/KVGroupTransform.md)\<`K`, `T`\>

Return a transformation function for use in group operation to guarantee distinct elements for each group, following the informed grouping mapper

### Type Parameters

• **K**

• **T**

### Parameters

• **valueDistinctMapper**: keyof `T`

must return the unicity key. The unicity is respected by group

### Returns

[`KVGroupTransform`](../../types/interfaces/KVGroupTransform.md)\<`K`, `T`\>

## getGroupingDistinct(valueMapper, valueDistinctMapper)

> **getGroupingDistinct**\<`K`, `T`, `KT`, `NewT`\>(`valueMapper`, `valueDistinctMapper`): [`KVGroupTransform`](../../types/interfaces/KVGroupTransform.md)\<`K`, `T`, `NewT`\>

Return a transformation function for use in group operation to guarantee distinct elements for each group, following the informed grouping mapper

### Type Parameters

• **K**

• **T**

• **KT** *extends* `string` \| `number` \| `symbol`

• **NewT** *extends* `unknown` = [`ItemType`](../../types/type-aliases/ItemType.md)\<`T`\[`KT`\]\>

### Parameters

• **valueMapper**: `KT`

maps the value for a Iterable of values. Useful if you need to flat map your values per group somehow

• **valueDistinctMapper**: keyof [`ItemType`](../../types/type-aliases/ItemType.md)\<`T`\[`KT`\]\>

must return the unicity key. The unicity is respected by group

### Returns

[`KVGroupTransform`](../../types/interfaces/KVGroupTransform.md)\<`K`, `T`, `NewT`\>

## getGroupingDistinct(valueDistinctMapper)

> **getGroupingDistinct**\<`K`, `T`, `NewT`\>(`valueDistinctMapper`): [`KVGroupTransform`](../../types/interfaces/KVGroupTransform.md)\<`K`, `T`, `NewT`\>

Return a transformation function for use in group operation to guarantee distinct elements for each group, following the informed grouping mapper

### Type Parameters

• **K**

• **T**

• **NewT**

### Parameters

• **valueDistinctMapper**: [`Mapper`](../interfaces/Mapper.md)\<`T`, `NewT`\>

must return the unicity key. The unicity is respected by group

### Returns

[`KVGroupTransform`](../../types/interfaces/KVGroupTransform.md)\<`K`, `T`, `NewT`\>

## getGroupingDistinct(valueMapper, valueDistinctMapper)

> **getGroupingDistinct**\<`K`, `T`, `NewT`\>(`valueMapper`, `valueDistinctMapper`?): [`KVGroupTransform`](../../types/interfaces/KVGroupTransform.md)\<`K`, `T`, `NewT`\>

Return a transformation function for use in group operation to guarantee distinct elements for each group, following the informed grouping mapper

### Type Parameters

• **K**

• **T**

• **NewT** = `T`[]

### Parameters

• **valueMapper**: [`Mapper`](../interfaces/Mapper.md)\<`T`, `Iterable`\<`NewT`, `any`, `any`\>\>

maps the value for a Iterable of values. Useful if you need to flat map your values per group somehow

• **valueDistinctMapper?**: [`Mapper`](../interfaces/Mapper.md)\<`NewT`, `unknown`\> \| keyof `NewT`

must return the unicity key. The unicity is respected by group

### Returns

[`KVGroupTransform`](../../types/interfaces/KVGroupTransform.md)\<`K`, `T`, `NewT`\>
