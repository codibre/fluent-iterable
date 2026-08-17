import { AsyncMapper, Mapper } from 'augmentative-iterable';

export interface IsDistinctFunction<T> {
  /**
   * Checks if the given projection have only distinct elements. This is a partial resolving operation,
   * and will return the result after as soon as an item got more occurrences than the specified
   *
   *   Examples:
   *
   *     * `fluent(['anchor', 'almond', 'anchor', 'alpine']).isDistinct()` returns true
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinct(word => word[0])` returns false
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinct(word => word[0], 2)` returns true
   * @typeparam R The type of the data the element equality is based on.
   * @param mapper The projection to use to determine element equality. Identity mapping is used if omitted.
   * @param maxOcurrences The number of accepted occurrences for each item. Default: 1
   */
  <R>(mapper?: Mapper<T, R>, maxOcurrences?: number): boolean;

  /**
   * Checks if the given iterable have only distinct elements. This is a partial resolving operation,
   * and will return the result after as soon as an item got more occurrences than the specified
   *
   *   Examples:
   *
   *     * `fluent(['anchor', 'almond', 'anchor', 'alpine']).isDistinct()` returns true
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinct(word => word[0])` returns false
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinct(word => word[0], 2)` returns true
   * @param maxOcurrences The number of accepted occurrences for each item. Default: 1
   */
  (maxOcurrences?: number): boolean;

  /**
   * Checks if the given projection have only distinct elements. This is a partial resolving operation,
   * and will return the result after as soon as an item got more occurrences than the specified
   *
   *   Examples:
   *
   *     * `fluent(['anchor', 'almond', 'anchor', 'alpine']).isDistinct()` returns true
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinct(word => word[0])` returns false
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinct(word => word[0], 2)` returns true
   * @typeparam R The type of the data the element equality is based on.
   * @param mapper The projection to use to determine element equality. Identity mapping is used if omitted.
   * @param maxOcurrences The number of accepted occurrences for each item. Default: 1
   */
  <R extends keyof T>(mapper?: R, maxOcurrences?: number): boolean;
}
export interface AsyncIsDistinctFunction<T> {
  /**
   * Checks if the given iterable have only distinct elements. This is a partial resolving operation,
   * and will return the result after as soon as an item got more occurrences than the specified
   *
   *   Examples:
   *
   *     * `fluent(['anchor', 'almond', 'anchor', 'alpine']).isDistinct()` returns true
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinct(word => word[0])` returns false
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinct(word => word[0], 2)` returns true
   * @param maxOcurrences The number of accepted occurrences for each item. Default: 1
   */
  (maxOcurrences?: number): Promise<boolean>;
  /**
   * Checks if the given projection have only distinct elements. This is a partial resolving operation,
   * and will return the result after as soon as an item got more occurrences than the specified
   *
   *   Examples:
   *
   *     * `fluent(['anchor', 'almond', 'anchor', 'alpine']).isDistinctAsync()` returns true
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinctAsync(word => word[0])` returns false
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinctAsync(word => word[0], 2)` returns true
   * @typeparam R The type of the data the element equality is based on.
   * @param mapper The asynchronous projection to use to determine element equality. Identity mapping is used if omitted.
   * @param maxOcurrences The number of accepted occurrences for each item. Default: 1
   */
  <R>(mapper: AsyncMapper<T, R>, maxOcurrences?: number): Promise<boolean>;
  /**
   * Checks if the given projection have only distinct elements. This is a partial resolving operation,
   * and will return the result after as soon as an item got more occurrences than the specified
   *
   *   Examples:
   *
   *     * `fluent(['anchor', 'almond', 'anchor', 'alpine']).isDistinctAsync()` returns true
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinctAsync(word => word[0])` returns false
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).isDistinctAsync(word => word[0], 2)` returns true
   * @typeparam R The type of the data the element equality is based on.
   * @param mapper The asynchronous projection to use to determine element equality. Identity mapping is used if omitted.
   * @param maxOcurrences The number of accepted occurrences for each item. Default: 1
   */
  <R extends keyof T>(mapper: R, maxOcurrences?: number): Promise<boolean>;
}
