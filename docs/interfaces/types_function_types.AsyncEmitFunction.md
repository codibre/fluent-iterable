[fluent-iterable - v1.22.0](../README.md) / [types/function-types](../modules/types_function_types.md) / AsyncEmitFunction

# Interface: AsyncEmitFunction<T\>

[types/function-types](../modules/types_function_types.md).AsyncEmitFunction

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`EmitFunction`](types_function_types.EmitFunction.md)<`T`\>

  ↳ **`AsyncEmitFunction`**

## Callable

### AsyncEmitFunction

▸ **AsyncEmitFunction**(): [`FluentEmitter`](index.FluentEmitter.md)<`T`\>

Converts the iterable into an EventEmitter. This is a resolving operation.

This EventEmitter may emit three different events:

* data: for each item of the iterable;
* error: in case an error occurs. Notice that, if this method is not listened, the error will be thrown as unhandled;
* end: when the iterable ends. Notice that, if the iterable is infinite, this event will never be emitted.

#### Returns

[`FluentEmitter`](index.FluentEmitter.md)<`T`\>
