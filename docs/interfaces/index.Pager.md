[fluent-iterable - v1.22.0](../README.md) / [index](../modules/index.md) / Pager

# Interface: Pager<T, TToken\>

[index](../modules/index.md).Pager

## Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the elements of the page. |
| `TToken` | The type of the next page token associated to the page. |

## Callable

### Pager

▸ **Pager**(`nextPageToken?`): `Promise`<`undefined` \| [`Page`](index.Page.md)<`T`, `TToken`\>\>

Retrieves a page from a paginated resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nextPageToken?` | `TToken` | The token represents the page to retrieve or the first page if undefined. |

#### Returns

`Promise`<`undefined` \| [`Page`](index.Page.md)<`T`, `TToken`\>\>

A promise of the page requested.
