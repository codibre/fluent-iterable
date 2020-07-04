import { Mapper } from '../types';
import { identity } from '../utils';

export function* distinct<T, R>(
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
