[fluent-iterable - v1.22.0](../README.md) / [types](../modules/types.md) / FluentIterableEmitter

# Interface: FluentIterableEmitter<T\>

[types](../modules/types.md).FluentIterableEmitter

Represents the operations using EventEmitters

## Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the items in the iterable. |

## Hierarchy

- **`FluentIterableEmitter`**

  ↳ [`FluentIterable`](index.FluentIterable.md)

  ↳ [`FluentAsyncIterable`](index.FluentAsyncIterable.md)

## Table of contents

### Methods

- [combineEmitter](types.FluentIterableEmitter.md#combineemitter)
- [concatEmitter](types.FluentIterableEmitter.md#concatemitter)

## Methods

### combineEmitter

▸ **combineEmitter**<`U`\>(`emitter`, `options?`): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<[`T`, `U`]\>

Join the iterable with an EventEmitter, returning a new async iterable with a NxN combination

**IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
emission generates a new yielded result. The default key event is **'data'**.

Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.

If you need to change the key event or other characteristics, you can do it through the **options** parameter

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | The EventEmitter |
| `options?` | [`FluentEmitOptions`](types.FluentEmitOptions.md) | The EventEmitter options. Optional |

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<[`T`, `U`]\>

▸ **combineEmitter**<`U`, `K`\>(`emitter`, `keyA`, `keyB`, `options?`): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<[`T`, `U`]\>

Join the iterable with another the EventEmitter, returning a new async iterable with the inner matching combinations

**IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
emission generates a new yielded result. The default key event is **'data'**.

Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.

If you need to change the key event or other characteristics, you can do it through the **options** parameter

#### Type parameters

| Name |
| :------ |
| `U` |
| `K` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | The EventEmitter |
| `keyA` | [`Mapper`](index.Mapper.md)<`T`, `K`\> | A mapper that returns the key map value from the left iterable |
| `keyB` | [`Mapper`](index.Mapper.md)<`U`, `K`\> | A mapper that returns the key map value from the right iterable |
| `options?` | [`FluentEmitOptions`](types.FluentEmitOptions.md) | The EventEmitter options. Optional |

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<[`T`, `U`]\>

▸ **combineEmitter**<`U`, `K`\>(`emitter`, `keyA`, `keyB`, `options?`): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<[`T`, `U`]\>

Join the iterable with another the EventEmitter, returning a new async iterable with the inner matching combinations

**IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
emission generates a new yielded result. The default key event is **'data'**.

Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.

If you need to change the key event or other characteristics, you can do it through the **options** parameter

#### Type parameters

| Name |
| :------ |
| `U` |
| `K` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | The EventEmitter |
| `keyA` | keyof `T` | A mapper that returns the key map value from the left iterable |
| `keyB` | [`Mapper`](index.Mapper.md)<`U`, `K`\> | A mapper that returns the key map value from the right iterable |
| `options?` | [`FluentEmitOptions`](types.FluentEmitOptions.md) | The EventEmitter options. Optional |

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<[`T`, `U`]\>

___

### concatEmitter

▸ **concatEmitter**(`emitter`, `options?`): [`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

Concatenates the specified Emitter to the async iterable.

**IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
emission generates a new yielded result. The default key event is **'data'**.

Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.

If you need to change the key event or other characteristics, you can do it through the **options** parameter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | The EventEmitter |
| `options?` | [`FluentEmitOptions`](types.FluentEmitOptions.md) | The EventEmitter options. Optional |

#### Returns

[`FluentAsyncIterable`](index.FluentAsyncIterable.md)<`T`\>

The [FluentAsyncIterable](../modules/types.md#fluentasynciterable) of the concatenated async iterables.
