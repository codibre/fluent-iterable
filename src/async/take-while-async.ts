import { Predicate, AsyncPredicate } from '../types';
import { AnyIterable } from '../common/any-iterable';

export async function* takeWhileAsync<T>(
  iterable: AnyIterable<T>,
  condition: AsyncPredicate<T>,
): AsyncIterable<T> {
  for await (const t of iterable) {
    if (!(await condition(t))) {
      break;
    }

    yield t;
  }
}
