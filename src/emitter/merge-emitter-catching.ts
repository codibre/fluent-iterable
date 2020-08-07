import { EventEmitter } from 'events';
import { FluentEmitOptions, ErrorCallback } from '../types';
import { mergeCatching } from '../async-base';
import { forEmitOf } from '../for-emit-of';

export function mergeEmitterCatching<T>(
  this: AsyncIterable<T>,
  errorCallback: ErrorCallback,
  eventEmitter: EventEmitter,
  options?: FluentEmitOptions,
) {
  return mergeCatching.call(
    this,
    errorCallback,
    forEmitOf(eventEmitter, { ...options }),
  );
}
