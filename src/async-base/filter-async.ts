import { AsyncPredicate } from '../types';
import { AnyIterable } from '../types-internal';

export async function* filterAsync<T>(
  this: AnyIterable<T>,
  predicate: AsyncPredicate<T>,
): AsyncIterable<T> {
  for await (const t of this) {
    if (await predicate(t)) {
      yield t;
    }
  }
}
