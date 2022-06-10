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
  nextIndex: number,
): [any, number] {
  let item = current;
  if (flattable(item)) {
    return [item, nextIndex];
  }

  while (nextIndex < path.length) {
    item = item[path[nextIndex]];
    nextIndex++;
    if (flattable(item)) {
      break;
    }
  }
  return [item, nextIndex];
}

function fillMiddleFieldsFactory(
  oldItem: any,
  start: number,
  nextIndex: number,
  path: string[],
) {
  return (x: any) => {
    let current = oldItem;
    for (let i = start; i < nextIndex; i++) {
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
  nextIndex: number,
  path: string[],
) {
  const fillMiddleFields = fillMiddleFieldsFactory(
    oldItem,
    start,
    nextIndex,
    path,
  );
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
  nextIndex: number,
): any {
  const oldItem = item;
  const { flatten, map } = ingredients;
  const start = nextIndex;
  const result = getNextIterable(item, path, nextIndex);
  item = result[0];
  nextIndex = result[1];

  if (nextIndex < path.length) {
    return flatten.call(item, (sub: any) => {
      const mapped = map.call(
        flatMap(sub, ingredients, path, nextIndex),
        fillMiddleFieldsFactory(oldItem, start, nextIndex, path),
      );
      return mapRoot(
        mapped,
        map,
        nextIndex > 0 ? path[nextIndex - 1] : tail,
        sub,
      );
    });
  }

  const fillMiddleToHeadItems = fillMiddleToHeadFieldsFactory(
    oldItem,
    start,
    nextIndex,
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
