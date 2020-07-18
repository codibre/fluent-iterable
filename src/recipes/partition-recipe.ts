import { yieldArrayPartition } from './yield-array-partition';
import { getChooseIteration } from '../recipes';

export function getPartition(iterate: any) {
  const partitioning = getChooseIteration(yieldArrayPartition, iterate);
  return function <T>(this: Iterable<T>, size: number): Iterable<Iterable<T>> {
    if (size < 1) {
      throw new Error(
        `Validation failed, size (${size}) expected to be bigger than 0`,
      );
    }

    return partitioning.call(this, size);
  };
}
