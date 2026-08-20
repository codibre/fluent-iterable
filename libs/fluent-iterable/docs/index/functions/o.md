[**fluent-iterable v1.38.1**](../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../README.md) / [index](../README.md) / o

# Function: o()

> **o**\<`F`\>(`f`): `F`

Returns a new instance of a function with a order assuring mark.
Fluent Iterable will treat order Assuring marked function as if
they're guaranteed to return ordered result in regard some iterable
where they're applied. The actual order, though, is of responsibility
of the code using this package.

This is useful to have access to faster versions of some algorithms, but
the output may not match expectation if the resulting order is not actually right.

## Type Parameters

• **F** *extends* `Function` \| [`FluentAsyncIterable`](../interfaces/FluentAsyncIterable.md)\<`any`\> \| `FluentIterable`\<`any`\>

## Parameters

• **f**: `F`

the function to assure order

## Returns

`F`
