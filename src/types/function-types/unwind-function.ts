import { AnyIterable } from 'augmentative-iterable';
/* eslint-disable no-magic-numbers */
import { FluentAsyncIterable, FluentIterable } from '../base';

export type UnwindResult<Arr extends Array<keyof V>, V> = {
  unwinded: {
    [k in Arr[number]]: V[k] extends Iterable<infer T> ? T : V[k];
  };
  value: V;
};

export type AsyncUnwindResult<Arr extends Array<keyof V>, V> = {
  unwinded: {
    [k in Arr[number]]: V[k] extends AnyIterable<infer T> ? T : V[k];
  };
  value: V;
};

export interface UnwindFunction<T> {
  /**
   * Unwinds the specified properties creating a new iterable with multiple items
   * for each combination of unwinded values for each original item
   * @param keys The keys to be unwinded
   * @returns The object chain
   */
  <A extends Array<keyof T>>(...keys: A): FluentIterable<UnwindResult<A, T>>;
}
export interface AsyncUnwindFunction<T> {
  /**
   * Unwinds the specified properties creating a new iterable with multiple items
   * for each combination of unwinded values for each original item
   * @param keys The keys to be unwinded
   * @returns The object chain
   */
  <A extends Array<keyof T>>(...keys: A): FluentAsyncIterable<
    AsyncUnwindResult<A, T>
  >;
}
