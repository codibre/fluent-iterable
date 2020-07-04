import { identity, truth } from './utils';
import {
  Predicate,
  Mapper,
  Reducer,
  Comparer,
  Action,
  Group,
  Indexed,
} from './types';
import { toObject, toAsync, map } from './sync';
import { getTop } from './common/get-top';
import { getMax, getMin } from './common';
import { forEach } from './sync/for-each';
import { getWithIndex } from './common/get-with-index';
import { getTake } from './common/get-take';
import {
  allAsync,
  anyAsync,
  countAsync,
  firstAsync,
  forEachAsync,
  groupAsync,
  lastAsync,
  reduceAsync,
  takeWhileAsync,
  distinctAsync,
  executeAsync,
  filterAsync,
  flattenAsync,
  mapAsync,
  reduceAndMapAsync,
  skipWhileAsync,
  toObjectAsync,
} from './async';

const toArray: <T>(iterable: Iterable<T>) => T[] = Array.from.bind(Array);

const withIndex: <T>(
  iterable: Iterable<T>,
) => Iterable<Indexed<T>> = getWithIndex(map);

function* takeWhile<T>(
  iterable: Iterable<T>,
  condition: Predicate<T>,
): Iterable<T> {
  for (const t of iterable) {
    if (!condition(t)) {
      break;
    }

    yield t;
  }
}

const take: <T>(iterable: Iterable<T>, n: number) => Iterable<T> = getTake(
  takeWhile,
);

function* skipWhile<T>(
  iterable: Iterable<T>,
  condition: Predicate<T>,
): Iterable<T> {
  let found = false;

  for (const t of iterable) {
    found = found || !condition(t);
    if (!found) {
      continue;
    }

    yield t;
  }
}

function skip<T>(iterable: Iterable<T>, n: number): Iterable<T> {
  let counter = n;
  return skipWhile(iterable, () => counter-- > 0);
}

function* filter<T>(
  iterable: Iterable<T>,
  predicate: Predicate<T>,
): Iterable<T> {
  for (const t of iterable) {
    if (predicate(t)) {
      yield t;
    }
  }
}

function* readPartition<T>(
  iterator: Iterator<T>,
  next: IteratorResult<T>,
  size: number,
): Iterable<T> {
  for (; size > 0; --size) {
    if (next.done) {
      break;
    }

    yield next.value;

    if (size > 1) {
      next = iterator.next();
    }
  }
}

function* partition<T>(
  iterable: Iterable<T>,
  size: number,
): Iterable<Iterable<T>> {
  if (size < 1) {
    throw new Error(
      `Validation failed, size (${size}) expected to be bigger than 0`,
    );
  }

  const iterator = iterable[Symbol.iterator]();
  for (let next = iterator.next(); !next.done; next = iterator.next()) {
    yield readPartition(iterator, next, size);
  }
}

function* append<T>(iterable: Iterable<T>, item: T): Iterable<T> {
  yield* iterable;
  yield item;
}

function* prepend<T>(iterable: Iterable<T>, item: T): Iterable<T> {
  yield item;
  yield* iterable;
}

function* concat<T>(...iterables: Array<Iterable<T>>): Iterable<T> {
  for (const iterable of iterables) {
    yield* iterable;
  }
}

function* repeat<T>(iterable: Iterable<T>, n: number): Iterable<T> {
  if (n < 1) {
    return;
  }

  const cache: T[] = [];

  for (const t of iterable) {
    yield t;
    cache.push(t);
  }

  for (let i = 1; i < n; ++i) {
    yield* cache;
  }
}

function* flatten<T, R>(
  iterable: Iterable<T>,
  mapper: Mapper<T, Iterable<R>> = (t) => (t as unknown) as Iterable<R>,
): Iterable<R> {
  for (const t of iterable) {
    yield* mapper(t);
  }
}

function* sort<T>(iterable: Iterable<T>, comparer?: Comparer<T>): Iterable<T> {
  yield* toArray(iterable).sort(comparer);
}

function* distinct<T, R>(
  iterable: Iterable<T>,
  mapper: Mapper<T, R> = identity as Mapper<T, R>,
): Iterable<T> {
  const set = new Set<R>();
  for (const t of iterable) {
    const value = mapper(t);
    if (set.has(value)) {
      continue;
    }

    set.add(value);
    yield t;
  }
}

function* group<T, R>(
  iterable: Iterable<T>,
  mapper: Mapper<T, R>,
): Iterable<Group<T, R>> {
  const groups = new Map<R, T[]>();
  for (const t of iterable) {
    const key = mapper(t);
    const values = groups.get(key) || [];

    values.push(t);
    groups.set(key, values);
  }

  for (const [key, values] of groups.entries()) {
    yield { key, values };
  }
}

function count<T>(
  iterable: Iterable<T>,
  predicate: Predicate<T> = truth,
): number {
  let counter = 0;
  for (const t of iterable) {
    if (predicate(t)) {
      counter++;
    }
  }

  return counter;
}

function first<T>(
  iterable: Iterable<T>,
  predicate: Predicate<T> = truth,
): T | undefined {
  for (const t of iterable) {
    if (predicate(t)) {
      return t;
    }
  }

  return undefined;
}

function last<T>(
  iterable: Iterable<T>,
  predicate: Predicate<T> = truth,
): T | undefined {
  let result: T | undefined;

  for (const t of iterable) {
    if (predicate(t)) {
      result = t;
    }
  }

  return result;
}

function reduceAndMap<T, A, R>(
  iterable: Iterable<T>,
  reducer: Reducer<T, A>,
  initial: A,
  result: Mapper<A, R>,
): R {
  let accumulator: A = initial;
  for (const t of iterable) {
    accumulator = reducer(accumulator, t);
  }

  return result(accumulator);
}

function reduce<T, R>(
  iterable: Iterable<T>,
  reducer: Reducer<T, R>,
  initial: R,
): R {
  return reduceAndMap(iterable, reducer, initial, identity);
}

function all<T>(iterable: Iterable<T>, predicate: Predicate<T>): boolean {
  for (const t of iterable) {
    if (!predicate(t)) {
      return false;
    }
  }

  return true;
}

function any<T>(
  iterable: Iterable<T>,
  predicate: Predicate<T> = truth,
): boolean {
  return first(iterable, predicate) !== undefined;
}

function contains<T>(iterable: Iterable<T>, item: T): boolean {
  return any(iterable, (next) => next === item);
}

function* execute<T>(iterable: Iterable<T>, action: Action<T>): Iterable<T> {
  for (const t of iterable) {
    action(t);
    yield t;
  }
}

function join<T>(
  iterable: Iterable<T>,
  separator: string,
  mapper: Mapper<T, string> = identity as Mapper<T, string>,
): string {
  return (
    reduce<T, string | undefined>(
      iterable,
      (current, next) => {
        const nextStr = mapper(next);
        return current ? `${current}${separator}${nextStr}` : nextStr;
      },
      undefined,
    ) || ''
  );
}

function sum<T>(
  iterable: Iterable<T>,
  mapper: Mapper<T, number> = identity as Mapper<T, number>,
): number {
  return reduce(iterable, (current, next) => current + mapper(next), 0);
}

function avg<T>(
  iterable: Iterable<T>,
  mapper: Mapper<T, number> = identity as Mapper<T, number>,
): number {
  return reduceAndMap(
    iterable,
    (current, next) => ({
      avg: (current.avg * current.count + mapper(next)) / (current.count + 1),
      count: current.count + 1,
    }),
    { avg: 0, count: 0 },
    (acc) => acc.avg,
  );
}

const top: <T, R>(
  iterable: Iterable<T>,
  mapper: Mapper<T, R>,
  comparer: Comparer<R>,
) => T | undefined = getTop(reduceAndMap);

const min: <T>(
  iterable: Iterable<T>,
  mapper?: Mapper<T, number>,
) => T | undefined = getMin(top);

const max: <T>(
  iterable: Iterable<T>,
  mapper?: Mapper<T, number>,
) => T | undefined = getMax(top);

function hasExactly<T>(iterable: Iterable<T>, expectedSize: number): boolean {
  return count(take(iterable, expectedSize + 1)) === expectedSize;
}

function hasLessThan<T>(iterable: Iterable<T>, threshold: number): boolean {
  return count(take(iterable, threshold + 1)) < threshold;
}

function hasMoreThan<T>(iterable: Iterable<T>, threshold: number): boolean {
  return count(take(iterable, threshold + 1)) > threshold;
}

export const helper = {
  withIndex,
  takeWhile,
  take,
  skipWhile,
  skip,
  map,
  filter,
  partition,
  append,
  prepend,
  concat,
  repeat,
  flatten,
  sort,
  distinct,
  group,
  count,
  first,
  last,
  reduceAndMap,
  reduceAndMapAsync,
  reduce,
  all,
  any,
  contains,
  toArray,
  toObject,
  toAsync,
  forEach,
  execute,
  join,
  sum,
  avg,
  top,
  min,
  max,
  hasExactly,
  hasLessThan,
  hasMoreThan,
};

export const iterableFuncs = {
  withIndex,
  takeWhile,
  take,
  skipWhile,
  skip,
  map,
  filter,
  append,
  prepend,
  concat,
  repeat,
  flatten,
  sort,
  distinct,
  execute,
};

export const iterableAsyncFuncs = {
  takeWhileAsync,
  skipWhileAsync,
  mapAsync,
  filterAsync,
  flattenAsync,
  distinctAsync,
  executeAsync,
};

export const special = {
  partition,
  group,
  groupAsync,
};
export const resolvingFuncs = {
  count,
  countAsync,
  first,
  firstAsync,
  last,
  lastAsync,
  reduceAndMap,
  reduceAndMapAsync,
  reduce,
  reduceAsync,
  all,
  allAsync,
  any,
  anyAsync,
  contains,
  toArray,
  toObject,
  toObjectAsync,
  forEach,
  forEachAsync,
  join,
  sum,
  avg,
  top,
  min,
  max,
  hasExactly,
  hasLessThan,
  hasMoreThan,
};
