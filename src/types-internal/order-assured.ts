import { AnyIterable } from 'augmentative-iterable';

export const orderAssured = Symbol.for('FluentIterableOrderAssured');
export const descendingOrderAssured = Symbol.for(
  'FluentIterableOrderAssuredDescending',
);

export function isOrderAssured(f: Function, it: AnyIterable<any>) {
  return f.hasOwnProperty(orderAssured) || it.hasOwnProperty(orderAssured);
}

export function isDescendingOrderAssured(f: Function, it: AnyIterable<any>) {
  return (
    f.hasOwnProperty(descendingOrderAssured) ||
    it.hasOwnProperty(descendingOrderAssured)
  );
}

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
