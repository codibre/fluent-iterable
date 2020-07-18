import { Mapper } from '../types';

export function* map<T, R>(
  this: Iterable<T>,
  mapper: Mapper<T, R>,
): Iterable<R> {
  if (Array.isArray(this)) {
    for (let i = 0; i < this.length; i++) {
      yield mapper(this[i]);
    }
  } else {
    for (const t of this) {
      yield mapper(t);
    }
  }
}
