import { AsyncPredicate } from '../types';
import { truth } from '../utils';
import { AnyIterable } from '../common/any-iterable';

export async function lastAsync<T>(
  iterable: AnyIterable<T>,
  predicate: AsyncPredicate<T> = truth as any,
): Promise<T | undefined> {
  let result: T | undefined;

  for await (const t of iterable) {
    if (await predicate(t)) {
      result = t;
    }
  }

  return result;
}
