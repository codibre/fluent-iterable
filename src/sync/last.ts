import { reduce } from './reduce';
import { getLast } from '../common/get-last';

export const last = getLast(reduce, (predicate) => (current, next) =>
  predicate(next) ? next : current,
);
