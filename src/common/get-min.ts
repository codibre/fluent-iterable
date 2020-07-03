import { Mapper } from '../types';
import { identity } from '../utils';

export function getMin(top: Function) {
  return <T>(iterable: any, mapper: any = identity): any =>
    top(iterable, mapper, (a: any, b: any) => b - a);
}
