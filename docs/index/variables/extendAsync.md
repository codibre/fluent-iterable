[**fluent-iterable v1.38.1**](../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../README.md) / [index](../README.md) / extendAsync

# Variable: extendAsync

> `const` **extendAsync**: `object`

Used to add custom methods for the next fluent async iterables created
Is recommendable to also declare the method in the interface namespace so it can be visible to typescript, like this:
```ts
declare namespace FluentAsyncIterable {
  myCustomMethod<R>(myParams: someType): FluentAsyncIterable<R>
}
```

## Type declaration

### use()

Add a method that returns another FluentAsyncIterable

#### Parameters

• **name**: `string`

The name of the method

• **operation**: [`AsyncIterableOperation`](../type-aliases/AsyncIterableOperation.md)

The operation to be made

#### Returns

`void`

### useResolving()

Add a resolving method

#### Parameters

• **name**: `string`

The name of the method

• **operation**: [`AsyncIterableResolvingOperation`](../type-aliases/AsyncIterableResolvingOperation.md)

The resolving operation to be made

#### Returns

`void`
