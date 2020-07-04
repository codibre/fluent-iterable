import { AnyIterable } from '../common/any-iterable';
import { AsyncPredicate } from '../types';

export async function allAsync<T>(
  iterable: AnyIterable<T>,
  predicate: AsyncPredicate<T>,
): Promise<boolean> {
  for await (const t of iterable) {
    if (!(await predicate(t))) {
      return false;
    }
  }

  return true;
}
