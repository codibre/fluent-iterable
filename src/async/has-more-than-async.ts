import { takeCount } from '../common';

export async function hasMoreThanAsync<T>(
  iterable: AsyncIterable<T>,
  threshold: number,
): Promise<boolean> {
  return (await takeCount(iterable, threshold + 1)) > threshold;
}
