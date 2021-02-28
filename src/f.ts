import EventEmitter = require('events');
import fluent from './fluent';
import { fluentAsync, fluentEmit } from './fluent-async';
import { fluentObject } from './fluent-object';
import { isAsyncIterable } from './is-async-iterable';
import { isIterable } from './is-iterable';
import {
  FluentAsyncIterable,
  FluentEmitOptions,
  FluentIterable,
} from './types';

function f<T>(iterable: Iterable<T>): FluentIterable<T>;
function f<T>(iterable: AsyncIterable<T>): FluentAsyncIterable<T>;
function f<T extends object, K extends keyof T>(
  iterable: T,
): FluentAsyncIterable<[K, T[K]]>;
function f<T = any>(
  emitter: EventEmitter,
  options?: FluentEmitOptions,
): FluentAsyncIterable<T>;
function f<T>(
  iterable: Iterable<T> | AsyncIterable<T> | EventEmitter | object,
  options?: FluentEmitOptions,
) {
  if (isIterable(iterable)) {
    return fluent(iterable);
  } else if (isAsyncIterable(iterable)) {
    return fluentAsync(iterable);
  } else if (iterable instanceof EventEmitter) {
    return fluentEmit(iterable, options);
  }
  return fluentObject(iterable);
}

export { f };
