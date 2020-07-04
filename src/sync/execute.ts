import { Action } from '../types';

export function* execute<T>(
  iterable: Iterable<T>,
  action: Action<T>,
): Iterable<T> {
  for (const t of iterable) {
    action(t);
    yield t;
  }
}
