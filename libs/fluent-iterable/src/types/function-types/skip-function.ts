import { FluentAsyncIterable, FluentIterable } from '../base';

export interface SkipFunction<T> {
  /**
   * Bypasses a specified number of elements in the iterable and then returns the remaining elements.
   * @param n The number of elements to skip.
   * @returns A [[FluentAsyncIterable]] of all the elements after the first `n` elements.
   */
  (n: number): FluentIterable<T>;
}

export interface AsyncSkipFunction<T> {
  /**
   * Bypasses a specified number of elements in the iterable and then returns the remaining elements.
   * @param n The number of elements to skip.
   * @returns A [[FluentAsyncIterable]] of all the elements after the first `n` elements.
   */
  (n: number): FluentAsyncIterable<T>;
}
