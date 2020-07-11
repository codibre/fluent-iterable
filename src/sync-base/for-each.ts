import { Action } from '../types';

export function forEach<T>(this: Iterable<T>, action: Action<T>): void {
  for (const t of this) {
    action(t);
  }
}
