import { AnyIterable } from 'augmentative-iterable';
import {
  addFluentAsyncMethod,
  addFluentMethod,
  addFluentResolvingMethod,
} from './fluent-class';

/**
 * An operation that returns an Iterable
 */
export type IterableOperation = <T>(
  this: Iterable<T>,
  ...args: any[]
) => Iterable<any>;

/**
 * An operation that returns an AsyncIterable
 */
export type IterableOperationAsync = <T>(
  this: Iterable<T>,
  ...args: any[]
) => AsyncIterable<any> | PromiseLike<AnyIterable<any>>;

/**
 * A resolving operation
 */
export type IterableResolvingOperation = <T>(
  this: Iterable<T>,
  ...args: any[]
) => any;

/**
 * Used to add custom methods for the next fluent async iterables created
 * Is recommendable to also declare the method in the interface so it can be visible to typescript, like this:
 * ```ts
 * declare module '@codibre/fluent-iterable'{
 *  interface FluentIterable {
 *    myCustomMethod<R>(myParams: someType): FluentIterable<R>
 *  }
 * }
 * ```
 */
export const extend = {
  /**
   * Add a method that returns another FluentAsyncIterable
   * @param name The name of the method
   * @param operation The operation to be made
   */
  use(name: string, operation: IterableOperation) {
    addFluentMethod(name, operation);
  },
  /**
   * Add a method that returns another FluentAsyncIterable
   * @param name The name of the method
   * @param operation The operation to be made
   */
  useAsync(name: string, operation: IterableOperationAsync) {
    addFluentAsyncMethod(name, operation);
  },
  /**
   * Add a resolving method
   * @param name The name of the method
   * @param operation The resolving operation to be made
   */
  useResolving(name: string, operation: IterableResolvingOperation) {
    addFluentResolvingMethod(name, operation);
  },
};
