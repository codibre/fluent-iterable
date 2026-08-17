import { AsyncPredicate, Predicate } from 'augmentative-iterable';

export interface AnyFunction<T> {
  /**
   * Determines whether any element of the iterable exists or satisfies a condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
   *   Note: This operation stops reading elements from the iterable as soon as the result can be determined.<br>
   *   Examples:<br>
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).any()` yields `true` since the iterable is not empty
   *     * `fluent([]).any()` yields `false` since the iterable is empty
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).any(word => word[0] === 'b')` yields `true` since *bound* starts with the character *b*
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).any(word => word.length < 5)` yields `false` since none of the words are shorter than 5 characters
   *     * `fluent([]).any(word => false)` yields `false` as a convention, empty iterables always return `false`
   * @param predicate The condition checked for the elements in the iterable. Defaults to the always true function and thus, returns if the iterable is empty.
   * @returns `true` if any of the elements in the iterable satisfy the specified condition, `false` otherwise.
   */
  (predicate?: Predicate<T>): boolean;

  /**
   * Determines whether any element of the iterable exists or satisfies a condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
   *   Note: This operation stops reading elements from the iterable as soon as the result can be determined.<br>
   *   Examples:<br>
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).any()` yields `true` since the iterable is not empty
   *     * `fluent([]).any()` yields `false` since the iterable is empty
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).any(word => word[0] === 'b')` yields `true` since *bound* starts with the character *b*
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).any(word => word.length < 5)` yields `false` since none of the words are shorter than 5 characters
   *     * `fluent([]).any(word => false)` yields `false` as a convention, empty iterables always return `false`
   * @param predicate The condition checked for the elements in the iterable. Defaults to the always true function and thus, returns if the iterable is empty.
   * @returns `true` if any of the elements in the iterable satisfy the specified condition, `false` otherwise.
   */
  (predicate: keyof T): boolean;
}
export interface AsyncAnyFunction<T> {
  /**
   * Determines whether any element of the iterable exists or satisfies an asynchronous condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
   *   Note: This operation stops reading elements from the iterable as soon as the result can be determined.
   * @param predicate The asynchronous condition checked for the elements in the iterable.
   * @returns A promise of `true` if any of the elements in the iterable satisfy the specified condition, `false` otherwise.
   */
  (predicate?: AsyncPredicate<T>): Promise<boolean>;

  /**
   * Determines whether any element of the iterable exists or satisfies an asynchronous condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
   *   Note: This operation stops reading elements from the iterable as soon as the result can be determined.
   * @param predicate The asynchronous condition checked for the elements in the iterable.
   * @returns A promise of `true` if any of the elements in the iterable satisfy the specified condition, `false` otherwise.
   */
  (predicate: keyof T): Promise<boolean>;
}
