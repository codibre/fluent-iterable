import { AnyIterable, Mapper } from 'augmentative-iterable';
import { FluentAsyncIterable, FluentIterable } from '../base';

export interface CombineFunction<T> {
  /**
   * Join the iterable with another one, returning a new iterable with a NxN combination
   * @param iterable The iterable to be combined
   */
  <U>(iterable: Iterable<U>): FluentIterable<[T, U]>;

  /**
   * Join the iterable with another one, returning a new iterable with the inner matching combinations
   * @param iterable The right iterable to be combined
   * @param keyA A mapper that returns the key map value from the left iterable
   * @param keyB A mapper that returns the key map value from the right iterable
   */
  <U, K>(
    iterable: Iterable<U>,
    keyA: Mapper<T, K>,
    keyB: Mapper<U, K>,
  ): FluentIterable<[T, U]>;

  /**
   * Join the iterable with another one, returning a new iterable with the inner matching combinations
   * @param iterable The right iterable to be combined
   * @param keyA A property name with value will be used as for comparison with the key of the second iterable
   * @param keyB A mapper that returns the key map value from the right iterable
   */
  <U, K>(
    iterable: Iterable<U>,
    keyA: keyof T,
    keyB: Mapper<U, K>,
  ): FluentIterable<[T, U]>;

  /**
   * Join the iterable with another one, returning a new iterable with the inner matching combinations
   * @param iterable The right iterable to be combined
   * @param keyA A mapper that returns the key map value from the left iterable
   * @param keyB A property name with value will be used as for comparison with the key of the first iterable
   */
  <U, K>(
    iterable: Iterable<U>,
    keyA: Mapper<T, K>,
    keyB: keyof U,
  ): FluentIterable<[T, U]>;

  /**
   * Join the iterable with another one, returning a new iterable with the inner matching combinations
   * @param iterable The right iterable to be combined
   * @param keyA A property name with value will be used as for comparison with the key of the second iterable
   * @param keyB A property name with value will be used as for comparison with the key of the first iterable
   */
  <U>(iterable: Iterable<U>, keyA: keyof T, keyB: keyof U): FluentIterable<
    [T, U]
  >;
}

export interface AsyncCombineFunction<T> {
  /**
   * Join the iterable with an async one, returning a new async iterable with a NxN combination
   * @param iterable The iterable to be combined
   */
  <U>(iterable: AnyIterable<U>): FluentAsyncIterable<[T, U]>;

  /**
   * Join the iterable with another one, returning a new async iterable with the inner matching combinations
   * @param iterable The right iterable to be combined
   * @param keyA A mapper that returns the key map value from the left iterable
   * @param keyB A mapper that returns the key map value from the right iterable
   */
  <U, K>(
    iterable: AnyIterable<U>,
    keyA: Mapper<T, K>,
    keyB: Mapper<U, K>,
  ): FluentAsyncIterable<[T, U]>;

  /**
   * Join the iterable with another one, returning a new async iterable with the inner matching combinations
   * @param iterable The right iterable to be combined
   * @param keyA A property name with value will be used as for comparison with the key of the second iterable
   * @param keyB A mapper that returns the key map value from the right iterable
   */
  <U, K>(
    iterable: AnyIterable<U>,
    keyA: keyof T,
    keyB: Mapper<U, K>,
  ): FluentAsyncIterable<[T, U]>;

  /**
   * Join the iterable with another one, returning a new async iterable with the inner matching combinations
   * @param iterable The right iterable to be combined
   * @param keyA A mapper that returns the key map value from the left iterable
   * @param keyB A property name with value will be used as for comparison with the key of the first iterable
   */
  <U, K>(
    iterable: AnyIterable<U>,
    keyA: Mapper<T, K>,
    keyB: keyof U,
  ): FluentAsyncIterable<[T, U]>;

  /**
   * Join the iterable with another one, returning a new async iterable with the inner matching combinations
   * @param iterable The right iterable to be combined
   * @param keyA A property name with value will be used as for comparison with the key of the second iterable
   * @param keyB A property name with value will be used as for comparison with the key of the first iterable
   */
  <U>(
    iterable: AnyIterable<U>,
    keyA: keyof T,
    keyB: keyof U,
  ): FluentAsyncIterable<[T, U]>;
}
