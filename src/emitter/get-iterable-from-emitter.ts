import { FluentEmitOptions } from '../types-base';
import { EventEmitter } from 'events';
import forEmitOf = require('for-emit-of');
import fluent from '../fluent';

const defaultOptions = { event: 'data', error: 'error', end: ['end', 'close'] };

export function getIterableFromEmitter<T = any>(
  emitter: EventEmitter,
  options: FluentEmitOptions | undefined,
): AsyncIterable<T> {
  // TODO: Remove all this wrapping after for-emit-of updates it's version to treat the case where a break can be made in the for await iterating over the async iterable generated
  const treatedOptions = {
    ...defaultOptions,
    keepAlive: 1000,
    ...options,
  };

  if (treatedOptions.end.indexOf('cancel') < 0) {
    treatedOptions.end.push('cancel');
  }

  const customEmitter = new EventEmitter();
  fluent([treatedOptions.event, treatedOptions.error, ...treatedOptions.end])
    .distinct()
    .forEach((event) =>
      emitter.on(event, (data) => customEmitter.emit(event, data)),
    );

  const iterable = forEmitOf<T>(customEmitter, treatedOptions);

  return {
    [Symbol.asyncIterator]() {
      const iterator = iterable[Symbol.asyncIterator]();
      return {
        async next() {
          const nextValue = await iterator.next();

          if (nextValue.done) {
            customEmitter.emit('cancel');
          }

          return nextValue;
        },
        async return(value?: any) {
          customEmitter.emit('cancel');
          return { done: true, value };
        },
      };
    },
  };
}
