import { AsyncMapper, Mapper } from 'augmentative-iterable';
import { FluentAsyncIterable, FluentIterable } from '../base';
import { Choose } from '../choose';

export interface DistinctFunction<T> {
  /**
   * Returns distinct elements from the iterable from a certain projections perspective.<br>
   *   Examples:<br>
   *     * `fluent(['anchor', 'almond', 'anchor', 'alpine']).distinct()` yields *anchor*, *almond* and *alpine*<br>
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).distinct(word => word[0])` yields *anchor* and *bound*
   * @typeparam R The type of the data the element equality is based on.
   * @param mapper The projection to use to determine element equality. Identity mapping is used if omitted.
   * @param maxOcurrences The number of accepted occurrences for each item. Default: 1
   * @returns The [[FluentIterable]] of the distinct elements.
   */
  <R>(mapper: Mapper<T, R>, maxOcurrences?: number): FluentIterable<T>;
  /**
   * Returns distinct elements from the iterable from a certain projections perspective.<br>
   *   Examples:<br>
   *     * `fluent(['anchor', 'almond', 'anchor', 'alpine']).distinct()` yields *anchor*, *almond* and *alpine*<br>
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).distinct(word => word[0])` yields *anchor* and *bound*
   * @typeparam R The type of the data the element equality is based on.
   * @param mapper The projection to use to determine element equality. Identity mapping is used if omitted.
   * @param choose receives two T elements and return the one that must be chosen
   * @returns The [[FluentIterable]] of the distinct elements.
   */
  <R>(mapper: Mapper<T, R>, choose: Choose<T>): FluentIterable<T>;

  /**
   * Returns distinct elements from the iterable.<br>
   *   Examples:<br>
   *     * `fluent(['anchor', 'almond', 'anchor', 'alpine']).distinct()` yields *anchor*, *almond* and *alpine*<br>
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).distinct(word => word[0])` yields *anchor* and *bound*
   * @typeparam R The type of the data the element equality is based on.
   * @returns The [[FluentIterable]] of the distinct elements.
   */
  (maxOcurrences?: number): FluentIterable<T>;

  /**
   * Returns distinct elements from the iterable from a certain projections perspective.<br>
   *   Examples:<br>
   *     * `fluent(['anchor', 'almond', 'anchor', 'alpine']).distinct()` yields *anchor*, *almond* and *alpine*<br>
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).distinct(word => word[0])` yields *anchor* and *bound*
   * @typeparam R The type of the data the element equality is based on.
   * @param mapper The projection to use to determine element equality. Identity mapping is used if omitted.
   * @param maxOcurrences The number of accepted occurrences for each item. Default: 1
   * @returns The [[FluentIterable]] of the distinct elements.
   */
  <R extends keyof T>(mapper: R, maxOcurrences?: number): FluentIterable<T>;

  /**
   * Returns distinct elements from the iterable from a certain projections perspective.<br>
   *   Examples:<br>
   *     * `fluent(['anchor', 'almond', 'anchor', 'alpine']).distinct()` yields *anchor*, *almond* and *alpine*<br>
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).distinct(word => word[0])` yields *anchor* and *bound*
   * @typeparam R The type of the data the element equality is based on.
   * @param mapper The projection to use to determine element equality. Identity mapping is used if omitted.
   * @param choose receives two T elements and return the one that must be chosen
   * @returns The [[FluentIterable]] of the distinct elements.
   */
  <R extends keyof T>(mapper: R, choose: Choose<T>): FluentIterable<T>;
}
export interface AsyncDistinctFunction<T> {
  /**
   * Returns distinct elements from the iterable from a certain asynchronous projections perspective.
   * @typeparam R The type of the data the element equality is based on.
   * @param mapper The asynchronous projection to use to determine element equality. Identity mapping is used if omitted.
   * @param maxOcurrences The number of accepted occurrences for each item. Default: 1
   * @returns The [[FluentAsyncIterable]] of the distinct elements.
   */
  <R>(
    mapper?: AsyncMapper<T, R>,
    maxOcurrences?: number,
  ): FluentAsyncIterable<T>;

  /**
   * Returns distinct elements from the iterable from a certain asynchronous projections perspective.
   * @typeparam R The type of the data the element equality is based on.
   * @param mapper The asynchronous projection to use to determine element equality. Identity mapping is used if omitted.
   * @param choose receives two T elements and return the one that must be chosen
   * @returns The [[FluentAsyncIterable]] of the distinct elements.
   */
  <R>(mapper: AsyncMapper<T, R>, choose: Choose<T>): FluentAsyncIterable<T>;

  /**
   * Returns distinct elements from the iterable from a certain asynchronous projections perspective.
   * @typeparam R The type of the data the element equality is based on.
   * @param mapper The asynchronous projection to use to determine element equality. Identity mapping is used if omitted.
   * @param maxOcurrences The number of accepted occurrences for each item. Default: 1
   * @returns The [[FluentAsyncIterable]] of the distinct elements.
   */
  <R extends keyof T>(
    mapper: R,
    maxOcurrences?: number,
  ): FluentAsyncIterable<T>;

  /**
   * Returns distinct elements from the iterable from a certain asynchronous projections perspective.
   * @typeparam R The type of the data the element equality is based on.
   * @param mapper The asynchronous projection to use to determine element equality. Identity mapping is used if omitted.
   * @param choose receives two T elements and return the one that must be chosen
   * @returns The [[FluentAsyncIterable]] of the distinct elements.
   */
  <R extends keyof T>(mapper: R, choose: Choose<T>): FluentAsyncIterable<T>;
}
