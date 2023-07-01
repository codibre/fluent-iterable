import { AsyncMapper, Mapper } from 'augmentative-iterable';
import { FluentAsyncIterable, FluentIterable } from '../base';

export interface DistinctByFunction<T> {
  /**
   * Returns distinct elements from the iterable from a certain list of projections<br>
   *   Examples:<br>
   *     * `fluent([{ a: 1, b: 2, c: 1}, { a: 1, b: 2, c: 2}]).distinct()` yields *{ a: 1, b: 2, c: 1 }*<br>
   * @typeparam R The type of the data the element equality is based on.
   * @param mappers The projections to use to determine element equality.
   * @returns The [[FluentIterable]] of the distinct elements.
   */
  <R>(...mappers: Array<Mapper<T, R> | keyof T>): FluentIterable<T>;
}
export interface AsyncDistinctByFunction<T> {
  /**
   * Returns distinct elements from the iterable from a certain list of projections<br>
   *   Examples:<br>
   *     * `fluent([{ a: 1, b: 2, c: 1}, { a: 1, b: 2, c: 2}]).distinct()` yields *{ a: 1, b: 2, c: 1 }*<br>
   * @typeparam R The type of the data the element equality is based on.
   * @param mappers The projections to use to determine element equality.
   * @returns The [[FluentIterable]] of the distinct elements.
   */
  <R>(...mappers: Array<AsyncMapper<T, R> | keyof T>): FluentAsyncIterable<T>;
}
