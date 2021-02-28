import { CatchCallback } from '../types';
export function* catchSync<T>(this: Iterable<T>, errorCallback: CatchCallback) {
  try {
    yield* this;
  } catch (err) {
    errorCallback(err);
  }
}
