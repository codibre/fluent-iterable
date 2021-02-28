import { FluentIterable, FluentAsyncIterable } from '../base';
import { AsyncCatchCallback, CatchCallback } from '../catch-callback';

export interface CatchFunction<T> {
  (errorCallback: CatchCallback): FluentIterable<T>;
}
export interface AsyncCatchFunction<T> {
  (errorCallback: AsyncCatchCallback): FluentAsyncIterable<T>;
}
