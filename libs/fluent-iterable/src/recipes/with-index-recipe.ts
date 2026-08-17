import { Ingredient } from './ingredients';

export function withIndexRecipe(map: Ingredient) {
  return function (this: any): any {
    let idx = 0;
    return map.call(this, (t: any) => ({ idx: idx++, value: t }));
  };
}
