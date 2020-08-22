import { Equality } from '../types-base';

function partitionLengthComparer(size: number) {
  let i = 1;
  return function () {
    const result = i < size;
    i = result ? i + 1 : 1;
    return result;
  };
}

export function getPartitionComparer<T>(criteria: number | Equality<T>) {
  return typeof criteria === 'number'
    ? partitionLengthComparer(criteria)
    : criteria;
}
