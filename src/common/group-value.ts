import { Mapper } from '../types';

export function groupValue<T, R>(
  mapper: Mapper<T, R>,
  t: T,
  groups: Map<R, T[]>,
) {
  const key = mapper(t);
  const values = groups.get(key) || [];

  values.push(t);
  groups.set(key, values);
}
