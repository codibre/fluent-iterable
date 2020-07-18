import { Mapper } from '../types';
import { getChooseIteration } from '../recipes';

function* iterateAsArray<T, R>(arr: T[], mapper: Mapper<T, R>): Iterable<R> {
  for (let i = 0; i < arr.length; i++) {
    yield mapper(arr[i]);
  }
}

function* iterate<T, R>(arr: Iterable<T>, mapper: Mapper<T, R>): Iterable<R> {
  for (const t of arr) {
    yield mapper(t);
  }
}

export const map = getChooseIteration(iterateAsArray, iterate);
