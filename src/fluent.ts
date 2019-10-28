import fluentAsync, { FluentAsyncIterable } from './fluentAsync';
import { identity, truth } from './utils';
import {
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
  toAsync,
  forEach,
  forEachAsync,
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
} from './fluentFunctions';
import {
  Action,
  AsyncAction,
  Comparer,
  Group,
  Mapper,
  AsyncMapper,
  Predicate,
  AsyncPredicate,
  Reducer,
  AsyncReducer,
} from './types';

interface FluentIterable<T> extends Iterable<T> {
  takeWhile(condition: Predicate<T>): FluentIterable<T>;
  takeWhileAsync(condition: AsyncPredicate<T>): FluentAsyncIterable<T>;
  take(n: number): FluentIterable<T>;
  skipWhile(condition: Predicate<T>): FluentIterable<T>;
  skipWhileAsync(condition: AsyncPredicate<T>): FluentAsyncIterable<T>;
  skip(n: number): FluentIterable<T>;
  map<R>(mapper: Mapper<T, R>): FluentIterable<R>;
  mapAsync<R>(mapper: AsyncMapper<T, R>): FluentAsyncIterable<R>;
  filter(predicate: Predicate<T>): FluentIterable<T>;
  filterAsync(predicate: AsyncPredicate<T>): FluentAsyncIterable<T>;
  append(item: T): FluentIterable<T>;
  prepend(item: T): FluentIterable<T>;
  concat(...iterables: Array<Iterable<T>>): FluentIterable<T>;
  repeat(n: number): FluentIterable<T>;
  flatten<R>(mapper?: Mapper<T, Iterable<R>>): FluentIterable<R>;
  flattenAsync<R>(mapper: AsyncMapper<T, Iterable<R>>): FluentAsyncIterable<R>;
  sort(comparer?: Comparer<T>): FluentIterable<T>;
  distinct<R>(mapper?: Mapper<T, R>): FluentIterable<T>;
  distinctAsync<R>(mapper: AsyncMapper<T, R>): FluentAsyncIterable<T>;
  group<R>(mapper: Mapper<T, R>): FluentIterable<Group<T, R>>;
  groupAsync<R>(mapper: AsyncMapper<T, R>): FluentAsyncIterable<Group<T, R>>;
  count(predicate?: Predicate<T>): number;
  countAsync(predicate: AsyncPredicate<T>): Promise<number>;
  first(predicate?: Predicate<T>): T | undefined;
  firstAsync(predicate: AsyncPredicate<T>): Promise<T | undefined>;
  last(predicate?: Predicate<T>): T | undefined;
  lastAsync(predicate: AsyncPredicate<T>): Promise<T | undefined>;
  reduceAndMap<A, R>(reducer: Reducer<T, A>, initial: A, result: Mapper<A, R>): R;
  reduceAndMapAsync<A, R>(reducer: AsyncReducer<T, A>, initial: A, result: AsyncMapper<A, R>): Promise<R>;
  reduce<R>(reducer: Reducer<T, R>, initial: R): R;
  reduceAsync<R>(reducer: AsyncReducer<T, R>, initial: R): Promise<R>;
  all(predicate: Predicate<T>): boolean;
  allAsync(predicate: AsyncPredicate<T>): Promise<boolean>;
  any(predicate?: Predicate<T>): boolean;
  anyAsync(predicate: AsyncPredicate<T>): Promise<boolean>;
  contains(item: T): boolean;
  toArray(): T[];
  toAsync(): FluentAsyncIterable<T>;
  forEach(action: Action<T>): void;
  forEachAsync(action: AsyncAction<T>): Promise<void>;
  sum(mapper?: Mapper<T, number>): number;
  sumAsync(mapper: AsyncMapper<T, number>): Promise<number>;
  avg(mapper?: Mapper<T, number>): number;
  avgAsync(mapper: AsyncMapper<T, number>): Promise<number>;
  top<R>(mapper: Mapper<T, R>, comparer: Comparer<R>): T | undefined;
  topAsync<R>(mapper: AsyncMapper<T, R>, comparer: Comparer<R>): Promise<T | undefined>;
  min(mapper?: Mapper<T, number>): T | undefined;
  minAsync(mapper: AsyncMapper<T, number>): Promise<T | undefined>;
  max(mapper?: Mapper<T, number>): T | undefined;
  maxAsync(mapper: AsyncMapper<T, number>): Promise<T | undefined>;
}

function fluent<T>(iterable: Iterable<T>): FluentIterable<T> {
  return {
    takeWhile: predicate => fluent(takeWhile(iterable, predicate)),
    takeWhileAsync: predicate => fluentAsync(takeWhileAsync(iterable, predicate)),
    take: n => fluent(take(iterable, n)),
    skipWhile: predicate => fluent(skipWhile(iterable, predicate)),
    skipWhileAsync: predicate => fluentAsync(skipWhileAsync(iterable, predicate)),
    skip: n => fluent(skip(iterable, n)),
    map: mapper => fluent(map(iterable, mapper)),
    mapAsync: mapper => fluentAsync(mapAsync(iterable, mapper)),
    filter: predicate => fluent(filter(iterable, predicate)),
    filterAsync: predicate => fluentAsync(filterAsync(iterable, predicate)),
    append: item => fluent(append(iterable, item)),
    prepend: item => fluent(prepend(iterable, item)),
    concat: (...iterables) => fluent(concat(iterable, ...iterables)),
    repeat: n => fluent(repeat(iterable, n)),
    flatten: <R>(mapper: Mapper<T, Iterable<R>> = identity as Mapper<T, Iterable<R>>) =>
      fluent(flatten(iterable, mapper)),
    flattenAsync: mapper => fluentAsync(flattenAsync(iterable, mapper)),
    sort: (comparer?) => fluent(sort(iterable, comparer)),
    distinct: <R>(mapper: Mapper<T, R> = identity as Mapper<T, R>) => fluent(distinct(iterable, mapper)),
    distinctAsync: mapper => fluentAsync(distinctAsync(iterable, mapper)),
    group: <R>(mapper: Mapper<T, R>) => fluent(group(iterable, mapper)),
    groupAsync: mapper => fluentAsync(groupAsync(iterable, mapper)),
    count: (predicate = truth) => count(iterable, predicate),
    countAsync: predicate => countAsync(iterable, predicate),
    first: (predicate = truth) => first(iterable, predicate),
    firstAsync: predicate => firstAsync(iterable, predicate),
    last: (predicate = truth) => last(iterable, predicate),
    lastAsync: predicate => lastAsync(iterable, predicate),
    reduceAndMap: (reducer, initial, result) => reduceAndMap(iterable, reducer, initial, result),
    reduceAndMapAsync: (reducer, initial, result) => reduceAndMapAsync(iterable, reducer, initial, result),
    reduce: (reducer, initial) => reduce(iterable, reducer, initial),
    reduceAsync: (reducer, initial) => reduceAsync(iterable, reducer, initial),
    all: predicate => all(iterable, predicate),
    allAsync: predicate => allAsync(iterable, predicate),
    any: (predicate = truth) => any(iterable, predicate),
    anyAsync: predicate => anyAsync(iterable, predicate),
    contains: item => contains(iterable, item),
    toArray: () => toArray(iterable),
    toAsync: () => fluentAsync(toAsync(iterable)),
    forEach: action => forEach(iterable, action),
    forEachAsync: action => forEachAsync(iterable, action),
    sum: (mapper: Mapper<T, number> = identity as Mapper<T, number>) => sum(iterable, mapper),
    sumAsync: mapper => sumAsync(iterable, mapper),
    avg: (mapper: Mapper<T, number> = identity as Mapper<T, number>) => avg(iterable, mapper),
    avgAsync: mapper => avgAsync(iterable, mapper),
    top: <R>(mapper: Mapper<T, R>, comparer: Comparer<R>) => top(iterable, mapper, comparer),
    topAsync: (mapper, comparer) => topAsync(iterable, mapper, comparer),
    min: (mapper: Mapper<T, number> = identity as Mapper<T, number>) => min(iterable, mapper),
    minAsync: mapper => minAsync(iterable, mapper),
    max: (mapper: Mapper<T, number> = identity as Mapper<T, number>) => max(iterable, mapper),
    maxAsync: mapper => maxAsync(iterable, mapper),
    [Symbol.iterator]: () => iterable[Symbol.iterator](),
  };
}

export default fluent;
export { FluentIterable };
