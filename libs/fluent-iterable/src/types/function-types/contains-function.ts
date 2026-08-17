export interface ContainsFunction<T> {
  /**
   * Determines whether the iterable contains a specified element. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).contains('bound')` returns `true`
   * @param item The element to check.
   * @returns `true` if the specified element exists in the iterable, `false` otherwise.
   */
  (item: T): boolean;
}

export interface AsyncContainsFunction<T> {
  /**
   * Determines whether the iterable contains a specified element. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).contains('bound')` returns `true`
   * @param item The element to check.
   * @returns `true` if the specified element exists in the iterable, `false` otherwise.
   */
  (item: T): Promise<boolean>;
}
