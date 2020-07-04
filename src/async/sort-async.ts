import { AnyIterable } from '../common';
import { Comparer } from '../types';
import { toArrayAsync } from './to-array-async';

export async function* sortAsync<T>(
  iterable: AnyIterable<T>,
  comparer?: Comparer<T>,
): AsyncIterable<T> {
  yield* (await toArrayAsync(iterable)).sort(comparer);
}
