import { AsyncAction } from '../types';
import { AnyIterable } from '../types-internal';

export async function forEachAsync<T>(
  iterable: AnyIterable<T>,
  action: AsyncAction<T>,
): Promise<void> {
  for await (const t of iterable) {
    await action(t);
  }
}
