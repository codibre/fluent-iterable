import { AnyIterable } from 'augmentative-iterable';
import { AsyncAction } from '../types-base';
import { isOrderAssured, ResolverType } from '../types-internal';
import { augmentIterableRecipe } from './augment-iterable-recipe';

export function filterRecipe(
  filterIterable: Function,
  takeWhileIterable: Function,
  resolver: ResolverType,
) {
  const baseFilter = augmentIterableRecipe(filterIterable);

  return function <T>(this: AnyIterable<T>, predicate: AsyncAction<any>) {
    if (isOrderAssured(predicate)) {
      let alreadyTrue = false;
      let lastResult = false;
      const takeWhilePredicate = () => !alreadyTrue || lastResult;
      const action = (t: any) =>
        resolver(predicate(t), (result) => {
          alreadyTrue = alreadyTrue || result;
          lastResult = result;

          return lastResult;
        });
      return baseFilter.call(
        takeWhileIterable.call(this, takeWhilePredicate),
        action,
      );
    }

    return baseFilter.call(this, predicate);
  };
}
