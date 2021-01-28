**[fluent-iterable - v1.7.6](../README.md)**

> [Globals](../README.md) / "extend"

# Module: "extend"

## Index

### Type aliases

* [IterableOperation](_extend_.md#iterableoperation)
* [IterableOperationAsync](_extend_.md#iterableoperationasync)
* [IterableResolvingOperation](_extend_.md#iterableresolvingoperation)

### Object literals

* [extend](_extend_.md#extend)

## Type aliases

### IterableOperation

Ƭ  **IterableOperation**: \<T>(this: Iterable\<T>,...args: any[]) => Iterable\<any>

An operation that returns an Iterable

___

### IterableOperationAsync

Ƭ  **IterableOperationAsync**: \<T>(this: Iterable\<T>,...args: any[]) => AsyncIterable\<any> \| PromiseLike\<AnyIterable\<any>>

An operation that returns an AsyncIterable

___

### IterableResolvingOperation

Ƭ  **IterableResolvingOperation**: \<T>(this: Iterable\<T>,...args: any[]) => any

A resolving operation

## Object literals

### extend

▪ `Const` **extend**: object

Used to add custom methods for the next fluent async iterables created
Is recommendable to also declare the method in the interface so it can be visible to typescript, like this:
```ts
declare module '@codibre/fluent-iterable'{
 interface FluentIterable {
   myCustomMethod<R>(myParams: someType): FluentIterable<R>
 }
}
```

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`use` | function | (name: string,operation: [IterableOperation](\_extend\_.md#iterableoperation)) => void |
`useAsync` | function | (name: string,operation: [IterableOperationAsync](\_extend\_.md#iterableoperationasync)) => void |
`useResolving` | function | (name: string,operation: [IterableResolvingOperation](\_extend\_.md#iterableresolvingoperation)) => void |
