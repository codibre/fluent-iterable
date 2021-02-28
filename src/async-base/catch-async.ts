import { AnyIterable } from 'augmentative-iterable';
import { AsyncCatchCallback } from '../types';
export async function* catchAsync<T>(
  this: AnyIterable<T>,
  errorCallback: AsyncCatchCallback,
) {
  try {
    yield* this;
  } catch (err) {
    await errorCallback(err);
  }
}
