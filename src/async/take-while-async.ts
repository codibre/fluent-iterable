import { AsyncPredicate } from '../types';
import { getChooseIteration } from '../recipes';
import { AnyIterable } from '../types-internal';

async function* iterateAsArray<T>(
  arr: T[],
  condition: AsyncPredicate<T>,
): AsyncIterable<T> {
  for (let i = 0; i < arr.length && (await condition(arr[i])); i++) {
    yield arr[i];
  }
}

async function* iterate<T>(
  arr: AnyIterable<T>,
  condition: AsyncPredicate<T>,
): AsyncIterable<T> {
  for await (const t of arr) {
    if (!(await condition(t))) {
      break;
    }

    yield t;
  }
}

export const takeWhileAsync = getChooseIteration(iterateAsArray, iterate);
