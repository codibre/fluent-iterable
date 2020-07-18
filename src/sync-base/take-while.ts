import { Predicate } from '../types';

export function* takeWhile<T>(
  this: Iterable<T>,
  condition: Predicate<T>,
): Iterable<T> {
  if (Array.isArray(this)) {
    for (let i = 0; i < this.length && condition(this[i]); i++) {
      yield this[i];
    }
  } else {
    for (const t of this) {
      if (!condition(t)) {
        break;
      }

      yield t;
    }
  }
}
