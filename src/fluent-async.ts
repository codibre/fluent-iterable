import { FluentAsyncIterable } from './types';
import {
  asyncIterableFuncs,
  asyncResolvingFuncs,
  asyncSpecial,
} from './mounters';
import { mountIterableFunctions, mountSpecial, getHandler } from './mounters';
import { AnyIterable } from './types-internal';
import { iterateAsync } from './utils';

export const proxyReference: { [key: string]: Function } = {};
const handler = getHandler(proxyReference);

/**
 * Tranforms an asynchronous iterable into a [[FluentAsyncIterable]].
 * @typeparam T The type of the items in the async iterable.
 * @param iterable The asynchronous iterable instance.
 * @returns The [[FluentAsyncIterable]] instance.
 */
function fluentAsync<T>(
  iterable: AsyncIterable<T> | PromiseLike<AnyIterable<T>>,
): FluentAsyncIterable<T> {
  return new Proxy(iterateAsync(iterable), handler) as FluentAsyncIterable<T>;
}

Object.assign(proxyReference, {
  ...mountIterableFunctions(asyncIterableFuncs, fluentAsync),
  ...mountSpecial(asyncSpecial, fluentAsync, fluentAsync),
  ...asyncResolvingFuncs,
});

export default fluentAsync;
