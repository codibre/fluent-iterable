import type { FunctionAnyMapper } from './../types/any-mapper';
import type { AnyIterable } from 'augmentative-iterable';
import type { AsyncReducer } from '../types';
import type { ToObjectChainIngredients } from './ingredients';
import { prepare } from '../types-internal/prepare';

function unwindAndGroup(
  it: AnyIterable<any>,
  ing: Omit<ToObjectChainIngredients, 'toObject'>,
  key: FunctionAnyMapper<any>,
) {
  it = ing.flatten.call(it, (x: any) => {
    const current = key(x);
    return typeof current !== 'string' &&
      typeof current[Symbol.iterator] === 'function'
      ? ing.map.call(current, (item) => [item, x])
      : [[current, x]];
  });
  return ing.group.call(
    it,
    (x: any) => x[0],
    (_k: any, v: any) => [v[1]],
  );
}

function toNode<T, R>(
  it: AnyIterable<any>,
  keys: FunctionAnyMapper<any>[],
  index: number,
  ing: Omit<ToObjectChainIngredients, 'toObject'>,
  reducer: AsyncReducer<T, R>,
  initial: () => R,
  dictFunc: Function,
): any {
  const key = keys[index];
  it = unwindAndGroup(it, ing, key);
  return dictFunc.call(
    it,
    'key',
    index < keys.length - 1
      ? (subIt: any) =>
          toNode(subIt.values, keys, index + 1, ing, reducer, initial, dictFunc)
      : (subIt: any) => ing.reduce.call(subIt.values, reducer, initial()),
  );
}

export function chainRecipeFactory(
  reduce: Function,
  ing: Omit<ToObjectChainIngredients, 'toObject'>,
  toDictFunc: Function,
) {
  return function <T, R>(
    this: AnyIterable<any>,
    initial: () => R,
    reducer: AsyncReducer<T, R>,
    ...keys: string[]
  ) {
    const prepared = keys.map((x) => prepare(x));
    return keys.length === 0
      ? reduce.call(this, reducer, initial())
      : toNode(this, prepared, 0, ing, reducer, initial, toDictFunc);
  };
}

export function toObjectChainReduceRecipe(ing: ToObjectChainIngredients) {
  return chainRecipeFactory(ing.reduce, ing, ing.toObject);
}
