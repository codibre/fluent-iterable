import { Indexed } from '../base';
import { FluentAsyncIterable, FluentIterable } from '../base';

export interface WithIndexFunction<T> {
  /**
   * Maps all elements of the iterable to an instance of [[Indexed]], an index-value pair constructed of the original element in the iterable and it's index (starting from 0 for the first element in the iterable).
   * @returns A [[FluentAsyncIterable]] of [[Indexed]].
   */
  (): FluentIterable<Indexed<T>>;
}
export interface AsyncWithIndexFunction<T> {
  /**
   * Maps all elements of the iterable to an instance of [[Indexed]], an index-value pair constructed of the original element in the iterable and it's index (starting from 0 for the first element in the iterable).
   * @returns A [[FluentAsyncIterable]] of [[Indexed]].
   */
  (): FluentAsyncIterable<Indexed<T>>;
}
