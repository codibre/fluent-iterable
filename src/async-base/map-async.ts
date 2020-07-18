import { AsyncMapper } from '../types';
import { AnyIterable } from '../types-internal';

export async function* mapAsync<T, R>(
  this: AnyIterable<T>,
  mapper: AsyncMapper<T, R>,
): AsyncIterable<R> {
  if (Array.isArray(this)) {
    for (let i = 0; i < this.length; i++) {
      yield await mapper(this[i]);
    }
  } else {
    for await (const t of this) {
      yield await mapper(t);
    }
  }
}
