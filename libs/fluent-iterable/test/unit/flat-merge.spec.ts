import delay from 'delay';
import { ObjectReadableMock } from 'stream-mock';
import { fluent, fluentAsync } from '../../src';

describe('flatMerge', () => {
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

    const result = await fluent([it1, it2]).flatMerge().toArray();
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

    const result = await fluent([it1, it2]).flatMerge(callback).toArray();

    expect(callback).toHaveCallsLike([testError, 1]);
    expect(result).toEqual(['a', 1, 2, 3]);
  });
  it('should merge the async iterables provied asynchronously', async () => {
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

    const result = await fluentAsync(new ObjectReadableMock([it1, it2]))
      .flatMerge()
      .toArray();
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

    const result = await fluentAsync(new ObjectReadableMock([it1, it2]))
      .flatMerge(callback)
      .toArray();

    expect(callback).toHaveCallsLike([testError, 1]);
    expect(result).toEqual(['a', 1, 2, 3]);
  });
});
