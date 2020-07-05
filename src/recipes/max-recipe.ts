import { identity } from '../utils';

export function maxRecipe(top: Function) {
  return (iterable: any, mapper: any = identity): any =>
    top(iterable, mapper, (a: any, b: any) => a - b);
}
