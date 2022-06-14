[fluent-iterable - v1.22.0](../README.md) / [index](../modules/index.md) / Page

# Interface: Page<T, TToken\>

[index](../modules/index.md).Page

Represents a page of a paginated resource.

## Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the elements of the page. |
| `TToken` | The type of the next page token associated to the page. |

## Table of contents

### Properties

- [nextPageToken](index.Page.md#nextpagetoken)
- [results](index.Page.md#results)

## Properties

### nextPageToken

• `Optional` **nextPageToken**: `TToken`

The next page token associated to the page.

___

### results

• **results**: `T`[]

The elements of the page.
