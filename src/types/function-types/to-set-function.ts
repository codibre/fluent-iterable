import { AsyncMapper, Mapper } from 'augmentative-iterable';
import { Reducer } from '../base';

export interface ToSetFunction<T> {
  /**
   * Create a Set from the iterable. This is a resolving operation
   */
  (): Set<T>;
  /**
   * Create a Set from the iterable. This is a resolving operation
   * @param mapper: Maps the first iterated item to the Map value type
   */
  <V>(mapper: Mapper<T, V>): Set<V>;
  /**
   * Create a Set from the iterable. This is a resolving operation
   * @param mapper: The key of the item from where the value will be extracted
   */
  <K extends keyof T>(mapper: K): Set<T[K]>;
}
export interface AsyncToSetFunction<T> {
  /**
   * Create a Set from the iterable. This is a resolving operation
   */
  (): Promise<Set<T>>;
  /**
   * Create a Set from the iterable. This is a resolving operation
   * @param mapper: Maps the first iterated item to the Map value type
   */
  <V>(mapper: AsyncMapper<T, V>): Promise<Set<V>>;
  /**
   * Create a Set from the iterable. This is a resolving operation
   * @param mapper: The key of the item from where the value will be extracted
   */
  <K extends keyof T>(mapper: K): Promise<Set<T[K]>>;
}
