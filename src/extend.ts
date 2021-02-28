import { mountIterableFunctions } from './mounters';
import { addCustomMethod } from './add-custom-method';
import { AnyIterable } from 'augmentative-iterable';
import { fluent } from '.';
import { fluentAsync } from './fluent-async';
import { proxyReference } from './sync-handler';

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
    addCustomMethod(
      proxyReference,
      mountIterableFunctions({ [name]: operation }, fluent),
    );
  },
  /**
   * Add a method that returns another FluentAsyncIterable
   * @param name The name of the method
   * @param operation The operation to be made
   */
  useAsync(name: string, operation: IterableOperationAsync) {
    addCustomMethod(
      proxyReference,
      mountIterableFunctions({ [name]: operation }, fluentAsync),
    );
  },
  /**
   * Add a resolving method
   * @param name The name of the method
   * @param operation The resolving operation to be made
   */
  useResolving(name: string, operation: IterableResolvingOperation) {
    addCustomMethod(proxyReference, { [name]: operation });
  },
};
