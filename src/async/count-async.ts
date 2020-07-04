import { AnyIterable } from '../common/any-iterable';
import { AsyncPredicate } from '../types';
import { truth } from '../utils';

export async function countAsync<T>(
  iterable: AnyIterable<T>,
  predicate: AsyncPredicate<T> = truth as any,
): Promise<number> {
  let counter = 0;
  for await (const t of iterable) {
    if (await predicate(t)) {
      counter++;
    }
  }

  return counter;
}
