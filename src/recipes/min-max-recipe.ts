import { AnyIterable } from 'augmentative-iterable';
import { isDescendingOrderAssured, isOrderAssured } from '../types-internal';
import { assureOrder, identity } from '../utils';
import { MinMaxIngredients } from './ingredients';

type FunctionChecker = (f: Function, it: AnyIterable<any>) => boolean;
type CheckAcceptance = (last: any, current: any) => boolean;

function minMaxRecipe(
  accept: CheckAcceptance,
  lastChecker: FunctionChecker,
  firstChecker: FunctionChecker,
) {
  return function ({ filter, resolver, first, last }: MinMaxIngredients) {
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
      if (lastChecker(mapper, this)) {
        operation = last.call(filter.call(this, assureOrder(predicate)));
      } else if (firstChecker(mapper, this)) {
        operation = first.call(this, predicate);
      } else {
        operation = last.call(filter.call(this, predicate));
      }

      return resolver(operation, () => lastItem);
    };
  };
}

export const maxRecipe = minMaxRecipe(
  (last: any, current: any) => last < current,
  isOrderAssured,
  isDescendingOrderAssured,
);

export const minRecipe = minMaxRecipe(
  (last: any, current: any) => last > current,
  isDescendingOrderAssured,
  isOrderAssured,
);
