import { identity } from '../utils';
import { AnyIterable } from 'augmentative-iterable';
import { AnyMapper } from '../types-internal';
import { prepare } from '../types-internal/prepare';

export function caseCheckAsyncRecipe(
  ifTrue: Function,
  ifFalse: unknown,
  defaultPredicate?: Function,
  predicateTransform: Function = identity,
) {
  return async function <T>(
    this: AnyIterable<T>,
    givenPredicate: AnyMapper<T> = defaultPredicate as any,
  ) {
    const predicate = predicateTransform(prepare(givenPredicate));
    for await (const t of this) {
      if (await predicate(t)) {
        return ifTrue(t);
      }
    }

    return ifFalse;
  };
}
