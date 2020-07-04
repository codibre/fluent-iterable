import { AnyIterable, getRepeater } from '../common';
import { mapAsync } from './map-async';

export async function* repeatAsync<T>(
  iterable: AnyIterable<T>,
  n: number,
): AsyncIterable<T> {
  if (n >= 1) {
    const repeater = getRepeater<T>();
    yield* mapAsync(iterable, repeater.push);
    yield* repeater.repeat(n);
  }
}
