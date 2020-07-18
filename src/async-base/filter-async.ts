import { AsyncPredicate } from '../types';
import { getChooseIteration } from '../types-internal/choose-iteration';
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

export const filterAsync = getChooseIteration(iterateAsArray, iterate);
