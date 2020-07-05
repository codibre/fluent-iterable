import { FluentAsyncIterable } from './types';
import { ErrorCallback } from './async/merging/merge-types';
import {
  asyncIterableFuncs,
  asyncResolvingFuncs,
  asyncSpecial,
} from './helpers';
import { mergeCatching } from './async';
import {
  mountIterableFunctions,
  mountResolvingFunctions,
  mountSpecial,
} from './helpers';

/**
 * Tranforms an asynchronous iterable into a [[FluentAsyncIterable]].
 * @typeparam T The type of the items in the async iterable.
 * @param iterable The asynchronous iterable instance.
 * @returns The [[FluentAsyncIterable]] instance.
 */
function fluentAsync<T>(iterable: AsyncIterable<T>): FluentAsyncIterable<T> {
  return {
    ...mountIterableFunctions(iterable, asyncIterableFuncs, fluentAsync),
    ...mountResolvingFunctions(iterable, asyncResolvingFuncs),
    ...mountSpecial(iterable, asyncSpecial, fluentAsync, fluentAsync),
    mergeCatching: <R>(
      errorCallback: ErrorCallback,
      ...iterables: AsyncIterable<R>[]
    ) =>
      fluentAsync(mergeCatching<T | R>(errorCallback, iterable, ...iterables)),
    [Symbol.asyncIterator]: () => iterable[Symbol.asyncIterator](),
  };
}

export default fluentAsync;
