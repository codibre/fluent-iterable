import { AsyncPredicate } from '../types';
import { AnyIterable } from '../common/any-iterable';
import { getLast } from '../common/get-last';
import { reduceAsync } from './reduce-async';

export const lastAsync: <T>(
  iterable: AnyIterable<T>,
  predicate?: AsyncPredicate<T>,
) => Promise<T | undefined> = getLast(
  reduceAsync,
  (predicate) => async (current, next) =>
    (await predicate(next)) ? next : current,
);
