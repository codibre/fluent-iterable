import { fluentAsync, depaginate, Pager, Page } from '../../src';

describe('depaginate()', () => {
  it('should depaginate properly', async () => {
    const pager: Pager<number, number> = async (token: number = 0) =>
      ({
        results: [token + 1, token + 2, token + 3],
        nextPageToken: token === 0 ? token + 3 : undefined,
      }) as Page<number, number>;

    const result = await fluentAsync(depaginate(pager)).toArray();

    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should stop depagination when page is falsy', async () => {
    const pager: Pager<number, number> = async (token: number = 0) =>
      token > 0
        ? undefined
        : ({
            results: [token + 1, token + 2, token + 3],
            nextPageToken: token + 3,
          } as Page<number, number>);

    const result = await fluentAsync(depaginate(pager)).toArray();

    expect(result).toEqual([1, 2, 3]);
  });
});
