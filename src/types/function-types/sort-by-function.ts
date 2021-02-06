import { Mapper } from 'augmentative-iterable';
import { FluentAsyncIterable, FluentIterable } from '../base';

export interface SortByFunction<T> {
  /**
   * Sorts the elements of the iterable based on a specified fields. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
   *   Examples:<br>
   *     * Alphabetical, ascending: `fluent([{ a: 'anchor' }, { a: 'almond' }, { a: 'bound' }, { a: 'alpine' }]).sortBy((x) => x.a)` yields *almond*, *alpine*, *anchor* and *bound*.<br>
   *     * Alphabetical, descending: `fluent([{ a: 'anchor' }, { a: 'almond' }, { a: 'bound' }, { a: 'alpine' }]).sortBy(desc((x) => x.a))` yields *bound*, *anchor*, *alpine* and *almond*.<br>
   * @param comparer The comparer operation to use to determine the order of elements. Alphabetical ascending is used for [[string]] elements and numerical ascending is used for [[number]]
   * @returns The sorted [[FluentIterable]].
   */
  (...mappers: (Mapper<T, any> | keyof T)[]): FluentIterable<T>;
}

export interface AsyncSortByFunction<T> {
  /**
   * Sorts the elements of the iterable based on a specified fields. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
   *   Examples:<br>
   *     * Alphabetical, ascending: `fluentAsync([{ a: 'anchor' }, { a: 'almond' }, { a: 'bound' }, { a: 'alpine' }]).sortBy((x) => x.a)` yields *almond*, *alpine*, *anchor* and *bound*.<br>
   *     * Alphabetical, descending: `fluentAsync([{ a: 'anchor' }, { a: 'almond' }, { a: 'bound' }, { a: 'alpine' }]).sortBy(desc((x) => x.a))` yields *bound*, *anchor*, *alpine* and *almond*.<br>
   * @param comparer The comparer operation to use to determine the order of elements. Alphabetical ascending is used for [[string]] elements and numerical ascending is used for [[number]]
   * @returns The sorted [[FluentIterable]].
   */
  (...mappers: (Mapper<T, any> | keyof T)[]): FluentAsyncIterable<T>;
}
