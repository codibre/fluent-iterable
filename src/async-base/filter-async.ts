import { AsyncPredicate } from '../types';
import { AnyIterable } from '../types-internal';

export async function* filterAsync<T>(
  this: AnyIterable<T>,
  predicate: AsyncPredicate<T>,
): AsyncIterable<T> {
  if (Array.isArray(this)) {
    for (let i = 0; i < this.length; i++) {
      if (await predicate(this[i])) {
        yield this[i];
      }
    }
  } else {
    for await (const t of this) {
      if (await predicate(t)) {
        yield t;
      }
    }
  }
}
