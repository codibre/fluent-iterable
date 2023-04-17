import { FluentAsyncIterable } from './types';
import { FluentEmitOptions } from './types/base';
import {
  asyncIterableFuncs,
  asyncResolvingFuncs,
  asyncSpecial,
} from './mounters';
import { mountSpecial } from './mounters';
import { EventEmitter } from 'events';
import { getIterableFromEmitter } from './emitter';
import { fluentAsync } from './fluent-async-func';
import {
  FluentAsyncClass,
  addAsyncFluentMethod,
  addAsyncFluentResolvingMethod,
} from './fluent-async-class';
import { addFactory } from './utils/internal-utils';

/**
 * Transforms an EventEmitter into a [[FluentAsyncIterable]].
 *
 *
 * **IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
 * emission generates a new yielded result. The default key event is **'data'**.
 *
 * Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
 * The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
 * to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.
 *
 * If you need to change the key event or other characteristics, you can do it through the **options** parameter
 * @typeparam T The type of the items in the created FluentAsyncIterable.
 * @param emitter The EventEmitter
 * @param options The EventEmitter options. Optional
 * @returns The [[FluentAsyncIterable]] instance.
 */
function fluentEmit<T = any>(
  emitter: EventEmitter,
  options?: FluentEmitOptions,
): FluentAsyncIterable<T> {
  return new FluentAsyncClass(
    getIterableFromEmitter<T>(emitter, options),
  ) as any;
}

Object.keys(asyncIterableFuncs).forEach(
  addFactory(addAsyncFluentMethod, asyncIterableFuncs),
);
const mountedSpecial = mountSpecial(asyncSpecial, fluentAsync, fluentAsync);
Object.keys(mountedSpecial).forEach(
  addFactory(addAsyncFluentMethod, mountedSpecial),
);
Object.keys(asyncResolvingFuncs).forEach(
  addFactory(addAsyncFluentResolvingMethod, asyncResolvingFuncs),
);

export { fluentAsync, fluentEmit };
