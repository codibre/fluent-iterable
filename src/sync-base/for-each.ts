import { Action } from '../types';
import { chooseIteration } from '../types-internal';

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

export function forEach<T>(this: Iterable<T>, action: Action<T>): void {
  return chooseIteration(this, iterateAsArray, iterate, action);
}
