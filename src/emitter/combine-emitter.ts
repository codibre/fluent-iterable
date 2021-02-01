import { AnyIterable, Mapper } from 'augmentative-iterable';
import { combineAsync } from '../async';
import { FluentEmitOptions } from '../types/base';
import { getIterableFromEmitter } from './get-iterable-from-emitter';

export function combineEmitter<T>(
  this: AnyIterable<T>,
  eventEmitter: any,
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
    getIterableFromEmitter(eventEmitter, options),
    optionsOrKeyA as Mapper<any, any>,
    keyB,
  );
}
