import { Action, AsyncAction } from '../base';

export interface ForEachFunction<T> {
  /**
   * Iterates through the iterable and executes an action against each element. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).forEach(console.log)` prints *anchor*, *almond*, *bound* and *alpine*
   * @param action The action to execute against each element.
   */
  (action: Action<T>): void;
}
export interface AsyncForEachFunction<T> {
  /**
   * Iterates through the iterable and executes an asynchronous action against each element. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @param action The asynchronous action to execute against each element.
   * @returns A promise of the executions.
   */
  (mapper: AsyncAction<T>): Promise<void>;
}
