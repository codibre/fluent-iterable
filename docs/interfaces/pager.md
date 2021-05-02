[fluent-iterable - v1.14.5](../README.md) / Pager

# Interface: Pager<T, TToken\>

Represents a pager - responsible to retrieve pages from a paginated resource.

## Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the elements of the page. |
| `TToken` | The type of the next page token associated to the page. |

## Callable

▸ **Pager**(`nextPageToken?`: TToken): *Promise*<undefined \| [*Page*](page.md)<T, TToken\>\>

Retrieves a page from a paginated resource.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `nextPageToken?` | TToken | The token represents the page to retrieve or the first page if undefined. |

**Returns:** *Promise*<undefined \| [*Page*](page.md)<T, TToken\>\>

A promise of the page requested.
