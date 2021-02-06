import { AsyncPredicate, Predicate } from 'augmentative-iterable';

export interface LastFunction<T> {
  /**
   * Returns the last element of the iterable matching a predicate, or `undefined` value if no such element is found. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
   *   Examples:<br>
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).last()` returns *alpine*<br>
   *     * `fluent([]).last()` returns `undefined`<br>
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).last(word => word[0] === 'b')` returns *bound*<br>
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).last(word => word[0] === 'c')` returns `undefined`
   * @param predicate The last element is to be returned which matches this predicate. Defaults to the always true function and thus, returns the last element in the iterable if omitted.
   * @returns The last element matching the specified predicate, or `undefined` if no such element found.
   */
  (predicate?: Predicate<T>): T | undefined;

  /**
   * Returns the last element of the iterable matching a predicate, or `undefined` value if no such element is found. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
   *   Examples:<br>
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).last()` returns *alpine*<br>
   *     * `fluent([]).last()` returns `undefined`<br>
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).last(word => word[0] === 'b')` returns *bound*<br>
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).last(word => word[0] === 'c')` returns `undefined`
   * @param predicate The last element is to be returned which matches this predicate. Defaults to the always true function and thus, returns the last element in the iterable if omitted.
   * @returns The last element matching the specified predicate, or `undefined` if no such element found.
   */
  (predicate: keyof T): T | undefined;
}
export interface AsyncLastFunction<T> {
  /**
   * Returns the last element of the iterable matching an asynchronous predicate, or `undefined` value if no such element is found. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @param predicate The last element is to be returned which matches this asynchronous predicate.
   * @returns A promise of the last element matching the specified predicate, or `undefined` if no such element found.
   */
  (predicate?: AsyncPredicate<T>): Promise<T | undefined>;

  /**
   * Returns the last element of the iterable matching an asynchronous predicate, or `undefined` value if no such element is found. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @param predicate The last element is to be returned which matches this asynchronous predicate.
   * @returns A promise of the last element matching the specified predicate, or `undefined` if no such element found.
   */
  (predicate: keyof T): Promise<T | undefined>;
}
