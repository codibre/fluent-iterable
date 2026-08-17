import { FluentEmitOptions } from '../types/base';
import { EventEmitter } from 'events';

export function getIterableFromEmitter<T = any>(
  emitter: EventEmitter,
  options: FluentEmitOptions | undefined,
): AsyncIterable<T> {
  return require('for-emit-of')(emitter, { ...options, keepAlive: 1000 });
}
