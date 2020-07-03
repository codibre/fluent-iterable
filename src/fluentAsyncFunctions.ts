import {
  Comparer,
  Group,
  Mapper,
  Predicate,
  Reducer,
  Action,
  AsyncAction,
  AsyncPredicate,
  AsyncMapper,
  AsyncReducer,
  Indexed,
} from './types';
import { identity, identityAsync, truth } from './utils';
import { merge, mergeCatching } from './async';
import { commonTopAsync } from './common/common-top-async';

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

async function* takeWhile<T>(
  iterable: AsyncIterable<T>,
  condition: Predicate<T>,
): AsyncIterable<T> {
  for await (const t of iterable) {
    if (!condition(t)) {
      break;
    }

    yield t;
  }
}

async function* takeWhileAsync<T>(
  iterable: AsyncIterable<T>,
  condition: AsyncPredicate<T>,
): AsyncIterable<T> {
  for await (const t of iterable) {
    if (!(await condition(t))) {
      break;
    }

    yield t;
  }
}

function take<T>(iterable: AsyncIterable<T>, n: number): AsyncIterable<T> {
  let counter = 0;
  return takeWhile(iterable, () => counter++ < n);
}

async function* skipWhile<T>(
  iterable: AsyncIterable<T>,
  condition: Predicate<T>,
): AsyncIterable<T> {
  let found = false;

  for await (const t of iterable) {
    found = found || !condition(t);
    if (!found) {
      continue;
    }

    yield t;
  }
}

async function* skipWhileAsync<T>(
  iterable: AsyncIterable<T>,
  condition: AsyncPredicate<T>,
): AsyncIterable<T> {
  let found = false;

  for await (const t of iterable) {
    found = found || !(await condition(t));
    if (!found) {
      continue;
    }

    yield t;
  }
}

function skip<T>(iterable: AsyncIterable<T>, n: number): AsyncIterable<T> {
  let counter = n;
  return skipWhile(iterable, () => counter-- > 0);
}

async function* map<T, R>(
  iterable: AsyncIterable<T>,
  mapper: Mapper<T, R>,
): AsyncIterable<R> {
  for await (const t of iterable) {
    yield mapper(t);
  }
}

async function* mapAsync<T, R>(
  iterable: AsyncIterable<T>,
  mapper: AsyncMapper<T, R>,
): AsyncIterable<R> {
  for await (const t of iterable) {
    yield await mapper(t);
  }
}

async function* filter<T>(
  iterable: AsyncIterable<T>,
  predicate: Predicate<T>,
): AsyncIterable<T> {
  for await (const t of iterable) {
    if (predicate(t)) {
      yield t;
    }
  }
}

async function* filterAsync<T>(
  iterable: AsyncIterable<T>,
  predicate: AsyncPredicate<T>,
): AsyncIterable<T> {
  for await (const t of iterable) {
    if (await predicate(t)) {
      yield t;
    }
  }
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

async function* flatten<T, R>(
  iterable: AsyncIterable<T>,
  mapper: Mapper<T, Iterable<R>> = (t) => (t as unknown) as Iterable<R>,
): AsyncIterable<R> {
  for await (const t of iterable) {
    yield* mapper(t);
  }
}

async function* flattenAsync<T, R>(
  iterable: AsyncIterable<T>,
  mapper: AsyncMapper<T, AsyncIterable<R>>,
): AsyncIterable<R> {
  for await (const t of iterable) {
    yield* await mapper(t);
  }
}

async function* sort<T>(
  iterable: AsyncIterable<T>,
  comparer?: Comparer<T>,
): AsyncIterable<T> {
  yield* (await toArray(iterable)).sort(comparer);
}

async function* distinct<T, R>(
  iterable: AsyncIterable<T>,
  mapper: Mapper<T, R> = identity as Mapper<T, R>,
): AsyncIterable<T> {
  const set = new Set<R>();
  for await (const t of iterable) {
    const value = mapper(t);
    if (set.has(value)) {
      continue;
    }

    set.add(value);
    yield t;
  }
}

async function* distinctAsync<T, R>(
  iterable: AsyncIterable<T>,
  mapper: AsyncMapper<T, R>,
): AsyncIterable<T> {
  const set = new Set<R>();
  for await (const t of iterable) {
    const value = await mapper(t);
    if (set.has(value)) {
      continue;
    }

    set.add(value);
    yield t;
  }
}

async function* group<T, R>(
  iterable: AsyncIterable<T>,
  mapper: Mapper<T, R>,
): AsyncIterable<Group<T, R>> {
  const groups = new Map<R, T[]>();
  for await (const t of iterable) {
    const key = mapper(t);
    const values = groups.get(key) || [];

    values.push(t);
    groups.set(key, values);
  }

  for (const [key, values] of groups.entries()) {
    yield { key, values };
  }
}

async function* groupAsync<T, R>(
  iterable: AsyncIterable<T>,
  mapper: AsyncMapper<T, R>,
): AsyncIterable<Group<T, R>> {
  const groups = new Map<R, T[]>();
  for await (const t of iterable) {
    const key = await mapper(t);
    const values = groups.get(key) || [];

    values.push(t);
    groups.set(key, values);
  }

  for (const [key, values] of groups.entries()) {
    yield { key, values };
  }
}

async function count<T>(
  iterable: AsyncIterable<T>,
  predicate: Predicate<T> = truth,
): Promise<number> {
  let counter = 0;
  for await (const t of iterable) {
    if (predicate(t)) {
      counter++;
    }
  }

  return counter;
}

async function countAsync<T>(
  iterable: AsyncIterable<T>,
  predicate: AsyncPredicate<T>,
): Promise<number> {
  let counter = 0;
  for await (const t of iterable) {
    if (await predicate(t)) {
      counter++;
    }
  }

  return counter;
}

async function first<T>(
  iterable: AsyncIterable<T>,
  predicate: Predicate<T> = truth,
): Promise<T | undefined> {
  for await (const t of iterable) {
    if (predicate(t)) {
      return t;
    }
  }

  return undefined;
}

async function firstAsync<T>(
  iterable: AsyncIterable<T>,
  predicate: AsyncPredicate<T>,
): Promise<T | undefined> {
  for await (const t of iterable) {
    if (await predicate(t)) {
      return t;
    }
  }

  return undefined;
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

async function last<T>(
  iterable: AsyncIterable<T>,
  predicate: Predicate<T> = truth,
): Promise<T | undefined> {
  let result: T | undefined;

  for await (const t of iterable) {
    if (predicate(t)) {
      result = t;
    }
  }

  return result;
}

async function lastAsync<T>(
  iterable: AsyncIterable<T>,
  predicate: AsyncPredicate<T>,
): Promise<T | undefined> {
  let result: T | undefined;

  for await (const t of iterable) {
    if (await predicate(t)) {
      result = t;
    }
  }

  return result;
}

async function reduceAndMap<T, A, R>(
  iterable: AsyncIterable<T>,
  reducer: Reducer<T, A>,
  initial: A,
  result: Mapper<A, R>,
): Promise<R> {
  let accumulator: A = initial;
  for await (const t of iterable) {
    accumulator = reducer(accumulator, t);
  }

  return result(accumulator);
}

async function reduceAndMapAsync<T, A, R>(
  iterable: AsyncIterable<T>,
  reducer: AsyncReducer<T, A>,
  initial: A,
  result: AsyncMapper<A, R>,
): Promise<R> {
  let accumulator: A = initial;
  for await (const t of iterable) {
    accumulator = await reducer(accumulator, t);
  }

  return result(accumulator);
}

function reduce<T, R>(
  iterable: AsyncIterable<T>,
  reducer: Reducer<T, R>,
  initial: R,
): Promise<R> {
  return reduceAndMap(iterable, reducer, initial, identity);
}

function reduceAsync<T, R>(
  iterable: AsyncIterable<T>,
  reducer: AsyncReducer<T, R>,
  initial: R,
): Promise<R> {
  return reduceAndMapAsync(iterable, reducer, initial, identityAsync);
}

async function all<T>(
  iterable: AsyncIterable<T>,
  predicate: Predicate<T>,
): Promise<boolean> {
  for await (const t of iterable) {
    if (!predicate(t)) {
      return false;
    }
  }

  return true;
}

async function allAsync<T>(
  iterable: AsyncIterable<T>,
  predicate: AsyncPredicate<T>,
): Promise<boolean> {
  for await (const t of iterable) {
    if (!(await predicate(t))) {
      return false;
    }
  }

  return true;
}

async function any<T>(
  iterable: AsyncIterable<T>,
  predicate: Predicate<T> = truth,
): Promise<boolean> {
  return (await first(iterable, predicate)) !== undefined;
}

async function anyAsync<T>(
  iterable: AsyncIterable<T>,
  predicate: AsyncPredicate<T>,
): Promise<boolean> {
  return (await firstAsync(iterable, predicate)) !== undefined;
}

function contains<T>(iterable: AsyncIterable<T>, item: T): Promise<boolean> {
  return any(iterable, (next) => next === item);
}

async function toObject<T, R>(
  iterable: AsyncIterable<T>,
  keySelector: Mapper<T, keyof R>,
  valueSelector: Mapper<T, R[keyof R]> = identity as any,
): Promise<R> {
  const res = {} as R;
  for await (const t of iterable) {
    res[keySelector(t)] = valueSelector(t);
  }

  return res;
}

async function toObjectAsync<T, R>(
  iterable: AsyncIterable<T>,
  keySelector: AsyncMapper<T, keyof R>,
  valueSelector: AsyncMapper<T, R[keyof R]>,
): Promise<R> {
  const res = {} as R;
  for await (const t of iterable) {
    res[await keySelector(t)] = await valueSelector(t);
  }

  return res;
}

async function forEach<T>(
  iterable: AsyncIterable<T>,
  action: Action<T>,
): Promise<void> {
  for await (const t of iterable) {
    action(t);
  }
}

async function forEachAsync<T>(
  iterable: AsyncIterable<T>,
  action: AsyncAction<T>,
): Promise<void> {
  for await (const t of iterable) {
    await action(t);
  }
}

async function* execute<T>(
  iterable: AsyncIterable<T>,
  action: Action<T>,
): AsyncIterable<T> {
  for await (const t of iterable) {
    action(t);
    yield t;
  }
}

async function* executeAsync<T>(
  iterable: AsyncIterable<T>,
  action: AsyncAction<T>,
): AsyncIterable<T> {
  for await (const t of iterable) {
    await action(t);
    yield t;
  }
}

async function join<T>(
  iterable: AsyncIterable<T>,
  separator: string,
  mapper: Mapper<T, string> = identity as Mapper<T, string>,
): Promise<string> {
  return (
    (await reduce<T, string | undefined>(
      iterable,
      (current, next) => {
        const nextStr = mapper(next);
        return current ? `${current}${separator}${nextStr}` : nextStr;
      },
      undefined,
    )) || ''
  );
}

async function joinAsync<T>(
  iterable: AsyncIterable<T>,
  separator: string,
  mapper: AsyncMapper<T, string>,
): Promise<string> {
  return (
    (await reduceAsync<T, string | undefined>(
      iterable,
      async (current, next) => {
        const nextStr = await mapper(next);
        return current ? `${current}${separator}${nextStr}` : nextStr;
      },
      undefined,
    )) || ''
  );
}

function sum<T>(
  iterable: AsyncIterable<T>,
  mapper: Mapper<T, number> = identity as Mapper<T, number>,
): Promise<number> {
  return reduce(iterable, (current, next) => current + mapper(next), 0);
}

function sumAsync<T>(
  iterable: AsyncIterable<T>,
  mapper: AsyncMapper<T, number>,
): Promise<number> {
  return reduceAsync(
    iterable,
    async (current, next) => current + (await mapper(next)),
    0,
  );
}

function avg<T>(
  iterable: AsyncIterable<T>,
  mapper: Mapper<T, number> = identity as Mapper<T, number>,
): Promise<number> {
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

function avgAsync<T>(
  iterable: AsyncIterable<T>,
  mapper: AsyncMapper<T, number>,
): Promise<number> {
  return reduceAndMapAsync(
    iterable,
    async (current, next) => ({
      avg:
        (current.avg * current.count + (await mapper(next))) /
        (current.count + 1),
      count: current.count + 1,
    }),
    { avg: 0, count: 0 },
    async (acc) => acc.avg,
  );
}

function top<T, R>(
  iterable: AsyncIterable<T>,
  mapper: Mapper<T, R>,
  comparer: Comparer<R>,
): Promise<T | undefined> {
  return reduceAndMap<
    T,
    { value: R | undefined; item: T | undefined; found: boolean },
    T | undefined
  >(
    iterable,
    (current, next) => {
      const value = mapper(next);
      return !current.found ||
        (current.value && comparer(value, current.value) > 0)
        ? { value, item: next, found: true }
        : current;
    },
    { value: undefined, item: undefined, found: false },
    (acc) => acc.item,
  );
}

function topAsync<T, R>(
  iterable: AsyncIterable<T>,
  mapper: AsyncMapper<T, R>,
  comparer: Comparer<R>,
): Promise<T | undefined> {
  return commonTopAsync(iterable, mapper, comparer, reduceAndMapAsync);
}

function min<T>(
  iterable: AsyncIterable<T>,
  mapper: Mapper<T, number> = identity as Mapper<T, number>,
): Promise<T | undefined> {
  return top<T, number>(iterable, mapper, (a, b) => b - a);
}

function minAsync<T>(
  iterable: AsyncIterable<T>,
  mapper: AsyncMapper<T, number>,
): Promise<T | undefined> {
  return topAsync<T, number>(iterable, mapper, (a, b) => b - a);
}

function max<T>(
  iterable: AsyncIterable<T>,
  mapper: Mapper<T, number> = identity as Mapper<T, number>,
): Promise<T | undefined> {
  return top<T, number>(iterable, mapper, (a, b) => a - b);
}

function maxAsync<T>(
  iterable: AsyncIterable<T>,
  mapper: AsyncMapper<T, number>,
): Promise<T | undefined> {
  return topAsync<T, number>(iterable, mapper, (a, b) => a - b);
}

async function hasExactly<T>(
  iterable: AsyncIterable<T>,
  expectedSize: number,
): Promise<boolean> {
  return (await count(take(iterable, expectedSize + 1))) === expectedSize;
}

async function hasLessThan<T>(
  iterable: AsyncIterable<T>,
  threshold: number,
): Promise<boolean> {
  return (await count(take(iterable, threshold + 1))) < threshold;
}

async function hasMoreThan<T>(
  iterable: AsyncIterable<T>,
  threshold: number,
): Promise<boolean> {
  return (await count(take(iterable, threshold + 1))) > threshold;
}

export const asyncHelper = {
  withIndex,
  takeWhile,
  takeWhileAsync,
  take,
  skipWhile,
  skipWhileAsync,
  skip,
  map,
  mapAsync,
  filter,
  firstAsync,
  partition,
  append,
  prepend,
  concat,
  repeat,
  flatten,
  flattenAsync,
  sort,
  distinct,
  distinctAsync,
  count,
  countAsync,
  first,
  filterAsync,
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
  execute,
  executeAsync,
  join,
  joinAsync,
  sum,
  sumAsync,
  avg,
  avgAsync,
  top,
  topAsync,
  min,
  minAsync,
  max,
  maxAsync,
  hasExactly,
  hasLessThan,
  hasMoreThan,
  merge,
};

export const asyncIterableFuncs = {
  withIndex,
  takeWhile,
  takeWhileAsync,
  take,
  skipWhile,
  skipWhileAsync,
  skip,
  map,
  mapAsync,
  filter,
  filterAsync,
  append,
  prepend,
  concat,
  repeat,
  flatten,
  flattenAsync,
  sort,
  distinct,
  distinctAsync,
  group,
  groupAsync,
  execute,
  executeAsync,
  merge,
  mergeCatching,
};

export const asyncSpecial = {
  partition,
  group,
  groupAsync,
};

export const asyncResolvingFuncs = {
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
  joinAsync,
  sum,
  sumAsync,
  avg,
  avgAsync,
  top,
  topAsync,
  min,
  minAsync,
  max,
  maxAsync,
  hasExactly,
  hasLessThan,
  hasMoreThan,
};
