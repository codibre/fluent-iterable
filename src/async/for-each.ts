import { Action } from '../types';

export async function forEach<T>(
  iterable: AsyncIterable<T>,
  action: Action<T>,
): Promise<void> {
  for await (const t of iterable) {
    action(t);
  }
}
