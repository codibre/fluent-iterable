import { FluentAsyncIterable, FluentIterable } from '../base';

export interface FinallyFunction<T, Type extends 'sync' | 'async'> {
  /**
   * Adds a command to be executed after the iterable finishes
   * @param callback the code to be executed
   * @returns The resulting iterable
   */
  (
    callback: Type extends 'sync'
      ? () => unknown
      : () => Promise<unknown> | unknown,
  ): Type extends 'sync' ? FluentIterable<T> : FluentAsyncIterable<T>;
}
