import { Mapper, Group } from '../types';

export function* group<T, R>(
  iterable: Iterable<T>,
  mapper: Mapper<T, R>,
): Iterable<Group<T, R>> {
  const groups = new Map<R, T[]>();
  for (const t of iterable) {
    const key = mapper(t);
    const values = groups.get(key) || [];

    values.push(t);
    groups.set(key, values);
  }

  for (const [key, values] of groups.entries()) {
    yield { key, values };
  }
}
