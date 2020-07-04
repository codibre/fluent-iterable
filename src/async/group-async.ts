import { AsyncMapper, Group } from '../types';
import { AnyIterable } from '../common/any-iterable';

export async function* groupAsync<T, R>(
  iterable: AnyIterable<T>,
  mapper: AsyncMapper<T, R>,
): AsyncIterable<Group<T, R>> {
  const groups = new Map<R, T[]>();
  for await (const t of iterable) {
    const key = await mapper(t);
    const values = groups.get(key) || [];

    values.push(t);
    groups.set(key, values);
  }

  for (const [key, values] of groups.entries()) {
    yield { key, values };
  }
}
