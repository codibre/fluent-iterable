import { identity } from '../utils';
import { AnyIterable } from 'augmentative-iterable';

export function caseCheckAsyncRecipe(
  ifTrue: Function,
  ifFalse: unknown,
  defaultPredicate?: Function,
  predicateTransform: Function = identity,
) {
  return async function <T>(
    this: AnyIterable<T>,
    givenPredicate: Function = defaultPredicate as any,
  ) {
    const predicate = predicateTransform(givenPredicate);
    for await (const t of this) {
      if (await predicate(t)) {
        return ifTrue(t);
      }
    }

    return ifFalse;
  };
}
