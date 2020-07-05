import fluent from '../fluent';
import { Group, FluentGroup, Predicate, AsyncPredicate } from '../types';

/** @internal */
type ResolverType = (a: any, b: (c: any) => any) => any;
/** @internal */
const resolver = <T, R>(a: T, b: (c: T) => R) => b(a);
/** @internal */
const resolverAsync = async <T, R>(a: PromiseLike<T>, b: (c: T) => R) =>
  b(await a);
/** @internal */
async function* iterateAsync(a: any) {
  yield* await a;
}
async function* iterateAllAsync(a: any) {
  for await (const it of a) {
    yield* it;
  }
}
function* iterate(a: any) {
  yield* a;
}
function* iterateAll(a: any) {
  for (const it of a) {
    yield* it;
  }
}
type BinaryComparer = (a: any, b: any) => boolean;
const equals = (a: any, b: any) => a === b;
const greater = (a: any, b: any) => a > b;
const lesser = (a: any, b: any) => a < b;
/** @internal */
// eslint-disable-next-line @typescript-eslint/no-empty-function
function* empty(): Iterable<undefined> {}
// eslint-disable-next-line @typescript-eslint/no-empty-function
async function* emptyAsync(): AsyncIterable<undefined> {}
/** @internal */
const identity = <T>(t: T): T => t;
/** @internal */
const identityAsync = async <T>(t: T): Promise<T> => t;
/** @internal */
const truth = (): boolean => true;
/** @internal */
const falsity = (): boolean => false;
/** @internal */
const negation = <T>(predicate: Predicate<T>): Predicate<T> => (item: T) =>
  !predicate(item);
const asyncNegation = <T>(
  predicate: AsyncPredicate<T>,
): AsyncPredicate<T> => async (item: T) => !(await predicate(item));
/** @internal */
const truthAsync = async (): Promise<boolean> => true;
/** @internal */
const fluentGroup = <T, R>(grp: Group<T, R>): FluentGroup<T, R> => ({
  ...grp,
  values: fluent(grp.values),
});

/**
 * Generates a `count` long sequential integer interval starting from `fromInclusive`.
 *
 * * The interval starts at zero if `fromInclusive` is not specified.
 * * The interval ends in infinity if `count` is not specified.
 *
 * Examples:
 *
 * 1. `interval(5, 3)` generates an interval of `[5, 6, 7]`
 * 2. `interval(5)` generates an interval of `[5, 6, 7, ...]`
 * 3. `interval()` generates an interval of `[0, 1, 2, ...]`
 * 4. `fluent(interval(1)).take(10).forEach(console.log)` prints all numbers between 1 and 10 using [[fluent]].
 * @param fromInclusive Specifies the start of the interval. Defaults to zero.
 * @param count Specifies the length of the interval. The interval provides numbers indefinitely if omitted.
 * @returns The iterable of numbers in the interval.
 */
function* interval(fromInclusive?: number, count?: number): Iterable<number> {
  const from = fromInclusive || 0;
  for (let offset = 0; count ? offset < count : true; ++offset) {
    yield from + offset;
  }
}

export {
  empty,
  emptyAsync,
  identity,
  identityAsync,
  truth,
  falsity,
  negation,
  asyncNegation,
  truthAsync,
  fluentGroup,
  interval,
  resolver,
  resolverAsync,
  ResolverType,
  BinaryComparer,
  equals,
  greater,
  lesser,
  iterateAsync,
  iterateAllAsync,
  iterate,
  iterateAll,
};
