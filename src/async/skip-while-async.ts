import { AsyncPredicate } from '../types';
import { AnyIterable } from '../common/any-iterable';

export async function* skipWhileAsync<T>(
  iterable: AnyIterable<T>,
  condition: AsyncPredicate<T>,
): AsyncIterable<T> {
  let found = false;

  for await (const t of iterable) {
    found = found || !(await condition(t));
    if (!found) {
      continue;
    }

    yield t;
  }
}
