import { AnyMapper } from '../types-internal';
import { prepare } from '../types-internal/prepare';
import { BasicReduceIngredients } from './ingredients';

export function topRecipe({ reduceAndMap, resolver }: BasicReduceIngredients) {
  return function <T>(
    this: any,
    baseMapper: AnyMapper<T>,
    comparer: Function,
  ): any {
    const mapper = prepare(baseMapper);
    return reduceAndMap.call(
      this,
      (current: any, next: any) => {
        return resolver(mapper(next), (value) =>
          !current.found ||
          (current.value && comparer(value, current.value) > 0)
            ? { value, item: next, found: true }
            : current,
        );
      },
      { value: undefined, item: undefined, found: false },
      (acc: any) => acc.item,
    );
  };
}
