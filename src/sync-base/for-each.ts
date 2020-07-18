import { Action } from '../types';
import { getChooseIteration } from '../types-internal';

function iterateAsArray<T>(arr: T[], action: Action<T>) {
  for (let i = 0; i < arr.length; i++) {
    action(arr[i]);
  }
}

function iterate<T>(arr: Iterable<T>, action: Action<T>) {
  for (const t of arr) {
    action(t);
  }
}

export const forEach = getChooseIteration(iterateAsArray, iterate);
