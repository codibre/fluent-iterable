import { AnyIterable } from 'augmentative-iterable';
import {
  AnyMapper,
  isDescendingOrderAssured,
  isOrderAssured,
  ResolverType,
} from '../types-internal';
import { prepare } from '../types-internal/prepare';
import { assureOrder, identity } from '../utils';
import { MinMaxIngredients } from './ingredients';

type FunctionChecker = (f: Function, it: AnyIterable<any>) => boolean;
type CheckAcceptance = (last: any, current: any) => boolean;

interface MinMaxWrapper<T> {
  lastMapped?: any;
  firstItem: boolean;
  lastItem?: T;
}

function getPredicate<T>(
  resolver: ResolverType,
  mapper: any,
  wrapper: MinMaxWrapper<T>,
  accept: CheckAcceptance,
) {
  return (c: T) =>
    resolver(mapper(c), (mapped) => {
      if (wrapper.firstItem || accept(wrapper.lastMapped, mapped)) {
        wrapper.firstItem = false;
        wrapper.lastMapped = mapped;
        wrapper.lastItem = c;
        return true;
      }

      return wrapper.lastMapped === mapped;
    });
}

function minMaxRecipe(
  accept: CheckAcceptance,
  lastChecker: FunctionChecker,
  firstChecker: FunctionChecker,
) {
  return function ({ filter, resolver, first, last }: MinMaxIngredients) {
    return function <T>(this: any, baseMapper: AnyMapper<T> = identity): any {
      const wrapper: MinMaxWrapper<T> = {
        firstItem: true,
      };
      const mapper = prepare(baseMapper);
      const predicate = getPredicate(resolver, mapper, wrapper, accept);
      let operation: any;
      if (lastChecker(mapper, this)) {
        operation = last.call(filter.call(this, assureOrder(predicate)));
      } else if (firstChecker(mapper, this)) {
        operation = first.call(this, predicate);
      } else {
        operation = last.call(filter.call(this, predicate));
      }

      return resolver(operation, () => wrapper.lastItem);
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
