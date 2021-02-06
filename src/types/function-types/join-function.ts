import { AsyncMapper, Mapper } from 'augmentative-iterable';

export interface JoinFunction<T> {
  /**
   * Projects and concatenates the elements of the iterable into a `string` using a separator. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
   *   Examples:<br>
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).join(', ')` returns *anchor, almond, bound, alpine*
   * @param separator The separator to use in between the elements of the iterable.
   * @param mapper The function which projects the elements of the iterable into `string`s. Falls back to the identity function if omitted.
   * @returns The concatenated string of the elements in the iterable.
   */
  (separator: string, mapper?: Mapper<T, string>): string;

  /**
   * Projects and concatenates the elements of the iterable into a `string` using a separator. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
   *   Examples:<br>
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).join(', ')` returns *anchor, almond, bound, alpine*
   * @param separator The separator to use in between the elements of the iterable.
   * @param mapper The function which projects the elements of the iterable into `string`s. Falls back to the identity function if omitted.
   * @returns The concatenated string of the elements in the iterable.
   */
  (separator: string, mapper?: keyof T): string;
}
export interface AsyncJoinFunction<T> {
  /**
   * Asynchronously projects and concatenates the elements of the iterable into a `string` using a separator. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @param separator The separator to use in between the elements of the iterable.
   * @param mapper The function which asynchronously projects the elements of the iterable into `string`s. Falls back to the identity function if omitted.
   * @returns A promise of the concatenated string of the elements in the iterable.
   */
  (separator: string, mapper: AsyncMapper<T, string>): Promise<string>;

  /**
   * Asynchronously projects and concatenates the elements of the iterable into a `string` using a separator. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @param separator The separator to use in between the elements of the iterable.
   * @param mapper The function which asynchronously projects the elements of the iterable into `string`s. Falls back to the identity function if omitted.
   * @returns A promise of the concatenated string of the elements in the iterable.
   */
  (separator: string, mapper: keyof T): Promise<string>;
}
