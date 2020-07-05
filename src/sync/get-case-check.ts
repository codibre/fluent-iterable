import { identity } from '../helpers';

export function getCaseCheck(
  ifTrue: Function,
  ifFalse: unknown,
  defaultPredicate?: Function,
  predicateTransform: Function = identity,
) {
  return <T>(
    iterable: Iterable<T>,
    givenPredicate: Function = defaultPredicate as any,
  ) => {
    const predicate = predicateTransform(givenPredicate);
    for (const t of iterable) {
      if (predicate(t)) {
        return ifTrue(t);
      }
    }

    return ifFalse;
  };
}
