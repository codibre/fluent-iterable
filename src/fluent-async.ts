import { FluentAsyncIterable } from './types';
import { FluentEmitOptions } from './types/base';
import {
  asyncIterableFuncs,
  asyncResolvingFuncs,
  asyncSpecial,
} from './mounters';
import { mountIterableFunctions, mountSpecial } from './mounters';
import { AnyIterable } from 'augmentative-iterable';
import { iterateAsync } from './utils';
import { extend } from 'extension-methods';
import { EventEmitter } from 'events';
import { getIterableFromEmitter } from './emitter';
import { fluentSymbolAsync, getFluent } from './types-internal';
import { asyncHandler, asyncProxyReference } from './async-handler';
import { internalAsyncWrapper, internalWrapper } from './internal-wrapper';
/**
 * Tranforms an asynchronous iterable into a [[FluentAsyncIterable]].
 * @typeparam T The type of the items in the async iterable.
 * @param iterable The asynchronous iterable instance.
 * @returns The [[FluentAsyncIterable]] instance.
 */
function fluentAsync<T>(
  iterable: AnyIterable<T> | PromiseLike<AnyIterable<T>>,
): FluentAsyncIterable<T> {
  return getFluent(iterateAsync(iterable), asyncHandler, fluentSymbolAsync);
}

/**
 * Transforms an EventEmitter into a [[FluentAsyncIterable]].
 *
 *
 * **IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
 * emission generates a new yielded result. The default key event is **'data'**.
 *
 * Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
 * The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
 * to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.
 *
 * If you need to change the key event or other characteristics, you can do it through the **options** parameter
 * @typeparam T The type of the items in the created FluentAsyncIterable.
 * @param emitter The EventEmitter
 * @param options The EventEmitter options. Optional
 * @returns The [[FluentAsyncIterable]] instance.
 */
function fluentEmit<T = any>(
  emitter: EventEmitter,
  options?: FluentEmitOptions,
): FluentAsyncIterable<T> {
  return extend(getIterableFromEmitter<T>(emitter, options), asyncHandler);
}

Object.assign(asyncProxyReference, {
  ...mountIterableFunctions(asyncIterableFuncs, internalAsyncWrapper),
  ...mountSpecial(asyncSpecial, internalAsyncWrapper, internalAsyncWrapper),
  ...asyncResolvingFuncs,
  fluent: fluentSymbolAsync,
});

export { fluentAsync, fluentEmit };
