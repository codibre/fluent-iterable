import { AsyncMapper, Mapper, AnyIterable } from 'augmentative-iterable';
import { AsyncItemType, IsAnyOrUnknown, ItemType } from '../base';
import { FluentAsyncIterable, FluentIterable } from '../base';

export type FlattenNoParams<T> = {
  /**
   * Projects each element of the iterable to an iterable and flattens the resulting iterable into one iterable.<br>
   * Examples:<br>
   *   * `fluent([['anchor', 'almond'], ['bound', 'alpine']]).flatten()` yields *anchor*, *almond*, *bound* and *alpine*.<br>
   * @typeparam R The type of the elements in the inner iterable.
   * @returns The [[FluentIterable]] of the flattened iterable.
   */
  <R extends ItemType<T>>(): FluentIterable<R>;
};

export type FlattenFunction<T> = {
  /**
   * Projects each element of the iterable to an iterable and flattens the resulting iterable into one iterable.<br>
   * Examples:<br>
   *   * `fluent([['anchor', 'almond'], ['bound', 'alpine']]).flatten()` yields *anchor*, *almond*, *bound* and *alpine*.<br>
   *   * `fluent([ { values: ['anchor', 'almond'] }, { values: ['bound', 'alpine'] }]).flatten(obj => obj.values)` yields *anchor*, *almond*, *bound* and *alpine*.
   * @typeparam R The type of the elements in the inner iterable.
   * @param mapper Specifies the projection from the elements of `T` to iterables of `R`. Identity mapping is applied (taking the elements as iterables) if omitted.
   * @returns The [[FluentIterable]] of the flattened iterable.
   */
  <R>(mapper: Mapper<T, Iterable<R>>): FluentIterable<R>;
  /**
   * Projects each element of the iterable to an iterable and flattens the resulting iterable into one iterable.<br>
   * Examples:<br>
   *   * `fluent([ { values: ['anchor', 'almond'] }, { values: ['bound', 'alpine'] }]).flatten(obj => obj.values)` yields *anchor*, *almond*, *bound* and *alpine*.
   * @typeparam R The type of the elements in the inner iterable.
   * @param mapper Specifies the projection from the elements of `T` to iterables of `R`. Identity mapping is applied (taking the elements as iterables) if omitted.
   * @returns The [[FluentIterable]] of the flattened iterable.
   */
  <K extends keyof T, R extends ItemType<T[K]>>(mapper: K): FluentIterable<R>;
} & (T extends Iterable<any>
  ? FlattenNoParams<T>
  : IsAnyOrUnknown<T> extends true
    ? FlattenNoParams<T>
    : {});

export type AsyncFlattenNoParams<T> = {
  /**
   * Projects each element of the iterable to an iterable and flattens the resulting iterable into one iterable.<br>
   * Examples:<br>
   *   * `fluent([['anchor', 'almond'], ['bound', 'alpine']]).flatten()` yields *anchor*, *almond*, *bound* and *alpine*.<br>
   * @typeparam R The type of the elements in the inner iterable.
   * @returns The [[FluentIterable]] of the flattened iterable.
   */
  <R extends AsyncItemType<T>>(): FluentAsyncIterable<R>;
};

export type AsyncFlattenFunction<T> = {
  /**
   * Asynchronously projects each element of the iterable to an iterable and flattens the resulting iterable into one iterable.
   * @typeparam R The type of the elements in the inner iterable.
   * @param mapper Specifies the asynchronous projection from the elements of `T` to iterables of `R`.
   * @returns The flattened [[FluentAsyncIterable]].
   */
  <R>(mapper: AsyncMapper<T, AnyIterable<R>>): FluentAsyncIterable<R>;
  /**
   * Asynchronously projects each element of the iterable to an iterable and flattens the resulting iterable into one iterable.
   * @typeparam R The type of the elements in the inner iterable.
   * @param mapper Specifies the asynchronous projection from the elements of `T` to iterables of `R`.
   * @returns The flattened [[FluentAsyncIterable]].
   */
  <K extends keyof T, R extends AsyncItemType<T[K]>>(
    mapper: K,
  ): FluentAsyncIterable<R>;
} & (T extends AnyIterable<any>
  ? AsyncFlattenNoParams<T>
  : IsAnyOrUnknown<T> extends true
    ? AsyncFlattenNoParams<T>
    : {});
