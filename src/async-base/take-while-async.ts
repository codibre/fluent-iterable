import { AsyncPredicate } from '../types';
import { AnyIterable } from '../types-internal';

export async function* takeWhileAsync<T>(
  this: AnyIterable<T>,
  condition: AsyncPredicate<T>,
): AsyncIterable<T> {
  for await (const t of this) {
    if (!(await condition(t))) {
      break;
    }

    yield t;
  }
}
