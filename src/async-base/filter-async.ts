import { Predicate, AsyncPredicate } from '../types';
import { chooseIteration } from '../types-internal/choose-iteration';
import { AnyIterable } from '../types-internal';

async function* iterateAsArray<T>(
  arr: T[],
  predicate: AsyncPredicate<T>,
): AsyncIterable<T> {
  for (let i = 0; i < arr.length; i++) {
    if (await predicate(arr[i])) {
      yield arr[i];
    }
  }
}

async function* iterate<T>(
  arr: AnyIterable<T>,
  predicate: AsyncPredicate<T>,
): AsyncIterable<T> {
  for await (const t of arr) {
    if (await predicate(t)) {
      yield t;
    }
  }
}

export function filterAsync<T>(
  this: AnyIterable<T>,
  predicate: Predicate<T>,
): AsyncIterable<T> {
  return chooseIteration(this, iterateAsArray, iterate, predicate);
}
