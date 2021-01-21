**[fluent-iterable - v1.7.3](../README.md)**

> [Globals](../README.md) / ["types"](../modules/_types_.md) / Pager

# Interface: Pager\<T, TToken>

Represents a pager - responsible to retrieve pages from a paginated resource.

## Type parameters

Name | Description |
------ | ------ |
`T` | The type of the elements of the page. |
`TToken` | The type of the next page token associated to the page.  |

## Hierarchy

* **Pager**

## Callable

▸ (`nextPageToken?`: TToken): Promise\<[Page](_types_.page.md)\<T, TToken> \| undefined>

Retrieves a page from a paginated resource.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`nextPageToken?` | TToken | The token represents the page to retrieve or the first page if undefined. |

**Returns:** Promise\<[Page](_types_.page.md)\<T, TToken> \| undefined>

A promise of the page requested.
