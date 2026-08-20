import { Equality } from '../base';
import { FluentAsyncIterable, FluentIterable } from '../base';

export interface PartitionFunction<T> {
  /**
   * Groups the elements of the iterable into partitions of a specified size.<br>
   *   Note: the last partition size can be smaller than the specified size.
   * @param criteria The expected size of the partitions or a equality to determine of two consecutive items must be in the same partition.
   * @returns The [[FluentAsyncIterable]] of partitions.
   */
  (criteria: number | Equality<T>): FluentIterable<FluentIterable<T>>;
}

export interface AsyncPartitionFunction<T> {
  /**
   * Groups the elements of the iterable into partitions of a specified size.<br>
   *   Note: the last partition size can be smaller than the specified size.
   * @param criteria The expected size of the partitions or a equality to determine of two consecutive items must be in the same partition.
   * @returns The [[FluentAsyncIterable]] of partitions.
   */
  (criteria: number | Equality<T>): FluentAsyncIterable<FluentAsyncIterable<T>>;
}
