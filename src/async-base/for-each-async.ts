import { AsyncAction } from '../types';
import { AnyIterable } from '../types-internal';

export async function forEachAsync<T>(
  this: AnyIterable<T>,
  action: AsyncAction<T>,
): Promise<void> {
  for await (const t of this) {
    await action(t);
  }
}
