import { Mapper } from 'augmentative-iterable';
import { FluentAsyncIterable, FluentIterable } from '../base';

export interface NextFunction<T> {
  /**
   * Chain the iterable with a next transformation, of total control of the callback function
   * @param callback the callback function
   */
  <R>(callback: Mapper<FluentIterable<T>, R>): R;
}

export interface AsyncNextFunction<T> {
  /**
   * Chain the async iterable with a next transformation, of total control of the callback function
   * @param callback the callback function
   */
  <R>(callback: Mapper<FluentAsyncIterable<T>, R>): R;
}
