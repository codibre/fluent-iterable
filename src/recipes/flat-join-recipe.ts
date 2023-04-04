import { tail, head } from './../types/base';
import { isIterable } from '../is-iterable';
import { CombineIngredients } from './ingredients';

function flattable(value: unknown) {
  return typeof value !== 'string' && isIterable(value);
}

function fillField(result: any, field: string, subItem: any) {
  if (!result.hasOwnProperty(field)) {
    result[field] = subItem;
  }
}

function getNewResult(result: any, field: string, subItem: any): any {
  result = {
    ...result,
  };
  fillField(result, field, subItem);
  return result;
}

function flatMapFactory(ingredients: CombineIngredients, deepFlat: Function) {
  return function flatMap(
    result: any,
    item: any,
    path: string[],
    nextIndex: number,
  ): any {
    const { flatten } = ingredients;
    const start = nextIndex;

    let current: any = item;
    for (let i = start; i < path.length; i++) {
      const field = path[i];
      current = current[field];
      if (flattable(current)) {
        return flatten.call(deepFlat(current), (subItem: any) =>
          flatMap(getNewResult(result, field, subItem), subItem, path, i + 1),
        );
      } else {
        fillField(result, field, current);
      }
    }
    result[head] = current;

    return [result];
  };
}

export function flatJoinRecipe(ingredients: CombineIngredients) {
  const { flatten } = ingredients;
  const deepFlat = (x: Iterable<any>): any =>
    flatten.call(x, (y: any) => (flattable(y) ? deepFlat(y) : [y]));
  const flatMap = flatMapFactory(ingredients, deepFlat);
  return function <T, R>(this: Iterable<T>, ...path: string[]): Iterable<R> {
    function process(y: any): any {
      return flatMap({ [tail]: y }, y, path, 0);
    }

    return flatten.call(this, (x) =>
      flattable(x) ? flatten.call(deepFlat(x), process) : process(x),
    ) as any;
  };
}
