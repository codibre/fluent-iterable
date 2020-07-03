import { identity } from '../utils';

export function getMax(top: Function) {
  return (iterable: any, mapper: any = identity): any =>
    top(iterable, mapper, (a: any, b: any) => a - b);
}
