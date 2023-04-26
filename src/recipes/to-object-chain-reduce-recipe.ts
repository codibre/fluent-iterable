import { FunctionAnyMapper } from './../types/any-mapper';
import { AnyIterable } from 'augmentative-iterable';
import { AsyncReducer } from '../types';
import { ToObjectChainIngredients } from './ingredients';
import { prepare } from '../types-internal/prepare';

function unwindAndGroup(
  it: AnyIterable<any>,
  ing: ToObjectChainIngredients,
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

function toObjectNode<T, R>(
  it: AnyIterable<any>,
  keys: FunctionAnyMapper<any>[],
  index: number,
  ing: ToObjectChainIngredients,
  reducer: AsyncReducer<T, R>,
  initial: () => R,
): any {
  const key = keys[index];
  it = unwindAndGroup(it, ing, key);
  return ing.toObject.call(
    it,
    'key',
    index < keys.length - 1
      ? (subIt: any) =>
          toObjectNode(subIt.values, keys, index + 1, ing, reducer, initial)
      : (subIt: any) => ing.reduce.call(subIt.values, reducer, initial()),
  );
}

export function toObjectChainReduceRecipe(ing: ToObjectChainIngredients) {
  return function <T, R>(
    this: AnyIterable<any>,
    initial: () => R,
    reducer: AsyncReducer<T, R>,
    ...keys: string[]
  ) {
    const prepared = keys.map((x) => prepare(x));
    return keys.length === 0
      ? ing.reduce.call(this, reducer, initial())
      : toObjectNode(this, prepared, 0, ing, reducer, initial);
  };
}
