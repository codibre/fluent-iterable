import { AsyncMapper } from '../types';
import { AnyIterable } from '../common/any-iterable';

export async function* flattenAsync<T, R>(
  iterable: AnyIterable<T>,
  mapper: AsyncMapper<T, Iterable<R>> = (t) => (t as unknown) as Iterable<R>,
): AsyncIterable<R> {
  for await (const t of iterable) {
    yield* await mapper(t);
  }
}
