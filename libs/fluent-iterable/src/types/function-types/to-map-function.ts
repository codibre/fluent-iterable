import { Mapper } from 'augmentative-iterable';
import { Reducer } from '../base';

export interface ToMapFunction<T> {
  /**
   * Create a Map from the iterable. This is a resolving operation
   * @typeparam K The type of the data the element equality is based on.
   * @param getKey The projection to use to determine element equality. It serves as key of the resulting Map.
   * @param mapper: Maps the first iterated item to the Map value type
   * @param reduceValue reduce the following items to the map value type. If not informed, assumes only the first value
   * @returns The [[FluentIterable]] of the distinct elements.
   */
  <K, V>(
    getKey: Mapper<T, K>,
    mapper: Mapper<T, V>,
    reduceValue?: Reducer<V, T>,
  ): Map<K, V>;
  /**
   * Create a Map from the iterable. This is a resolving operation
   * @typeparam K The type of the data the element equality is based on.
   * @param getKey The key of T for element equality. It serves as key of the resulting Map.
   * @param mapper: Maps the first iterated item to the Map value type
   * @param reduceValue reduce the following items to the map value type. If not informed, assumes only the first value
   * @returns The [[FluentIterable]] of the distinct elements.
   */
  <K extends keyof T, V>(
    getKey: K,
    mapper: Mapper<T, V>,
    reduceValue?: Reducer<V, T>,
  ): Map<T[K], V>;
  /**
   * Create a Map from the iterable. This is a resolving operation
   * @typeparam K The type of the data the element equality is based on.
   * @param getKey The key of T for element equality. It serves as key of the resulting Map.
   * @param getValue: The key to be used as value
   * @param reduceValue reduce the following items to the map value type. If not informed, assumes only the first value
   * @returns The [[FluentIterable]] of the distinct elements.
   */
  <K extends keyof T, V extends keyof T>(
    getKey: K,
    mapper: V,
    reduceValue?: Reducer<T[V], T>,
  ): Map<T[K], T[V]>;
}
export interface AsyncToMapFunction<T> {
  /**
   * Create a Map from the iterable. This is a resolving operation
   * @typeparam K The type of the data the element equality is based on.
   * @param getKey The projection to use to determine element equality. It serves as key of the resulting Map.
   * @param mapper: Maps the first iterated item to the Map value type
   * @param reduceValue reduce the following items to the map value type. If not informed, assumes only the first value
   * @returns The [[FluentIterable]] of the distinct elements.
   */
  <K, V>(
    getKey: Mapper<T, K>,
    mapper: Mapper<T, V>,
    reduceValue: Reducer<V, T>,
  ): Promise<Map<K, V>>;
  /**
   * Create a Map from the iterable. This is a resolving operation
   * @typeparam K The type of the data the element equality is based on.
   * @param getKey The key of T for element equality. It serves as key of the resulting Map.
   * @param mapper: Maps the first iterated item to the Map value type
   * @param reduceValue reduce the following items to the map value type. If not informed, assumes only the first value
   * @returns The [[FluentIterable]] of the distinct elements.
   */
  <K extends keyof T, V>(
    getKey: K,
    mapper: Mapper<T, V>,
    reduceValue: Reducer<V, T>,
  ): Promise<Map<T[K], V>>;
  /**
   * Create a Map from the iterable. This is a resolving operation
   * @typeparam K The type of the data the element equality is based on.
   * @param getKey The key of T for element equality. It serves as key of the resulting Map.
   * @param getValue: The key to be used as value
   * @param reduceValue reduce the following items to the map value type. If not informed, assumes only the first value
   * @returns The [[FluentIterable]] of the distinct elements.
   */
  <K extends keyof T, V extends keyof T>(
    getKey: K,
    mapper: V,
    reduceValue?: Reducer<T[V], T>,
  ): Promise<Map<T[K], T[V]>>;
}
