import { Page, Pager } from './types';

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
