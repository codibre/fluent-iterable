import { EventEmitter } from 'events';
import { FluentEmitOptions, ErrorCallback } from '../types/base';
import { mergeCatching } from '../async-base';
import { getIterableFromEmitter } from './get-iterable-from-emitter';

export function mergeEmitterCatching<T>(
  this: AsyncIterable<T>,
  errorCallback: ErrorCallback,
  eventEmitter: EventEmitter,
  options?: FluentEmitOptions,
) {
  return mergeCatching.call(
    this,
    errorCallback,
    getIterableFromEmitter(eventEmitter, options),
  );
}
