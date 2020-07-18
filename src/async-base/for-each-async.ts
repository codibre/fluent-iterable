import { AsyncAction } from '../types';
import { AnyIterable } from '../types-internal';

export async function forEachAsync<T>(
  this: AnyIterable<T>,
  action: AsyncAction<T>,
): Promise<void> {
  if (Array.isArray(this)) {
    for (let i = 0; i < this.length; i++) {
      await action(this[i]);
    }
  } else {
    for await (const t of this) {
      await action(t);
    }
  }
}
