import { identity } from '../utils';

export function caseCheckRecipe(
  ifTrue: Function,
  ifFalse: unknown,
  defaultPredicate?: Function,
  predicateTransform: Function = identity,
) {
  return function <T>(
    this: Iterable<T>,
    givenPredicate: Function = defaultPredicate as any,
  ) {
    const predicate = predicateTransform(givenPredicate);
    for (const t of this) {
      if (predicate(t)) {
        return ifTrue(t);
      }
    }

    return ifFalse;
  };
}
