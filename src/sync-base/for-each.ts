import { Action } from '../types';

export function forEach<T>(iterable: Iterable<T>, action: Action<T>): void {
  for (const t of iterable) {
    action(t);
  }
}
