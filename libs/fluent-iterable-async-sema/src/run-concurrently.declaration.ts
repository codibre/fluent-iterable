import {
  Action,
  AsyncAction,
  extend,
  extendAsync,
} from '@codibre/fluent-iterable';
import { SemaOptions } from './sema-options';
import { runConcurrently } from './run-concurrently';

declare module '@codibre/fluent-iterable' {
  interface FluentIterable<T> {
    runConcurrently(
      options: SemaOptions,
      cb: Action<T> | AsyncAction<T>,
    ): Promise<void>;
  }
  interface FluentAsyncIterable<T> {
    runConcurrently(
      options: SemaOptions,
      cb: Action<T> | AsyncAction<T>,
    ): Promise<void>;
  }
}

extend.useResolving(runConcurrently.name, runConcurrently);
extendAsync.useResolving(runConcurrently.name, runConcurrently);
