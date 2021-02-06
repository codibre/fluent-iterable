import { AsyncMapper, Mapper } from 'augmentative-iterable';

export interface SumFunction<T> {
  /**
   * Calculates the sum of the elements of the iterable projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
   *   Examples:<br>
   *     * `fluent([5, -2, 9]).sum()` returns *12*
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).sum(word => word.length)` returns *23*, the sum of length of all the words in the iterable
   * @param mapper The function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted.
   * @returns The sum of the projected elements of the iterable.
   */
  (mapper?: Mapper<T, number>): number;

  /**
   * Calculates the sum of the elements of the iterable projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
   *   Examples:<br>
   *     * `fluent([5, -2, 9]).sum()` returns *12*
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).sum(word => word.length)` returns *23*, the sum of length of all the words in the iterable
   * @param mapper The function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted.
   * @returns The sum of the projected elements of the iterable.
   */
  (mapper: keyof T): number;
}
export interface AsyncSumFunction<T> {
  /**
   * Calculates the sum of the elements of the iterable asynchronously projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @param mapper The asynchronous function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted.
   * @returns A promise of the sum of the projected elements of the iterable.
   */
  (mapper?: AsyncMapper<T, number>): Promise<number>;

  /**
   * Calculates the sum of the elements of the iterable asynchronously projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @param mapper The asynchronous function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted.
   * @returns A promise of the sum of the projected elements of the iterable.
   */
  (mapper: keyof T): Promise<number>;
}
