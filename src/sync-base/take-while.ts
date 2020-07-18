import { Predicate } from '../types';
import { chooseIteration } from '../types-internal';

function* iterateAsArray<T>(arr: T[], condition: Predicate<T>): Iterable<T> {
  for (let i = 0; i < arr.length && condition(arr[i]); i++) {
    yield arr[i];
  }
}

function* iterate<T>(arr: Iterable<T>, condition: Predicate<T>): Iterable<T> {
  for (const t of arr) {
    if (!condition(t)) {
      break;
    }

    yield t;
  }
}

export function takeWhile<T>(
  this: Iterable<T>,
  condition: Predicate<T>,
): Iterable<T> {
  return chooseIteration(this, iterateAsArray, iterate, condition);
}
