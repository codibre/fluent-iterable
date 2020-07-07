import { FluentAsyncIterable, ErrorCallback } from './types';
import {
  asyncIterableFuncs,
  asyncResolvingFuncs,
  asyncSpecial,
} from './mounters';
import {
  mountIterableFunctions,
  mountResolvingFunctions,
  mountSpecial,
} from './mounters';
import { AnyIterable } from './types-internal';
import { iterateAsync } from './utils';

/**
 * Tranforms an asynchronous iterable into a [[FluentAsyncIterable]].
 * @typeparam T The type of the items in the async iterable.
 * @param iterable The asynchronous iterable instance.
 * @returns The [[FluentAsyncIterable]] instance.
 */
function fluentAsync<T>(
  iterable: AsyncIterable<T> | PromiseLike<AnyIterable<T>>,
): FluentAsyncIterable<T> {
  const asyncIterable = (iterable.hasOwnProperty(Symbol.asyncIterator)
    ? iterable
    : iterateAsync(iterable)) as AsyncIterable<T>;
  return {
    ...mountIterableFunctions(asyncIterable, asyncIterableFuncs, fluentAsync),
    ...mountResolvingFunctions(asyncIterable, asyncResolvingFuncs),
    ...mountSpecial(asyncIterable, asyncSpecial, fluentAsync, fluentAsync),
    [Symbol.asyncIterator]: () => asyncIterable[Symbol.asyncIterator](),
  };
}

export default fluentAsync;
