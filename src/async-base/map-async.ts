import { AsyncMapper } from '../types';
import { AnyIterable, getChooseIteration } from '../types-internal';

async function* iterateAsArray<T, R>(
  arr: T[],
  mapper: AsyncMapper<T, R>,
): AsyncIterable<R> {
  for (let i = 0; i < arr.length; i++) {
    yield await mapper(arr[i]);
  }
}

async function* iterate<T, R>(
  arr: AnyIterable<T>,
  mapper: AsyncMapper<T, R>,
): AsyncIterable<R> {
  for await (const t of arr) {
    yield await mapper(t);
  }
}

export const mapAsync = getChooseIteration(iterateAsArray, iterate);
