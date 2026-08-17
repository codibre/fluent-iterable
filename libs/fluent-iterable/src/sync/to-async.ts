import { iterateAsync } from '../utils';

export function toAsync<T>(this: Iterable<T>): AsyncIterable<T> {
  return iterateAsync(this);
}
