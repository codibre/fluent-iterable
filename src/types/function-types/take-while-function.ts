import { AsyncPredicate, Predicate } from 'augmentative-iterable';
import { FluentAsyncIterable, FluentIterable } from '../base';

export interface TakeWhileFunction<T> {
  /**
   * Returns elements from the iterable as long as a specified condition is met.<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).takeWhile(word => word[0] === 'a')` yields *anchor* and *almond*.
   * @param condition A predicate of `T`. All elements are yielded from the iterable until this evaluates to `false` for the first time.
   * @returns A [[FluentIterable]] of the elements until the condition is met.
   */
  (condition: Predicate<T>): FluentIterable<T>;
  /**
   * Returns elements from the iterable as long as a specified condition is met.<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).takeWhile(word => word[0] === 'a')` yields *anchor* and *almond*.
   * @param condition A predicate of `T`. All elements are yielded from the iterable until this evaluates to `false` for the first time.
   * @returns A [[FluentIterable]] of the elements until the condition is met.
   */
  (condition: keyof T): FluentIterable<T>;
}

export interface AsyncTakeWhileFunction<T> {
  /**
   * Returns elements from the iterable as long as a specified asynchronous condition is met.
   * @param condition An asynchronous predicate of `T`. All elements are yielded from the iterable until this evaluates to `false` for the first time.
   * @returns A [[FluentAsyncIterable]] of the elements until the condition is met.
   */
  (condition: AsyncPredicate<T>): FluentAsyncIterable<T>;
  /**
   * Returns elements from the iterable as long as a specified asynchronous condition is met.
   * @param condition An asynchronous predicate of `T`. All elements are yielded from the iterable until this evaluates to `false` for the first time.
   * @returns A [[FluentAsyncIterable]] of the elements until the condition is met.
   */
  (condition: keyof T): FluentAsyncIterable<T>;
}
