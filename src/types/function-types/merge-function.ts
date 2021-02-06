import { FluentAsyncIterable } from '../base';

export interface AsyncMergeFunction<T> {
  <R>(...iterables: AsyncIterable<R>[]): FluentAsyncIterable<T | R>;
}
