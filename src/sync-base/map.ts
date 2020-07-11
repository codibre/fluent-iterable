import { Mapper } from '../types';

export function* map<T, R>(
  this: Iterable<T>,
  mapper: Mapper<T, R>,
): Iterable<R> {
  for (const t of this) {
    yield mapper(t);
  }
}
