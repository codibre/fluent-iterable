import { AsyncPredicate, Predicate } from 'augmentative-iterable';
import { FluentAsyncIterable, FluentIterable } from '../base';

export interface FilterFunction<T> {
  /**
   * Filters the iterable of `T` based on a predicate.<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).filter(word => word[0] === 'a')` yields *anchor*, *almond*, and *alpine*.
   * @param predicate A predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`.
   * @returns A [[FluentIterable]] of the elements against which the predicate evaluates to `true`.
   */
  (predicate: Predicate<T>): FluentIterable<T>;
  /**
   * Filters the iterable of `T` based on a predicate.<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).filter(word => word[0] === 'a')` yields *anchor*, *almond*, and *alpine*.
   * @param predicate A predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`.
   * @returns A [[FluentIterable]] of the elements against which the predicate evaluates to `true`.
   */
  (predicate: keyof T): FluentIterable<T>;
}
export interface AsyncFilterFunction<T> {
  /**
   * Filters the iterable of `T` based on an asynchronous predicate.
   * @param predicate An asynchronous predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`.
   * @returns A [[FluentAsyncIterable]] of the elements against which the predicate evaluates to `true`.
   */
  (predicate: AsyncPredicate<T>): FluentAsyncIterable<T>;
  /**
   * Filters the iterable of `T` based on an asynchronous predicate.
   * @param predicate An asynchronous predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`.
   * @returns A [[FluentAsyncIterable]] of the elements against which the predicate evaluates to `true`.
   */
  <R extends keyof T>(predicate: R): FluentAsyncIterable<T>;
}
