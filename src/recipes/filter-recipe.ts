import { AnyIterable } from 'augmentative-iterable';
import { AsyncAction } from '../types-base';
import {
  isAnyOrderAssured,
  isOrderAssured,
  ResolverType,
} from '../types-internal';
import { augmentIterableRecipe } from './augment-iterable-recipe';

export function filterRecipe(
  filterIterable: Function,
  takeWhileIterable: Function,
  resolver: ResolverType,
) {
  const baseFilter = augmentIterableRecipe(filterIterable);

  return function <T>(this: AnyIterable<T>, predicate: AsyncAction<any>) {
    if (isAnyOrderAssured(predicate)) {
      let alreadyTrue = false;
      let lastResult = false;
      const takeWhilePredicate = (t: T) =>
        resolver(predicate(t), (result) => {
          alreadyTrue = alreadyTrue || result;
          lastResult = result;

          return !alreadyTrue || lastResult;
        });
      const action = () => lastResult;
      return baseFilter.call(
        takeWhileIterable.call(this, takeWhilePredicate),
        action,
      );
    }

    return baseFilter.call(this, predicate);
  };
}
