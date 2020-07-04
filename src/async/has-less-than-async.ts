import { takeCountAsync } from './take-count-async';

export async function hasLessThanAsync<T>(
  iterable: AsyncIterable<T>,
  threshold: number,
): Promise<boolean> {
  return (await takeCountAsync(iterable, threshold + 1)) < threshold;
}
