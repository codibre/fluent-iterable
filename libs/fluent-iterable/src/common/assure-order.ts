import { AnyIterable } from 'augmentative-iterable';
import { orderAssured } from '../types-internal';
export function assureOrderRecipe<T>(direction: number) {
  return function (this: AnyIterable<T>) {
    (this as any)[orderAssured] = direction;

    return this;
  };
}

export const assureOrder = assureOrderRecipe(1);
export const o = assureOrder;
export const assureOrderDescending = assureOrderRecipe(-1);
export const od = assureOrderDescending;
