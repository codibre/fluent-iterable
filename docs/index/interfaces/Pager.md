[**fluent-iterable v1.38.1**](../../README.md) • **Docs**

***

[fluent-iterable v1.38.1](../../README.md) / [index](../README.md) / Pager

# Interface: Pager()\<T, TToken\>

Represents a pager - responsible to retrieve pages from a paginated resource.

## Typeparam

T The type of the elements of the page.

## Typeparam

TToken The type of the next page token associated to the page.

## Type Parameters

• **T**

• **TToken**

> **Pager**(`nextPageToken`?): `Promise`\<`undefined` \| [`Page`](Page.md)\<`T`, `TToken`\>\>

Represents a pager - responsible to retrieve pages from a paginated resource.

## Parameters

• **nextPageToken?**: `TToken`

The token represents the page to retrieve or the first page if undefined.

## Returns

`Promise`\<`undefined` \| [`Page`](Page.md)\<`T`, `TToken`\>\>

A promise of the page requested.

## Typeparam

T The type of the elements of the page.

## Typeparam

TToken The type of the next page token associated to the page.
