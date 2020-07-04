import { AsyncMapper } from '../types';
import { AnyIterable } from '../common/any-iterable';

export async function* mapAsync<T, R>(
  iterable: AnyIterable<T>,
  mapper: AsyncMapper<T, R>,
): AsyncIterable<R> {
  for await (const t of iterable) {
    yield await mapper(t);
  }
}
