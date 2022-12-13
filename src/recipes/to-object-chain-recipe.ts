import { AnyIterable } from 'augmentative-iterable';
import { ToObjectChainIngredients } from './ingredients';

function toObjectNode(
  it: AnyIterable<any>,
  keys: string[],
  index: number,
  ing: ToObjectChainIngredients,
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
          )
      : (subIt: any) =>
          ing.toArray.call(ing.map.call(subIt.values, (x: any) => x.value)),
  );
}

export function toObjectChainRecipe(ing: ToObjectChainIngredients) {
  return function (this: AnyIterable<any>, ...keys: string[]) {
    return keys.length === 0
      ? ing.toArray.call(this)
      : toObjectNode(this, keys, 0, ing);
  };
}
