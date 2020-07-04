import { getRepeater } from '../common';
import { map } from './map';

export function* repeat<T>(iterable: Iterable<T>, n: number): Iterable<T> {
  if (n >= 1) {
    const repeater = getRepeater<T>();
    yield* map(iterable, repeater.push);
    yield* repeater.repeat(n);
  }
}
