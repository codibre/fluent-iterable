import { Mapper } from '../types';

export function* flatten<T, R>(
  iterable: Iterable<T>,
  mapper: Mapper<T, Iterable<R>> = (t) => (t as unknown) as Iterable<R>,
): Iterable<R> {
  for (const t of iterable) {
    yield* mapper(t);
  }
}
