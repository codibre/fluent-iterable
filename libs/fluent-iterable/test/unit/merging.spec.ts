import delay from 'delay';
import { fluentAsync, mergeIterables } from '../../src';

describe('merging', () => {
  describe('mergeIterable', () => {
    it('should merge the iterables', async () => {
      const it1 = (async function* (): AsyncIterable<number> {
        await delay(10);
        yield 1;
        await delay(5);
        yield 2;
        await delay(20);
        yield 3;
      })();
      const it2 = (async function* (): AsyncIterable<string> {
        await delay(2);
        yield 'a';
        await delay(20);
        yield 'b';
        await delay(3);
        yield 'c';
      })();

      const result = await fluentAsync(
        mergeIterables<number | string>(it1, it2),
      ).toArray();
      const sorted = result.concat().sort();

      expect(sorted).not.toEqual(result);
      expect(sorted).toEqual([1, 2, 3, 'a', 'b', 'c']);
    });

    it('should merge the iterables capturing any error, when cachingCallback is informed', async () => {
      const testError = new Error('test');
      const it1 = (async function* (): AsyncIterable<number> {
        await delay(10);
        yield 1;
        await delay(5);
        yield 2;
        await delay(7);
        yield 3;
      })();
      const it2 = (async function* (): AsyncIterable<string> {
        await delay(2);
        yield 'a';
        throw testError;
      })();
      const callback = jest.fn();

      const result = await fluentAsync(
        mergeIterables<string | number>(callback, it1, it2),
      ).toArray();

      expect(callback).toHaveCallsLike([testError, 1]);
      expect(result).toEqual(['a', 1, 2, 3]);
    });
  });
});
