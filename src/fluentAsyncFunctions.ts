import { Comparer, Mapper, Indexed } from './types';
import { identity } from './utils';
import {
  anyAsync,
  avgAsync,
  merge,
  mergeCatching,
  forEachAsync,
  groupAsync,
  joinAsync,
  takeWhileAsync,
  distinctAsync,
  executeAsync,
  filterAsync,
  firstAsync,
  flattenAsync,
  mapAsync,
  skipWhileAsync,
  toObjectAsync,
  allAsync,
  reduceAndMapAsync,
  lastAsync,
} from './async';
import {} from './async/first-async';
import { countAsync } from './async/count-async';
import { reduceAsync } from './async/reduce-async';
import { topAsync } from './async/top-async';
import { minAsync } from './async/min-async';
import { maxAsync } from './async/max-async';
import { sumAsync } from './async/sum-async';
import { containsAsync } from './async/contains-async';

async function toArray<T>(iterable: AsyncIterable<T>): Promise<T[]> {
  const array: T[] = [];
  for await (const t of iterable) {
    array.push(t);
  }

  return array;
}

async function* withIndex<T>(
  iterable: AsyncIterable<T>,
): AsyncIterable<Indexed<T>> {
  let idx = 0;
  for await (const t of iterable) {
    yield { idx: idx++, value: t };
  }
}

function take<T>(iterable: AsyncIterable<T>, n: number): AsyncIterable<T> {
  let counter = 0;
  return takeWhileAsync(iterable, () => counter++ < n);
}

function skip<T>(iterable: AsyncIterable<T>, n: number): AsyncIterable<T> {
  let counter = n;
  return skipWhileAsync(iterable, () => counter-- > 0);
}

async function* append<T>(
  iterable: AsyncIterable<T>,
  item: T,
): AsyncIterable<T> {
  yield* iterable;
  yield item;
}

async function* prepend<T>(
  iterable: AsyncIterable<T>,
  item: T,
): AsyncIterable<T> {
  yield item;
  yield* iterable;
}

async function* concat<T>(
  ...iterables: Array<AsyncIterable<T>>
): AsyncIterable<T> {
  for (const iterable of iterables) {
    yield* iterable;
  }
}

async function* repeat<T>(
  iterable: AsyncIterable<T>,
  n: number,
): AsyncIterable<T> {
  if (n < 1) {
    return;
  }

  const cache: T[] = [];

  for await (const t of iterable) {
    yield t;
    cache.push(t);
  }

  for (let i = 1; i < n; ++i) {
    yield* cache;
  }
}

async function* sort<T>(
  iterable: AsyncIterable<T>,
  comparer?: Comparer<T>,
): AsyncIterable<T> {
  yield* (await toArray(iterable)).sort(comparer);
}

async function* readPartition<T>(
  iterator: AsyncIterator<T>,
  next: IteratorResult<T>,
  size: number,
): AsyncIterable<T> {
  for (; size > 0; --size) {
    if (next.done) {
      break;
    }

    yield next.value;

    if (size > 1) {
      next = await iterator.next();
    }
  }
}

async function* partition<T>(
  iterable: AsyncIterable<T>,
  size: number,
): AsyncIterable<AsyncIterable<T>> {
  if (size < 1) {
    throw new Error(
      `Validation failed, size (${size}) expected to be bigger than 0`,
    );
  }

  const iterator = iterable[Symbol.asyncIterator]();
  for (
    let next = await iterator.next();
    !next.done;
    next = await iterator.next()
  ) {
    yield readPartition(iterator, next, size);
  }
}

async function hasExactly<T>(
  iterable: AsyncIterable<T>,
  expectedSize: number,
): Promise<boolean> {
  return (await countAsync(take(iterable, expectedSize + 1))) === expectedSize;
}

async function hasLessThan<T>(
  iterable: AsyncIterable<T>,
  threshold: number,
): Promise<boolean> {
  return (await countAsync(take(iterable, threshold + 1))) < threshold;
}

async function hasMoreThan<T>(
  iterable: AsyncIterable<T>,
  threshold: number,
): Promise<boolean> {
  return (await countAsync(take(iterable, threshold + 1))) > threshold;
}

export const asyncHelper = {
  withIndex,
  takeWhile: takeWhileAsync,
  take,
  skipWhile: skipWhileAsync,
  skip,
  map: mapAsync,
  filter: filterAsync,
  partition,
  append,
  prepend,
  concat,
  repeat,
  flatten: flattenAsync,
  sort,
  distinct: distinctAsync,
  count: countAsync,
  first: firstAsync,
  last: lastAsync,
  reduceAndMap: reduceAndMapAsync,
  reduce: reduceAsync,
  all: allAsync,
  any: anyAsync,
  contains: containsAsync,
  toArray,
  toObject: toObjectAsync,
  forEach: forEachAsync,
  execute: executeAsync,
  join: joinAsync,
  sum: sumAsync,
  avg: avgAsync,
  top: topAsync,
  min: minAsync,
  max: maxAsync,
  hasExactly,
  hasLessThan,
  hasMoreThan,
  merge,
};

export const asyncIterableFuncs = {
  withIndex,
  takeWhile: takeWhileAsync,
  takeWhileAsync,
  take,
  skipWhile: skipWhileAsync,
  skipWhileAsync,
  skip,
  map: mapAsync,
  mapAsync,
  filter: filterAsync,
  filterAsync,
  append,
  prepend,
  concat,
  repeat,
  flatten: flattenAsync,
  flattenAsync,
  sort,
  distinct: distinctAsync,
  distinctAsync,
  group: groupAsync,
  groupAsync,
  execute: executeAsync,
  executeAsync,
  merge,
  mergeCatching,
};

export const asyncSpecial = {
  partition,
  group: groupAsync,
  groupAsync,
};

export const asyncResolvingFuncs = {
  count: countAsync,
  countAsync,
  first: firstAsync,
  firstAsync,
  last: lastAsync,
  lastAsync,
  reduceAndMap: reduceAndMapAsync,
  reduceAndMapAsync,
  reduce: reduceAsync,
  reduceAsync,
  all: allAsync,
  allAsync,
  any: anyAsync,
  anyAsync,
  contains: containsAsync,
  containsAsync,
  toArray,
  toObject: toObjectAsync,
  toObjectAsync,
  forEach: forEachAsync,
  forEachAsync,
  join: joinAsync,
  joinAsync,
  sum: sumAsync,
  sumAsync,
  avg: avgAsync,
  avgAsync,
  top: topAsync,
  topAsync,
  min: minAsync,
  minAsync,
  max: maxAsync,
  maxAsync,
  hasExactly,
  hasLessThan,
  hasMoreThan,
};
