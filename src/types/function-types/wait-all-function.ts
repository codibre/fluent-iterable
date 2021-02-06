import { AsyncMapper } from 'augmentative-iterable';

export interface WaitAllFunction<T> {
  /**
   * Applies a async transformation for every element in the array and, then, wait for they conclusion with Promise.all. This is a resolving operation.
   * @param mapper The asynchronous function which projects the elements of the iterable into promises.
   * @returns a promises that resolves into an array with the result of all mappings.
   */
  <R>(mapper: AsyncMapper<T, R>): PromiseLike<R[]>;

  /**
   * Applies a async transformation for every element in the array and, then, wait for they conclusion with Promise.all. This is a resolving operation.
   * @param mapper The asynchronous function which projects the elements of the iterable into promises.
   * @returns a promises that resolves into an array with the result of all mappings.
   */
  <R extends keyof T>(mapper: R): PromiseLike<T[R][]>;
}

export interface AsyncWaitAllFunction<T> extends WaitAllFunction<T> {}
