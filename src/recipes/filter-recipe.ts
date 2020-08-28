import { AnyIterable } from 'augmentative-iterable';
import { AsyncAction } from '../types-base';
import {
  isAnyOrderAssured,
  keepOrderAssuring,
  ResolverType,
} from '../types-internal';
import { augmentIterableRecipe } from './augment-iterable-recipe';

export function filterRecipe(
  filterIterable: Function,
  takeWhileIterable: Function,
  resolver: ResolverType,
) {
  const baseFilter = augmentIterableRecipe(filterIterable);
  const takeWhile = augmentIterableRecipe(takeWhileIterable);

  return function <T>(this: AnyIterable<T>, predicate: AsyncAction<any>) {
    if (isAnyOrderAssured(predicate, this)) {
      let alreadyTrue = false;
      let lastResult = false;
      const takeWhilePredicate = (t: any) =>
        resolver(predicate(t), (result) => {
          alreadyTrue = alreadyTrue || result;
          lastResult = result;

          return !alreadyTrue || lastResult;
        });
      const action = () => lastResult;
      return keepOrderAssuring(
        baseFilter.call(takeWhile.call(this, takeWhilePredicate), action),
        this,
      );
    }

    return baseFilter.call(this, predicate);
  };
}
