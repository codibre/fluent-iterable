import { AsyncPredicate, Predicate } from 'augmentative-iterable';
import { FluentAsyncIterable, FluentIterable } from '../base';

export interface SkipWhileFunction<T> {
  /**
   * Bypasses elements in the iterable as long as a specified condition is true and then returns the remaining elements.<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).skipWhile(word => word[0] === 'a')` yields *bound* and *alpine*.
   * @param condition A predicate of `T`. All elements are skipped from the iterable until this evaluates to `false` for the first time.
   * @returns A [[FluentIterable]] of the elements after the condition is not met.
   */
  (condition: Predicate<T>): FluentIterable<T>;
  /**
   * Bypasses elements in the iterable as long as a specified condition is true and then returns the remaining elements.<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).skipWhile(word => word[0] === 'a')` yields *bound* and *alpine*.
   * @param condition A predicate of `T`. All elements are skipped from the iterable until this evaluates to `false` for the first time.
   * @returns A [[FluentIterable]] of the elements after the condition is not met.
   */
  (condition: keyof T): FluentIterable<T>;
}

export interface AsyncSkipWhileFunction<T> {
  /**
   * Bypasses elements in the iterable as long as a specified asynchronous condition is true and then returns the remaining elements.
   * @param condition An asynchronous predicate of `T`. All elements are skipped from the iterable until this evaluates to `false` for the first time.
   * @returns A [[FluentAsyncIterable]] of the elements after the condition is not met.
   */
  (condition: AsyncPredicate<T>): FluentAsyncIterable<T>;

  /**
   * Bypasses elements in the iterable as long as a specified asynchronous condition is true and then returns the remaining elements.
   * @param condition An asynchronous predicate of `T`. All elements are skipped from the iterable until this evaluates to `false` for the first time.
   * @returns A [[FluentAsyncIterable]] of the elements after the condition is not met.
   */
  <R extends keyof T>(condition: R): FluentAsyncIterable<T>;
}
