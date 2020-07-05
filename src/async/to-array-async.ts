import { AnyIterable } from '../types-internal';

export async function toArrayAsync<T>(iterable: AnyIterable<T>): Promise<T[]> {
  const array: T[] = [];
  for await (const t of iterable) {
    array.push(t);
  }

  return array;
}
