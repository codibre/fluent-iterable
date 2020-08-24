import { isOrderAssured } from '../types-internal';
import { assureOrder, identity } from '../utils';
import { BasicIngredients, BasicReduceIngredients } from './ingredients';

export function maxRecipe({ filter, forEach, resolver }: BasicIngredients) {
  return function <T>(this: any, mapper: any = identity): any {
    let max: T | undefined;
    let lastMapped: any;
    let first = true;
    let predicate = (c: T) =>
      resolver(mapper(c), (mapped) => {
        if (first || lastMapped < mapped) {
          first = false;
          lastMapped = mapped;
          return true;
        }

        return false;
      });
    if (isOrderAssured(mapper)) {
      predicate = assureOrder(predicate);
    }
    return resolver(
      forEach.call(filter.call(this, predicate), (c: T) => (max = c)),
      () => max,
    );
  };
}
