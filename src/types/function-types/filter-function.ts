import { AsyncPredicate, Predicate } from 'augmentative-iterable';
import { FluentAsyncIterable, FluentIterable } from '../base';

type Truthy<T> = Exclude<
  Exclude<Exclude<Exclude<Exclude<T, false>, 0>, ''>, null>,
  undefined
>;

type RequiresTruthy<T, Guarantees extends keyof T> = {
  [P in Guarantees]-?: Truthy<T[P]>;
};

export interface FilterFunction<T> {
  /**
   * Filters the iterable of `T` based on a predicate.<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).filter(word => word[0] === 'a')` yields *anchor*, *almond*, and *alpine*.
   * @param predicate A predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`.
   * @returns A [[FluentIterable]] of the elements against which the predicate evaluates to `true`.
   */
  <Guarantees extends keyof T = any>(predicate: Predicate<T>): FluentIterable<
    T & RequiresTruthy<T, Guarantees>
  >;
  /**
   * Filters the iterable of `T` based on a predicate.<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).filter(word => word[0] === 'a')` yields *anchor*, *almond*, and *alpine*.
   * @param predicate A predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`.
   * @returns A [[FluentIterable]] of the elements against which the predicate evaluates to `true`.
   */
  <K extends keyof T>(predicate: K): FluentIterable<T & RequiresTruthy<T, K>>;
}
export interface AsyncFilterFunction<T> {
  /**
   * Filters the iterable of `T` based on an asynchronous predicate.
   * @param predicate An asynchronous predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`.
   * @returns A [[FluentAsyncIterable]] of the elements against which the predicate evaluates to `true`.
   */
  <Guarantees extends keyof T = any>(
    predicate: AsyncPredicate<T>,
  ): FluentAsyncIterable<T & RequiresTruthy<T, Guarantees>>;
  /**
   * Filters the iterable of `T` based on an asynchronous predicate.
   * @param predicate An asynchronous predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`.
   * @returns A [[FluentAsyncIterable]] of the elements against which the predicate evaluates to `true`.
   */
  <R extends keyof T, K extends keyof T>(predicate: R): FluentAsyncIterable<
    T & RequiresTruthy<T, K>
  >;
}
