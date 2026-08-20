[**fluent-iterable v1.38.1**](../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../README.md) / [index](../README.md) / getGroupingTopHit

# Function: getGroupingTopHit()

## getGroupingTopHit(choose)

> **getGroupingTopHit**\<`K`, `T`\>(`choose`): [`KVGroupTransform`](../../types/interfaces/KVGroupTransform.md)\<`K`, `T`\>

Returns a functions that make the group operations to get only one item, per group key,
The item kept is the preferred one, according to a given choosing criteria,

### Type Parameters

• **K**

• **T**

### Parameters

• **choose**: [`Choose`](../../types/type-aliases/Choose.md)\<`T`\>

must return the preferred value over two provided

### Returns

[`KVGroupTransform`](../../types/interfaces/KVGroupTransform.md)\<`K`, `T`\>

## getGroupingTopHit(distinct, choose, mapper)

> **getGroupingTopHit**\<`K`, `T`, `KT`\>(`distinct`, `choose`, `mapper`): [`KVGroupTransform`](../../types/interfaces/KVGroupTransform.md)\<`K`, `T`, `T`\[`KT`\][]\>

Returns a functions that make the group operations get distinct items, according to a giving criteria,
keeping the preferred one, according to a given choosing criteria,

### Type Parameters

• **K**

• **T**

• **KT** *extends* `string` \| `number` \| `symbol`

### Parameters

• **distinct**: [`AnyMapper`](../../types/type-aliases/AnyMapper.md)\<`T`\>

must return the distinction key. The distinction is respected by group

• **choose**: [`Choose`](../../types/type-aliases/Choose.md)\<`T`\[`KT`\]\>

must return the preferred value over two provided

• **mapper**: `KT`

The property name you want to map for the value

### Returns

[`KVGroupTransform`](../../types/interfaces/KVGroupTransform.md)\<`K`, `T`, `T`\[`KT`\][]\>

## getGroupingTopHit(distinct, choose, mapper)

> **getGroupingTopHit**\<`K`, `T`, `NewT`\>(`distinct`, `choose`, `mapper`?): [`KVGroupTransform`](../../types/interfaces/KVGroupTransform.md)\<`K`, `T`, `NewT`\>

Returns a functions that make the group operations get distinct items, according to a giving criteria,
keeping the preferred one, according to a given choosing criteria,

### Type Parameters

• **K**

• **T**

• **NewT** = `T`

### Parameters

• **distinct**: [`AnyMapper`](../../types/type-aliases/AnyMapper.md)\<`T`\>

must return the distinction key. The distinction is respected by group

• **choose**: [`Choose`](../../types/type-aliases/Choose.md)\<`NewT`\>

must return the preferred value over two provided

• **mapper?**: [`Mapper`](../interfaces/Mapper.md)\<`T`, `NewT`\>

If informed, the mapping operation to define the grouping value. If not, the original value is assumed

### Returns

[`KVGroupTransform`](../../types/interfaces/KVGroupTransform.md)\<`K`, `T`, `NewT`\>
