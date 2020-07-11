import { AsyncMapper } from '../types';
import { AnyIterable } from '../types-internal';

export async function* mapAsync<T, R>(
  this: AnyIterable<T>,
  mapper: AsyncMapper<T, R>,
): AsyncIterable<R> {
  for await (const t of this) {
    yield await mapper(t);
  }
}
