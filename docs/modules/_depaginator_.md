[fluent-iterable - v0.1.5](../README.md) › ["depaginator"](_depaginator_.md)

# Module: "depaginator"

## Index

### Functions

* [depaginate](_depaginator_.md#depaginate)

## Functions

###  depaginate

▸ **depaginate**<**T**, **TToken**>(`pager`: [Pager](../interfaces/_types_.pager.md)‹T, TToken›): *AsyncIterable‹T›*

Translate a paginated resource into a non-paginated iterable of elements.

**Type parameters:**

▪ **T**

The type of the elements of the page.

▪ **TToken**

The type of the next page token associated to the page.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pager` | [Pager](../interfaces/_types_.pager.md)‹T, TToken› | Represents the way of retrieving pages from the paginated resource. |

**Returns:** *AsyncIterable‹T›*

The iterable representing a steady flow of elements from the paginated resource.
