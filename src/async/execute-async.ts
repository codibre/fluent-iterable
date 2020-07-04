import { AsyncAction } from '../types';
import { AnyIterable } from '../common/any-iterable';

export async function* executeAsync<T>(
  iterable: AnyIterable<T>,
  action: AsyncAction<T>,
): AsyncIterable<T> {
  for await (const t of iterable) {
    await action(t);
    yield t;
  }
}
