import { Reducer, Mapper } from '../types';

export function reduceAndMap<T, A, R>(
  iterable: Iterable<T>,
  reducer: Reducer<T, A>,
  initial: A,
  result: Mapper<A, R>,
): R {
  let accumulator: A = initial;
  for (const t of iterable) {
    accumulator = reducer(accumulator, t);
  }

  return result(accumulator);
}
