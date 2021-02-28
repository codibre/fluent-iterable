import { AnyIterable, AsyncPredicate, Predicate } from 'augmentative-iterable';
import { FluentAsyncIterable, FluentIterable } from '../base';
import { Truthy } from '../truthy';

type RequiresTruthy<T, Guarantees extends keyof T> = T &
  {
    [P in Guarantees]-?: Truthy<T[P]>;
  };

export interface WhenEmptyFunction {
  /**
   * Iterates over a fallback iterable when the original is empty
   * @param fallback the fallback iterable
   */
  <R>(fallback: Iterable<R>): FluentIterable<R>;
}
export interface AsyncWhenEmptyFunction {
  /**
   * Iterates over a fallback iterable when the original is empty
   * @param fallback the fallback iterable
   */
  <R>(fallback: AnyIterable<R>): FluentAsyncIterable<R>;
}
