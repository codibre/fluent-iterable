import { Action } from '../types';

export function forEach<T>(this: Iterable<T>, action: Action<T>): void {
  if (Array.isArray(this)) {
    for (let i = 0; i < this.length; i++) {
      action(this[i]);
    }
  } else {
    for (const t of this) {
      action(t);
    }
  }
}
