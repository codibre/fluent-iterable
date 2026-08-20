import { describe, it, expect, vi } from 'vitest';
import {
  mapIterable,
  augmentativeToArray,
  filterIterable,
  takeWhileIterable,
  augmentativeForEach,
  addMap,
  addFilter,
  addTakeWhile,
  addMapAsync,
  flatMapIterable,
  skipIterable,
} from '../../index';

function* generator<T>(source: Iterable<T>) {
  yield* source;
}

describe('Iterable', () => {
  it('should apply map', () => {
    const original = [1, 2, 3];

    const transformed = mapIterable(original, (x) => x * 7);

    expect(Array.from(transformed)).toEqual([7, 14, 21]);
  });

  it('should apply filter', () => {
    const original = [1, 2, 3, 4, 5, 6];

    const transformed = filterIterable(original, (x) => x % 2 === 0);

    expect(Array.from(transformed)).toEqual([2, 4, 6]);
  });

  it('should apply takeWhile', () => {
    const original = [1, 2, 3, 4, 5, 6];

    const transformed = takeWhileIterable(original, (x) => x < 4);

    expect(Array.from(transformed)).toEqual([1, 2, 3]);
  });

  it('should apply flatMap over array', () => {
    const original = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    const transformed = flatMapIterable(original);

    expect(Array.from(transformed)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should apply flatMap', () => {
    const original = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ][Symbol.iterator]();

    const transformed = flatMapIterable(original);

    expect(Array.from(transformed)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should be augmented without modifying the original iterable', () => {
    const original = [1, 2, 3];

    const transformed = mapIterable(original, (x) => x * 3);

    const resultOriginal = Array.from(generator(original));
    const augmentedResultOriginal = augmentativeToArray.call(
      generator(original),
    );
    const resultTransformed = Array.from(generator(transformed));
    const augmentResultTransformed = augmentativeToArray.call(
      generator(transformed),
    );

    expect(resultOriginal).toEqual(augmentedResultOriginal);
    expect(resultTransformed).toEqual(augmentResultTransformed);
    expect(resultOriginal).toEqual([1, 2, 3]);
    expect(resultTransformed).toEqual([3, 6, 9]);
  });

  it('should accumulate augmentative arguments', () => {
    const original = [1, 2, 3];

    const map1 = mapIterable(original, (x) => x * 3);
    const map2 = mapIterable(map1, (x) => x + 2);
    const map3 = mapIterable(map2, (x) => x.toString());

    expect(Array.from(map3)).toEqual(['5', '8', '11']);
  });

  it('should augment flatMap over an already augmented iterable over array', () => {
    const original = [0, 1, 2];

    const expanded = mapIterable(original, (x) => [
      1 + 3 * x,
      2 + 3 * x,
      3 + 3 * x,
    ]);
    const flattened = flatMapIterable(expanded);
    const filtered = filterIterable(flattened, (x) => x % 3);
    const mapped = mapIterable(filtered, (x) => x * 2);

    expect(Array.from(mapped)).toEqual([2, 4, 8, 10, 14, 16]);
  });

  it('should accumulate augmentative arguments with flatMap', () => {
    const original = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ][Symbol.iterator]();

    const flattened = flatMapIterable(original);
    const filtered = filterIterable(flattened, (x) => x % 3);
    const mapped = mapIterable(filtered, (x) => x * 2);

    expect(Array.from(mapped)).toEqual([2, 4, 8, 10, 14, 16]);
  });

  it('should augment flatMap over an already augmented iterable', () => {
    const original = [0, 1, 2][Symbol.iterator]();

    const expanded = mapIterable(original, (x) => [
      1 + 3 * x,
      2 + 3 * x,
      3 + 3 * x,
    ]);
    const flattened = flatMapIterable(expanded);
    const filtered = filterIterable(flattened, (x) => x % 3);
    const mapped = mapIterable(filtered, (x) => x * 2);

    expect(Array.from(mapped)).toEqual([2, 4, 8, 10, 14, 16]);
  });

  it('should accumulate different augmentative arguments', () => {
    const original = [1, 2, 3, 4, 5, 6];

    const map1 = mapIterable(original, (x) => x * 3);
    const map2 = filterIterable(map1, (x) => x % 2 === 0);
    const map3 = takeWhileIterable(map2, (x) => x < 15);

    expect(Array.from(map3)).toEqual([6, 12]);
  });

  it('should process an for each properly', () => {
    const original = [1, 2, 3];
    const result: number[] = [];

    const map1 = mapIterable(original, (x) => x * 3);
    for (const item of map1) {
      result.push(item + 2);
    }

    expect(result).toEqual([5, 8, 11]);
  });

  it('should process an augmentative forEach properly', () => {
    const original = [1, 2, 3];
    const result: number[] = [];

    const map1 = mapIterable(original, (x) => x * 3);
    augmentativeForEach.call(map1, ((x: number) => result.push(x + 2)) as any);

    expect(result).toEqual([5, 8, 11]);
  });

  it('should add an augmentative argument when iterable is already augmentative when iterable is mutable', async () => {
    const original = [1, 2, 3];
    const result: number[] = [];

    const map1 = mapIterable(original, (x) => x * 3);
    const map2 = addMap(map1, (x) => x + 2);

    await augmentativeForEach.call(map1, ((x: number) =>
      result.push(x + 2)) as any);

    expect(map1).toBe(map2);
    expect(result).toEqual([7, 10, 13]);
  });

  it('should support branching when iterable is immutable', () => {
    const original = [1, 2, 3];
    const result0: number[] = [];
    const result1: number[] = [];
    const result2: number[] = [];

    const map1 = mapIterable(original, (x) => x * 3, true);
    const map2 = addMap(map1, (x) => x + 2);

    augmentativeForEach.call(map2, (async (x: number) =>
      result2.push(x + 2)) as any);
    augmentativeForEach.call(map1, (async (x: number) =>
      result1.push(x + 2)) as any);
    augmentativeForEach.call(original, (async (x: number) =>
      result0.push(x + 2)) as any);

    expect(map1).not.toBe(map2);
    expect(result0).toEqual([3, 4, 5]);
    expect(result1).toEqual([5, 8, 11]);
    expect(result2).toEqual([7, 10, 13]);
  });

  it('should return an augmentative iterable with adding operation when informed iterable is not augmentative', async () => {
    const original = [1, 2, 3];
    const result: number[] = [];

    const map1 = addMap(original, (x) => x * 3);

    await augmentativeForEach.call(map1, ((x: number) =>
      result.push(x + 2)) as any);

    expect(map1).not.toBe(original);
    expect(result).toEqual([5, 8, 11]);
  });

  it('should stop to process augments when a stop is signalized', () => {
    const original = [1, 2, 3, 4, 3];
    const call = vi.fn();

    const takeWhile = addTakeWhile(original, (x) => x < 4);
    const target = addFilter(takeWhile, (x) => {
      call();
      return 2 <= x && x <= 3;
    });

    const result = augmentativeToArray.call(target);

    expect(call).toHaveBeenCalledTimes(3);
    expect(result).toEqual([2, 3]);
  });

  it('should respect filter and takeWhile through operations', () => {
    const callFilter = vi.fn((x: number) => x !== 2);
    const callTakeWhile = vi.fn((x: number) => x < 4);
    const callMap = vi.fn((x: number) => x);
    const original = [1, 2, 3, 4, 5];
    const filter = addFilter(original, callFilter);
    const takeWhile = addTakeWhile(filter, callTakeWhile);
    const map: any = addMapAsync(takeWhile, callMap);

    const result = augmentativeToArray.call(map);

    expect(result).toEqual([1, 3]);
    expect(callFilter.mock.calls).toEqual([[1], [2], [3], [4]]);
    expect(callTakeWhile.mock.calls).toEqual([[1], [3], [4]]);
    expect(callMap.mock.calls).toEqual([[1], [3]]);
  });

  it('should work with skip operation over an array', () => {
    const original = [1, 2, 3, 4, 5, 6];

    const skipped = skipIterable(original, 2);
    const filtered = filterIterable(skipped, (x) => x % 2 === 0);

    const result = augmentativeToArray.call(filtered);

    expect(result).toEqual([4, 6]);
  });

  it('should work with skip operation over an array with negative skip', () => {
    const original = [2, 3, 4, 5, 6];

    const skipped = skipIterable(original, -2);
    const filtered = filterIterable(skipped, (x) => x % 2 === 0);

    const result = augmentativeToArray.call(filtered);

    expect(result).toEqual([2, 4, 6]);
  });

  it('should work with skip operation over an iterable', () => {
    const original = [1, 2, 3, 4, 5, 6][Symbol.iterator]();

    const skipped = skipIterable(original, 2);
    const filtered = filterIterable(skipped, (x) => x % 2 === 0);

    const result = augmentativeToArray.call(filtered);

    expect(result).toEqual([4, 6]);
  });

  it('should work with skip operation over an augmentative iterable', () => {
    const original = [1, 2, 3, 4, 5, 6];

    const filtered = filterIterable(original, (x) => x % 2 === 0);
    const skipped = skipIterable(filtered, 2);

    const result = augmentativeToArray.call(skipped);

    expect(result).toEqual([6]);
  });
});
