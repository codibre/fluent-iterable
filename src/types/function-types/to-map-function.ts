import { Mapper } from 'augmentative-iterable';
import { Reducer } from '../base';

export interface ToMapFunction<T> {
  /**
   * Create a Map from the iterable. This is a resolving operation
   * @typeparam K The type of the data the element equality is based on.
   * @param getKet The projection to use to determine element equality. It serves as key of the resulting Map.
   * @param mapper: Maps the first iterated item to the Map value type
   * @param reduceValue reduce the following items to the map value type
   * @returns The [[FluentIterable]] of the distinct elements.
   */
  <K, V>(
    getKey: Mapper<T, K>,
    mapper: Mapper<T, V>,
    reduceValue: Reducer<T, V>,
  ): Map<K, V>;
  /**
   * Create a Map from the iterable. This is a resolving operation
   * @typeparam K The type of the data the element equality is based on.
   * @param getKet The key of T for element equality. It serves as key of the resulting Map.
   * @param mapper: Maps the first iterated item to the Map value type
   * @param reduceValue reduce the following items to the map value type
   * @returns The [[FluentIterable]] of the distinct elements.
   */
  <K extends keyof T, V>(
    getKey: K,
    mapper: Mapper<T, V>,
    reduceValue: Reducer<T, V>,
  ): Map<T[K], V>;
}
export interface AsyncToMapFunction<T> {
  /**
   * Create a Map from the iterable. This is a resolving operation
   * @typeparam K The type of the data the element equality is based on.
   * @param getKet The projection to use to determine element equality. It serves as key of the resulting Map.
   * @param mapper: Maps the first iterated item to the Map value type
   * @param reduceValue reduce the following items to the map value type
   * @returns The [[FluentIterable]] of the distinct elements.
   */
  <K, V>(
    getKey: Mapper<T, K>,
    mapper: Mapper<T, V>,
    reduceValue: Reducer<T, V>,
  ): Promise<Map<K, V>>;
  /**
   * Create a Map from the iterable. This is a resolving operation
   * @typeparam K The type of the data the element equality is based on.
   * @param getKet The key of T for element equality. It serves as key of the resulting Map.
   * @param mapper: Maps the first iterated item to the Map value type
   * @param reduceValue reduce the following items to the map value type
   * @returns The [[FluentIterable]] of the distinct elements.
   */
  <K extends keyof T, V>(
    getKey: K,
    mapper: Mapper<T, V>,
    reduceValue: Reducer<T, V>,
  ): Promise<Map<T[K], V>>;
}
