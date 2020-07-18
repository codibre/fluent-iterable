import { Predicate } from '../types';

export function* filter<T>(
  this: Iterable<T>,
  predicate: Predicate<T>,
): Iterable<T> {
  if (Array.isArray(this)) {
    for (let i = 0; i < this.length; i++) {
      if (predicate(this[i])) {
        yield this[i];
      }
    }
  } else {
    for (const t of this) {
      if (predicate(t)) {
        yield t;
      }
    }
  }
}
