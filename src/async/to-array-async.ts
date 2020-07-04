import { AnyIterable } from '../common';

export async function toArrayAsync<T>(iterable: AnyIterable<T>): Promise<T[]> {
  const array: T[] = [];
  for await (const t of iterable) {
    array.push(t);
  }

  return array;
}
