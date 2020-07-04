import { getRepeater } from '../common';

export function* repeat<T>(iterable: Iterable<T>, n: number): Iterable<T> {
  if (n >= 1) {
    const repeater = getRepeater<T>();
    for (const t of iterable) {
      yield repeater.push(t);
    }

    yield* repeater.repeat(n);
  }
}
