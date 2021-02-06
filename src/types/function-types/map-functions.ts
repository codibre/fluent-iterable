import { AsyncMapper, Mapper } from 'augmentative-iterable';
import { FluentIterable, FluentAsyncIterable } from '../base';

export interface MapFunction<T> {
  /**
   * Transforms the iterable of `T` into an iterable of `R` by mapping all elements to an element of `R`.<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).map(word => word.toUpperCase())` yields *ANCHOR*, *ALMOND*, *BOUND* and *ALPINE*.
   * @typeparam R The destination type of the mapping.
   * @param mapper The operation which maps an instance of `T` into an instance of `R`.
   * @returns A [[FluentIterable]] of the mapped elements.
   */
  <R>(mapper: Mapper<T, R>): FluentIterable<R>;
  /**
   * Transforms the iterable of `T` into an iterable of `R` by mapping all elements to an element of `R`.<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).map(word => word.toUpperCase())` yields *ANCHOR*, *ALMOND*, *BOUND* and *ALPINE*.
   * @typeparam R The destination type of the mapping.
   * @param mapper The operation which maps an instance of `T` into an instance of `R`.
   * @returns A [[FluentIterable]] of the mapped elements.
   */
  <R extends keyof T>(mapper: R): FluentIterable<T[R]>;
}
export interface AsyncMapFunction<T> {
  /**
   * Transforms the iterable of `T` into an iterable of `R` by mapping all elements to an element of `R`.
   * @typeparam R The destination type of the mapping.
   * @param mapper The asynchronous operation which maps an instance of `T` into an instance of `R`.
   * @returns A [[FluentAsyncIterable]] of the mapped elements.
   */
  <R>(mapper: AsyncMapper<T, R>): FluentAsyncIterable<R>;
  /**
   * Transforms the iterable of `T` into an iterable of `R` by mapping all elements to an element of `R`.
   * @typeparam R The destination type of the mapping.
   * @param mapper The asynchronous operation which maps an instance of `T` into an instance of `R`.
   * @returns A [[FluentAsyncIterable]] of the mapped elements.
   */
  <R extends keyof T>(mapper: R): FluentAsyncIterable<T[R]>;
}
