import { Action, AsyncAction } from '../base';
import { FluentAsyncIterable, FluentIterable } from '../base';

export interface ExecuteFunction<T> {
  /**
   * Translate an iterable into one which executes an action against each element before yield them.<br>
   *   Examples:<br>
   *     * `for (const element of fluent(['anchor', 'almond', 'bound', 'alpine']).execute(console.log)) { }` prints *anchor*, *almond*, *bound* and *alpine*
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).execute(console.log).first()` prints *anchor* and returns the string *anchor*
   * @param action The action to execute against each element.
   * @returns The [[FluentIterable]] with the action injected to it.
   */
  (action: Action<T>): FluentIterable<T>;
}
export interface AsyncExecuteFunction<T> {
  /**
   * Translate an iterable into one which executes an asynchronous action against each element before yield them.
   * @param action The asynchronous action to execute against each element.
   * @returns The [[FluentAsyncIterable]] with the action injected to it.
   */
  (action: AsyncAction<T>): FluentAsyncIterable<T>;
}
