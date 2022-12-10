/* eslint-disable no-magic-numbers */
import { ItemType, KeysOfType } from '../base';

export type ChainKeyType =
  | string
  | symbol
  | number
  | Array<string | symbol | number>;
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
  Pos extends number = 0,
> = {
  done: V[];
  any: any;
  recur: V[Arr[Pos]] extends string | number | symbol
    ? Record<V[Arr[Pos]], RecordChain<Arr, V, Indexes[Pos]>>
    : V[Arr[Pos]] extends Array<string | number | symbol>
    ? Record<ItemType<V[Arr[Pos]]>, RecordChain<Arr, V, Indexes[Pos]>>
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
