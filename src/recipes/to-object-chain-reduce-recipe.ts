import { AnyIterable } from 'augmentative-iterable';
import { AsyncReducer } from '../types';
import { ToObjectChainIngredients } from './ingredients';

function toObjectNode<T, R>(
  it: AnyIterable<any>,
  keys: string[],
  index: number,
  ing: ToObjectChainIngredients,
  reducer: AsyncReducer<T, R>,
  initial: () => R,
): any {
  const key = keys[index];
  it = ing.unwind.call(it, key);
  it = ing.group.call(it, (x: any) => x.unwinded[key]);
  return ing.toObject.call(
    it,
    'key',
    index < keys.length - 1
      ? (subIt: any) =>
          toObjectNode(
            ing.map.call(subIt.values, (x: any) => x.value),
            keys,
            index + 1,
            ing,
            reducer,
            initial,
          )
      : (subIt: any) =>
          ing.reduce.call(
            ing.map.call(subIt.values, (x: any) => x.value),
            reducer,
            initial(),
          ),
  );
}

export function toObjectChainReduceRecipe(ing: ToObjectChainIngredients) {
  return function <T, R>(
    this: AnyIterable<any>,
    initial: () => R,
    reducer: AsyncReducer<T, R>,
    ...keys: string[]
  ) {
    return keys.length === 0
      ? ing.reduce.call(this, reducer, initial())
      : toObjectNode(this, keys, 0, ing, reducer, initial);
  };
}
