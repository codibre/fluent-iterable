import { AnyIterable } from 'augmentative-iterable';
import { ToObjectChainRecipe } from './ingredients';
import { head, tail } from '../types';

function toObjectNode(
  it: AnyIterable<any>,
  keys: string[],
  index: number,
  ing: ToObjectChainRecipe,
): any {
  const key = keys[index];
  it = ing.flatJoin.call(it, key);
  it = ing.group.call(it, (x: any) => x[head]);
  return ing.toObject.call(
    it,
    'key',
    index < keys.length - 1
      ? (subIt: any) =>
          toObjectNode(
            ing.map.call(subIt.values, (x: any) => x[tail]),
            keys,
            index + 1,
            ing,
          )
      : (subIt: any) =>
          ing.toArray.call(ing.map.call(subIt.values, (x: any) => x[tail])),
  );
}

export function toObjectChainRecipe(ing: ToObjectChainRecipe) {
  return function (this: AnyIterable<any>, ...keys: string[]) {
    return keys.length === 0
      ? ing.toArray.call(this)
      : toObjectNode(this, keys, 0, ing);
  };
}
