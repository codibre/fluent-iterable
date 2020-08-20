import { Mapper } from '../types';
import { identity } from '../utils';

export function minRecipe(top: Function) {
  return function (this: any, mapper: any = identity): any {
    return top.call(this, mapper, (a: any, b: any) => (b > a ? 1 : -1));
  };
}
