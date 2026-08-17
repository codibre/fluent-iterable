import { AnyIterable } from 'augmentative-iterable';

export const orderAssured = Symbol.for('FluentIterableOrderAssured');

function getIsAssured(direction: number) {
  return function (f: Function, it?: AnyIterable<any>) {
    return (
      ((it && (it as any)[orderAssured]) || (f as any)[orderAssured]) ===
      direction
    );
  };
}

export const isOrderAssured = getIsAssured(1);
export const isDescendingOrderAssured = getIsAssured(-1);

export function isAnyOrderAssured(f: Function, it?: AnyIterable<any>) {
  return isOrderAssured(f, it) || isDescendingOrderAssured(f, it);
}

export function keepOrderAssuring<T>(it: T, reference: any): T {
  if (reference.hasOwnProperty(orderAssured)) {
    (it as any)[orderAssured] = reference[orderAssured];
  }

  return it;
}
