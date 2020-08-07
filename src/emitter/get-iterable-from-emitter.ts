import { FluentEmitOptions } from '../types-base';
import { EventEmitter } from 'events';
import forEmitOf from 'for-emit-of';
export function getIterableFromEmitter<T = any>(
  emitter: EventEmitter,
  options: FluentEmitOptions | undefined,
): AsyncIterable<T> {
  return forEmitOf<T>(emitter, { ...options, keepAlive: 1000 });
}
