import { FluentAsyncIterable, FluentIterable } from '../base';

export interface AppendFunction<T> {
  /**
   * Appends a value to the end of the iterable.
   * @param item The item to be appended to the iterable.
   * @returns The [[FluentAsyncIterable]] appended with the element.
   */
  (item: T): FluentIterable<T>;
}

export interface FluentAsyncAppendFunction<T> {
  /**
   * Appends a value to the end of the iterable.
   * @param item The item to be appended to the iterable.
   * @returns The [[FluentAsyncIterable]] appended with the element.
   */
  (item: T): FluentAsyncIterable<T>;
}
