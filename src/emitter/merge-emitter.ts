import { EventEmitter } from 'events';
import { FluentEmitOptions } from '../types-base';
import { merge } from '../async-base';
import { forEmitOf } from '../for-emit-of';

export function mergeEmitter<T>(
  this: AsyncIterable<T>,
  eventEmitter: EventEmitter,
  options?: FluentEmitOptions,
) {
  return merge.call(this, forEmitOf(eventEmitter, { ...options }));
}
