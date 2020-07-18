import { AsyncPredicate } from '../types';
import { AnyIterable } from '../types-internal';

export async function* takeWhileAsync<T>(
  this: AnyIterable<T>,
  condition: AsyncPredicate<T>,
): AsyncIterable<T> {
  if (Array.isArray(this)) {
    for (let i = 0; i < this.length && (await condition(this[i])); i++) {
      yield this[i];
    }
  } else {
    for await (const t of this) {
      if (!(await condition(t))) {
        break;
      }

      yield t;
    }
  }
}
