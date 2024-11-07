[**fluent-iterable v1.38.1**](../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../README.md) / [index](../README.md) / f

# Function: f()

## f(iterable)

> **f**\<`T`\>(`iterable`): [`FluentIterable`](../interfaces/FluentIterable.md)\<`T`\>

### Type Parameters

• **T**

### Parameters

• **iterable**: `Iterable`\<`T`, `any`, `any`\>

### Returns

[`FluentIterable`](../interfaces/FluentIterable.md)\<`T`\>

## f(iterable)

> **f**\<`T`\>(`iterable`): [`FluentAsyncIterable`](../../types/interfaces/FluentAsyncIterable.md)\<`T`\>

### Type Parameters

• **T**

### Parameters

• **iterable**: `AsyncIterable`\<`T`, `any`, `any`\>

### Returns

[`FluentAsyncIterable`](../../types/interfaces/FluentAsyncIterable.md)\<`T`\>

## f(iterable)

> **f**\<`T`, `K`\>(`iterable`): [`FluentAsyncIterable`](../../types/interfaces/FluentAsyncIterable.md)\<[`K`, `T`\[`K`\]]\>

### Type Parameters

• **T** *extends* `object`

• **K** *extends* `string` \| `number` \| `symbol`

### Parameters

• **iterable**: `T`

### Returns

[`FluentAsyncIterable`](../../types/interfaces/FluentAsyncIterable.md)\<[`K`, `T`\[`K`\]]\>

## f(emitter, options)

> **f**\<`T`\>(`emitter`, `options`?): [`FluentAsyncIterable`](../../types/interfaces/FluentAsyncIterable.md)\<`T`\>

### Type Parameters

• **T** = `any`

### Parameters

• **emitter**: `EventEmitter`\<`DefaultEventMap`\>

• **options?**: [`FluentEmitOptions`](../../types/interfaces/FluentEmitOptions.md)

### Returns

[`FluentAsyncIterable`](../../types/interfaces/FluentAsyncIterable.md)\<`T`\>
