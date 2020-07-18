import { AsyncAction } from '../types';
import { AnyIterable, getChooseIteration } from '../types-internal';

async function iterateAsArray<T>(arr: T[], action: AsyncAction<T>) {
  for (let i = 0; i < arr.length; i++) {
    await action(arr[i]);
  }
}

async function iterate<T>(arr: AnyIterable<T>, action: AsyncAction<T>) {
  for await (const t of arr) {
    await action(t);
  }
}

export const forEachAsync = getChooseIteration(iterateAsArray, iterate);
