import { AsyncMapper, Mapper } from 'augmentative-iterable';
import { AsyncKVGroupTransform, FluentGroup, KVGroupTransform } from '../base';
import { FluentAsyncIterable, FluentIterable } from '../base';

export interface GroupFunction<T> {
  /**
   * Groups the elements of the iterable keyed by equality of data at the specified projection.<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).group(word => word[0])` yields { key: 'a', values: ['anchor', 'almond', 'alpine'] } and { key: 'b', values: ['bound'] }.
   * @typeparam R The type of the groups' key.
   * @param mapper Projects the elements of the iterable into the group key they belong to.
   * @param transformValue Optional. Allows a transformation before adding the value to the group. The return must be an iterable
   * @returns The [[FluentIterable]] of the distinct groups.
   */
  <R, V = T>(
    mapper: Mapper<T, R>,
    transformValue?: KVGroupTransform<R, T, V>,
  ): FluentIterable<FluentGroup<V, R>>;
  /**
   * Groups the elements of the iterable keyed by equality of data at the specified projection.<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).group(word => word[0])` yields { key: 'a', values: ['anchor', 'almond', 'alpine'] } and { key: 'b', values: ['bound'] }.
   * @typeparam R The type of the groups' key.
   * @param mapper Projects the elements of the iterable into the group key they belong to.
   * @param transformValue Optional. Allows a transformation before adding the value to the group. The return must be an iterable
   * @returns The [[FluentIterable]] of the distinct groups.
   */
  <R extends keyof T, V = T>(
    mapper: R,
    transformValue?: KVGroupTransform<T[R], T, V>,
  ): FluentIterable<FluentGroup<V, T[R]>>;
}
export interface AsyncGroupFunction<T> {
  /**
   * Groups the elements of the iterable keyed by equality of data at the specified asynchronous projection.
   * @typeparam R The type of the groups key.
   * @param mapper Asynchronously projects the elements of the iterable into the group key they belong to.
   * @param transformValue Optional. Allows a transformation before adding the value to the group. The return must be an iterable or AsyncIterable
   * @returns The [[FluentAsyncIterable]] of the distinct groups.
   */
  <R, V = T>(
    mapper: AsyncMapper<T, R>,
    transformValue?: AsyncKVGroupTransform<R, T, V>,
  ): FluentAsyncIterable<FluentGroup<V, R>>;

  /**
   * Groups the elements of the iterable keyed by equality of data at the specified asynchronous projection.
   * @typeparam R The type of the groups key.
   * @param mapper A property name with value will be used as for comparison with the grouping key
   * @param transformValue Optional. Allows a transformation before adding the value to the group. The return must be an iterable or AsyncIterable
   * @returns The [[FluentAsyncIterable]] of the distinct groups.
   */
  <R extends keyof T, V = T>(
    mapper: R,
    transformValue?: AsyncKVGroupTransform<T[R], T, V>,
  ): FluentAsyncIterable<FluentGroup<V, T[R]>>;
}
