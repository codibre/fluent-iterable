[fluent-iterable - v1.18.3](../README.md) / Page

# Interface: Page<T, TToken\>

Represents a page of a paginated resource.

## Type parameters

Name | Description |
:------ | :------ |
`T` | The type of the elements of the page.   |
`TToken` | The type of the next page token associated to the page.    |

## Table of contents

### Properties

- [nextPageToken](page.md#nextpagetoken)
- [results](page.md#results)

## Properties

### nextPageToken

• `Optional` **nextPageToken**: TToken

The next page token associated to the page.

___

### results

• **results**: T[]

The elements of the page.
