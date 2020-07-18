import { AnyIterable } from '../types-internal';

export async function toArrayAsync<T>(this: AnyIterable<T>) {
  if (Array.isArray(this)) {
    return Array.from(this);
  }
  const result: T[] = [];
  for await (const item of this) {
    result.push(item);
  }

  return result;
}
