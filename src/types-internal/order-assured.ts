export const orderAssured = Symbol.for('FluentIterableOrderAssured');

export function isOrderAssured(f: Function) {
  return f.hasOwnProperty(orderAssured);
}
