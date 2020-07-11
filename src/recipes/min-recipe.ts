import { Mapper } from '../types';
import { identity } from '../utils';

export function minRecipe(top: Function) {
  return function <T>(this: any, mapper: any = identity): any {
    return top.call(this, mapper, (a: any, b: any) => b - a);
  };
}
