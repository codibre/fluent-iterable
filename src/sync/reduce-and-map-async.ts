import { AsyncReducer, AsyncMapper } from '../types';

export async function reduceAndMapAsync<T, A, R>(
  iterable: Iterable<T>,
  reducer: AsyncReducer<T, A>,
  initial: A,
  result: AsyncMapper<A, R>,
): Promise<R> {
  let accumulator: A = initial;
  for (const t of iterable) {
    accumulator = await reducer(accumulator, t);
  }

  return result(accumulator);
}
