import { AnyIterable } from 'augmentative-iterable';
import { orderAssured } from '../types-internal';
export function assureOrderRecipe<T>(symbol: symbol, direction: number) {
  return function (this: AnyIterable<T>) {
    (this as any)[symbol] = direction;

    return this;
  };
}

export const assureOrder = assureOrderRecipe(orderAssured, 1);
export const o = assureOrder;
export const assureOrderDescending = assureOrderRecipe(orderAssured, -1);
export const od = assureOrderDescending;
