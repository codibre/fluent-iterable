import { AnyIterable, Mapper } from 'augmentative-iterable';
import { combineAsync } from '../async';
import { EventEmitter } from 'events';
import { FluentEmitOptions } from '../types';
import { forEmitOf } from '../for-emit-of';

export function combineEmitter<T>(
  this: AnyIterable<T>,
  eventEmitter: EventEmitter,
  optionsOrKeyA?: FluentEmitOptions | Mapper<any, any>,
  keyB?: Mapper<any, any>,
  options?: FluentEmitOptions,
) {
  if (!keyB && typeof optionsOrKeyA !== 'function') {
    options = optionsOrKeyA as FluentEmitOptions;
    optionsOrKeyA = undefined;
  }
  return combineAsync.call(
    this,
    forEmitOf(eventEmitter, { ...options }),
    optionsOrKeyA as Mapper<any, any>,
    keyB,
  );
}
