import { AsyncItemType } from './../base';
/* eslint-disable no-magic-numbers */
import { AnyIterable } from 'augmentative-iterable';
import { FluentAsyncIterable, FluentIterable } from '../base';

export type UnwindResult<
  Arr extends Array<keyof V>,
  V,
  Type extends 'sync' | 'async',
> = {
  unwinded: {
    [k in Arr[number]]: V[k] extends (
      Type extends 'sync' ? Iterable<any> : AnyIterable<any>
    )
      ? AsyncItemType<V[k]>
      : V[k];
  };
  value: V;
};

export interface UnwindFunction<T, Type extends 'sync' | 'async'> {
  /**
   * Unwinds the specified properties creating a new iterable with multiple items
   * for each combination of unwinded values for each original item
   * @param keys The keys to be unwinded
   * @returns The object chain
   */
  <A extends Array<keyof T>>(...keys: A): Type extends 'sync'
    ? FluentIterable<UnwindResult<A, T, Type>>
    : FluentAsyncIterable<UnwindResult<A, T, Type>>;
}
