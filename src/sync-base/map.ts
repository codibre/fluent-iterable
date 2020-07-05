import { Mapper } from '../types';

export function* map<T, R>(
  iterable: Iterable<T>,
  mapper: Mapper<T, R>,
): Iterable<R> {
  for (const t of iterable) {
    yield mapper(t);
  }
}
