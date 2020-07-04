import { takeCount } from '../common';

export async function hasExactlyAsync<T>(
  iterable: AsyncIterable<T>,
  expectedSize: number,
): Promise<boolean> {
  return (await takeCount(iterable, expectedSize)) === expectedSize;
}
