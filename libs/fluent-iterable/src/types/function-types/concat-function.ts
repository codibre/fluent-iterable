import { AnyIterable } from 'augmentative-iterable';
import { FluentAsyncIterable, FluentIterable } from '../base';

export interface ConcatFunction<T> {
  /**
   * Concatenates specified iterables to the iterable.<br>
   *   Example: `fluent(['anchor', 'almond']).concat(['bound', 'alpine'], ['book'])` yields *anchor*, *almond*, *bound*, *alpine* and *book*.
   * @param iterables The iterables to concatenate.
   * @returns The [[FluentIterable]] of the concatenated iterables.
   */
  (...iterables: Array<Iterable<T>>): FluentIterable<T>;
}
export interface AsyncConcatFunction<T> {
  /**
   * Concatenates specified async iterables to the iterable.<br>
   *   Example: `fluent(['anchor', 'almond']).concat(['bound', 'alpine'], someStream)` yields *anchor*, *almond*, *bound*, *alpine* and the elements of the stream.
   * @param iterables The async iterables to concatenate.
   * @returns The [[FluentAsyncIterable]] of the concatenated async iterables.
   */
  (...iterables: Array<AnyIterable<T>>): FluentAsyncIterable<T>;
}
