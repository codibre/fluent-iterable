import { isDescendingOrderAssured, isOrderAssured } from '../types-internal';
import { assureOrder, identity } from '../utils';
import { MinMaxIngredients } from './ingredients';

type FunctionChecker = (f: Function) => boolean;
type CheckAcceptance = (last: any, current: any) => boolean;

function minMaxRecipe(
  { filter, resolver, first, last }: MinMaxIngredients,
  accept: CheckAcceptance,
  lastChecker: FunctionChecker,
  firstChecker: FunctionChecker,
) {
  return function <T>(this: any, mapper: any = identity): any {
    let lastMapped: any;
    let firstItem = true;
    let lastItem: T | undefined;
    const predicate = (c: T) =>
      resolver(mapper(c), (mapped) => {
        if (firstItem || accept(lastMapped, mapped)) {
          firstItem = false;
          lastMapped = mapped;
          lastItem = c;
          return true;
        }

        return lastMapped === mapped;
      });
    let operation: any;
    if (lastChecker(mapper)) {
      operation = last.call(filter.call(this, assureOrder(predicate)));
    } else if (firstChecker(mapper)) {
      operation = first.call(this, predicate);
    } else {
      operation = last.call(filter.call(this, predicate));
    }

    return resolver(operation, () => lastItem);
  };
}

export function maxRecipe(ingredients: MinMaxIngredients) {
  return minMaxRecipe(
    ingredients,
    (last: any, current: any) => last < current,
    isOrderAssured,
    isDescendingOrderAssured,
  );
}

export function minRecipe(ingredients: MinMaxIngredients) {
  return minMaxRecipe(
    ingredients,
    (last: any, current: any) => last > current,
    isDescendingOrderAssured,
    isOrderAssured,
  );
}
