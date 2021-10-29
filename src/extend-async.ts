import { mountIterableFunctions } from './mounters';
import { addCustomMethod } from './add-custom-method';
import { AnyIterable } from 'augmentative-iterable';
import { fluentAsync } from './fluent-async';
import { asyncProxyReference } from './async-handler';

/**
 * An operation that returns an AsyncIterable
 */
export type AsyncIterableOperation = <T>(
  iterable: AsyncIterable<T>,
  ...args: any[]
) => AsyncIterable<any> | PromiseLike<AnyIterable<any>>;

/**
 * A resolving operation
 */
export type AsyncIterableResolvingOperation = <T>(
  iterable: AsyncIterable<T>,
  ...args: any[]
) => PromiseLike<any>;

/**
 * Used to add custom methods for the next fluent async iterables created
 * Is recommendable to also declare the method in the interface namespace so it can be visible to typescript, like this:
 * ```ts
 * declare namespace FluentAsyncIterable {
 *   myCustomMethod<R>(myParams: someType): FluentAsyncIterable<R>
 * }
 * ```
 */
export const extendAsync = {
  /**
   * Add a method that returns another FluentAsyncIterable
   * @param name The name of the method
   * @param operation The operation to be made
   */
  use(name: string, operation: AsyncIterableOperation) {
    addCustomMethod(
      asyncProxyReference,
      mountIterableFunctions({ [name]: operation }, fluentAsync),
    );
  },
  /**
   * Add a resolving method
   * @param name The name of the method
   * @param operation The resolving operation to be made
   */
  useResolving(
    name: string,
    operation: (iterable: AsyncIterableResolvingOperation) => any,
  ) {
    addCustomMethod(asyncProxyReference, { [name]: operation });
  },
};
