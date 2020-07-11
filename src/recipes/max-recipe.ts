import { identity } from '../utils';

export function maxRecipe(top: Function) {
  return function (this: any, mapper: any = identity): any {
    return top.call(this, mapper, (a: any, b: any) => a - b);
  };
}
