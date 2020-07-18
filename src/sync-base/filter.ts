import { Predicate } from '../types';
import { getChooseIteration } from '../types-internal/choose-iteration';

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

export const filter = getChooseIteration(iterateAsArray, iterate);
