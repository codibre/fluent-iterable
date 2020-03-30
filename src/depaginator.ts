import { Page, Pager } from './types';

/**
 * Translate a paginated resource into a non-paginated iterable of elements.
 * @typeparam T The type of the elements of the page.
 * @typeparam TToken The type of the next page token associated to the page.
 * @param pager Represents the way of retrieving pages from the paginated resource.
 * @returns The iterable representing a steady flow of elements from the paginated resource.
 */
async function* depaginate<T, TToken>(pager: Pager<T, TToken>): AsyncIterable<T> {
  let token: TToken | undefined;

  do {
    const page: Page<T, TToken> | undefined = await pager(token);

    if (!page) {
      break;
    }

    yield* page.results;
    token = page.nextPageToken;
  } while (token);
}

export default depaginate;
