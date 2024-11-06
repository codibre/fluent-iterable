import { AnyIterable } from 'augmentative-iterable';
import { on } from 'events';
import { EventEmitter } from 'stream';
import { FluentEmitOptions } from '../types/base';

const NODE_VERSION = Number(process.version.split('.')[0].substring(1));
const VERSION_WITH_RELIABLE_ON = 20;
let fluentAsync: Function;
let fluentEmit: Function;

const getBranchedAsyncIterable =
  NODE_VERSION >= VERSION_WITH_RELIABLE_ON
    ? <T>(emitter: EventEmitter): AsyncIterable<T> => {
        const iterable = on(emitter, 'item', {
          close: ['close'],
        });
        fluentAsync ??= require('../fluent-async-func').fluentAsync;
        return fluentAsync(iterable).filter('length').map(0);
      }
    : <T>(emitter: EventEmitter): AsyncIterable<T> => {
        fluentEmit ??= require('../fluent-async').fluentEmit;
        return fluentEmit(emitter, {
          end: ['close'],
          error: 'error',
          event: 'item',
        } as FluentEmitOptions);
      };

function emitEventFromIterable<T>(it: AnyIterable<T>, emitter: EventEmitter) {
  setImmediate(async () => {
    try {
      for await (const item of it) emitter.emit('item', item);
      emitter.emit('close');
    } catch (err) {
      emitter.emit('error', err);
    }
  });
}

export function branchRecipe(): any {
  return function branch<T>(
    this: AnyIterable<T>,
    ...items: Array<(it: AnyIterable<T>) => unknown>
  ) {
    const emitter = new EventEmitter();
    const result = items.map((cb) => cb(getBranchedAsyncIterable(emitter)));
    emitEventFromIterable(this, emitter);
    return Promise.all(result);
  };
}
