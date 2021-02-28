import { FluentAsyncIterable, FluentIterable } from '../base';

export interface AppendFunction<T> {
  /**
   * Appends a value to the end of the iterable.
   * @param items The items to be appended to the iterable.
   * @returns The [[FluentAsyncIterable]] appended with the element.
   */
  (...items: T[]): FluentIterable<T>;
}

export interface AsyncAppendFunction<T> {
  /**
   * Appends a value to the end of the iterable.
   * @param items The item to be appended to the iterable.
   * @returns The [[FluentAsyncIterable]] appended with the element.
   */
  (...items: T[]): FluentAsyncIterable<T>;
}
