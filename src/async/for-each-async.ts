import { AsyncAction } from '../types';

export async function forEachAsync<T>(
  iterable: AsyncIterable<T>,
  action: AsyncAction<T>,
): Promise<void> {
  for await (const t of iterable) {
    await action(t);
  }
}
