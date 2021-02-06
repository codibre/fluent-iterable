import { FluentAsyncIterable } from '../base';

export interface FluentAsyncMergeFunction<T> {
  <R>(...iterables: AsyncIterable<R>[]): FluentAsyncIterable<T | R>;
}
