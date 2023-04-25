import { toObjectChainRecipe } from '../recipes';
import { basicAsync } from './basic-ingredients-async';
import { flattenAsync } from './flatten-async';
import { groupAsync } from './group-async';
import { reduceAsync } from './reduce-async';
import { toObjectAsync } from './to-object-async';

export const toObjectChainAsync = toObjectChainRecipe({
  ...basicAsync,
  group: groupAsync,
  toObject: toObjectAsync,
  flatten: flattenAsync,
  reduce: reduceAsync,
});
