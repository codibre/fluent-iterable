import { Mapper } from 'augmentative-iterable';
import { EventEmitter } from 'events';
import { FluentEmitOptions } from './base';
import { FluentAsyncIterable } from './base';

/**
 * Represents the operations using EventEmitters
 * @typeparam T The type of the items in the iterable.
 */
export interface FluentIterableEmitter<T> {
  /**
   * Concatenates the specified Emitter to the async iterable.
   *
   * **IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
   * emission generates a new yielded result. The default key event is **'data'**.
   *
   * Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
   * The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
   * to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.
   *
   * If you need to change the key event or other characteristics, you can do it through the **options** parameter
   * @param emitter The EventEmitter
   * @param options The EventEmitter options. Optional
   * @returns The [[FluentAsyncIterable]] of the concatenated async iterables.
   */
  concatEmitter(
    emitter: EventEmitter,
    options?: FluentEmitOptions,
  ): FluentAsyncIterable<T>;
  /**
   * Join the iterable with an EventEmitter, returning a new async iterable with a NxN combination
   *
   * **IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
   * emission generates a new yielded result. The default key event is **'data'**.
   *
   * Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
   * The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
   * to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.
   *
   * If you need to change the key event or other characteristics, you can do it through the **options** parameter
   * @param emitter The EventEmitter
   * @param options The EventEmitter options. Optional
   */
  combineEmitter<U = any>(
    emitter: EventEmitter,
    options?: FluentEmitOptions,
  ): FluentAsyncIterable<[T, U]>;

  /**
   * Join the iterable with another the EventEmitter, returning a new async iterable with the inner matching combinations
   *
   * **IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
   * emission generates a new yielded result. The default key event is **'data'**.
   *
   * Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
   * The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
   * to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.
   *
   * If you need to change the key event or other characteristics, you can do it through the **options** parameter
   * @param emitter The EventEmitter
   * @param options The EventEmitter options. Optional
   * @param keyA A mapper that returns the key map value from the left iterable
   * @param keyB A mapper that returns the key map value from the right iterable
   */
  combineEmitter<U, K>(
    emitter: EventEmitter,
    keyA: Mapper<T, K>,
    keyB: Mapper<U, K>,
    options?: FluentEmitOptions,
  ): FluentAsyncIterable<[T, U]>;
  /**
   * Join the iterable with another the EventEmitter, returning a new async iterable with the inner matching combinations
   *
   * **IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
   * emission generates a new yielded result. The default key event is **'data'**.
   *
   * Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
   * The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
   * to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.
   *
   * If you need to change the key event or other characteristics, you can do it through the **options** parameter
   * @param emitter The EventEmitter
   * @param options The EventEmitter options. Optional
   * @param keyA A mapper that returns the key map value from the left iterable
   * @param keyB A mapper that returns the key map value from the right iterable
   */
  combineEmitter<U, K>(
    emitter: EventEmitter,
    keyA: keyof T,
    keyB: Mapper<U, K>,
    options?: FluentEmitOptions,
  ): FluentAsyncIterable<[T, U]>;
}
