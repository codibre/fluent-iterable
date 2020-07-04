import { AnyIterable, getRepeater } from '../common';

export async function* repeatAsync<T>(
  iterable: AnyIterable<T>,
  n: number,
): AsyncIterable<T> {
  if (n >= 1) {
    const repeater = getRepeater<T>();
    for await (const t of iterable) {
      yield repeater.push(t);
    }

    yield* repeater.repeat(n);
  }
}
