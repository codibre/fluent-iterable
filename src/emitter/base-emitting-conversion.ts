import { AnyIterable } from 'augmentative-iterable';
import { EventEmitter } from 'events';
import { FluentEmitOptions } from '../types-base';
import { getIterableFromEmitter } from './get-iterable-from-emitter';

export function getBaseEmittingConversion(operation: Function) {
  return function <T>(
    this: AnyIterable<T>,
    eventEmitter: EventEmitter,
    options?: FluentEmitOptions,
  ) {
    return operation.call(this, getIterableFromEmitter(eventEmitter, options));
  };
}
