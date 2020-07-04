import { Predicate } from '../types';
import { reduce } from './reduce';
import { getLast } from '../common/get-last';

export const last: <T>(
  iterable: Iterable<T>,
  predicate?: Predicate<T>,
) => T | undefined = getLast(reduce, (predicate) => (current, next) =>
  predicate(next) ? next : current,
);
