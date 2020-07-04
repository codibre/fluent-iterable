import { takeCountAsync } from './take-count-async';

export async function hasExactlyAsync<T>(
  iterable: AsyncIterable<T>,
  expectedSize: number,
): Promise<boolean> {
  return (await takeCountAsync(iterable, expectedSize)) === expectedSize;
}
