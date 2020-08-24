export const orderAssured = Symbol.for('FluentIterableOrderAssured');
export const descendingOrderAssured = Symbol.for(
  'FluentIterableOrderAssuredDescending',
);

export function isOrderAssured(f: Function) {
  return f.hasOwnProperty(orderAssured);
}

export function isDescendingOrderAssured(f: Function) {
  return f.hasOwnProperty(descendingOrderAssured);
}

export function isAnyOrderAssured(f: Function) {
  return isOrderAssured(f) || isDescendingOrderAssured(f);
}
