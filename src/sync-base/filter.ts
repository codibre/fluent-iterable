import { Predicate } from '../types';
import { chooseIteration } from '../types-internal/choose-iteration';
import { AnyIterable } from '../types-internal';

function* iterateAsArray<T>(arr: T[], predicate: Predicate<T>): Iterable<T> {
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      yield arr[i];
    }
  }
}

function* iterate<T>(arr: Iterable<T>, predicate: Predicate<T>): Iterable<T> {
  for (const t of arr) {
    if (predicate(t)) {
      yield t;
    }
  }
}

export function filter<T>(
  this: Iterable<T>,
  predicate: Predicate<T>,
): Iterable<T> {
  return chooseIteration(this, iterateAsArray, iterate, predicate);
}
