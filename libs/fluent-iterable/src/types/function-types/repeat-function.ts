import { FluentAsyncIterable, FluentIterable } from '../base';

export interface RepeatFunction<T> {
  /**
   * Repeats the elements of the iterable a specified amount of times.
   * @param n The amount of times the iterable is to be repeated.
   * @returns The [[FluentAsyncIterable]] of the repeated iterable.
   */
  (n: number): FluentIterable<T>;
}

export interface AsyncRepeatFunction<T> {
  /**
   * Repeats the elements of the iterable a specified amount of times.
   * @param n The amount of times the iterable is to be repeated.
   * @returns The [[FluentAsyncIterable]] of the repeated iterable.
   */
  (n: number): FluentAsyncIterable<T>;
}
