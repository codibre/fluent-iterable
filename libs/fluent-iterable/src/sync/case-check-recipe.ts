import { AnyMapper } from '../types-internal';
import { prepare } from '../types-internal/prepare';
import { identity } from '../utils';

export function caseCheckRecipe(
  ifTrue: Function,
  ifFalse: unknown,
  defaultPredicate?: Function,
  predicateTransform: Function = identity,
) {
  return function <T>(
    this: Iterable<T>,
    givenPredicate: AnyMapper<T> = defaultPredicate as any,
  ) {
    const predicate = predicateTransform(prepare(givenPredicate));
    for (const t of this) {
      if (predicate(t)) {
        return ifTrue(t);
      }
    }

    return ifFalse;
  };
}
