import { Mapper } from '.';
import { identity } from './utils';

export function toObject<T, V, R extends { [key: string]: V }>(
  iterable: Iterable<T>,
  keySelector: Mapper<T, keyof R>,
  valueSelector: Mapper<T, V> = identity as any,
): R {
  const res: { [key: string]: V } = {};
  for (const t of iterable) {
    res[keySelector(t) as string] = valueSelector(t) as any;
  }

  return res as R;
}
