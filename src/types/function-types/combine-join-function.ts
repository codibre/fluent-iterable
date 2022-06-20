import { AnyIterable, Mapper } from 'augmentative-iterable';
import {
  AsyncItemType,
  FluentAsyncIterable,
  FluentIterable,
  IsAnyOrUnknown,
  ItemType,
} from '../base';

export interface CombineJoinFunctionContract<T> {
  /**
   * Combines all the sub iterables, returning a new iterable with the inner matching combinations
   */
  (): FluentIterable<T[]>;

  /**
   * Combines all the sub iterables, returning a new iterable with the inner matching combinations
   * @param key A mapper that returns the key map value from the iterables
   */
  <K>(key: Mapper<T, K>): FluentIterable<T[]>;

  /**
   * Combines all the sub iterables, returning a new iterable with the inner matching combinations
   * @param key A property name with value will be used as for comparison with the key of the iterables
   */
  (key: keyof T): FluentIterable<T[]>;
}

export type CombineJoinFunction<T> = T extends Iterable<any>
  ? CombineJoinFunctionContract<ItemType<T>>
  : IsAnyOrUnknown<T> extends true
  ? CombineJoinFunctionContract<ItemType<T>>
  : {};

export interface AsyncCombineJoinFunctionContract<T> {
  /**
   * Combines all the sub iterables, returning a new iterable with the inner matching combinations
   */
  (): FluentAsyncIterable<T[]>;

  /**
   * Combines all the sub iterables, returning a new iterable with the inner matching combinations
   * @param key A mapper that returns the key map value from the iterables
   */
  <K>(key: Mapper<T, K>): FluentAsyncIterable<T[]>;

  /**
   * Combines all the sub iterables, returning a new iterable with the inner matching combinations
   * @param key A property name with value will be used as for comparison with the key of the iterables
   */
  (key: keyof T): FluentAsyncIterable<T[]>;
}

export type AsyncCombineJoinFunction<T> = T extends AnyIterable<any>
  ? AsyncCombineJoinFunctionContract<AsyncItemType<T>>
  : IsAnyOrUnknown<T> extends true
  ? AsyncCombineJoinFunctionContract<AsyncItemType<T>>
  : never;
