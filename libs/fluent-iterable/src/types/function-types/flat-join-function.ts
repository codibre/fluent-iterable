import {
  tail,
  head,
  AsyncItemOrSelfType,
  FluentAsyncIterable,
} from './../base';
import { ItemOrSelfType, FluentIterable } from '../base';

export type FlatJoinResult<
  TResult,
  T,
  R1,
  K0 extends string | number | symbol,
> = {
  [head]: TResult;
  [tail]: T;
} & Record<K0, R1>;

export type Exclusive1<R1, K1 extends keyof R1, KN> = K1 extends KN
  ? {}
  : Record<K1, ItemOrSelfType<R1[K1]>>;

export type Exclusive2<
  R2,
  K2 extends keyof R2,
  R1,
  K1 extends keyof R1,
  K0,
> = Exclusive1<R1, K1, K0> & Exclusive1<R2, K2, K0 | K1>;

export type Exclusive3<
  R3,
  K3 extends keyof R3,
  R2,
  K2 extends keyof R2,
  R1,
  K1 extends keyof R1,
  K0,
> = Exclusive2<R2, K2, R1, K1, K0> & Exclusive1<R3, K3, K0 | K1 | K2>;

export type Exclusive4<
  R4,
  K4 extends keyof R4,
  R3,
  K3 extends keyof R3,
  R2,
  K2 extends keyof R2,
  R1,
  K1 extends keyof R1,
  K0,
> = Exclusive3<R3, K3, R2, K2, R1, K1, K0> &
  Exclusive1<R4, K4, K0 | K1 | K2 | K3>;

export type Exclusive5<
  R5,
  K5 extends keyof R5,
  R4,
  K4 extends keyof R4,
  R3,
  K3 extends keyof R3,
  R2,
  K2 extends keyof R2,
  R1,
  K1 extends keyof R1,
  K0,
> = Exclusive4<R4, K4, R3, K3, R2, K2, R1, K1, K0> &
  Exclusive1<R5, K5, K0 | K1 | K2 | K3 | K4>;

export interface FlatJoinFunction<T> {
  /**
   * This operation flattens the whole informed path into a flat object.
   * Each informed param must be the name of a field in the path, the field being an iterable or not
   * If the name of a property appears twice in the path, the resulting object will have only the value of the first one
   * in the path.
   * @param field Specifies the name of the first field
   * @returns The [[FluentIterable]] of the flattened iterable.
   */
  <
    R0 extends ItemOrSelfType<T>,
    K0 extends keyof R0,
    R1 extends ItemOrSelfType<R0[K0]>,
  >(
    field: K0,
  ): FluentIterable<FlatJoinResult<R1, T, R1, K0>>;
  <
    R0 extends ItemOrSelfType<T>,
    K0 extends keyof R0,
    R1 extends ItemOrSelfType<R0[K0]>,
    K1 extends keyof R1,
    R2 extends ItemOrSelfType<R1[K1]>,
  >(
    field0: K0,
    field1: K1,
  ): FluentIterable<FlatJoinResult<R2, T, R1, K0> & Exclusive1<R1, K1, K0>>;
  <
    R0 extends ItemOrSelfType<T>,
    K0 extends keyof R0,
    R1 extends ItemOrSelfType<R0[K0]>,
    K1 extends keyof R1,
    R2 extends ItemOrSelfType<R1[K1]>,
    K2 extends keyof R2,
    R3 extends ItemOrSelfType<R2[K2]>,
  >(
    field0: K0,
    field1: K1,
    field2: K2,
  ): FluentIterable<
    FlatJoinResult<R3, T, R1, K0> & Exclusive2<R2, K2, R1, K1, K0>
  >;
  <
    R0 extends ItemOrSelfType<T>,
    K0 extends keyof R0,
    R1 extends ItemOrSelfType<R0[K0]>,
    K1 extends keyof R1,
    R2 extends ItemOrSelfType<R1[K1]>,
    K2 extends keyof R2,
    R3 extends ItemOrSelfType<R2[K2]>,
    K3 extends keyof R3,
    R4 extends ItemOrSelfType<R3[K3]>,
  >(
    field0: K0,
    field1: K1,
    field2: K2,
    field3: K3,
  ): FluentIterable<
    FlatJoinResult<R4, T, R1, K0> & Exclusive3<R3, K3, R2, K2, R1, K1, K0>
  >;
  <
    R0 extends ItemOrSelfType<T>,
    K0 extends keyof R0,
    R1 extends ItemOrSelfType<R0[K0]>,
    K1 extends keyof R1,
    R2 extends ItemOrSelfType<R1[K1]>,
    K2 extends keyof R2,
    R3 extends ItemOrSelfType<R2[K2]>,
    K3 extends keyof R3,
    R4 extends ItemOrSelfType<R3[K3]>,
    K4 extends keyof R4,
    R5 extends ItemOrSelfType<R4[K4]>,
  >(
    field0: K0,
    field1: K1,
    field2: K2,
    field3: K3,
    field4: K4,
  ): FluentIterable<
    FlatJoinResult<R5, T, R1, K0> &
      Exclusive4<R4, K4, R3, K3, R2, K2, R1, K1, K0>
  >;
  <
    R0 extends ItemOrSelfType<T>,
    K0 extends keyof R0,
    R1 extends ItemOrSelfType<R0[K0]>,
    K1 extends keyof R1,
    R2 extends ItemOrSelfType<R1[K1]>,
    K2 extends keyof R2,
    R3 extends ItemOrSelfType<R2[K2]>,
    K3 extends keyof R3,
    R4 extends ItemOrSelfType<R3[K3]>,
    K4 extends keyof R4,
    R5 extends ItemOrSelfType<R4[K4]>,
    K5 extends keyof R5,
    KN extends string | number | symbol,
  >(
    field0: K0,
    field1: K1,
    field2: K2,
    field3: K3,
    field4: K4,
    field5: K5,
    ...fields: KN[]
  ): FluentIterable<
    FlatJoinResult<any, T, R1, K0> &
      Exclusive5<R5, K5, R4, K4, R3, K3, R2, K2, R1, K1, K0> &
      Record<KN, any>
  >;
}

export interface AsyncFlatJoinFunction<T> {
  /**
   * This operation flattens the whole informed path into a flat object.
   * Each informed param must be the name of a field in the path, the field being an iterable or not
   * If the name of a property appears twice in the path, the resulting object will have only the value of the first one
   * in the path.
   * @param field Specifies the name of the first field
   * @returns The [[FluentIterable]] of the flattened iterable.
   */
  <
    R0 extends AsyncItemOrSelfType<T>,
    K0 extends keyof R0,
    R1 extends AsyncItemOrSelfType<R0[K0]>,
  >(
    field: K0,
  ): FluentAsyncIterable<FlatJoinResult<R1, T, R1, K0>>;
  <
    R0 extends AsyncItemOrSelfType<T>,
    K0 extends keyof R0,
    R1 extends AsyncItemOrSelfType<R0[K0]>,
    K1 extends keyof R1,
    R2 extends AsyncItemOrSelfType<R1[K1]>,
  >(
    field0: K0,
    field1: K1,
  ): FluentIterable<FlatJoinResult<R2, T, R1, K0> & Exclusive1<R1, K1, K0>>;
  <
    R0 extends AsyncItemOrSelfType<T>,
    K0 extends keyof R0,
    R1 extends AsyncItemOrSelfType<R0[K0]>,
    K1 extends keyof R1,
    R2 extends AsyncItemOrSelfType<R1[K1]>,
    K2 extends keyof R2,
    R3 extends AsyncItemOrSelfType<R2[K2]>,
  >(
    field0: K0,
    field1: K1,
    field2: K2,
  ): FluentAsyncIterable<
    FlatJoinResult<R3, T, R1, K0> & Exclusive2<R2, K2, R1, K1, K0>
  >;
  <
    R0 extends AsyncItemOrSelfType<T>,
    K0 extends keyof R0,
    R1 extends AsyncItemOrSelfType<R0[K0]>,
    K1 extends keyof R1,
    R2 extends AsyncItemOrSelfType<R1[K1]>,
    K2 extends keyof R2,
    R3 extends AsyncItemOrSelfType<R2[K2]>,
    K3 extends keyof R3,
    R4 extends AsyncItemOrSelfType<R3[K3]>,
  >(
    field0: K0,
    field1: K1,
    field2: K2,
    field3: K3,
  ): FluentAsyncIterable<
    FlatJoinResult<R4, T, R1, K0> & Exclusive3<R3, K3, R2, K2, R1, K1, K0>
  >;
  <
    R0 extends AsyncItemOrSelfType<T>,
    K0 extends keyof R0,
    R1 extends AsyncItemOrSelfType<R0[K0]>,
    K1 extends keyof R1,
    R2 extends AsyncItemOrSelfType<R1[K1]>,
    K2 extends keyof R2,
    R3 extends AsyncItemOrSelfType<R2[K2]>,
    K3 extends keyof R3,
    R4 extends AsyncItemOrSelfType<R3[K3]>,
    K4 extends keyof R4,
    R5 extends AsyncItemOrSelfType<R4[K4]>,
  >(
    field0: K0,
    field1: K1,
    field2: K2,
    field3: K3,
    field4: K4,
  ): FluentAsyncIterable<
    FlatJoinResult<R5, T, R1, K0> &
      Exclusive4<R4, K4, R3, K3, R2, K2, R1, K1, K0>
  >;
  <
    R0 extends AsyncItemOrSelfType<T>,
    K0 extends keyof R0,
    R1 extends AsyncItemOrSelfType<R0[K0]>,
    K1 extends keyof R1,
    R2 extends AsyncItemOrSelfType<R1[K1]>,
    K2 extends keyof R2,
    R3 extends AsyncItemOrSelfType<R2[K2]>,
    K3 extends keyof R3,
    R4 extends AsyncItemOrSelfType<R3[K3]>,
    K4 extends keyof R4,
    R5 extends AsyncItemOrSelfType<R4[K4]>,
    K5 extends keyof R5,
    KN extends string | number | symbol,
  >(
    field0: K0,
    field1: K1,
    field2: K2,
    field3: K3,
    field4: K4,
    field5: K5,
    ...fields: KN[]
  ): FluentAsyncIterable<
    FlatJoinResult<any, T, R1, K0> &
      Exclusive5<R5, K5, R4, K4, R3, K3, R2, K2, R1, K1, K0> &
      Record<KN, any>
  >;
}
