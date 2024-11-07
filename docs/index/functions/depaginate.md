[**fluent-iterable v1.38.1**](../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../README.md) / [index](../README.md) / depaginate

# Function: depaginate()

> **depaginate**\<`T`, `TToken`\>(`pager`): `AsyncIterable`\<`T`\>

Translate a paginated resource into a non-paginated iterable of elements.

## Type Parameters

• **T**

• **TToken**

## Parameters

• **pager**: [`Pager`](../interfaces/Pager.md)\<`T`, `TToken`\>

Represents the way of retrieving pages from the paginated resource.

## Returns

`AsyncIterable`\<`T`\>

The iterable representing a steady flow of elements from the paginated resource.

## Typeparam

T The type of the elements of the page.

## Typeparam

TToken The type of the next page token associated to the page.
