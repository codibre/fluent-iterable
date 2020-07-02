import * as funcs from './fluentAsyncFunctions';
import {
  AsyncPredicate,
  Comparer,
  Mapper,
  Predicate,
  FluentAsyncIterable,
} from './types';
import { fluentGroup, identity, truth } from './utils';
import { ErrorCallback } from './mergeIterators';
import { mountFluentFunctions } from './mount-fluent-functions';

/**
 * Tranforms an asynchronous iterable into a [[FluentAsyncIterable]].
 * @typeparam T The type of the items in the async iterable.
 * @param iterable The asynchronous iterable instance.
 * @returns The [[FluentAsyncIterable]] instance.
 */
function fluentAsync<T>(iterable: AsyncIterable<T>): FluentAsyncIterable<T> {
  return {
    ...mountFluentFunctions(iterable, funcs, fluentAsync),
    merge: <R>(...iterables: AsyncIterable<R>[]) =>
      fluentAsync(funcs.merge<T | R>(iterable, ...iterables)),
    mergeCatching: <R>(
      errorCallback: ErrorCallback,
      ...iterables: AsyncIterable<R>[]
    ) =>
      fluentAsync(
        funcs.mergeCatching<T | R>(errorCallback, iterable, ...iterables),
      ),
    [Symbol.asyncIterator]: () => iterable[Symbol.asyncIterator](),
  };
}

export default fluentAsync;
