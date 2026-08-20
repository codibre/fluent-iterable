/* eslint-disable no-magic-numbers */
import { Mapper } from 'augmentative-iterable';
import { AsyncReducer, ItemType, Reducer } from '../base';
import { BaseChainKeyType, Indexes } from './to-object-chain-function';

export type ToMapChainKey<T> = keyof T | Mapper<T, unknown>;

export type ToMapChainValueOf<V, K extends ToMapChainKey<V>> =
  K extends Mapper<V, unknown>
    ? ReturnType<K>
    : K extends keyof V
      ? V[K]
      : never;

export type MapChain<
  Arr extends Array<ToMapChainKey<V>>,
  V,
  R = V[],
  Pos extends number = 0,
> = {
  done: R;
  any: any;
  recur: ToMapChainValueOf<V, Arr[Pos]> extends BaseChainKeyType
    ? Map<ToMapChainValueOf<V, Arr[Pos]>, MapChain<Arr, V, R, Indexes[Pos]>>
    : ToMapChainValueOf<V, Arr[Pos]> extends Iterable<unknown>
      ? Map<
          ItemType<ToMapChainValueOf<V, Arr[Pos]>>,
          MapChain<Arr, V, R, Indexes[Pos]>
        >
      : never;
}[Pos extends Arr['length'] ? 'done' : Pos extends -1 ? 'any' : 'recur'];

export interface ToMapChainFunction<T> {
  /**
   * Creates an map chain with the values of the specified fields where the latest
   * value in the chain will be the iterable item itself. This is a resolving operation
   * @param keys The keys to be chained
   * @returns The object chain
   */
  <A extends Array<ToMapChainKey<T>>>(...keys: A): MapChain<A, T>;
}
export interface AsyncToMapChainFunction<T> {
  /**
   * Creates an map chain with the values of the specified fields where the latest
   * value in the chain will be the iterable item itself. This is a resolving operation
   * @param keys The keys to be chained. It can be either property names or mapping functions
   * @returns The object chain
   */
  <A extends Array<ToMapChainKey<T>>>(...keys: A): Promise<MapChain<A, T>>;
}

export interface ToMapChainReduceFunction<T> {
  /**
   * Creates an map chain with the values of the specified fields where the latest
   * value in the chain will be the iterable item itself. This is a resolving operation
   * @param initial An initializer function to define the base value for each leaf
   * @param reduce: A reduce function to accumulate the leaf value for each value that fits it
   * @param keys The keys to be chained. It can be either property names or mapping functions
   * @returns The object chain
   */
  <A extends Array<ToMapChainKey<T>>, R>(
    initial: () => R,
    reduce: Reducer<T, R>,
    ...keys: A
  ): MapChain<A, T, R>;
}
export interface AsyncToMapChainReduceFunction<T> {
  /**
   * Creates an map chain with the values of the specified fields where the latest
   * value in the chain will be the iterable item itself. This is a resolving operation
   * @param initial An initializer function to define the base value for each leaf
   * @param reduce: A reduce function to accumulate the leaf value for each value that fits it
   * @param keys The keys to be chained. It can be either property names or mapping functions
   * @returns The object chain
   */
  <A extends Array<ToMapChainKey<T>>, R>(
    initial: () => R,
    reduce: AsyncReducer<T, R>,
    ...keys: A
  ): Promise<MapChain<A, T, R>>;
}
