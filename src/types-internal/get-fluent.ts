import { extend, Extender } from 'extension-methods';

export function getFluent(
  iterable: any,
  handler: Extender<any>,
  symbol: symbol,
) {
  return iterable.fluent === symbol ? iterable : extend(iterable, handler);
}
