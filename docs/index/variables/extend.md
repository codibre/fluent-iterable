[**fluent-iterable v1.38.1**](../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../README.md) / [index](../README.md) / extend

# Variable: extend

> `const` **extend**: `object`

Used to add custom methods for the next fluent async iterables created
Is recommendable to also declare the method in the interface so it can be visible to typescript, like this:
```ts
declare module '@codibre/fluent-iterable'{
 interface FluentIterable {
   myCustomMethod<R>(myParams: someType): FluentIterable<R>
 }
}
```

## Type declaration

### use()

Add a method that returns another FluentAsyncIterable

#### Parameters

• **name**: `string`

The name of the method

• **operation**: [`IterableOperation`](../type-aliases/IterableOperation.md)

The operation to be made

#### Returns

`void`

### useAsync()

Add a method that returns another FluentAsyncIterable

#### Parameters

• **name**: `string`

The name of the method

• **operation**: [`IterableOperationAsync`](../type-aliases/IterableOperationAsync.md)

The operation to be made

#### Returns

`void`

### useResolving()

Add a resolving method

#### Parameters

• **name**: `string`

The name of the method

• **operation**: [`IterableResolvingOperation`](../type-aliases/IterableResolvingOperation.md)

The resolving operation to be made

#### Returns

`void`
