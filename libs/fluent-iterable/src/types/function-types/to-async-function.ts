import { FluentAsyncIterable } from '../base';

export interface ToAsyncFunction<T> {
  /**
   * Translates the iterable into a [[FluentAsyncIterable]].
   * @returns The [[FluentAsyncIterable]] instance.
   */
  (): FluentAsyncIterable<T>;
}
