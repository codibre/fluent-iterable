import { AnyIterable } from 'augmentative-iterable';
import { FluentAsyncIterable, FluentIterable } from '../base';

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
