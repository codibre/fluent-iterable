import { AnyIterable } from 'augmentative-iterable';
import { EventEmitter } from 'events';
import { FluentEmitOptions } from '../types-base';
import forEmitOf from 'for-emit-of';

export function getBaseEmittingConversion(operation: Function) {
  return function <T>(
    this: AnyIterable<T>,
    eventEmitter: EventEmitter,
    options?: FluentEmitOptions,
  ) {
    return operation.call(this, forEmitOf(eventEmitter, { ...options }));
  };
}
