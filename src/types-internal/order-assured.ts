import { AnyIterable } from 'augmentative-iterable';

export const orderAssured = Symbol.for('FluentIterableOrderAssured');
export const descendingOrderAssured = Symbol.for(
  'FluentIterableOrderAssuredDescending',
);

function getIsAssured(symbol: symbol) {
  return function (f: Function, it: AnyIterable<any>) {
    return f.hasOwnProperty(symbol) || it.hasOwnProperty(symbol);
  };
}

export const isOrderAssured = getIsAssured(orderAssured);
export const isDescendingOrderAssured = getIsAssured(descendingOrderAssured);

export function isAnyOrderAssured(f: Function, it: AnyIterable<any>) {
  return isOrderAssured(f, it) || isDescendingOrderAssured(f, it);
}

export function keepOrderAssuring<It extends AnyIterable<any>>(
  it: It,
  reference: It,
): It {
  if (reference.hasOwnProperty(orderAssured)) {
    (it as any)[orderAssured] = true;
  }
  if (reference.hasOwnProperty(descendingOrderAssured)) {
    (it as any)[descendingOrderAssured] = true;
  }
  return it;
}
