import { AsyncReducer, AsyncMapper } from '../types';
import { SuperIterable } from './super-iterable';
export interface ReduceAndMapAsync<
  T,
  A,
  R,
  It extends Iterable<T> | SuperIterable<T>
> {
  (
    iterable: It,
    reducer: AsyncReducer<T, A>,
    initial: A,
    result: AsyncMapper<A, R>,
  ): Promise<R>;
}
