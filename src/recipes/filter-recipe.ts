import { AnyIterable } from 'augmentative-iterable';
import { AsyncAction } from '../types-base';
import { isOrderAssured, ResolverType } from '../types-internal';

export function filterRecipe(
  filterIterable: Function,
  takeWhileIterable: Function,
  resolver: ResolverType,
) {
  const baseFilter = function <T>(
    this: AnyIterable<T>,
    action: AsyncAction<T>,
  ): AsyncIterable<T> {
    return filterIterable(this, action);
  };

  return function <T>(this: AnyIterable<T>, predicate: AsyncAction<any>) {
    if (isOrderAssured(predicate)) {
      let alreadyTrue = false;
      let lastResult = false;
      const action = (t: any) =>
        resolver(predicate(t), (result) => {
          alreadyTrue = alreadyTrue || result;

          return (lastResult = result);
        });
      return baseFilter.call(
        takeWhileIterable.call(this, () => !alreadyTrue || lastResult),
        action,
      );
    }

    return baseFilter.call(this, predicate);
  };
}
