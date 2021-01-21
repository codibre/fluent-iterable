**[fluent-iterable - v1.7.4](../README.md)**

> [Globals](../README.md) / ["types"](../modules/_types_.md) / Page

# Interface: Page\<T, TToken>

Represents a page of a paginated resource.

## Type parameters

Name | Description |
------ | ------ |
`T` | The type of the elements of the page. |
`TToken` | The type of the next page token associated to the page.  |

## Hierarchy

* **Page**

## Index

### Properties

* [nextPageToken](_types_.page.md#nextpagetoken)
* [results](_types_.page.md#results)

## Properties

### nextPageToken

• `Optional` **nextPageToken**: TToken

The next page token associated to the page.

___

### results

•  **results**: T[]

The elements of the page.
