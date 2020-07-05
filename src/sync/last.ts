import { reduce } from './reduce';
import { getLast } from '../recipes/get-last';

export const last = getLast(reduce, (predicate) => (current, next) =>
  predicate(next) ? next : current,
);
