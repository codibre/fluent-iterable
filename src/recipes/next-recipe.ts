import { AnyIterable, Mapper } from 'augmentative-iterable';

function nextOperation<T, R>(
  this: AnyIterable<T>,
  callback: Mapper<AnyIterable<T>, R>,
) {
  return callback(this);
}

export function nextRecipe(): any {
  return nextOperation;
}
