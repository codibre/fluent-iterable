import { AsyncMapper } from '../types';
import { identity } from '../utils';
import { AnyIterable } from '../common/any-iterable';

export async function* distinctAsync<T, R>(
  iterable: AnyIterable<T>,
  mapper: AsyncMapper<T, R> = identity as AsyncMapper<T, R>,
): AsyncIterable<T> {
  const set = new Set<R>();
  for await (const t of iterable) {
    const value = await mapper(t);
    if (set.has(value)) {
      continue;
    }

    set.add(value);
    yield t;
  }
}
