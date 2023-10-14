import { AnyIterable } from 'augmentative-iterable';
import { EventEmitter } from 'events';
import { FluentEmitter } from '../types/base';
import { RequiredResolverIngredient } from './ingredients';

export function emitRecipe(forEach: RequiredResolverIngredient) {
  return function <T>(this: AnyIterable<T>): FluentEmitter<T> {
    const emitter = new EventEmitter() as FluentEmitter<T>;
    process.nextTick(async () => {
      try {
        await forEach.call(this, (x: T) => emitter.emit('data', x));
        emitter.emit('end');
      } catch (error) {
        if (emitter.listenerCount('error') === 0) {
          throw error;
        }
        emitter.emit('error', error);
      }
    });

    return emitter;
  };
}
