import { FluentAsyncIterable } from '../..';
import { AsyncItemType, ErrorCallback } from '../base';

export interface FlatMergeFunction<T> {
  /**
   * When you have an iterable of async iterable, you can use this functions to merge all results into one iterable
   * where the first items will be the ones yielded first.
   * @param errorCallback if informed, this function will catch any error that occurs in some async iterable, preventing the code from throw it
   */
  <R extends AsyncItemType<T>>(
    errorCallback?: ErrorCallback,
  ): T extends AsyncIterable<any> ? FluentAsyncIterable<R> : never;
}
