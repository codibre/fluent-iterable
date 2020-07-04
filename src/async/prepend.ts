import { AnyIterable } from '../common';

export async function* prependAsync<T>(
  iterable: AnyIterable<T>,
  item: T,
): AsyncIterable<T> {
  yield item;
  yield* iterable;
}
