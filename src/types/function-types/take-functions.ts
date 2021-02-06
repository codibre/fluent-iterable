import { FluentAsyncIterable, FluentIterable } from '../base';

export interface TakeFunction<T> {
  /**
   * Returns a specified number of contiguous elements from the start of the iterable.
   * @param n The number of elements to take.
   * @returns A [[FluentAsyncIterable]] of the first `n` elements.
   */
  (n: number): FluentIterable<T>;
}

export interface AsyncTakeFunction<T> {
  /**
   * Returns a specified number of contiguous elements from the start of the iterable.
   * @param n The number of elements to take.
   * @returns A [[FluentAsyncIterable]] of the first `n` elements.
   */
  (n: number): FluentAsyncIterable<T>;
}
