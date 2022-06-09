import { tail, head } from './../types/base';
import { isIterable } from '../is-iterable';
import { CombineIngredients, Ingredient } from './ingredients';
import { AnyIterable } from 'augmentative-iterable';

function flattable(value: unknown) {
  return typeof value !== 'string' && isIterable(value);
}

function getNextIterable(
  current: any,
  path: string[],
  nextI: number,
): [any, number] {
  let item = current;
  if (flattable(item)) {
    return [item, nextI];
  }

  while (nextI < path.length) {
    item = item[path[nextI]];
    nextI++;
    if (flattable(item)) {
      break;
    }
  }
  return [item, nextI];
}

function fillMiddleFieldsFactory(
  oldItem: any,
  start: number,
  nextI: number,
  path: string[],
) {
  return (x: any) => {
    let current = oldItem;
    for (let i = start; i < nextI; i++) {
      current = current[path[i]];
      if (!flattable(current)) {
        x[path[i]] = current;
      }
    }

    return x;
  };
}

function fillMiddleToHeadFieldsFactory(
  oldItem: any,
  start: number,
  nextI: number,
  path: string[],
) {
  const fillMiddleFields = fillMiddleFieldsFactory(oldItem, start, nextI, path);
  return (sub: any) => {
    const newItem = fillMiddleFields({});
    newItem[head] = sub;
    return newItem;
  };
}

function mapRoot(
  iterable: AnyIterable<any>,
  map: Ingredient,
  key: string | number | symbol,
  value: unknown,
) {
  return map.call(iterable, (x) => {
    x[key] = value;
    return x;
  });
}

function flatMap(
  item: any,
  ingredients: CombineIngredients,
  path: string[],
  nextI: number,
): any {
  const oldItem = item;
  const { flatten, map } = ingredients;
  const start = nextI;
  const result = getNextIterable(item, path, nextI);
  item = result[0];
  nextI = result[1];

  if (nextI < path.length) {
    return flatten.call(item, (sub: any) => {
      const mapped = map.call(
        flatMap(sub, ingredients, path, nextI),
        fillMiddleFieldsFactory(oldItem, start, nextI, path),
      );
      return mapRoot(mapped, map, nextI > 0 ? path[nextI - 1] : tail, sub);
    });
  }

  const fillMiddleToHeadItems = fillMiddleToHeadFieldsFactory(
    oldItem,
    start,
    nextI,
    path,
  );

  return flattable(item)
    ? map.call(item, fillMiddleToHeadItems)
    : [fillMiddleToHeadItems(item)];
}

export function flatJoinRecipe(ingredients: CombineIngredients) {
  const { map, iterateAll } = ingredients;
  return function <T, R>(this: Iterable<T>, ...path: string[]): Iterable<R> {
    return iterateAll(
      map.call(this, (x) => {
        const flatted = flatMap(x, ingredients, path, 0);
        return flattable(x) ? flatted : mapRoot(flatted, map, tail, x);
      }),
    );
  };
}
