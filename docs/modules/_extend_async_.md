**[fluent-iterable - v1.7.3](../README.md)**

> [Globals](../README.md) / "extend-async"

# Module: "extend-async"

## Index

### Type aliases

* [AsyncIterableOperation](_extend_async_.md#asynciterableoperation)
* [AsyncIterableResolvingOperation](_extend_async_.md#asynciterableresolvingoperation)

### Object literals

* [extendAsync](_extend_async_.md#extendasync)

## Type aliases

### AsyncIterableOperation

Ƭ  **AsyncIterableOperation**: \<T>(iterable: AsyncIterable\<T>,...args: any[]) => AsyncIterable\<any> \| PromiseLike\<AnyIterable\<any>>

An operation that returns an AsyncIterable

___

### AsyncIterableResolvingOperation

Ƭ  **AsyncIterableResolvingOperation**: \<T>(iterable: AsyncIterable\<T>,...args: any[]) => PromiseLike\<any>

A resolving operation

## Object literals

### extendAsync

▪ `Const` **extendAsync**: object

Used to add custom methods for the next fluent async iterables created
Is recommendable to also declare the method in the interface namespace so it can be visible to typescript, like this:
```ts
declare namespace FluentAsyncIterable {
  myCustomMethod<R>(myParams: someType): FluentAsyncIterable<R>
}
```

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`use` | function | (name: string,operation: [AsyncIterableOperation](\_extend\_async\_.md#asynciterableoperation)) => void |
`useResolving` | function | (name: string,operation: \\<T>(iterable: [AsyncIterableResolvingOperation](\_extend\_async\_.md#asynciterableresolvingoperation)) => any) => void |
