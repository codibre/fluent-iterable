import { FluentAsyncIterable } from './types';
import { FluentEmitOptions } from './types-base';
import {
  asyncIterableFuncs,
  asyncResolvingFuncs,
  asyncSpecial,
} from './mounters';
import { mountIterableFunctions, mountSpecial } from './mounters';
import { AnyIterable } from 'augmentative-iterable';
import { iterateAsync } from './utils';
import { getExtender, extend, defaultCookFunction } from 'extension-methods';
import { EventEmitter } from 'events';
import { forEmitOf } from './for-emit-of';

export const proxyReference: { [key: string]: Function } = {};
const handler = getExtender(proxyReference, defaultCookFunction, 'extender');

/**
 * Tranforms an asynchronous iterable into a [[FluentAsyncIterable]].
 * @typeparam T The type of the items in the async iterable.
 * @param iterable The asynchronous iterable instance.
 * @returns The [[FluentAsyncIterable]] instance.
 */
function fluentAsync<T>(
  iterable: AnyIterable<T> | PromiseLike<AnyIterable<T>>,
): FluentAsyncIterable<T> {
  return extend(iterateAsync(iterable), handler) as any;
}

/**
 * Tranforms an EventEmitter into a [[FluentAsyncIterable]].
 * @typeparam T The type of the items in the created FluentAsyncIterable.
 * @param emitter The EventEmitter
 * @param options The EventEmitter options. Optional
 * @returns The [[FluentAsyncIterable]] instance.
 */
function fluentEmit<T = any>(
  emitter: EventEmitter,
  options?: FluentEmitOptions,
): FluentAsyncIterable<T> {
  return extend(
    forEmitOf<T>(emitter, { ...options }),
    handler,
  ) as any;
}

Object.assign(proxyReference, {
  ...mountIterableFunctions(asyncIterableFuncs, fluentAsync),
  ...mountSpecial(asyncSpecial, fluentAsync, fluentAsync),
  ...asyncResolvingFuncs,
});

export { fluentAsync, fluentEmit };
