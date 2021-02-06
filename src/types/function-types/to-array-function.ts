export interface ToArrayFunction<T> {
  /**
   * Translates the iterable into an array. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).toArray()` returns `['anchor', 'almond', 'bound', 'alpine']`
   * @returns The array equivalent of the iterable.
   */
  (): T[];
}

export interface AsyncToArrayFunction<T> {
  /**
   * Translates the iterable into an array. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).toArray()` returns `['anchor', 'almond', 'bound', 'alpine']`
   * @returns A promise that resolves to the array equivalent of the async iterable.
   */
  (): Promise<T[]>;
}
