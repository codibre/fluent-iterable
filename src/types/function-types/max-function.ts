import { AsyncMapper, Mapper } from 'augmentative-iterable';

export interface MaxFunction<T> {
  /**
   * Finds the numeric maximum element of the iterable using a projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).max(word => word.charCodeAt(0))` returns *bound*, since it begins with the character 'b' which has a highest character code than character 'a' with which all the other words begins with
   * @param mapper The function which projects the elements of the iterable into comparable values. Falls back to the identity function if omitted.
   * @returns The maximum of the iterable's projected elements.
   */
  <R = T>(mapper?: Mapper<T, R>): T | undefined;

  /**
   * Finds the numeric maximum element of the iterable using a projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).max(word => word.charCodeAt(0))` returns *bound*, since it begins with the character 'b' which has a highest character code than character 'a' with which all the other words begins with
   * @param mapper The function which projects the elements of the iterable into comparable values. Falls back to the identity function if omitted.
   * @returns The maximum of the iterable's projected elements.
   */
  <R extends keyof T>(mapper?: R): T | undefined;
}
export interface AsyncMaxFunction<T> {
  /**
   * Finds the numeric maximum element of the iterable using an asynchronous projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @param mapper The function which asynchronously projects the elements of the iterable into the comparable values. Falls back to the identity function if omitted.
   * @returns A promise of the maximum of the iterable's projected elements.
   */
  <R = T>(mapper?: AsyncMapper<T, R>): Promise<T | undefined>;

  /**
   * Finds the numeric maximum element of the iterable using an asynchronous projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @param mapper The function which asynchronously projects the elements of the iterable into the comparable values. Falls back to the identity function if omitted.
   * @returns A promise of the maximum of the iterable's projected elements.
   */
  <R extends keyof T>(mapper?: R): Promise<T | undefined>;
}
