import { FluentAsyncIterable, FluentIterable } from '../base';

export interface PrependFunction<T> {
  /**
   * Adds a value to the beginning of the iterable.
   * @param items The items to be prepended to the iterable.
   * @returns The [[FluentAsyncIterable]] prepended with the element.
   */
  (...items: T[]): FluentIterable<T>;
}

export interface AsyncPrependFunction<T> {
  /**
   * Adds a value to the beginning of the iterable.
   * @param items The items to be prepended to the iterable.
   * @returns The [[FluentAsyncIterable]] prepended with the element.
   */
  (...items: T[]): FluentAsyncIterable<T>;
}
