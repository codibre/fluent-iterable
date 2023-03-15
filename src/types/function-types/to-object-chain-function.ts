/* eslint-disable no-magic-numbers */
import { AsyncReducer, ItemType, KeysOfType, Reducer } from '../base';

export type ChainKeyType =
  | string
  | symbol
  | number
  | Array<string | symbol | number>
  | ReadonlyArray<string | symbol | number>;
type Indexes = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  -1,
];

export type RecordChain<
  Arr extends Array<KeysOfType<V, ChainKeyType>>,
  V,
  R = V[],
  Pos extends number = 0,
> = {
  done: R;
  any: any;
  recur: V[Arr[Pos]] extends string | number | symbol
    ? Record<V[Arr[Pos]], RecordChain<Arr, V, R, Indexes[Pos]>>
    : V[Arr[Pos]] extends Array<string | number | symbol>
    ? Record<ItemType<V[Arr[Pos]]>, RecordChain<Arr, V, R, Indexes[Pos]>>
    : never;
}[Pos extends Arr['length'] ? 'done' : Pos extends -1 ? 'any' : 'recur'];

export interface ToObjectChainFunction<T> {
  /**
   * Creates an object chain with the values of the specified fields where the latest
   * value in the chain will be the iterable item itself. This is a resolving operation
   * @param keys The keys to be chained
   * @returns The object chain
   */
  <A extends Array<KeysOfType<T, ChainKeyType>>>(...keys: A): RecordChain<A, T>;
}
export interface AsyncToObjectChainFunction<T> {
  /**
   * Creates an object chain with the values of the specified fields where the latest
   * value in the chain will be the iterable item itself. This is a resolving operation
   * @param keys The keys to be chained
   * @returns The object chain
   */
  <A extends Array<KeysOfType<T, ChainKeyType>>>(...keys: A): Promise<
    RecordChain<A, T>
  >;
}

export interface ToObjectChainReduceFunction<T> {
  /**
   * Creates an object chain with the values of the specified fields where the latest
   * value in the chain will be the iterable item itself. This is a resolving operation
   * @param initial An initializer function to define the base value for each leaf
   * @param reduce: A reduce function to accumulate the leaf value for each value that fits it
   * @param keys The keys to be chained
   * @returns The object chain
   */
  <A extends Array<KeysOfType<T, ChainKeyType>>, R>(
    initial: () => R,
    reduce: Reducer<T, R>,
    ...keys: A
  ): RecordChain<A, T, R>;
}
export interface AsyncToObjectChainReduceFunction<T> {
  /**
   * Creates an object chain with the values of the specified fields where the latest
   * value in the chain will be the iterable item itself. This is a resolving operation
   * @param initial An initializer function to define the base value for each leaf
   * @param reduce: A reduce function to accumulate the leaf value for each value that fits it
   * @param keys The keys to be chained
   * @returns The object chain
   */
  <A extends Array<KeysOfType<T, ChainKeyType>>, R>(
    initial: () => R,
    reduce: AsyncReducer<T, R>,
    ...keys: A
  ): Promise<RecordChain<A, T, R>>;
}
