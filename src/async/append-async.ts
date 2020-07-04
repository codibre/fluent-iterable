import { AnyIterable } from '../common';

export async function* appendAsync<T>(
  iterable: AnyIterable<T>,
  item: T,
): AsyncIterable<T> {
  yield* iterable;
  yield item;
}
