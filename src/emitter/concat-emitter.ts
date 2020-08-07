import { iterateAllAsync } from '../utils';
import { AnyIterable } from 'augmentative-iterable';
import { concatAsync } from '../async';
import { EventEmitter } from 'events';
import { FluentEmitOptions } from '../types';
import { forEmitOf } from '../for-emit-of';

export function concatEmitter<T>(
  this: AnyIterable<T>,
  eventEmitter: EventEmitter,
  options?: FluentEmitOptions,
) {
  return concatAsync.call(this, forEmitOf(eventEmitter, { ...options }));
}
