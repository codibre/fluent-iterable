import { AsyncMapper } from '../types';
import { identity } from '../utils';

export async function toObjectAsync<T, V, R extends { [key: string]: V }>(
  iterable: AsyncIterable<T>,
  keySelector: AsyncMapper<T, keyof R>,
  valueSelector: AsyncMapper<T, V> = identity as any,
): Promise<R> {
  const res: { [key: string]: V } = {};
  for await (const t of iterable) {
    res[(await keySelector(t)) as string] = await valueSelector(t);
  }

  return res as any;
}
