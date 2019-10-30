import { identity, identityAsync, truth } from './utils';

import {
  Predicate,
  AsyncPredicate,
  Mapper,
  AsyncMapper,
  Reducer,
  AsyncReducer,
  Comparer,
  Action,
  AsyncAction,
  Group,
  Indexed,
} from './types';

function* withIndex<T>(iterable: Iterable<T>): Iterable<Indexed<T>> {
  let idx = 0;
  for (const t of iterable) {
    yield { idx: idx++, value: t };
  }
}

function* takeWhile<T>(iterable: Iterable<T>, condition: Predicate<T>): Iterable<T> {
  for (const t of iterable) {
    if (!condition(t)) {
      break;
    }

    yield t;
  }
}

async function* takeWhileAsync<T>(iterable: Iterable<T>, condition: AsyncPredicate<T>): AsyncIterable<T> {
  for (const t of iterable) {
    if (!(await condition(t))) {
      break;
    }

    yield t;
  }
}

function take<T>(iterable: Iterable<T>, n: number): Iterable<T> {
  let counter = 0;
  return takeWhile(iterable, () => counter++ < n);
}

function* skipWhile<T>(iterable: Iterable<T>, condition: Predicate<T>): Iterable<T> {
  let found = false;

  for (const t of iterable) {
    found = found || !condition(t);
    if (!found) {
      continue;
    }

    yield t;
  }
}

async function* skipWhileAsync<T>(iterable: Iterable<T>, condition: AsyncPredicate<T>): AsyncIterable<T> {
  let found = false;

  for (const t of iterable) {
    found = found || !(await condition(t));
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

function* map<T, R>(iterable: Iterable<T>, mapper: Mapper<T, R>): Iterable<R> {
  for (const t of iterable) {
    yield mapper(t);
  }
}

async function* mapAsync<T, R>(iterable: Iterable<T>, mapper: AsyncMapper<T, R>): AsyncIterable<R> {
  for (const t of iterable) {
    yield await mapper(t);
  }
}

function* filter<T>(iterable: Iterable<T>, predicate: Predicate<T>): Iterable<T> {
  for (const t of iterable) {
    if (predicate(t)) {
      yield t;
    }
  }
}

async function* filterAsync<T>(iterable: Iterable<T>, predicate: AsyncPredicate<T>): AsyncIterable<T> {
  for (const t of iterable) {
    if (await predicate(t)) {
      yield t;
    }
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
  mapper: Mapper<T, Iterable<R>> = t => (t as unknown) as Iterable<R>
): Iterable<R> {
  for (const t of iterable) {
    yield* mapper(t);
  }
}

async function* flattenAsync<T, R>(iterable: Iterable<T>, mapper: AsyncMapper<T, Iterable<R>>): AsyncIterable<R> {
  for (const t of iterable) {
    yield* await mapper(t);
  }
}

function* sort<T>(iterable: Iterable<T>, comparer?: Comparer<T>): Iterable<T> {
  yield* toArray(iterable).sort(comparer);
}

function* distinct<T, R>(iterable: Iterable<T>, mapper: Mapper<T, R> = identity as Mapper<T, R>): Iterable<T> {
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

async function* distinctAsync<T, R>(iterable: Iterable<T>, mapper: AsyncMapper<T, R>): AsyncIterable<T> {
  const set = new Set<R>();
  for (const t of iterable) {
    const value = await mapper(t);
    if (set.has(value)) {
      continue;
    }

    set.add(value);
    yield t;
  }
}

function* group<T, R>(iterable: Iterable<T>, mapper: Mapper<T, R>): Iterable<Group<T, R>> {
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

async function* groupAsync<T, R>(iterable: Iterable<T>, mapper: AsyncMapper<T, R>): AsyncIterable<Group<T, R>> {
  const groups = new Map<R, T[]>();
  for (const t of iterable) {
    const key = await mapper(t);
    const values = groups.get(key) || [];

    values.push(t);
    groups.set(key, values);
  }

  for (const [key, values] of groups.entries()) {
    yield { key, values };
  }
}

function count<T>(iterable: Iterable<T>, predicate: Predicate<T> = truth): number {
  let counter = 0;
  for (const t of iterable) {
    if (predicate(t)) {
      counter++;
    }
  }

  return counter;
}

async function countAsync<T>(iterable: Iterable<T>, predicate: AsyncPredicate<T>): Promise<number> {
  let counter = 0;
  for (const t of iterable) {
    if (await predicate(t)) {
      counter++;
    }
  }

  return counter;
}

function first<T>(iterable: Iterable<T>, predicate: Predicate<T> = truth): T | undefined {
  for (const t of iterable) {
    if (predicate(t)) {
      return t;
    }
  }

  return undefined;
}

async function firstAsync<T>(iterable: Iterable<T>, predicate: AsyncPredicate<T>): Promise<T | undefined> {
  for (const t of iterable) {
    if (await predicate(t)) {
      return t;
    }
  }

  return undefined;
}

function last<T>(iterable: Iterable<T>, predicate: Predicate<T> = truth): T | undefined {
  let result: T | undefined;

  for (const t of iterable) {
    if (predicate(t)) {
      result = t;
    }
  }

  return result;
}

async function lastAsync<T>(iterable: Iterable<T>, predicate: AsyncPredicate<T>): Promise<T | undefined> {
  let result: T | undefined;

  for (const t of iterable) {
    if (await predicate(t)) {
      result = t;
    }
  }

  return result;
}

function reduceAndMap<T, A, R>(iterable: Iterable<T>, reducer: Reducer<T, A>, initial: A, result: Mapper<A, R>): R {
  let accumulator: A = initial;
  for (const t of iterable) {
    accumulator = reducer(accumulator, t);
  }

  return result(accumulator);
}

async function reduceAndMapAsync<T, A, R>(
  iterable: Iterable<T>,
  reducer: AsyncReducer<T, A>,
  initial: A,
  result: AsyncMapper<A, R>
): Promise<R> {
  let accumulator: A = initial;
  for (const t of iterable) {
    accumulator = await reducer(accumulator, t);
  }

  return result(accumulator);
}

function reduce<T, R>(iterable: Iterable<T>, reducer: Reducer<T, R>, initial: R): R {
  return reduceAndMap(iterable, reducer, initial, identity);
}

function reduceAsync<T, R>(iterable: Iterable<T>, reducer: AsyncReducer<T, R>, initial: R): Promise<R> {
  return reduceAndMapAsync(iterable, reducer, initial, identityAsync);
}

function all<T>(iterable: Iterable<T>, predicate: Predicate<T>): boolean {
  for (const t of iterable) {
    if (!predicate(t)) {
      return false;
    }
  }

  return true;
}

async function allAsync<T>(iterable: Iterable<T>, predicate: AsyncPredicate<T>): Promise<boolean> {
  for (const t of iterable) {
    if (!(await predicate(t))) {
      return false;
    }
  }

  return true;
}

function any<T>(iterable: Iterable<T>, predicate: Predicate<T> = truth): boolean {
  return first(iterable, predicate) !== undefined;
}

async function anyAsync<T>(iterable: Iterable<T>, predicate: AsyncPredicate<T>): Promise<boolean> {
  return (await firstAsync(iterable, predicate)) !== undefined;
}

function contains<T>(iterable: Iterable<T>, item: T): boolean {
  return any(iterable, next => next === item);
}

function toArray<T>(iterable: Iterable<T>): T[] {
  const array: T[] = [];
  for (const t of iterable) {
    array.push(t);
  }

  return array;
}

function toObject<T, R>(
  iterable: Iterable<T>,
  keySelector: Mapper<T, string>,
  valueSelector: Mapper<T, any> = identity
): R {
  const res = {};
  for (const t of iterable) {
    res[keySelector(t)] = valueSelector(t);
  }

  return res as R;
}

async function toObjectAsync<T, R>(
  iterable: Iterable<T>,
  keySelector: AsyncMapper<T, string>,
  valueSelector: AsyncMapper<T, any>
): Promise<R> {
  const res = {};
  for (const t of iterable) {
    res[await keySelector(t)] = await valueSelector(t);
  }

  return res as R;
}

async function* toAsync<T>(iterable: Iterable<T>): AsyncIterable<T> {
  yield* iterable;
}

function forEach<T>(iterable: Iterable<T>, action: Action<T>): void {
  for (const t of iterable) {
    action(t);
  }
}

async function forEachAsync<T>(iterable: Iterable<T>, action: AsyncAction<T>): Promise<void> {
  for (const t of iterable) {
    await action(t);
  }
}

function join<T>(
  iterable: Iterable<T>,
  separator: string,
  mapper: Mapper<T, string> = identity as Mapper<T, string>
): string {
  return (
    reduce<T, string | undefined>(
      iterable,
      (current, next) => {
        const nextStr = mapper(next);
        return current ? `${current}${separator}${nextStr}` : nextStr;
      },
      undefined
    ) || ''
  );
}

async function joinAsync<T>(iterable: Iterable<T>, separator: string, mapper: AsyncMapper<T, string>): Promise<string> {
  return (
    (await reduceAsync<T, string | undefined>(
      iterable,
      async (current, next) => {
        const nextStr = await mapper(next);
        return current ? `${current}${separator}${nextStr}` : nextStr;
      },
      undefined
    )) || ''
  );
}

function sum<T>(iterable: Iterable<T>, mapper: Mapper<T, number> = identity as Mapper<T, number>): number {
  return reduce(iterable, (current, next) => current + mapper(next), 0);
}

function sumAsync<T>(iterable: Iterable<T>, mapper: AsyncMapper<T, number>): Promise<number> {
  return reduceAsync(iterable, async (current, next) => current + (await mapper(next)), 0);
}

function avg<T>(iterable: Iterable<T>, mapper: Mapper<T, number> = identity as Mapper<T, number>): number {
  return reduceAndMap(
    iterable,
    (current, next) => ({
      avg: (current.avg * current.count + mapper(next)) / (current.count + 1),
      count: current.count + 1,
    }),
    { avg: 0, count: 0 },
    acc => acc.avg
  );
}

function avgAsync<T>(iterable: Iterable<T>, mapper: AsyncMapper<T, number>): Promise<number> {
  return reduceAndMapAsync(
    iterable,
    async (current, next) => ({
      avg: (current.avg * current.count + (await mapper(next))) / (current.count + 1),
      count: current.count + 1,
    }),
    { avg: 0, count: 0 },
    async acc => acc.avg
  );
}

function top<T, R>(iterable: Iterable<T>, mapper: Mapper<T, R>, comparer: Comparer<R>): T | undefined {
  return reduceAndMap<T, { value: R | undefined; item: T | undefined; found: boolean }, T | undefined>(
    iterable,
    (current, next) => {
      const value = mapper(next);
      return !current.found || comparer(value, current.value!) > 0 ? { value, item: next, found: true } : current;
    },
    { value: undefined, item: undefined, found: false },
    acc => acc.item
  );
}

function topAsync<T, R>(
  iterable: Iterable<T>,
  mapper: AsyncMapper<T, R>,
  comparer: Comparer<R>
): Promise<T | undefined> {
  return reduceAndMapAsync<T, { value: R | undefined; item: T | undefined; found: boolean }, T | undefined>(
    iterable,
    async (current, next) => {
      const value = await mapper(next);
      return !current.found || comparer(value, current.value!) > 0 ? { value, item: next, found: true } : current;
    },
    { value: undefined, item: undefined, found: false },
    async acc => acc.item
  );
}

function min<T>(iterable: Iterable<T>, mapper: Mapper<T, number> = identity as Mapper<T, number>): T | undefined {
  return top<T, number>(iterable, mapper, (a, b) => (a < b ? 1 : 0));
}

function minAsync<T>(iterable: Iterable<T>, mapper: AsyncMapper<T, number>): Promise<T | undefined> {
  return topAsync<T, number>(iterable, mapper, (a, b) => (a < b ? 1 : 0));
}

function max<T>(iterable: Iterable<T>, mapper: Mapper<T, number> = identity as Mapper<T, number>): T | undefined {
  return top<T, number>(iterable, mapper, (a, b) => (a > b ? 1 : 0));
}

function maxAsync<T>(iterable: Iterable<T>, mapper: AsyncMapper<T, number>): Promise<T | undefined> {
  return topAsync<T, number>(iterable, mapper, (a, b) => (a > b ? 1 : 0));
}

export {
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
  toAsync,
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
};
