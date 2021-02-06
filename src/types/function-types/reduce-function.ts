import { AsyncReducer, Reducer } from '../base';

export interface ReduceFunction<T> {
  /**
   * Aggregates the iterable by applying an accumulator function over the elements of the iterable. The specified seed value is used as the initial accumulator value. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
   *   Example:<br>
   *     ```
   *     fluent(['anchor', 'almond', 'bound', 'alpine']).reduce(
   *       (current, next) => (next[0] === 'a' ? current + 1 : current),
   *       0
   *     )
   *     ``` returns *3*, the number of words start with 'a' in the iterable.
   * @typeparam R The type of the accumulator value.
   * @param reducer The accumulator function, provides the next accumulator value out of the last accumulator value and the next element in the iterable.
   * @param initial The initial (aka *seed*) value of the accumulator.
   * @returns The aggregated value.
   */
  <R>(reducer: Reducer<T, R>, initial: R): R;
}

export interface AsyncReduceFunction<T> {
  /**
   * Aggregates the iterable by applying an asynchronous accumulator function over the elements of the iterable. The specified seed value is used as the initial accumulator value. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @typeparam R The type of the accumulator value.
   * @param reducer The asynchronous accumulator function, provides the next accumulator value out of the last accumulator value and the next element in the iterable.
   * @param initial The initial (aka *seed*) value of the accumulator.
   * @returns A promise of the aggregated value.
   */
  <R>(reducer: AsyncReducer<T, R>, initial: R): Promise<R>;
}
