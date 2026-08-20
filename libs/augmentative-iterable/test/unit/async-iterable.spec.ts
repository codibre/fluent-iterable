import { describe, it, expect, vi } from 'vitest';
import {
  mapAsyncIterable,
  augmentativeToArrayAsync,
  filterAsyncIterable,
  takeWhileAsyncIterable,
  augmentativeForEachAsync,
  addMapAsync,
  addTakeWhileAsync,
  addFilterAsync,
  skipAsyncIterable,
  flatMapAsyncIterable,
} from '../../index';
import { getAsync } from './get-async';

async function* toAsync(items) {
  yield* items;
}

describe('AsyncIterable', () => {
  it('should apply map', async () => {
    const original = getAsync([1, 2, 3]);

    const transformed = mapAsyncIterable(original, (x) => x * 7);

    expect(await augmentativeToArrayAsync.call(transformed)).toEqual([
      7, 14, 21,
    ]);
  });

  it('should apply filter', async () => {
    const original = getAsync([1, 2, 3, 4, 5, 6]);

    const transformed = filterAsyncIterable(original, (x) => x % 2 === 0);

    expect(await augmentativeToArrayAsync.call(transformed)).toEqual([2, 4, 6]);
  });

  it('should apply takeWhile', async () => {
    const original = getAsync([1, 2, 3, 4, 5, 6]);

    const transformed = takeWhileAsyncIterable(original, (x) => x < 4);

    expect(await augmentativeToArrayAsync.call(transformed)).toEqual([1, 2, 3]);
  });

  it('should be augmented without modifying the original iterable', async () => {
    const original = [1, 2, 3];

    const transformed = mapAsyncIterable(original, (x) => x * 3);

    const resultOriginal = await augmentativeToArrayAsync.call(
      getAsync(original),
    );
    const resultTransformed = await augmentativeToArrayAsync.call(transformed);

    expect(resultOriginal).toEqual([1, 2, 3]);
    expect(resultTransformed).toEqual([3, 6, 9]);
  });

  it('should accumulate augmentative arguments', async () => {
    const original = [1, 2, 3];

    const map1 = mapAsyncIterable(original, (x) => x * 3);
    const map2 = mapAsyncIterable(map1, async (x) => x + 2);
    const map3 = mapAsyncIterable(map2, (x) => x.toString());

    expect(await augmentativeToArrayAsync.call(map3)).toEqual(['5', '8', '11']);
  });

  it('should accumulate different augmentative arguments', async () => {
    const original = [1, 2, 3, 4, 5, 6];

    const map1 = mapAsyncIterable(original, async (x) => x * 3);
    const map2 = filterAsyncIterable(map1, async (x) => x % 2 === 0);
    const map3 = takeWhileAsyncIterable(map2, async (x) => x < 15);

    expect(await augmentativeToArrayAsync.call(map3)).toEqual([6, 12]);
  });

  it('should process an for each properly', async () => {
    const original = [1, 2, 3];
    const result: number[] = [];

    const map1 = mapAsyncIterable(original, async (x) => x * 3);
    for await (const item of map1) {
      result.push(item + 2);
    }

    expect(result).toEqual([5, 8, 11]);
  });

  it('should process an augmentative forEach properly', async () => {
    const original = [1, 2, 3];
    const result: number[] = [];

    const map1 = mapAsyncIterable(original, async (x) => x * 3);
    await augmentativeForEachAsync.call(map1, ((x: number) =>
      result.push(x + 2)) as any);

    expect(result).toEqual([5, 8, 11]);
  });

  it('should process an augmentative forEach with an async predicate properly', async () => {
    const original = [1, 2, 3];
    const result: number[] = [];

    const map1 = mapAsyncIterable(original, async (x) => x * 3);
    await augmentativeForEachAsync.call(map1, (async (x: number) =>
      result.push(x + 2)) as any);

    expect(result).toEqual([5, 8, 11]);
  });

  it('should add an augmentative argument when iterable is already augmentative when iterable is mutable', async () => {
    const original = [1, 2, 3];
    const result: number[] = [];

    const map1 = mapAsyncIterable(original, async (x) => x * 3);
    const map2 = addMapAsync(map1, (x) => x + 2);

    await augmentativeForEachAsync.call(map1, (async (x: number) =>
      result.push(x + 2)) as any);

    expect(map1).toBe(map2);
    expect(result).toEqual([7, 10, 13]);
  });

  it('should support branching when iterable is immutable', async () => {
    const original = [1, 2, 3];
    const result0: number[] = [];
    const result1: number[] = [];
    const result2: number[] = [];

    const map1 = mapAsyncIterable(original, async (x) => x * 3, true);
    const map2 = addMapAsync(map1, (x) => x + 2);

    await augmentativeForEachAsync.call(map2, (async (x: number) =>
      result2.push(x + 2)) as any);
    await augmentativeForEachAsync.call(map1, (async (x: number) =>
      result1.push(x + 2)) as any);
    await augmentativeForEachAsync.call(original, (async (x: number) =>
      result0.push(x + 2)) as any);

    expect(map1).not.toBe(map2);
    expect(result0).toEqual([3, 4, 5]);
    expect(result1).toEqual([5, 8, 11]);
    expect(result2).toEqual([7, 10, 13]);
  });

  it('should return an augmentative iterable with adding operation when informed iterable is not augmentative', async () => {
    const original = [1, 2, 3];
    const result: number[] = [];

    const map1 = addMapAsync(original, async (x) => x * 3);

    await augmentativeForEachAsync.call(map1, (async (x: number) =>
      result.push(x + 2)) as any);

    expect(map1).not.toBe(original);
    expect(result).toEqual([5, 8, 11]);
  });

  it('should stop to process augments when a stop is signalized', async () => {
    const original = [1, 2, 3, 4, 3];
    const call = vi.fn();

    const takeWhile = addTakeWhileAsync(original, (x) => x < 4);
    const target = addFilterAsync(takeWhile, (x) => {
      call();
      return 2 <= x && x <= 3;
    });

    const result = await augmentativeToArrayAsync.call(target);

    expect(call).toHaveBeenCalledTimes(3);
    expect(result).toEqual([2, 3]);
  });

  it('should respect filter and takeWhile through operations', async () => {
    const callFilter = vi.fn((x: number) => x !== 2);
    const callTakeWhile = vi.fn((x: number) => x < 4);
    const callMap = vi.fn((x: number) => x);
    const original = [1, 2, 3, 4, 5];
    const filter = addFilterAsync(original, callFilter);
    const takeWhile = addTakeWhileAsync(filter, callTakeWhile);
    const map: any = addMapAsync(takeWhile, callMap);

    const result = await augmentativeToArrayAsync.call(map);

    expect(result).toEqual([1, 3]);
    expect(callFilter.mock.calls).toEqual([[1], [2], [3], [4]]);
    expect(callTakeWhile.mock.calls).toEqual([[1], [3], [4]]);
    expect(callMap.mock.calls).toEqual([[1], [3]]);
  });

  it('should work with skip operation over an array', async () => {
    const original = [1, 2, 3, 4, 5, 6];

    const skipped = skipAsyncIterable(original, 2);
    const filtered = filterAsyncIterable(skipped, (x) => x % 2 === 0);

    const result = await augmentativeToArrayAsync.call(filtered);

    expect(result).toEqual([4, 6]);
  });

  it('should work with skip operation over an array with negative skip', async () => {
    const original = [2, 3, 4, 5, 6];

    const skipped = skipAsyncIterable(original, -2);
    const filtered = filterAsyncIterable(skipped, (x) => x % 2 === 0);

    const result = await augmentativeToArrayAsync.call(filtered);

    expect(result).toEqual([2, 4, 6]);
  });

  it('should work with skip operation over an async iterable', async () => {
    const original = toAsync([1, 2, 3, 4, 5, 6]);

    const skipped = skipAsyncIterable(original, 2);
    const filtered = filterAsyncIterable(skipped, (x) => x % 2 === 0);

    const result = await augmentativeToArrayAsync.call(filtered);

    expect(result).toEqual([4, 6]);
  });

  it('should work with skip operation over an augmentative iterable', async () => {
    const original = [1, 2, 3, 4, 5, 6];

    const filtered = filterAsyncIterable(original, (x) => x % 2 === 0);
    const skipped = skipAsyncIterable(filtered, 2);

    const result = await augmentativeToArrayAsync.call(skipped);

    expect(result).toEqual([6]);
  });

  it('should apply flatMap over array', async () => {
    const original = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    const transformed = flatMapAsyncIterable(original);
    const result = await augmentativeToArrayAsync.call(transformed);

    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should apply flatMap over array of async iterable', async () => {
    const original = [
      toAsync([1, 2, 3]),
      toAsync([4, 5, 6]),
      toAsync([7, 8, 9]),
    ];

    const transformed = flatMapAsyncIterable(original);
    const result = await augmentativeToArrayAsync.call(transformed);

    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should apply flatMap over an async iterable of async iterables', async () => {
    const original = toAsync([
      toAsync([1, 2, 3]),
      toAsync([4, 5, 6]),
      toAsync([7, 8, 9]),
    ]);

    const transformed = flatMapAsyncIterable(original);
    const result = await augmentativeToArrayAsync.call(transformed);

    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should apply flatMap over a sync iterable of async iterables', async () => {
    const original = [
      toAsync([1, 2, 3]),
      toAsync([4, 5, 6]),
      toAsync([7, 8, 9]),
    ][Symbol.iterator]();

    const transformed = flatMapAsyncIterable(original);
    const result = await augmentativeToArrayAsync.call(transformed);

    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should apply flatMap over an async iterable of sync iterables', async () => {
    const original = toAsync([
      [1, 2, 3][Symbol.iterator](),
      [4, 5, 6][Symbol.iterator](),
      [7, 8, 9][Symbol.iterator](),
    ]);

    const transformed = flatMapAsyncIterable(original);
    const result = await augmentativeToArrayAsync.call(transformed);

    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
