import { AsyncPredicate } from '../types';
import { truth } from '../utils';
import { AnyIterable } from '../common/any-iterable';

export async function firstAsync<T>(
  iterable: AnyIterable<T>,
  predicate: AsyncPredicate<T> = truth as any,
): Promise<T | undefined> {
  for await (const t of iterable) {
    if (await predicate(t)) {
      return t;
    }
  }

  return undefined;
}
