import { BasicReduceIngredients } from './ingredients';

export function topRecipe({ reduceAndMap, resolver }: BasicReduceIngredients) {
  return function (this: any, mapper: Function, comparer: Function): any {
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
