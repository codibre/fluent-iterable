import { Mapper } from '../types';
import { chooseIteration } from '../types-internal';

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

export function map<T, R>(
  this: Iterable<T>,
  mapper: Mapper<T, R>,
): Iterable<R> {
  return chooseIteration(this, iterateAsArray, iterate, mapper);
}
