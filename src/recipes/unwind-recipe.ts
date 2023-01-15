import { AnyIterable } from 'augmentative-iterable';
import { UnwindIngredients } from './ingredients';

export function unwindRecipe({
  resolver,
  flatten,
  map,
  combineJoin,
  toObject,
  symbols,
}: UnwindIngredients) {
  return function (this: AnyIterable<any>, ...keys: string[]) {
    return flatten.call(this, (value: any) => {
      const it = map.call(keys, (x) => {
        const current = value[x];
        return symbols.some((symbol) => typeof current[symbol as keyof typeof current] === 'function')
          ? map.call(current, (v) => [x, v])
          : [[x, current]];
      });
      return resolver(combineJoin.call(it), (it2) =>
        map.call(it2, (unwindedValues) =>
          resolver(
            toObject.call(
              unwindedValues,
              (u: any) => u[0],
              (u: any) => u[1],
            ),
            (unwinded) => ({
              unwinded,
              value,
            }),
          ),
        ),
      );
    });
  };
}
