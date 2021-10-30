import { Extender } from 'extension-methods';
import { extendFluent } from './extend-fluent';

export function getFluent(
  iterable: any,
  handler: Extender<any>,
  symbol: symbol,
) {
  if (!iterable) {
    throw new TypeError('Not a valid iterable!');
  }

  if (iterable.fluent === symbol) {
    return iterable;
  }
  return extendFluent(iterable, handler);
}
