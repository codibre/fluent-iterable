import { AnyIterable } from 'augmentative-iterable';
import { descendingOrderAssured, orderAssured } from '../types-internal';
export function assureOrderRecipe<T>(symbol: symbol) {
  return function (this: AnyIterable<T>) {
    (this as any)[symbol] = true;

    return this;
  };
}

export const assureOrder = assureOrderRecipe(orderAssured);
export const o = assureOrder;
export const assureOrderDescending = assureOrderRecipe(descendingOrderAssured);
export const od = assureOrderDescending;
